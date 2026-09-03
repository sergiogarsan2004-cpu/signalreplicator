/* Traducción y corrección de la portada, sobre la página YA MONTADA.
 *
 * Por qué existe: el texto que ve el visitante lo pinta React desde el paquete
 * de Base44. No está en ningún archivo de este repositorio, así que no se puede
 * editar aquí ni traducir a mano. Antes se intentó tener una página por idioma
 * y acabaron siendo webs distintas: el inglés se quedó en la versión anterior al
 * rediseño mientras el español avanzaba.
 *
 * Esto hace lo contrario: UNA sola web. Se sustituyen los textos después de que
 * React monte, y se vuelve a hacer cada vez que React repinta algo. El diseño,
 * la maqueta y los enlaces son siempre los mismos; sólo cambia el texto.
 *
 * CORRECCIONES se aplica SIEMPRE, también en español: son frases que hoy dicen
 * cosas que no son ciertas y que no se pueden arreglar de otra forma sin tocar
 * el paquete de Base44.
 */
(function () {
  "use strict";

  // ── Frases del español que hay que corregir, digan lo que digan ──
  var CORRECCIONES = {
    "✓ 7 días gratis · cancela cuando quieras": "✓ 7 días gratis · cancela cuando quieras",
    "7 días gratis, sin tarjeta. Si prefieres tenerlo en tu equipo, más abajo tienes la versión de escritorio.":
      "7 días gratis. Si prefieres tenerlo en tu equipo, más abajo tienes la versión de escritorio.",
    "Sin tarjeta · cancela cuando quieras": "7 días gratis · cancela cuando quieras",
    "+ tu propia cuenta de MetaApi (unos 10 €/mes según tu uso, la contratas tú a tu nombre).":
      "+ tu propia cuenta de MetaApi (unos 10 $ al mes, alrededor de 8 €, según tu uso; la contratas tú a tu nombre).",
    "+ tu cuenta de MetaApi (unos 10 €/mes según tu uso, la contratas tú a tu nombre)":
      "+ tu cuenta de MetaApi (unos 10 $ al mes, alrededor de 8 €, según tu uso; la contratas tú a tu nombre)",
    "Entendemos cualquier formato de señal, por complejo que sea. Si tu grupo lo envía, lo ejecutamos.":
      "Lee símbolo, dirección, entrada, stop loss y varios take profits, escritos como los escribe cada canal. Si tu grupo usa un formato poco habitual, escríbenos y lo miramos.",
    "Parser de formato libre": "Parser probado en cinco idiomas",
    "Personas, no bots. Te acompañamos en tu operativa con respuestas rápidas y en tu idioma.":
      "Escribes y te contesta quien ha hecho la herramienta. En español.",
    "Pepperstone": "", "ICMarkets": "", "Hantec": "", "+500 brokers": "cualquier bróker",
    "€399": "", "Ahorra 37%": "", "Facturado €175/año.": "",
    "idiomas soportados": "idiomas que lee el parser",
    "No comparamos con nadie. Estas son las razones reales por las que merece la pena, y cada una se puede comprobar.":
      "Estas son las razones reales por las que merece la pena, y cada una la puedes comprobar tú.",
    "Desde 23 €/mes con 7 días gratis. Sin permanencia, sin letra pequeña, cancelas cuando quieras.":
      "Desde 23 €/mes con 7 días gratis. Sin permanencia y sin letra pequeña."
  };

  var EN = {
    "Cómo funciona": "How it works", "Precios": "Pricing", "Cloud": "Cloud",
    "Comparativa": "Comparison", "FAQ": "FAQ", "Acceder": "Log in",
    "Empezar gratis": "Start free",
    "Trading automatizado · Sin código · Sin esfuerzo": "Automated trading · No code · No effort",
    "Tu grupo de Telegram.": "Your Telegram group.", "Tu broker.": "Your broker.",
    "Automático.": "Automatic.",
    "SignalReplicator lee las señales de tu grupo y las ejecuta en MetaTrader 5. Sin intervención humana. La hora de cada señal y de cada ejecución queda registrada en tu panel.":
      "SignalReplicator reads the signals in your group and places them on MetaTrader 5. No human in the middle. The time of every signal and every execution is recorded in your panel.",
    "Probar el Cloud gratis": "Try the Cloud free", "Versión de escritorio": "Desktop version",
    "✓ 7 días gratis · cancela cuando quieras": "✓ 7 days free · cancel whenever you want",
    "Compatible con": "Works with", "Telegram": "Telegram", "cualquier bróker": "any broker",
    "Panel de SignalReplicator": "SignalReplicator panel", "Conectado": "Connected",
    "Operaciones hoy": "Trades today", "Broker": "Broker", "Actividad": "Activity",
    "BUY XAUUSD · ejecutada": "BUY XAUUSD · executed",
    "SELL EURUSD · ejecutada": "SELL EURUSD · executed",
    "BUY GBPJPY · ejecutada": "BUY GBPJPY · executed",
    "Fase 01 · Telegram": "Step 01 · Telegram",
    "Tu analista publica. Nosotros escuchamos.": "Your analyst posts. We listen.",
    "La señal aparece en tu grupo y la detectamos al instante.":
      "The signal appears in your group and we pick it up instantly.",
    "324 miembros · 12 en línea": "324 members · 12 online", "Hoy": "Today",
    "📈 Señal": "📈 Signal", "Parser · procesando…": "Parser · processing…",
    "Símbolo": "Symbol", "Dirección": "Direction", "Entrada": "Entry",
    "Stop Loss": "Stop Loss", "Take Profit": "Take Profit",
    "idiomas que lee el parser": "languages the parser reads",
    "automático": "automatic", "activo (Cloud)": "running (Cloud)", "días gratis": "days free",
    "Empieza por el": "Start with the",
    "7 días gratis. Si prefieres tenerlo en tu equipo, más abajo tienes la versión de escritorio.":
      "7 days free. If you'd rather run it on your own machine, the desktop version is further down.",
    "Recomendado": "Recommended",
    "Corre en nuestros servidores, en la Unión Europea, las 24 horas. No necesitas instalar nada ni dejar el ordenador encendido.":
      "Runs on our servers in the European Union, 24 hours a day. Nothing to install and no need to leave your computer on.",
    "Funciona con el ordenador apagado": "Works with your computer switched off",
    "Panel web, también desde el móvil": "Web panel, also from your phone",
    "Varios canales a la vez": "Several channels at once",
    "Copias de seguridad diarias y cifradas": "Daily encrypted backups",
    "/mes": "/month", "o €300 al año · IVA incluido": "or €300 a year · VAT included",
    "+ tu propia cuenta de MetaApi (unos 10 $ al mes, alrededor de 8 €, según tu uso; la contratas tú a tu nombre).":
      "+ your own MetaApi account (roughly $10 a month, about €8, depending on your usage; you set it up in your name).",
    "+ tu cuenta de MetaApi (unos 10 $ al mes, alrededor de 8 €, según tu uso; la contratas tú a tu nombre)":
      "+ your own MetaApi account (roughly $10 a month, about €8, depending on your usage; you set it up in your name)",
    "Probar el Cloud 7 días gratis": "Try the Cloud free for 7 days",
    "7 días gratis · cancela cuando quieras": "7 days free · cancel whenever you want",
    "¿Prefieres tenerlo en tu equipo?": "Would you rather run it on your own machine?",
    "La versión de escritorio corre en tu ordenador con MetaTrader 5 abierto. Sólo Windows.":
      "The desktop version runs on your computer with MetaTrader 5 open. Windows only.",
    "Mensual": "Monthly", "El bot corre en tu ordenador.": "The bot runs on your computer.",
    "1 grupo de Telegram": "1 Telegram group", "Cualquier broker MT5": "Any MT5 broker",
    "Parser multiidioma (ES, EN, FR, DE, PT)": "Multilingual parser (ES, EN, FR, DE, PT)",
    "Soporte por email": "Email support", "1 dispositivo (Windows)": "1 device (Windows)",
    "Más popular": "Most popular", "Anual": "Yearly", "De por vida": "Lifetime",
    "Actualizaciones para siempre.": "Updates forever.", "· un pago": "· one payment",
    "Comprar de por vida": "Buy lifetime",
    "Pago seguro · Cancela cuando quieras · Sin permanencia":
      "Secure payment · Cancel whenever you want · No lock-in",
    "Nuevo": "New",
    "¿Y si no quieres tener el ordenador encendido?": "And if you don't want to leave your computer on?",
    "La versión Cloud corre en nuestros servidores, 24 horas al día. Apagas el portátil, cierras la tapa, te vas de viaje — y tus señales se siguen ejecutando.":
      "The Cloud version runs on our servers, 24 hours a day. Shut the laptop, close the lid, go away — and your signals keep being copied.",
    "Sin instalar nada": "Nothing to install",
    "Entras desde el navegador, también desde el móvil. No hay programa que actualizar.":
      "You get in from your browser, and from your phone. There is no program to update.",
    "Nunca se apaga": "Never switches off",
    "Servidores en la Unión Europea, con copias de seguridad diarias y cifradas.":
      "Servers in the European Union, with daily encrypted backups.",
    "Tu cuenta sigue siendo tuya": "Your account stays yours",
    "Conectas tu bróker con un token que puedes revocar. Nunca vemos tu contraseña ni tocamos tu dinero.":
      "You connect your broker with a token you can revoke. We never see your password and we never touch your money.",
    "Operando": "Running",
    "Todo lo de la versión de escritorio": "Everything in the desktop version",
    "Panel web y desde el móvil": "Web panel and from your phone",
    "Estadísticas y calendario de resultados": "Statistics and a calendar of results",
    "Crear mi cuenta": "Create my account",
    "¿Por qué nos": "Why do people", "eligen": "choose us",
    "Estas son las razones reales por las que merece la pena, y cada una la puedes comprobar tú.":
      "These are the real reasons it's worth it, and you can check every one of them yourself.",
    "Cada operación, registrada": "Every trade, timestamped",
    "Guardamos la hora en que llegó cada señal y la hora en que tu broker la ejecutó. Lo puedes consultar en tu panel cuando quieras.":
      "We record the time each signal arrived and the time your broker executed it. You can check it in your panel whenever you want.",
    "Seguridad por diseño": "Security by design",
    "Tú mantienes el control total de tu capital. Nosotros nunca tocamos tu dinero ni tus claves de broker.":
      "You keep full control of your capital. We never touch your money or your broker credentials.",
    "Soporte real en español": "Real support, from a person",
    "Escribes y te contesta quien ha hecho la herramienta. En español.":
      "You write and the person who built the tool answers you.",
    "Precio honesto": "Honest pricing",
    "Desde 23 €/mes con 7 días gratis. Sin permanencia y sin letra pequeña.":
      "From €23/month with 7 days free. No lock-in and no small print.",
    "Parser probado en cinco idiomas": "Parser proven in five languages",
    "Lee símbolo, dirección, entrada, stop loss y varios take profits, escritos como los escribe cada canal. Si tu grupo usa un formato poco habitual, escríbenos y lo miramos.":
      "It reads symbol, direction, entry, stop loss and several take profits, written the way each channel writes them. If your group uses an unusual format, write to us and we'll look at it.",
    "Control desde el móvil": "Control it from your phone",
    "Gestiona tus señales, pausa y reanuda la operativa desde Telegram, estés donde estés.":
      "Manage your signals, pause and resume trading from Telegram, wherever you are.",
    "Configurado en": "Set up in", "3 minutos.": "3 minutes.",
    "Descarga el archivo .dmg y ábrelo": "Download the .dmg file and open it",
    "Arrastra SignalReplicator a tu carpeta de Aplicaciones": "Drag SignalReplicator into your Applications folder",
    "Si macOS muestra \"desarrollador no verificado\": clic derecho → Abrir → Confirmar":
      "If macOS says \"unidentified developer\": right click → Open → Confirm",
    "Sigue el asistente de instalación (3 pasos)": "Follow the installer (3 steps)",
    "La app se abre automáticamente al terminar ✓": "The app opens by itself when it finishes ✓",
    "Descarga el archivo .exe y ejecútalo": "Download the .exe file and run it",
    "Si aparece Windows SmartScreen: Más información → Ejecutar de todas formas":
      "If Windows SmartScreen appears: More info → Run anyway",
    "Preguntas frecuentes": "Frequently asked questions",
    "¿Necesito saber programar?": "Do I need to know how to code?",
    "Para nada. Está pensado para que cualquiera lo ponga en marcha en minutos, sin tocar una línea de código.":
      "Not at all. It's built so anyone can get it running in minutes without touching a line of code.",
    "¿Funciona con cualquier broker?": "Does it work with any broker?",
    "¿Qué pasa si el grupo manda señales en un formato raro?": "What if my group posts signals in an odd format?",
    "¿Tengo que dejar el ordenador encendido?": "Do I have to leave my computer on?",
    "¿Funciona en Mac y Windows?": "Does it work on Mac and Windows?",
    "¿Le doy mis claves del broker a alguien?": "Am I giving my broker credentials to anyone?",
    "¿Y mi cuenta de Telegram?": "What about my Telegram account?",
    "¿Necesito tarjeta para probar?": "Do I need a card to try it?",
    "¿Cuándo se me cobra?": "When am I charged?",
    "¿Qué pasa cuando terminan los 7 días?": "What happens when the 7 days end?",
    "¿Qué pasa si cancelo a mitad de mes?": "What if I cancel mid-month?",
    "¿Qué pasa si vuestro servidor se cae?": "What if your server goes down?",
    "¿Puedo pausarlo desde el móvil?": "Can I pause it from my phone?",
    "Tu próxima operación": "Your next trade", "ya está": "is already", "ejecutada.": "placed.",
    "7 días gratis. Cancela cuando quieras, sin permanencia.":
      "7 days free. Cancel whenever you want, no lock-in.",
    "Empezar ahora — gratis": "Start now — free",
    "Compatible con cualquier broker MT5 · Escritorio en Windows · Cloud desde el navegador":
      "Works with any MT5 broker · Desktop on Windows · Cloud from your browser",
    "Para canales": "For channels", "Soporte": "Support"
  };

  var IDIOMAS = { en: EN };
  var NOMBRES = { es: "ES", en: "EN" };

  function idiomaElegido() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && (q === "es" || IDIOMAS[q])) return q;
    try { var g = localStorage.getItem("sr_lang"); if (g && (g === "es" || IDIOMAS[g])) return g; } catch (e) {}
    return "es";
  }

  var actual = idiomaElegido();

  function aplicar(nodo) {
    var dic = IDIOMAS[actual] || null;
    var w = document.createTreeWalker(nodo, NodeFilter.SHOW_TEXT);
    var n, cambios = [];
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (!p || p.tagName === "SCRIPT" || p.tagName === "STYLE") continue;
      var t = n.nodeValue;
      var limpio = t.trim();
      if (!limpio) continue;
      // 1) corrección del español, siempre
      var v = Object.prototype.hasOwnProperty.call(CORRECCIONES, limpio) ? CORRECCIONES[limpio] : limpio;
      // 2) traducción, si toca
      if (dic && Object.prototype.hasOwnProperty.call(dic, v)) v = dic[v];
      if (v !== limpio) cambios.push([n, t.replace(limpio, v)]);
    }
    for (var i = 0; i < cambios.length; i++) cambios[i][0].nodeValue = cambios[i][1];
  }

  function pintar() {
    aplicar(document.body);
    document.documentElement.lang = actual;
    marcarBoton();
  }

  // El botón del idioma activo va en verde; el otro, apagado. Si no se marca,
  // el visitante no sabe en qué idioma está.
  function marcarBoton() {
    var bs = document.querySelectorAll("[onclick^='srCambiarIdioma']");
    for (var i = 0; i < bs.length; i++) {
      var suyo = (bs[i].getAttribute("onclick") || "").indexOf("'" + actual + "'") !== -1;
      bs[i].style.background = suyo ? "#7BE495" : "none";
      bs[i].style.color = suyo ? "#0D0F14" : "#a7b3ab";
    }
  }

  function cambiar(l) {
    actual = l;
    try { localStorage.setItem("sr_lang", l); } catch (e) {}
    location.reload();   // React repinta en español; recargar es lo limpio y lo barato
  }
  window.srCambiarIdioma = cambiar;

  // React monta después. Se aplica al cargar y en cada repintado, con un
  // pequeño retardo para no pelearse con el propio React mientras trabaja.
  var pendiente = null;
  function programar() { clearTimeout(pendiente); pendiente = setTimeout(pintar, 60); }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", programar);
  else programar();
  window.addEventListener("load", programar);
  new MutationObserver(programar).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
})();
