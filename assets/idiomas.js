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

  // ── Correcciones del español ──────────────────────────────────────────
  // VACÍO A PROPÓSITO. Hasta el 27 sep 2026 aquí había 18 frases que tapaban
  // cosas que el paquete de Base44 decía y no eran verdad (el precio viejo, la
  // cuenta de MetaApi a nombre del cliente, «sin tarjeta», nombres de brókers
  // que no podíamos nombrar). Todas están arregladas YA EN BASE44, así que
  // parchearlas aquí encima no hacía nada: de las 18, sólo una seguía casando
  // con el texto nuevo, y era idéntica a sí misma.
  //
  // Si vuelve a hacer falta tapar algo, éste es el sitio — pero lo bueno es
  // arreglarlo en Base44 y dejar esto vacío.
  var CORRECCIONES = {};

  var EN = {
    "Lo que": "What we",
    "no": "don't",
    "hacemos": "do",
    "La sesión aparece en tu Telegram con el nombre SignalReplicator, en Ajustes > Dispositivos. La ves ahí desde el primer día.": "The session shows up in your own Telegram under the name SignalReplicator, in Settings > Devices. You can see it there from day one.",
    "MetaTrader 4 y 5, con cualquier broker": "MetaTrader 4 and 5, with any broker",
    "Cómo copiar señales": "How to copy signals",
    "Comparativa de copiadores": "Copier comparison",
    "Para dueños de canal": "For channel owners",
    "Privacidad": "Privacy",
    "Reembolso": "Refunds",
    "© 2026 SignalReplicator · Sergio García Santos · El trading de CFDs conlleva riesgo de pérdida. Las señales son informativas y no constituyen asesoramiento financiero.": "© 2026 SignalReplicator · Sergio García Santos · CFD trading carries a risk of loss. Signals are informational and do not constitute financial advice.",
    "A nosotros no. Tus credenciales las escribes directamente en MetaApi, que es el servicio que se conecta a tu bróker, y no pasan por nuestros servidores en ningún momento. La cuenta de MetaApi la ponemos y la pagamos nosotros, así que tú no tienes que registrarte allí ni dar ninguna tarjeta. Y esas credenciales sirven para operar, no para sacar dinero: los brokers mantienen separada la contraseña de retirada.":
      "Not to us. You type your credentials straight into MetaApi, the service that connects to your broker, and they never pass through our servers at any point. The MetaApi account is ours and we pay for it, so you do not have to sign up there or give a card. And those credentials are for trading, not for withdrawing: brokers keep the withdrawal password separate.",
    "El parser reconoce los formatos habituales de los canales de señales: símbolo, dirección, entrada, stop loss y varios take profits, escritos de muchas maneras distintas y en cinco idiomas. Si un canal escribe de una forma muy poco convencional, escríbenos y lo miramos: añadir un formato nuevo es trabajo nuestro, no tuyo.":
      "The parser recognises the formats signal channels normally use: symbol, direction, entry, stop loss and several take profits, written in many different ways and in five languages. If a channel writes in a very unusual way, write to us and we will look at it: adding a new format is our job, not yours.",
    "Al suscribirte introduces tu tarjeta y empiezas 7 días gratis. No se te cobra nada durante esos 7 días. Si al terminar no has cancelado, se te cobran 35 € y a partir de ahí cada mes. Puedes cancelar cuando quieras desde tu cuenta, y sigues teniendo servicio hasta el final del periodo que ya pagaste.":
      "When you subscribe you enter your card and start 7 days free. Nothing is charged during those 7 days. If you have not cancelled by the end, you are charged €35 and then every month. You can cancel whenever you like from your account, and you keep the service until the end of the period you already paid for.",
    "Con el plan Cloud no. Funciona en nuestros servidores las 24 horas: puedes apagar el portátil, cerrar la tapa o irte de viaje, y las señales se siguen copiando. Con la versión de escritorio sí, porque el programa corre en tu equipo.":
      "Not on the Cloud plan. It runs on our servers 24 hours a day: you can shut the laptop, close the lid or go away on a trip, and the signals keep being copied. On the desktop version you do, because the program runs on your machine.",
    "Lee símbolo, dirección, entrada, stop loss y varios take profits, escritos como los escribe cada canal. Si tu grupo usa un formato poco habitual, escríbenos y lo miramos: añadir un formato nuevo es trabajo nuestro, no tuyo.":
      "It reads symbol, direction, entry, stop loss and several take profits, written the way each channel writes them. If your group uses an unusual format, write to us and we will look at it: adding a new format is our job, not yours.",
    "Puedes abrir una segunda cuenta de Telegram con otro número sólo para SignalReplicator: esa cuenta es la que lee los canales y tu cuenta personal no participa en nada. Telegram permite varias cuentas desde la misma app.":
      "You can open a second Telegram account with another number just for SignalReplicator: that account is the one that reads the channels, and your personal account takes no part in it. Telegram allows several accounts in the same app.",
    "Con el plan Cloud, sí: ejecuta tanto en MetaTrader 4 como en MetaTrader 5, con cualquier broker. La versión de escritorio es sólo MetaTrader 5. Si tu cuenta es de MT4, el plan que necesitas es el Cloud.":
      "On the Cloud plan, yes: it executes on both MetaTrader 4 and MetaTrader 5, with any broker. The desktop version is MetaTrader 5 only. If your account is MT4, the Cloud plan is the one you need.",
    "Se conecta como cuando inicias sesión en un móvil nuevo: tu número y el código que te llega. La sesión sólo lee los canales que tú elijas. Nunca enviamos, respondemos ni publicamos nada desde tu cuenta.":
      "It connects the same way as signing in on a new phone: your number and the code you receive. The session only reads the channels you choose. We never send, reply or post anything from your account.",
    "Sí. Introduces tu tarjeta al empezar, pero no se te cobra nada durante los 7 días. Si cancelas antes de que terminen, no pagas. Es lo que nos permite mantener la prueba completa y sin límites de uso.":
      "Yes. You enter your card at the start, but nothing is charged during the 7 days. If you cancel before they end, you pay nothing. It is what lets us keep the trial complete and without usage limits.",
    "Para leer tus canales hay que iniciar sesión en Telegram, igual que cuando entras desde un móvil nuevo: tu número y el código que te llega. Cuatro cosas que puedes comprobar tú mismo:":
      "To read your channels we have to sign in to Telegram, the same as when you sign in from a new phone: your number and the code you receive. Four things you can check yourself:",
    "SignalReplicator lee las señales de tu grupo y las ejecuta en MetaTrader 4 y 5. Sin intervención humana. La hora de cada señal y de cada ejecución queda registrada en tu panel.":
      "SignalReplicator reads the signals in your group and places them on MetaTrader 4 and 5. No human in the middle. The time of every signal and every execution is recorded in your panel.",
    "Sigues teniendo el servicio hasta el día en que acaba el periodo que ya habías pagado. No devolvemos la parte proporcional, y así está dicho en las condiciones antes de pagar.":
      "You keep the service until the day the period you already paid for ends. We do not refund the unused part, and that is stated in the terms before you pay.",
    "La versión de escritorio es para Windows. Si usas Mac, la opción que te interesa es el plan Cloud, que funciona desde el navegador en cualquier sistema operativo.":
      "The desktop version is for Windows. If you use a Mac, the one you want is the Cloud plan, which runs in the browser on any operating system.",
    "Están en la Unión Europea, con copias de seguridad diarias y cifradas. Si el servicio se interrumpe por causa nuestra, se compensa con días de servicio gratis.":
      "They are in the European Union, with daily encrypted backups. If the service goes down because of us, you are compensated with free days of service.",
    "Hay una página de estado pública en status.signalreplicator.com, abierta a cualquiera y sin necesidad de tener cuenta. Ahí se ve si el servicio está en marcha.":
      "There is a public status page at status.signalreplicator.com, open to anyone and with no account needed. It shows whether the service is running.",
    "La versión Cloud corre en nuestros servidores, 24 horas al día. Apagas el portátil, cierras la tapa, te vas de viaje — y tus señales se siguen ejecutando.":
      "The Cloud version runs on our servers, 24 hours a day. Shut the laptop, close the lid, go away — and your signals keep being copied.",
    "La versión de escritorio es sólo MetaTrader 5, porque el asesor experto está escrito en MQL5. Si tu cuenta es de MT4, el plan que necesitas es el Cloud.":
      "The desktop version is MetaTrader 5 only, because the expert advisor is written in MQL5. If your account is MT4, the Cloud plan is the one you need.",
    "El parser lee texto. Si un canal manda la señal en una captura o un sticker, no la vemos. Te avisamos para que la pongas en texto o la ejecutes tú.":
      "The parser reads text. If a channel posts the signal as a screenshot or a sticker, we do not see it. We warn you, so you can post it as text or take the trade yourself.",
    "Copiamos las señales tal como llegan. El resultado depende del grupo que elijas, de tu bróker y del mercado. Nadie puede prometerte rentabilidad.":
      "We copy the signals exactly as they arrive. The result depends on the group you choose, on your broker and on the market. Nobody can promise you a profit.",
    "© 2026 SignalReplicator · El trading de CFDs conlleva riesgo de pérdida. Las señales son informativas y no constituyen asesoramiento financiero.":
      "© 2026 SignalReplicator · CFD trading carries a risk of loss. Signals are informational and do not constitute financial advice.",
    "Es de sólo lectura por diseño: nunca enviamos, respondemos ni publicamos nada desde tu cuenta, ni entramos en chats que no hayas elegido.":
      "It is read-only by design: we never send, reply or post anything from your account, and we never enter chats you have not chosen.",
    "Guardamos la hora en que llegó cada señal y la hora en que tu broker la ejecutó. Lo puedes consultar en tu panel cuando quieras.":
      "We record the time each signal arrived and the time your broker executed it. You can check it in your panel whenever you want.",
    "La cierras tú cuando quieras, desde tu propio Telegram, sin avisarnos y sin pedirnos permiso. En ese momento dejamos de leer.":
      "You close it whenever you like, from your own Telegram, without telling us and without asking our permission. At that moment we stop reading.",
    "Corre en nuestros servidores, en la Unión Europea, las 24 horas. No necesitas instalar nada ni dejar el ordenador encendido.":
      "Runs on our servers in the European Union, 24 hours a day. Nothing to install and no need to leave your computer on.",
    "Te avisamos por Telegram cada vez que se abre o se cierra una operación, y si algo falla. Sin tener que entrar al panel.":
      "We message you on Telegram every time a trade opens or closes, and if anything fails. Without having to open the panel.",
    "Si no has cancelado, se cobra el primer mes y sigues con el servicio. Si cancelas antes de que terminen, no pagas nada.":
      "If you have not cancelled, the first month is charged and you carry on with the service. If you cancel before they end, you pay nothing.",
    "7 días gratis · cancela cuando quieras. Si prefieres tenerlo en tu equipo, más abajo tienes la versión de escritorio.":
      "7 days free · cancel whenever you like. If you would rather run it on your own machine, the desktop version is below.",
    "Antes de que pagues, esto es lo que no vas a obtener. Tan importante como lo que sí damos, y todo comprobable por ti.":
      "Before you pay, here is what you are not getting. Just as important as what we do give, and all of it you can check yourself.",
    "Si tienes verificación en dos pasos, esa clave va directa a Telegram y se descarta: no se guarda en ningún sitio.":
      "If you have two-step verification, that password goes straight to Telegram and is discarded: it is not stored anywhere.",
    "Vigilancia externa con avisos automáticos. El estado del servicio es público en status.signalreplicator.com.":
      "External monitoring with automatic alerts. Service status is public at status.signalreplicator.com.",
    "Sí. Cualquier broker que soporte MetaTrader: en el plan Cloud, MT4 o MT5; en la versión de escritorio, MT5.":
      "Yes. Any broker that supports MetaTrader: on the Cloud plan, MT4 or MT5; on the desktop version, MT5.",
    "Para nada. Está pensado para que cualquiera lo ponga en marcha en minutos, sin tocar una línea de código.":
      "Not at all. It's built so anyone can get it running in minutes without touching a line of code.",
    "Tu dinero se queda en tu bróker, bajo tu control. Nunca vemos tu contraseña y nunca tocamos tus fondos.":
      "Your money stays with your broker, under your control. We never see your password and we never touch your funds.",
    "Tú mantienes el control total de tu capital. Nosotros nunca tocamos tu dinero ni tus claves de broker.":
      "You keep full control of your capital. We never touch your money or your broker credentials.",
    "Ejecuta en MT4 y en MT5 con cualquier broker. La versión de escritorio es sólo MetaTrader 5.":
      "Executes on MT4 and MT5 with any broker. The desktop version is MetaTrader 5 only.",
    "Estas son las razones reales por las que merece la pena, y cada una se puede comprobar.":
      "These are the real reasons it is worth it, and every one of them can be checked.",
    "€23/mes con 7 días gratis. Sin permanencia, sin letra pequeña, cancelas cuando quieras.":
      "€23/month with 7 days free. No lock-in, no small print, cancel whenever you like.",
    "Compatible con cualquier broker MT5 · Escritorio en Windows · Cloud desde el navegador":
      "Works with any MT5 broker · Desktop on Windows · Cloud from your browser",
    "La versión de escritorio corre en tu ordenador con MetaTrader 5 abierto. Sólo Windows.":
      "The desktop version runs on your computer with MetaTrader 5 open. Windows only.",
    "Entras desde el navegador, también desde el móvil. No hay programa que actualizar.":
      "You get in from your browser, and from your phone. There is no program to update.",
    "Servidores en la Unión Europea, con copias de seguridad diarias y cifradas.":
      "Servers in the European Union, with daily encrypted backups.",
    "Si aparece Windows SmartScreen: Más información → Ejecutar de todas formas":
      "If Windows SmartScreen appears: More info → Run anyway",
    "La orden se abre con el lotaje que configuraste. Así de simple.":
      "The order opens with the lot size you set. That simple.",
    "Símbolo, dirección, entrada, SL y TP — extraídos sin errores.":
      "Symbol, direction, entry, SL and TP — extracted without errors.",
    "Todo se empaqueta en un archivo que tu MT5 lee al instante.":
      "It is all packed into a file your MT5 reads instantly.",
    "La señal aparece en tu grupo y la detectamos al instante.":
      "The signal appears in your group and we pick it up instantly.",
    "7 días gratis. Cancela cuando quieras, sin permanencia.":
      "7 days free. Cancel whenever you want, no lock-in.",
    "¿Qué pasa si el grupo manda señales en un formato raro?":
      "What if my group posts signals in an odd format?",
    "MetaApi incluido. No te registras en ningún sitio más.":
      "MetaApi included. You do not sign up anywhere else.",
    "Pago seguro · Cancela cuando quieras · Sin permanencia":
      "Secure payment · Cancel whenever you want · No lock-in",
    "Escribes y te contesta quien ha hecho la herramienta.":
      "You write, and the person who built the tool answers.",
    "¿Cómo sé si el servicio está funcionando ahora mismo?":
      "How do I know the service is running right now?",
    "Trading automatizado · Sin código · Sin esfuerzo":
      "Automated trading · No code · No effort",
    "¿Y si no quieres tener el ordenador encendido?":
      "And if you don't want to leave your computer on?",
    "La app se abre automáticamente al terminar ✓":
      "The app opens by itself when it finishes ✓",
    "Sigue el asistente de instalación (3 pasos)": "Follow the installer (3 steps)",
    "¿Por qué necesitáis mi número de Telegram?": "Why do you need my Telegram number?",
    "Tu analista publica. Nosotros escuchamos.": "Your analyst posts. We listen.",
    "¿Le doy mis claves del broker a alguien?": "Am I giving my broker credentials to anyone?",
    "¿Tengo que dejar el ordenador encendido?": "Do I have to leave my computer on?",
    "✓ 7 días gratis · cancela cuando quieras": "✓ 7 days free · cancel whenever you want",
    "Estadísticas y calendario de resultados": "Statistics and a calendar of results",
    "7 días gratis · cancela cuando quieras": "7 days free · cancel whenever you want",
    "Copias de seguridad diarias y cifradas": "Daily encrypted backups",
    "¿Prefieres no usar tu cuenta personal?":
      "Would you rather not use your personal account?",
    "¿Qué pasa cuando terminan los 7 días?": "What happens when the 7 days end?",
    "¿Qué pasa si vuestro servidor se cae?": "What if your server goes down?",
    "Descarga el archivo .exe y ejecútalo": "Download the .exe file and run it",
    "No leemos señales dentro de imágenes": "We do not read signals inside images",
    "¿Qué pasa si cancelo a mitad de mes?": "What if I cancel mid-month?",
    "Todo lo de la versión de escritorio": "Everything in the desktop version",
    "Funciona con el ordenador apagado": "Works with your computer switched off",
    "Panel web, también desde el móvil": "Web panel, also from your phone",
    "¿Prefieres tenerlo en tu equipo?": "Would you rather run it on your own machine?",
    "La orden está lista. Impecable.": "The order is ready. Flawless.",
    "Parser probado en cinco idiomas": "Parser proven in five languages",
    "¿Funciona con cualquier broker?": "Does it work with any broker?",
    "Ejecutado. Tú no tocaste nada.": "Executed. You did not touch a thing.",
    "¿Eres cliente? Deja tu opinión": "Are you a customer? Leave a review",
    "¿Necesito tarjeta para probar?": "Do I need a card to try it?",
    "Actualizaciones para siempre.": "Updates forever.",
    "El bot corre en tu ordenador.": "The bot runs on your computer.",
    "Probar el Cloud 7 días gratis": "Try the Cloud free for 7 days",
    "Tu cuenta sigue siendo tuya": "Your account stays yours",
    "¿Funciona con MetaTrader 4?": "Does it work with MetaTrader 4?",
    "✓ Orden lista para ejecutar": "✓ Order ready to execute",
    "324 miembros · 12 en línea": "324 members · 12 online",
    "Cada operación, registrada": "Every trade, timestamped",
    "Panel web y desde el móvil": "Web panel and from your phone",
    "idiomas en que lee señales": "languages it reads signals in",
    "¿Necesito saber programar?": "Do I need to know how to code?",
    "MT4 sólo en el plan Cloud": "MT4 on the Cloud plan only",
    "Panel de SignalReplicator": "SignalReplicator panel",
    "¿Y mi cuenta de Telegram?": "What about my Telegram account?",
    "1 dispositivo (Windows)": "1 device (Windows)",
    "SELL EURUSD · ejecutada": "SELL EURUSD · executed",
    "Varios canales a la vez": "Several channels at once",
    "BUY GBPJPY · ejecutada": "BUY GBPJPY · executed",
    "BUY XAUUSD · ejecutada": "BUY XAUUSD · executed",
    "Empezar ahora — gratis": "Start now — free",
    "Probar el Cloud gratis": "Try the Cloud free",
    "Avisos en tu Telegram": "Alerts in your Telegram",
    "Tu grupo de Telegram.": "Your Telegram group.",
    "Versión de escritorio": "Desktop version",
    "Cualquier broker MT5": "Any MT5 broker",
    "Parser · procesando…": "Parser · processing…",
    "Preguntas frecuentes": "Frequently asked questions",
    "Seguridad por diseño": "Security by design",
    "Tu próxima operación": "Your next trade",
    "¿Cuándo se me cobra?": "When am I charged?",
    "1 grupo de Telegram": "1 Telegram group",
    "Comprar de por vida": "Buy lifetime",
    "Fase 01 · Telegram": "Step 01 · Telegram",
    "Soporte en español": "Real support, from a person",
    "Sin instalar nada": "Nothing to install",
    "Soporte por email": "Email support",
    "¿Funciona en Mac?": "Does it work on a Mac?",
    "MetaTrader 4 y 5": "MetaTrader 4 and 5",
    "cualquier bróker": "any broker",
    "Crear mi cuenta": "Create my account",
    "Operaciones hoy": "Trades today",
    "Señal detectada": "Signal detected",
    "Compatible con": "Works with",
    "Configurado en": "Set up in",
    "Empezar gratis": "Start free",
    "Empieza por el": "Start with the",
    "Nunca se apaga": "Never switches off",
    "Precio honesto": "Honest pricing",
    "activo (Cloud)": "running (Cloud)",
    "Cómo funciona": "How it works",
    "¿Por qué nos": "Why do people",
    "Automático.": "Automatic.",
    "De por vida": "Lifetime",
    "Recomendado": "Recommended",
    "Take Profit": "Take Profit",
    "días gratis": "days free",
    "3 minutos.": "3 minutes.",
    "Tu broker.": "Your broker.",
    "automático": "automatic",
    "ejecutada.": "placed.",
    "Actividad": "Activity",
    "Conectado": "Connected",
    "Dirección": "Direction",
    "Stop Loss": "Stop Loss",
    "· un pago": "· one payment",
    "Operando": "Running",
    "Telegram": "Telegram",
    "Términos": "Terms",
    "Acceder": "Log in",
    "Entrada": "Entry",
    "Mensual": "Monthly",
    "Precios": "Pricing",
    "Soporte": "Support",
    "Símbolo": "Symbol",
    "ya está": "is already",
    "📈 Señal": "📈 Signal",
    "Broker": "Broker",
    "eligen": "choose us",
    "Cloud": "Cloud",
    "Nuevo": "New",
    "/mes": "/month",
    "FAQ": "FAQ",
    "Hoy": "Today",
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
      if (v !== limpio) cambios.push([n, t.replace(limpio, v), v === ""]);
    }
    for (var i = 0; i < cambios.length; i++) {
      var nd = cambios[i][0];
      nd.nodeValue = cambios[i][1];
      // Si la corrección deja el texto vacío (un nombre de bróker que se quita),
      // se esconde también su elemento y el separador «·» que lo acompañaba:
      // si no, quedan puntos sueltos en fila sin nada entre ellos.
      if (cambios[i][2] && nd.parentElement) {
        var el = nd.parentElement;
        el.style.display = "none";
        var sig = el.nextElementSibling;
        if (sig && (sig.textContent || "").trim() === "\u00b7") sig.style.display = "none";
        var ant = el.previousElementSibling;
        if (ant && (ant.textContent || "").trim() === "\u00b7") ant.style.display = "none";
      }
    }
  }

  // Las etiquetas del pie se traducen, así que los enlaces tienen que llevar a
  // la página inglesa: si no, «Privacy» abre una página en español. Sólo las que
  // TIENEN gemela en inglés — «Cuál elegir» se queda sin traducir a propósito,
  // porque esa guía sólo existe en español.
  var ENLACES = {
    "/copiar-senales-telegram-metatrader.html": "/how-to-copy-telegram-signals-to-metatrader.html",
    "/comparativa.html": "/comparison.html",
    "/afiliados.html": "/partners.html",
    "/terminos.html": "/terms.html",
    "/privacidad.html": "/privacy.html",
    "/reembolso.html": "/refunds.html",
    "/descargas.html": "/downloads.html"
  };

  function enlazarIngles() {
    if (actual !== "en") return;
    var as = document.querySelectorAll("a[href]");
    for (var i = 0; i < as.length; i++) {
      var h = as[i].getAttribute("href");
      if (Object.prototype.hasOwnProperty.call(ENLACES, h)) as[i].setAttribute("href", ENLACES[h]);
    }
  }

  function pintar() {
    aplicar(document.body);
    enlazarIngles();
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
