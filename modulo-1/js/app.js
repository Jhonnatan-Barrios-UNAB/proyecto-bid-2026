/* =====================================================================
   Multimedia Módulo 1 · Proyecto BID
   Navegación, sonidos, locuciones con subtítulos, progreso y pendientes,
   gestos de clic, menú lateral, configuración, estados (pestañas), popups,
   tarjetas que giran, preguntas, relaciona, videos con reproductor propio
   y visor PDF. Basado en el estilo de "Recurso_Multimedia_Unidad_1".
   ===================================================================== */
(function () {
  const C = window.CONFIG || {};
  const L = C.locuciones || {};
  const PASO = (C.retrasoEntreElementos ?? 0.3);
  const $ = (id) => document.getElementById(id);
  const stage = $("stage"), repro = $("reproductor");
  const slides = [...document.querySelectorAll(".slide")];
  const total = slides.length;
  const dos = (n) => String(n).padStart(2, "0");
  let actual = -1;
  const guardar = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const leer = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const CLAVE = C.claveProgreso || "bid-m1-progreso";
  const slideDe = (el) => slides.indexOf(el.closest(".slide")) + 1;

  /* =================== Escalado adaptable =================== */
  // El escenario (1920×1080) se escala al espacio libre sobre la barra de controles,
  // centrado en horizontal y apoyado sobre la barra (sin franja vacía entre ambos).
  const area = $("area");
  function escalar() {
    const W = area.clientWidth, H = area.clientHeight;
    if (!W || !H) return;
    const s = Math.min(W / 1920, H / 1080);
    const ox = Math.round((W - 1920 * s) / 2), oy = Math.round(H - 1080 * s);
    stage.style.setProperty("--s", s); stage.style.setProperty("--ox", ox + "px"); stage.style.setProperty("--oy", oy + "px");
    repro.style.setProperty("--s", s);
    repro.classList.toggle("escenario-pequeno", s < 0.45);
  }
  window.addEventListener("resize", escalar);
  window.addEventListener("orientationchange", () => setTimeout(escalar, 250));
  if (window.ResizeObserver) new ResizeObserver(escalar).observe(area);
  escalar();

  /* =================== Pantalla completa y aviso en vertical =================== */
  const fsOk = document.fullscreenEnabled || document.webkitFullscreenEnabled;
  if (!fsOk) repro.classList.add("sin-fullscreen");
  $("btnPantalla").addEventListener("click", () => {
    const d = document;
    if (d.fullscreenElement || d.webkitFullscreenElement) (d.exitFullscreen || d.webkitExitFullscreen).call(d);
    else { const r = d.documentElement; const f = r.requestFullscreen || r.webkitRequestFullscreen; if (f) { const p = f.call(r); if (p && p.catch) p.catch(() => {}); } }
  });
  const alCambiarFS = () => { const el = document.fullscreenElement || document.webkitFullscreenElement; repro.classList.toggle("pantalla-completa", el === document.documentElement); setTimeout(escalar, 120); };
  document.addEventListener("fullscreenchange", alCambiarFS); document.addEventListener("webkitfullscreenchange", alCambiarFS);
  $("cerrarAviso").addEventListener("click", () => $("avisoGirar").classList.add("cerrado"));

  /* =================== Configuración =================== */
  const cfg = Object.assign({ recordar: false, locuciones: true, efectos: true, subtitulos: true },
    (() => { try { return JSON.parse(leer(CLAVE + "-config")) || {}; } catch (e) { return {}; } })());
  const guardarCfg = () => guardar(CLAVE + "-config", JSON.stringify(cfg));
  const chk = { recordar: $("cfgRecordar"), locuciones: $("cfgLocuciones"), efectos: $("cfgEfectos"), subtitulos: $("cfgSubtitulos") };
  Object.entries(chk).forEach(([k, el]) => {
    el.checked = !!cfg[k];
    el.addEventListener("change", () => { cfg[k] = el.checked; guardarCfg(); if (k === "locuciones" && !cfg.locuciones) callar(); if (k === "subtitulos") pintarCC(); });
  });

  /* =================== Sonidos =================== */
  let silencio = leer(CLAVE + "-silencio") === "1";
  const sonidos = {};
  ["inicio", "fin", "cambio", "popup", "correcto", "incorrecto"].forEach((k) => {
    const src = C.sonidos && C.sonidos[k];
    if (src) { const a = new Audio(src); a.preload = "auto"; a.volume = C.sonidos.volumen ?? 0.7; sonidos[k] = a; }
  });
  function sonar(k) {
    if (silencio || !cfg.efectos || !sonidos[k]) return;
    const a = sonidos[k]; a.currentTime = 0; const p = a.play(); if (p && p.catch) p.catch(() => {}); return p;
  }

  /* =================== Locuciones + subtítulos =================== */
  const voz = new Audio(); voz.preload = "auto"; voz.volume = L.volumen ?? 1;
  const textos = C.textosLocucion || {};
  let tVoz = null, cues = [];
  const subt = $("subtitulos");
  const rutaLoc = (n, archivo) => `${L.carpeta || "assets/audio/locuciones"}/slide-${dos(n)}/${archivo}`;
  function trozos(txt, dur) {
    const frases = (txt || "").replace(/\s+/g, " ").match(/[^.!?¡¿]+[.!?]+|[^.!?]+$/g) || [];
    const partes = [];
    frases.forEach((f) => { f = f.trim(); if (!f) return; if (f.length > 120) { const pal = f.split(" "); let a = ""; pal.forEach((w) => { if ((a + " " + w).length > 110) { partes.push(a.trim()); a = w; } else a += " " + w; }); if (a.trim()) partes.push(a.trim()); } else partes.push(f); });
    const totalChars = partes.reduce((s, p) => s + p.length, 0) || 1;
    let t = 0;
    return partes.map((p) => { const d = (p.length / totalChars) * dur; const c = { ini: t, fin: t + d, texto: p }; t += d; return c; });
  }
  function hablar(src, retraso = 0) {
    callar();
    if (silencio || !cfg.locuciones || L.activas === false || !src) return;
    const clave = src.split("/").slice(-2).join("/");
    tVoz = setTimeout(() => {
      voz.src = src; voz.currentTime = 0;
      voz.onloadedmetadata = () => { cues = trozos(textos[clave], voz.duration || 4); };
      const p = voz.play(); if (p && p.catch) p.catch(() => {});
    }, retraso);
  }
  function callar() { clearTimeout(tVoz); voz.pause(); cues = []; pintarSub(); }
  function pintarSub() {
    const c = !voz.paused && cues.find((q) => voz.currentTime >= q.ini && voz.currentTime <= q.fin + 0.2);
    const mostrar = cfg.subtitulos && c;
    subt.textContent = mostrar ? c.texto : "";
    subt.classList.toggle("visible", !!mostrar);
  }
  voz.addEventListener("timeupdate", pintarSub);
  voz.addEventListener("ended", () => { cues = []; pintarSub(); });
  function pintarCC() {
    chk.subtitulos.checked = cfg.subtitulos;
    $("btnCC").classList.toggle("on", cfg.subtitulos); $("btnCC").setAttribute("aria-pressed", cfg.subtitulos);
    $("btnCC").title = cfg.subtitulos ? "Ocultar subtítulos" : "Mostrar subtítulos";
    pintarSub();
  }
  $("btnCC").addEventListener("click", () => { cfg.subtitulos = !cfg.subtitulos; guardarCfg(); pintarCC(); });

  /* =================== Bocina (silencio general) =================== */
  const btnSonido = $("btnSonido");
  const icoOn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
  const icoOff = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6"/></svg>';
  function pintarSonido() { btnSonido.innerHTML = silencio ? icoOff : icoOn; btnSonido.title = silencio ? "Sonido desactivado" : "Sonido activado"; btnSonido.setAttribute("aria-label", silencio ? "Activar el sonido" : "Silenciar todo"); }
  btnSonido.addEventListener("click", () => { silencio = !silencio; pintarSonido(); guardar(CLAVE + "-silencio", silencio ? "1" : "0"); if (silencio) callar(); });
  pintarSonido();

  /* =================== Progreso =================== */
  // s:<pantalla> e:<pestaña> p:<popup> c:<tarjeta> r:<ítem revelado> v:<video> d:<documento> i:<imagen> q:<pregunta> m:<enlace del menú>
  const items = new Map();
  slides.forEach((s, i) => items.set("s:" + (i + 1), { slide: i + 1, etiqueta: "Visitar la pantalla" }));
  document.querySelectorAll(".slide [data-clave]").forEach((b) => {
    const k = b.dataset.clave;
    if (k.startsWith("m:")) return; // los enlaces del índice no cuentan como contenido
    items.set(k, { slide: slideDe(b), etiqueta: b.dataset.etq || "Elemento", tipo: k[0], el: b });
  });
  document.querySelectorAll(".slide .vbox[data-video]").forEach((v) => items.set("v:" + v.dataset.video, { slide: slideDe(v), etiqueta: "Video: " + (v.dataset.titulo || ""), tipo: "v", el: v }));
  document.querySelectorAll(".slide [data-pregunta]").forEach((q) => items.set("q:" + q.dataset.pregunta, { slide: slideDe(q), etiqueta: "Responder la actividad", tipo: "q", el: q }));
  items.set("d:guia-compra", { slide: 0, etiqueta: "Material de apoyo: Guía de compra y consumo responsable", tipo: "d" });

  let vistos = new Set();
  try { vistos = new Set((JSON.parse(leer(CLAVE)) || []).filter((k) => items.has(k))); } catch (e) {}
  function marcar(k) {
    if (!k || !items.has(k) || vistos.has(k)) return;
    vistos.add(k); guardar(CLAVE, JSON.stringify([...vistos])); pintarProgreso();
    const pc = $("pct"); pc.classList.remove("sube"); void pc.offsetWidth; pc.classList.add("sube");
  }
  const porcentaje = () => Math.round((vistos.size / items.size) * 100);
  function pintarProgreso() {
    const pc = porcentaje();
    $("progreso").style.width = pc + "%"; $("pctTexto").textContent = pc + " %"; $("pctMenu").textContent = pc + " %";
    $("barraMenu").style.width = pc + "%"; $("detalleMenu").textContent = `${vistos.size} de ${items.size} elementos vistos`;
    document.querySelectorAll(".menu-lista li").forEach((li, i) => li.classList.toggle("visto", vistos.has("s:" + (i + 1))));
    document.querySelectorAll("[data-clave]").forEach((el) => {
      const v = vistos.has(el.dataset.clave) || (el.dataset.clave.startsWith("m:") && vistos.has("s:" + el.dataset.ir));
      el.classList.toggle("visitado", v);
      const o = el.dataset.objetivo && document.getElementById(el.dataset.objetivo);
      if (o && o.classList.contains("btnvar")) o.classList.toggle("visto", v);
    });
    if (!$("panelPend").hidden) pintarPendientes();
  }

  /* =================== Gesto de clic (mano) y visitado (check) =================== */
  const mano = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 3.5a1.5 1.5 0 0 1 3 0V10l.6-.1a1.5 1.5 0 0 1 1.9 1.1l.1.4.3-.1a1.5 1.5 0 0 1 1.9 1.1l.1.4h.3a1.5 1.5 0 0 1 1.8 1.4V17a5 5 0 0 1-5 5h-1.3a5 5 0 0 1-4-2l-3.1-4.2a1.5 1.5 0 0 1 2.2-2l1.2 1V3.5z"/></svg>';
  const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  document.querySelectorAll("[data-gesto], #btnApoyo").forEach((el) => {
    const g = document.createElement("span"); g.className = "gesto"; g.setAttribute("aria-hidden", "true");
    g.innerHTML = `<span class="g-mano">${mano}</span><span class="g-check">${check}</span>`;
    el.append(g);
  });
  // los gestos aparecen cuando terminó la secuencia de entrada de la pantalla
  slides.forEach((s) => {
    const n = s.querySelectorAll(":scope > .capa:not(.estado) > .anim, :scope > .capa.estado.activo > .anim, :scope > .capa > .flip").length;
    s.style.setProperty("--dh", (n * PASO + 0.4).toFixed(2) + "s");
  });

  /* =================== Hover sobre la zona clicable → apariencia del botón =================== */
  // Si la zona tiene objetivo (botón con estados, opción, madera) se usa ese; si no, se busca el
  // elemento del diseño que está debajo (p. ej. "Ver más") y se levanta suavemente: sin aros de color.
  const cajaDe = (el) => ({ x: parseFloat(el.style.left), y: parseFloat(el.style.top), w: parseFloat(el.style.width), h: parseFloat(el.style.height) });
  function elementoBajo(b) {
    const s = b.closest(".slide"), r = cajaDe(b); if (!s || !isFinite(r.w)) return null;
    let mejor = null, iouMax = 0.4;
    s.querySelectorAll(":scope > .capa > .el, :scope > .capa > .el.grp").forEach((el) => {
      if (el.matches(".vbox, .scroll, .madera-item, .btnvar")) return;
      const e = cajaDe(el); if (!isFinite(e.w)) return;
      const ix = Math.max(0, Math.min(r.x + r.w, e.x + e.w) - Math.max(r.x, e.x)), iy = Math.max(0, Math.min(r.y + r.h, e.y + e.h) - Math.max(r.y, e.y));
      const inter = ix * iy, iou = inter / (r.w * r.h + e.w * e.h - inter);
      if (iou > iouMax) { iouMax = iou; mejor = el; }
    });
    s.querySelectorAll(":scope > .capa.estado > .el").forEach((el) => {
      if (el.matches(".vbox, .scroll")) return;
      const e = cajaDe(el); if (!isFinite(e.w)) return;
      const ix = Math.max(0, Math.min(r.x + r.w, e.x + e.w) - Math.max(r.x, e.x)), iy = Math.max(0, Math.min(r.y + r.h, e.y + e.h) - Math.max(r.y, e.y));
      const inter = ix * iy, iou = inter / (r.w * r.h + e.w * e.h - inter);
      if (iou > Math.max(iouMax, 0.6) && b.dataset.soloEstado) { iouMax = iou; mejor = el; }
    });
    return mejor;
  }
  document.querySelectorAll(".slide .hot").forEach((b) => {
    if (b.classList.contains("cerrar") || b.dataset.flip || b.dataset.revela) return;
    let destino = null, cls = "hover";
    if (b.dataset.objetivo || b.dataset.colorea) { cls = b.classList.contains("op") ? "op-hover" : "hover"; }
    else { destino = elementoBajo(b); cls = "hover-lift"; if (destino) destino.classList.add("lift"); else return; }
    const o = () => destino || document.getElementById(b.dataset.objetivo || b.dataset.colorea);
    const bloqueado = () => !!b.closest(".slide").querySelector(".quiz.resuelta, .relaciona.x");
    b.addEventListener("pointerenter", (e) => { if (e.pointerType !== "mouse" && e.pointerType !== "pen") return; const t = o(); if (t && !bloqueado()) t.classList.add(cls); });
    b.addEventListener("pointerleave", () => { const t = o(); if (t) t.classList.remove(cls); });
    b.addEventListener("focus", () => { if (!b.matches(":focus-visible")) return; const t = o(); if (t) t.classList.add(cls); });
    b.addEventListener("blur", () => { const t = o(); if (t) t.classList.remove(cls); });
    b.addEventListener("click", () => { const t = o(); if (t && cls === "hover-lift") t.classList.remove(cls); });
  });

  /* =================== Estados (pestañas / menús interactivos) =================== */
  function estadoActual(s) { const a = s.querySelector(".capa.estado.activo"); return a ? +a.dataset.k : -1; }
  function ponerEstado(s, k, animar = true) {
    const capas = [...s.querySelectorAll(".capa.estado")];
    if (!capas.length) return;
    const previa = capas.find((c) => c.classList.contains("activo") && +c.dataset.k !== k);
    // primero sale lo que se estaba mostrando (0,3 s) y luego aparece lo nuevo
    const sal = animar && previa && previa.dataset.k !== "0" ? PASO : 0;
    capas.forEach((c) => {
      const on = +c.dataset.k === k;
      if (c === previa && animar) {
        c.classList.add("saliendo"); clearTimeout(c._t); c._t = setTimeout(() => c.classList.remove("saliendo"), Math.round(PASO * 1000) + 20);
      }
      c.classList.toggle("activo", on);
      if (on) {
        c.classList.remove("saliendo"); c.style.setProperty("--sal", sal + "s");
        c.querySelectorAll(":scope > .anim").forEach((el) => {
          el.classList.remove("reanima");
          // los botones (ctrl) y lo que no cambia aparecen sin animación; solo se anima el contenido
          if (!animar || !el.classList.contains("dif")) { el.classList.add("ya"); return; }
          el.classList.remove("ya"); void el.offsetWidth; el.classList.add("reanima");
        });
        const sc = c.querySelector(".el.scroll .tx"); if (sc) sc.scrollTop = 0;
      }
    });
    s.querySelectorAll("[data-estado]").forEach((b) => b.classList.toggle("actual", +b.dataset.estado === k));
    s.querySelectorAll("[data-solo-estado]").forEach((b) => { b.hidden = +b.dataset.soloEstado !== k; });
  }
  document.querySelectorAll("[data-estado]").forEach((b) => b.addEventListener("click", () => {
    const s = b.closest(".slide"), k = +b.dataset.estado;
    if (estadoActual(s) === k && s.querySelector(`.capa.estado[data-k="${k}"].activo`)) return;
    ponerEstado(s, k); marcar(b.dataset.clave);
    hablar(rutaLoc(slideDe(b), `popup-e-${k}.mp3`), 250);
  }));
  function reiniciarEstados(s) {
    const capas = s.querySelectorAll(".capa.estado");
    if (!capas.length) return;
    // menú: no se ve contenido hasta el clic · pestañas con capa neutra: ninguna elegida al entrar
    const inicial = s.dataset.modo === "menu" ? -1 : (s.querySelector('.capa.estado[data-k="0"]') ? 0 : 1);
    capas.forEach((c) => { c.classList.remove("saliendo"); c.style.removeProperty("--sal"); c.classList.toggle("activo", +c.dataset.k === inicial); c.querySelectorAll(".anim").forEach((el) => el.classList.remove("ya", "reanima")); });
    s.querySelectorAll("[data-estado]").forEach((b) => b.classList.toggle("actual", +b.dataset.estado === inicial));
    s.querySelectorAll("[data-solo-estado]").forEach((b) => { b.hidden = +b.dataset.soloEstado !== inicial; });
    if (inicial === 1) { const k1 = s.querySelector('[data-estado="1"]'); if (k1) marcar(k1.dataset.clave); }
  }

  /* =================== Popups del diseño =================== */
  let popAbierto = null, focoPrevio = null;
  function abrirPop(id, origen, conVoz = true) {
    const p = document.getElementById(id); if (!p) return;
    cerrarPop(true);
    focoPrevio = origen || document.activeElement;
    p.classList.add("abierto"); popAbierto = p;
    sonar("popup");
    const s = p.closest(".slide");
    if (conVoz && s) hablar(rutaLoc(slideDe(p), `${id.replace(/^pop-/, "popup-")}.mp3`), 380);
    setTimeout(() => { const x = p.querySelector("[data-cerrar]:not(.dpop-velo), [data-continuar], [data-reintentar]"); if (x && x.focus) x.focus({ preventScroll: true }); }, 60);
  }
  function cerrarPop(silencioso) {
    if (!popAbierto) return;
    const p = popAbierto; popAbierto = null;
    p.classList.remove("abierto");
    p.querySelectorAll("video").forEach((v) => v.pause());
    if (!silencioso) callar();
    if (p.id === "popGen") setTimeout(() => { if (!p.classList.contains("abierto")) $("genCuerpo").innerHTML = ""; }, 300);
    if (p._alCerrar) { const f = p._alCerrar; p._alCerrar = null; f(); }
    if (focoPrevio && focoPrevio.focus) focoPrevio.focus({ preventScroll: true, focusVisible: false });
  }
  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-cerrar]"); if (c && c.closest(".dpop")) { cerrarPop(); return; }
    const cont = e.target.closest("[data-continuar]"); if (cont) { cerrarPop(); setTimeout(() => irA(actual + 1), 250); return; }
    const re = e.target.closest("[data-reintentar]"); if (re) { const s = re.closest(".slide"); cerrarPop(); reiniciarPregunta(s); }
  });
  document.querySelectorAll(".slide [data-pop]").forEach((b) => b.addEventListener("click", () => {
    const id = "pop-" + b.dataset.pop, p = document.getElementById(id);
    abrirPop(id, b); marcar(b.dataset.clave);
    if (b.dataset.colorea) p._alCerrar = () => { const c = document.getElementById(b.dataset.colorea); if (c) c.classList.add("visto"); };
  }));
  function aplicarColoreados(s) {
    s.querySelectorAll("[data-colorea]").forEach((b) => { const c = document.getElementById(b.dataset.colorea); if (c) c.classList.toggle("visto", vistos.has(b.dataset.clave)); });
  }

  /* =================== Popup genérico: video e imagen =================== */
  function abrirGen(titulo, nodo, origen) {
    $("genTitulo").textContent = titulo; $("genCuerpo").innerHTML = ""; $("genCuerpo").append(nodo);
    abrirPop("popGen", origen, false);
  }
  document.querySelectorAll("[data-video-pop]").forEach((b) => b.addEventListener("click", () => {
    const v = (C.videos || {})[b.dataset.videoPop] || {};
    const box = document.createElement("div"); box.className = "vbox"; box.dataset.video = b.dataset.videoPop; box.dataset.titulo = v.titulo || "";
    abrirGen(v.titulo || "Video", box, b); crearReproductor(box); marcar(b.dataset.clave);
  }));
  document.querySelectorAll("[data-img-pop]").forEach((b) => b.addEventListener("click", () => {
    const im = (C.imagenes || {})[b.dataset.imgPop] || {};
    const cont = document.createElement("div");
    const img = new Image(); img.alt = im.titulo || "";
    img.onerror = () => { cont.innerHTML = `<div class="pendiente"><div>Imagen pendiente de cargar<small>Coloque el archivo en: ${im.url}</small><small>${im.nota || ""}</small></div></div>`; };
    img.src = im.url; cont.append(img);
    abrirGen(im.titulo || "Imagen", cont, b); marcar(b.dataset.clave);
    hablar(rutaLoc(slideDe(b), `popup-${b.dataset.imgPop}.mp3`), 380);
  }));

  /* =================== Reproductor de video propio =================== */
  const ico = {
    play: '<svg class="ico-play" viewBox="0 0 24 24"><path d="M7 4v16l13-8z" fill="currentColor"/></svg>',
    pausa: '<svg class="ico-pausa" viewBox="0 0 24 24"><path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor"/></svg>',
    atras: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/></svg>',
    adelante: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'
  };
  const fmt = (t) => { t = Math.max(0, t || 0); const m = Math.floor(t / 60), s = Math.floor(t % 60); return m + ":" + dos(s); };
  function crearReproductor(box) {
    if (box.dataset.listo) return;
    const v = (C.videos || {})[box.dataset.video] || {};
    box.dataset.listo = "1";
    box.innerHTML = `<video playsinline preload="metadata"></video>
      <div class="vp-portada"><span class="vp-play">${ico.play}</span><b>${v.titulo || box.dataset.titulo || "Video"}</b>${v.fuente ? `<small>${v.fuente}</small>` : ""}</div>
      <div class="vp-controles">
        <button class="vp-pp" aria-label="Reproducir o pausar">${ico.play}${ico.pausa}</button>
        <button class="vp-atras" aria-label="Retroceder 10 segundos">${ico.atras}</button>
        <button class="vp-adelante" aria-label="Adelantar 10 segundos">${ico.adelante}</button>
        <div class="vp-barra" role="slider" aria-label="Progreso del video"><i></i></div>
        <span class="vp-tiempo">0:00 / 0:00</span>
        <button class="vp-vel" aria-label="Velocidad">1x</button>
        <button class="vp-full" aria-label="Pantalla completa">${ico.full}</button>
      </div>`;
    const vid = box.querySelector("video"), port = box.querySelector(".vp-portada"), barra = box.querySelector(".vp-barra i"), tiempo = box.querySelector(".vp-tiempo"), vel = box.querySelector(".vp-vel");
    vid.src = v.url || "";
    const pendiente = () => { box.classList.add("sin-video"); port.innerHTML = `<div class="pendiente"><div>Video pendiente de cargar<small>Coloque el archivo en: ${v.url || "(sin ruta)"}</small>${v.youtube ? `<small>Original: ${v.youtube}</small>` : ""}</div></div>`; };
    vid.addEventListener("error", pendiente);
    if (!v.url) pendiente();
    const alternar = () => { if (box.classList.contains("sin-video")) return; if (vid.paused) { callar(); vid.play().catch(() => {}); } else vid.pause(); };
    port.addEventListener("click", alternar);
    box.querySelector(".vp-pp").addEventListener("click", alternar);
    vid.addEventListener("click", alternar);
    box.querySelector(".vp-atras").addEventListener("click", () => { vid.currentTime = Math.max(0, vid.currentTime - 10); });
    box.querySelector(".vp-adelante").addEventListener("click", () => { vid.currentTime = Math.min(vid.duration || 0, vid.currentTime + 10); });
    vel.addEventListener("click", () => { const r = [1, 1.5, 2]; const i = (r.indexOf(vid.playbackRate) + 1) % r.length; vid.playbackRate = r[i]; vel.textContent = r[i] + "x"; vel.classList.toggle("on", r[i] !== 1); });
    box.querySelector(".vp-full").addEventListener("click", () => { const el = box; if (document.fullscreenElement === el) document.exitFullscreen(); else if (el.requestFullscreen) el.requestFullscreen().catch(() => {}); else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen(); });
    box.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") { box.classList.add("toque"); clearTimeout(box._tq); box._tq = setTimeout(() => box.classList.remove("toque"), 3500); } });
    box.querySelector(".vp-barra").addEventListener("click", (e) => { const r = e.currentTarget.getBoundingClientRect(); if (vid.duration) vid.currentTime = ((e.clientX - r.left) / r.width) * vid.duration; });
    vid.addEventListener("play", () => { box.classList.add("reproduciendo"); box.classList.remove("pausado"); port.style.display = "none"; marcar("v:" + box.dataset.video); });
    vid.addEventListener("pause", () => { box.classList.remove("reproduciendo"); box.classList.add("pausado"); });
    vid.addEventListener("timeupdate", () => { barra.style.width = (vid.duration ? (vid.currentTime / vid.duration) * 100 : 0) + "%"; tiempo.textContent = fmt(vid.currentTime) + " / " + fmt(vid.duration); });
    vid.addEventListener("loadedmetadata", () => { tiempo.textContent = "0:00 / " + fmt(vid.duration); });
  }
  function detenerVideos(s) { s.querySelectorAll("video").forEach((v) => v.pause()); }

  /* =================== Visor PDF =================== */
  const visor = $("visor"), cuerpo = $("visorCuerpo");
  let pdf = null, renderId = 0;
  if (window.pdfjsLib) pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/lib/pdf.worker.min.js";
  async function abrirDoc(id) {
    const d = (C.documentos || {})[id]; if (!d) return;
    callar(); $("visorTitulo").textContent = d.titulo || "Documento";
    cuerpo.innerHTML = '<p style="color:#fff;margin:auto">Cargando documento…</p>';
    visor.classList.add("abierto"); sonar("popup"); marcar("d:" + id);
    try { if (visor.requestFullscreen && !document.fullscreenElement) await visor.requestFullscreen(); } catch (e) {}
    try {
      if (!window.pdfjsLib || location.protocol === "file:") throw new Error("sin pdf.js");
      pdf = await pdfjsLib.getDocument(d.url).promise; await renderTodo();
    } catch (e) { pdf = null; cuerpo.innerHTML = `<iframe src="${d.url}#toolbar=0&navpanes=0&view=FitH" title="${d.titulo}"></iframe>`; }
  }
  async function renderTodo() {
    if (!pdf) return;
    const id = ++renderId, frag = document.createDocumentFragment();
    const ancho = Math.min(cuerpo.clientWidth - 32, 1400), dpr = window.devicePixelRatio || 1;
    for (let i = 1; i <= pdf.numPages; i++) {
      const p = await pdf.getPage(i), base = p.getViewport({ scale: 1 }), vp = p.getViewport({ scale: (ancho / base.width) * dpr });
      const canvas = document.createElement("canvas"); canvas.width = vp.width; canvas.height = vp.height;
      canvas.style.width = vp.width / dpr + "px"; canvas.style.height = vp.height / dpr + "px";
      await p.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
      if (id !== renderId) return;
      frag.append(canvas);
      if (i === 1) { cuerpo.innerHTML = ""; }
      cuerpo.append(canvas);
    }
  }
  function cerrarVisor() {
    if (!visor.classList.contains("abierto")) return;
    visor.classList.remove("abierto"); renderId++;
    if (document.fullscreenElement === visor) document.exitFullscreen().catch(() => {});
    setTimeout(() => { cuerpo.innerHTML = ""; }, 300);
  }
  $("vCerrar").addEventListener("click", cerrarVisor);
  document.querySelectorAll("[data-doc]").forEach((b) => b.addEventListener("click", () => abrirDoc(b.dataset.doc)));

  /* =================== Tarjetas que giran =================== */
  function animarCuentas(raiz) {
    raiz.querySelectorAll(".cuenta").forEach((el) => {
      const s = el.dataset.v;
      const sep = s.match(/[.,]/g) || [];
      // separador decimal: el último si le siguen 1-2 dígitos; miles si le siguen 3
      let dec = "", decs = 0, mil = "";
      const m = s.match(/([.,])(\d+)$/);
      if (m && m[2].length !== 3) { dec = m[1]; decs = m[2].length; }
      const mm = s.match(/(\d)([.,])(\d{3})/); if (mm && mm[2] !== dec) mil = mm[2];
      const num = parseFloat(s.replace(new RegExp("\\" + (mil || "#"), "g"), "").replace(dec || "#", "."));
      if (!isFinite(num)) return;
      const t0 = performance.now(), dur = 1300;
      const pintar = (v) => {
        let txt = v.toFixed(decs);
        let [ent, fr] = txt.split(".");
        if (mil) ent = ent.replace(/\B(?=(\d{3})+(?!\d))/g, mil);
        el.textContent = fr ? ent + dec + fr : ent;
      };
      const paso = (t) => { const k = Math.min(1, (t - t0) / dur); pintar(num * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(paso); else el.textContent = s; };
      requestAnimationFrame(paso);
    });
  }
  document.querySelectorAll("[data-flip]").forEach((b) => b.addEventListener("click", () => {
    const s = b.closest(".slide"), k = b.dataset.flip;
    const card = s.querySelector(`.flip[data-card="${k}"]`);
    const abrir = !card.classList.contains("abierta");
    s.querySelectorAll(".flip.abierta").forEach((c) => c.classList.remove("abierta"));
    if (abrir) {
      card.classList.add("abierta"); marcar(b.dataset.clave); sonar("popup");
      const base = b.dataset.clave.slice(2);
      hablar(rutaLoc(slideDe(b), `popup-${base}.mp3`), 350);
    } else callar();
  }));

  /* =================== Ventajas: revelar ítems =================== */
  document.querySelectorAll("[data-revela]").forEach((b) => b.addEventListener("click", () => {
    const s = b.closest(".slide"), k = b.dataset.revela;
    const t = s.querySelector(`.revela[data-item="${k}"]`); if (t) t.classList.add("visto");
    const cg = s.querySelector(".cursor-guia"); if (cg) cg.classList.add("oculto");
    marcar(b.dataset.clave); sonar("popup");
    hablar(rutaLoc(slideDe(b), `popup-r-${k}.mp3`), 250);
  }));
  document.querySelectorAll("[data-revela]").forEach((b) => {
    const sel = () => b.closest(".slide").querySelector(".selector");
    const mover = () => { const t = sel(); if (!t) return; t.style.left = (parseFloat(b.style.left) + 76 - 76.5) + "px"; t.style.top = (parseFloat(b.style.top) + 76 - 76.5) + "px"; };
    b.addEventListener("pointerenter", (e) => { if (e.pointerType !== "mouse" && e.pointerType !== "pen") return; const t = sel(); if (!t) return; if (!t.classList.contains("ver")) { t.style.transition = "none"; mover(); void t.offsetWidth; t.style.transition = ""; } else mover(); t.classList.add("ver"); });
    b.addEventListener("pointerleave", () => { const t = sel(); if (t) t.classList.remove("ver"); });
    b.addEventListener("focus", () => { if (!b.matches(":focus-visible")) return; const t = sel(); if (t) { mover(); t.classList.add("ver"); } });
    b.addEventListener("blur", () => { const t = sel(); if (t) t.classList.remove("ver"); });
  });
  function prepararRevela(s) {
    const se = s.querySelector(".selector"); if (se) se.classList.remove("ver");
    s.querySelectorAll(".revela").forEach((t) => {
      const b = s.querySelector(`[data-revela="${t.dataset.item}"]`);
      t.classList.toggle("visto", cfg.recordar && b && vistos.has(b.dataset.clave));
    });
    const cg = s.querySelector(".cursor-guia"); if (cg) cg.classList.toggle("oculto", !!s.querySelector(".revela.visto"));
  }

  /* =================== Preguntas de selección =================== */
  document.querySelectorAll(".hot.op").forEach((b) => b.addEventListener("click", () => {
    const s = b.closest(".slide"), q = s.querySelector(".quiz");
    if (q.classList.contains("resuelta")) return;
    const g = document.getElementById(b.dataset.objetivo);
    s.querySelectorAll(".op-incorrecta").forEach((x) => x.classList.remove("op-incorrecta"));
    if (b.hasAttribute("data-correcta")) {
      g.classList.add("op-correcta"); q.classList.add("resuelta"); sonar("correcto");
      marcar("q:" + q.dataset.pregunta);
      setTimeout(() => abrirPop(`pop-${q.dataset.pregunta}-ok`, b), 650);
    } else {
      void g.offsetWidth; g.classList.add("op-incorrecta"); sonar("incorrecto");
      setTimeout(() => abrirPop(`pop-${q.dataset.pregunta}-mal`, b), 650);
    }
  }));
  function reiniciarPregunta(s) {
    const q = s.querySelector(".quiz"); if (!q) return;
    q.classList.remove("resuelta");
    s.querySelectorAll(".op-correcta,.op-incorrecta").forEach((x) => x.classList.remove("op-correcta", "op-incorrecta"));
    if (cfg.recordar && vistos.has("q:" + q.dataset.pregunta)) {
      const b = s.querySelector(".hot.op[data-correcta]"); document.getElementById(b.dataset.objetivo).classList.add("op-correcta"); q.classList.add("resuelta");
    }
  }

  /* =================== Relaciona =================== */
  function prepararRelaciona(s) {
    const r = s.querySelector(".relaciona"); if (!r) return;
    const der = [...s.querySelectorAll("[data-rel-der]")];
    const tops = der.map((b) => parseFloat(b.style.top)).sort((a, b) => a - b);
    // desordenar (que ninguna quede frente a su concepto)
    let orden;
    do { orden = tops.slice().sort(() => Math.random() - 0.5); } while (orden.some((t, i) => t === tops[i]));
    der.forEach((b, i) => {
      const g = document.getElementById(b.dataset.objetivo);
      const dy = orden[i] - parseFloat(b.style.top);
      b.style.top = orden[i] + "px"; g.classList.add("movible");
      g.style.top = (parseFloat(g.style.top) + dy) + "px";
    });
    s.querySelectorAll("[data-rel-izq],[data-rel-der]").forEach((b) => { b.classList.remove("hecho"); const g = document.getElementById(b.dataset.objetivo); g.classList.remove("rel-ok", "rel-sel", "rel-mal"); });
    r._sel = null;
  }
  document.querySelectorAll("[data-rel-izq],[data-rel-der]").forEach((b) => b.addEventListener("click", () => {
    const s = b.closest(".slide"), r = s.querySelector(".relaciona");
    const g = document.getElementById(b.dataset.objetivo);
    if (b.dataset.relIzq) {
      s.querySelectorAll("[data-rel-izq]").forEach((x) => document.getElementById(x.dataset.objetivo).classList.remove("rel-sel"));
      g.classList.add("rel-sel"); r._sel = b; return;
    }
    if (!r._sel) { g.classList.remove("rel-mal"); void g.offsetWidth; g.classList.add("rel-mal"); setTimeout(() => g.classList.remove("rel-mal"), 600); return; }
    const gi = document.getElementById(r._sel.dataset.objetivo);
    if (r._sel.dataset.relIzq === b.dataset.relDer) {
      gi.classList.remove("rel-sel"); gi.classList.add("rel-ok"); g.classList.add("rel-ok");
      r._sel.classList.add("hecho"); b.classList.add("hecho"); r._sel = null; sonar("correcto");
      if (s.querySelectorAll(".hot.rel.hecho").length === s.querySelectorAll(".hot.rel").length) {
        marcar("q:" + r.dataset.pregunta);
        setTimeout(() => abrirPop("pop-retro-relaciona", b), 700);
      }
    } else {
      g.classList.remove("rel-mal"); void g.offsetWidth; g.classList.add("rel-mal"); sonar("incorrecto");
      setTimeout(() => g.classList.remove("rel-mal"), 700);
    }
  }));

  /* =================== Gráfica de barras: se arma por partes =================== */
  document.querySelectorAll(".grafica[data-series]").forEach((g) => {
    const d = JSON.parse(g.dataset.series);
    const W = parseFloat(g.style.width), H = parseFloat(g.style.height);
    const ml = 104, mr = 16, mt = 92, mb = 44, cw = W - ml - mr, ch = H - mt - mb;
    const tot = d.categorias.map((_, i) => d.series.reduce((s, se) => s + se.valores[i], 0));
    const max = Math.ceil(Math.max(...tot) / 500000) * 500000;
    const y = (v) => mt + ch - (v / max) * ch;
    const n = d.categorias.length, paso = cw / n, bw = paso * 0.64;
    const miles = (v) => v.toLocaleString("es-CO");
    const base = parseFloat(getComputedStyle(g).getPropertyValue("--d")) || 0;
    const t = (s) => `style="--gd:${(base + s).toFixed(2)}s"`;
    let s = `<svg viewBox="0 0 ${W} ${H}">`;
    s += `<text class="gax" ${t(0)} x="${W / 2}" y="28" text-anchor="middle" font-size="24" fill="#505831" font-weight="600">${d.titulo}</text>`;
    d.series.forEach((se, k) => { const lx = W / 2 - 150 + k * 170; s += `<g class="gax" ${t(0.15)}><rect x="${lx}" y="46" width="20" height="20" rx="4" fill="${se.color}"/><text x="${lx + 28}" y="63" font-size="19" fill="#3C3C3B">${se.nombre}</text></g>`; });
    for (let v = 0; v <= max; v += 500000) s += `<g class="gax" ${t(0.3)}><line x1="${ml}" x2="${ml + cw}" y1="${y(v)}" y2="${y(v)}" stroke="#D8E3C7" stroke-width="${v ? 1.5 : 2.5}"/><text x="${ml - 12}" y="${y(v) + 6}" text-anchor="end" font-size="16" fill="#5f5f5c">${miles(v)}</text></g>`;
    d.categorias.forEach((c, i) => {
      const x = ml + paso * i + (paso - bw) / 2; let acc = 0;
      s += `<text class="gax" ${t(0.45)} x="${x + bw / 2}" y="${mt + ch + 30}" text-anchor="middle" font-size="19" fill="#3C3C3B" font-weight="500">${c}</text>`;
      d.series.forEach((se, k) => {
        const v = se.valores[i], y0 = y(acc), y1 = y(acc + v), dl = 0.6 + i * 0.35 + k * 0.9;
        s += `<rect class="gbar" ${t(dl)} x="${x}" y="${y1}" width="${bw}" height="${y0 - y1}" fill="${se.color}" rx="${k === d.series.length - 1 ? 6 : 0}"/>`;
        s += `<text class="glbl" ${t(dl + 0.6)} x="${x + bw / 2}" y="${(y0 + y1) / 2 + 6}" text-anchor="middle" font-size="16" fill="${se.texto}" font-weight="600">${miles(v)}</text>`;
        acc += v;
      });
    });
    g.innerHTML = s + "</svg>";
  });

  /* =================== Menú lateral =================== */
  const btnMenu = $("btnMenu"), lista = document.querySelector(".menu-lista");
  slides.forEach((s, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<button data-ir-menu="${i}"><span class="mn">${i + 1}</span><span class="mt">${s.dataset.titulo}</span><span class="mc" aria-hidden="true">${check}</span></button>`;
    lista.append(li);
  });
  function abrirMenu(abrir) {
    const v = abrir ?? !repro.classList.contains("menu-abierto");
    if (v) cerrarPaneles();
    repro.classList.toggle("menu-abierto", v);
    btnMenu.setAttribute("aria-expanded", v); $("menuLateral").setAttribute("aria-hidden", !v);
    if (v) setTimeout(() => { const b = lista.querySelector("li.actual button"); if (b) { b.focus({ preventScroll: true }); b.scrollIntoView({ block: "center" }); } }, 60);
  }
  btnMenu.addEventListener("click", () => abrirMenu());
  $("velo").addEventListener("click", () => abrirMenu(false));
  lista.addEventListener("click", (e) => { const b = e.target.closest("[data-ir-menu]"); if (b) { irA(+b.dataset.irMenu); abrirMenu(false); } });

  /* =================== Paneles: configuración y pendientes =================== */
  const paneles = { panelConfig: $("btnConfig"), panelPend: $("pct") };
  function cerrarPaneles(excepto) { Object.entries(paneles).forEach(([id, b]) => { if (id !== excepto) { $(id).hidden = true; b.setAttribute("aria-expanded", "false"); } }); }
  function alternarPanel(id) {
    const p = $(id), abrir = p.hidden;
    cerrarPaneles(id); if (abrir) abrirMenu(false);
    p.hidden = !abrir; paneles[id].setAttribute("aria-expanded", abrir);
    if (abrir && id === "panelPend") pintarPendientes();
  }
  $("btnConfig").addEventListener("click", (e) => { e.stopPropagation(); alternarPanel("panelConfig"); });
  $("pct").addEventListener("click", (e) => { e.stopPropagation(); alternarPanel("panelPend"); });
  document.querySelectorAll("[data-cerrar-panel]").forEach((b) => b.addEventListener("click", () => cerrarPaneles()));
  document.addEventListener("click", (e) => { if (!e.target.closest(".panel-flot, #btnConfig, #pct")) cerrarPaneles(); });
  $("reiniciarProg").addEventListener("click", () => {
    vistos = new Set(["s:" + (actual + 1)]); guardar(CLAVE, JSON.stringify([...vistos])); pintarProgreso();
    const s = slides[actual]; reiniciarPregunta(s); prepararRevela(s); aplicarColoreados(s);
  });
  const tipos = { e: "Pestaña", p: "Popup", c: "Tarjeta", r: "Ítem", v: "Video", d: "Documento", i: "Imagen", q: "Actividad" };
  function pintarPendientes() {
    const cont = $("pendLista"); cont.innerHTML = "";
    const falt = [...items].filter(([k]) => !vistos.has(k));
    $("pendResumen").textContent = falt.length ? `${falt.length} de ${items.size} pendientes` : "";
    if (!falt.length) { cont.innerHTML = '<p class="pend-ok">🎉 ¡Completaste todos los elementos del módulo!</p>'; return; }
    const porSlide = new Map();
    falt.forEach(([k, info]) => { if (!porSlide.has(info.slide)) porSlide.set(info.slide, []); porSlide.get(info.slide).push([k, info]); });
    [...porSlide.keys()].sort((a, b) => a - b).forEach((n) => {
      const grupo = document.createElement("div"); grupo.className = "pend-grupo";
      const sinVisitar = porSlide.get(n).some(([k]) => k === "s:" + n);
      const tit = n === 0 ? "Barra inferior" : slides[n - 1].dataset.titulo;
      grupo.innerHTML = `<button class="pend-slide" data-ir-pend="${n}"><span class="mn">${n || "★"}</span><span>${tit}</span>${sinVisitar ? "<em>Sin visitar</em>" : ""}</button>`;
      const ul = document.createElement("ul");
      porSlide.get(n).filter(([k]) => !k.startsWith("s:")).forEach(([k, info]) => {
        const li = document.createElement("li");
        li.innerHTML = `<button data-ir-pend="${n}" data-clave-pend="${k}"><i class="pi pi-${info.tipo}"></i>${tipos[info.tipo] ? tipos[info.tipo] + ": " : ""}${info.etiqueta}</button>`;
        ul.append(li);
      });
      if (ul.children.length) grupo.append(ul);
      cont.append(grupo);
    });
  }
  $("pendLista").addEventListener("click", (e) => {
    const b = e.target.closest("[data-ir-pend]"); if (!b) return;
    cerrarPaneles();
    const n = +b.dataset.irPend;
    if (n === 0) { $("btnApoyo").classList.add("resaltar"); setTimeout(() => $("btnApoyo").classList.remove("resaltar"), 2900); return; }
    irA(n - 1);
    const k = b.dataset.clavePend; if (!k) return;
    const info = items.get(k);
    setTimeout(() => {
      const el = info.el; if (!el) return;
      if (el.matches(".vbox")) { el.classList.add("resaltar"); setTimeout(() => el.classList.remove("resaltar"), 2900); return; }
      if (el.hidden && el.dataset.soloEstado) ponerEstado(slides[n - 1], +el.dataset.soloEstado);
      el.classList.add("resaltar"); setTimeout(() => el.classList.remove("resaltar"), 2900);
    }, 700);
  });

  /* =================== Navegación =================== */
  const yaVistoAlEntrar = new Set();
  const saltarRepeticion = (n) => cfg.recordar && yaVistoAlEntrar.has(n);
  let inicioSonado = false;
  function irA(n, conSonido = true) {
    n = Math.max(0, Math.min(total - 1, n));
    if (n === actual) return;
    cerrarPop(true);
    const previo = actual >= 0 ? slides[actual] : null;
    if (previo) { previo.classList.remove("active"); detenerVideos(previo); }
    callar();
    actual = n;
    const s = slides[n];
    yaVistoAlEntrar.delete(n); if (vistos.has("s:" + (n + 1))) yaVistoAlEntrar.add(n);
    s.classList.toggle("sin-anim", saltarRepeticion(n));
    reiniciarEstados(s);
    if (saltarRepeticion(n)) s.querySelectorAll(".capa.estado .anim").forEach((el) => el.classList.add("ya"));
    s.querySelectorAll(".flip.abierta").forEach((c) => c.classList.remove("abierta"));
    reiniciarPregunta(s); prepararRelaciona(s); prepararRevela(s); aplicarColoreados(s);
    void s.offsetWidth;
    s.classList.add("active");
    s.querySelectorAll(".vbox[data-video]").forEach(crearReproductor);
    repro.classList.toggle("es-portada", n === 0);
    if (n !== 0) $("arranque").hidden = true;
    repro.classList.toggle("es-final", n === total - 1);
    repro.classList.toggle("con-volver", !!s.dataset.volver);
    $("contador").textContent = `${n + 1} de ${total}`;
    $("tituloBarra").textContent = s.dataset.titulo;
    $("btnPrev").disabled = n === 0; $("btnNext").disabled = n === total - 1;
    lista.querySelectorAll("li").forEach((li, i) => { li.classList.toggle("actual", i === n); li.querySelector("button").setAttribute("aria-current", i === n ? "step" : "false"); });
    marcar("s:" + (n + 1));
    guardar(CLAVE + "-ultimo", String(n + 1));
    let espera = 450;
    if (conSonido) {
      if (s.dataset.sonido) { sonar(s.dataset.sonido); espera = 1400; if (s.dataset.sonido === "inicio") inicioSonado = true; }
      else sonar("cambio");
    }
    if (!saltarRepeticion(n) && (conSonido || n !== 0)) hablar(rutaLoc(n + 1, "titulo.mp3"), espera);
    try { history.replaceState(null, "", "#" + (n + 1)); } catch (e) {}
  }
  $("btnPrev").addEventListener("click", () => irA(actual - 1));
  $("btnNext").addEventListener("click", () => irA(actual + 1));
  $("btnVolver").addEventListener("click", () => { const v = +slides[actual].dataset.volver; if (v) irA(v - 1); });
  document.querySelectorAll(".slide [data-ir]").forEach((b) => b.addEventListener("click", () => irA(+b.dataset.ir - 1)));
  document.addEventListener("keydown", (e) => {
    if (visor.classList.contains("abierto")) { if (e.key === "Escape") cerrarVisor(); return; }
    if (popAbierto) { if (e.key === "Escape") cerrarPop(); return; }
    if (e.key === "Escape") { if (!$("panelConfig").hidden || !$("panelPend").hidden) { cerrarPaneles(); return; } if (repro.classList.contains("menu-abierto")) { abrirMenu(false); return; } }
    if (e.target.closest && e.target.closest(".menu-lateral, .panel-flot, input, .vbox")) return;
    if (e.key === "ArrowRight" || e.key === "PageDown") irA(actual + 1);
    if (e.key === "ArrowLeft" || e.key === "PageUp") irA(actual - 1);
  });
  let x0 = null, y0 = null;
  area.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
  area.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    if (!popAbierto && Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5 && !e.target.closest(".vbox,.menu-lateral,.panel-flot")) irA(actual + (dx < 0 ? 1 : -1));
    x0 = null;
  }, { passive: true });

  // sonido de inicio en el primer cargue: si el navegador bloquea el audio automático,
  // se muestra "Comenzar" sobre la portada y el clic reproduce el sonido y la locución.
  function arrancar() {
    $("arranque").hidden = true; inicioSonado = true;
    if (actual === 0) { sonar("inicio"); hablar(rutaLoc(1, "titulo.mp3"), 1400); }
  }
  $("btnArranque").addEventListener("click", arrancar);
  function intentarInicio() {
    if (actual !== 0 || inicioSonado) return;
    if (silencio || (!cfg.efectos && !cfg.locuciones)) return;
    const prueba = cfg.efectos && sonidos.inicio ? sonidos.inicio : null;
    const p = prueba ? (prueba.currentTime = 0, prueba.play()) : null;
    if (p && p.then) p.then(() => { inicioSonado = true; hablar(rutaLoc(1, "titulo.mp3"), 1400); }).catch(() => { $("arranque").hidden = false; setTimeout(() => $("btnArranque").focus({ preventScroll: true }), 50); });
    else $("arranque").hidden = false;
  }

  /* =================== Inicio =================== */
  pintarCC(); pintarProgreso();
  const hash = parseInt(location.hash.slice(1), 10), ultimo = parseInt(leer(CLAVE + "-ultimo"), 10);
  let inicial = 0;
  if (hash >= 1 && hash <= total) inicial = hash - 1;
  else if (cfg.recordar && ultimo >= 1 && ultimo <= total) inicial = ultimo - 1;
  irA(inicial, false);
  intentarInicio();
  window.addEventListener("hashchange", () => { const h = parseInt(location.hash.slice(1), 10); if (h >= 1 && h <= total && h - 1 !== actual) irA(h - 1); });
  window.BID = { irA, abrirPop, ponerEstado: (k) => ponerEstado(slides[actual], k) };
})();
