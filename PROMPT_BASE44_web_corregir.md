# Prompt para Base44 — corregir la web pública

Copiar y pegar tal cual. Es la web `signalreplicator.com`, no el panel.
Actualizado el 1 sep 2026: precios reales, MT4, socios, descargas y página de estado.

---

Hay que corregir información falsa o desactualizada de la web pública signalreplicator.com
(no el panel), y cambiar el peso que se le da a cada producto. Van por orden de gravedad.

## 1. Quitar lo que es directamente falso

a) En las preguntas frecuentes, la pregunta "¿Qué pasa si el grupo manda señales en un
formato raro?" responde: "El parser es inteligente y detecta señales en formato libre. En
el plan Pro usamos IA para parsear cualquier formato, en cualquier idioma."

No existe ningún "plan Pro". Los planes son Mensual, Anual y De por vida. Y la lectura por
IA está desactivada en producción. Sustituir la respuesta por:

  "El parser reconoce los formatos habituales de los canales de señales: símbolo,
  dirección, entrada, stop loss y varios take profits, escritos de muchas maneras
  distintas y en cinco idiomas. Si un canal escribe de una forma muy poco convencional,
  escríbenos y lo miramos: añadir un formato nuevo es trabajo nuestro, no tuyo."

b) Revisar la pregunta "¿Funciona en Mac y Windows?", que dice que el EA de MT5 funciona en
Mac vía Wine "ya incluido en la instalación". Confirmar que eso es cierto para un cliente
en su Mac antes de dejarlo escrito. Si no está verificado, decir que la versión de
escritorio es para Windows y que en Mac la opción es el plan Cloud.

c) Ninguna cifra de latencia. Nada de milisegundos, "sub-20ms", "18ms" ni contadores
animados con tiempos. No son demostrables y dependen de Telegram, del proveedor de
ejecución y del bróker. Si hace falta hablar de velocidad, lo único que se puede afirmar
es: "cada operación guarda la hora a la que llegó la señal y la hora a la que el bróker la
ejecutó, y las puedes consultar".

d) Ningún beneficio inventado en las maquetas. Nada de "+$23.40" ni de cifras de ganancia.
Las maquetas enseñan ESTADO de conexión (Telegram conectado, bróker conectado, operación
ejecutada), nunca dinero ganado.

## 2. El Cloud pasa a ser el producto principal

Ahora mismo toda la web habla de la versión de escritorio: el instalador, Windows y Mac,
Wine, "el bot corre en tu ordenador". El Cloud aparece como un añadido al final. Es al
revés: el Cloud es el producto que queremos vender.

- El titular y la sección de precios deben presentar primero el Cloud y después la versión
  de escritorio como alternativa para quien prefiera tenerlo en su propio equipo.
- Las 6 preguntas frecuentes actuales hablan sólo del escritorio. Añadir las del Cloud
  (abajo van escritas).
- El botón principal de la página debe llevar a suscribirse al Cloud, no a descargar.

Los dos productos, con sus datos correctos. ESTOS PRECIOS SON LOS BUENOS, no cambiarlos:

                     | Cloud (principal)            | Escritorio
  Precio             | 30 €/mes                     | desde 23 €/mes, o 299 € un solo
                     |                              | pago de por vida
  Plataformas        | MetaTrader 4 y MetaTrader 5  | MetaTrader 5 únicamente
  Prueba             | 7 días gratis, con tarjeta   | 7 días gratis
  Dónde corre        | En nuestros servidores, 24 h | En el ordenador del cliente
  Requisitos         | Un navegador + cuenta propia | Windows + MetaTrader 5 abierto
                     | de MetaApi (unos 10 $/mes ≈ 8 €,   |
                     | la paga él)                  |
  Ordenador encendido| No hace falta                | Sí

Que quede claro que en el Cloud el cliente paga aparte su cuenta de MetaApi. No esconderlo:
si aparece en la factura y no estaba dicho, es una reclamación. MetaApi cobra en DÓLARES:
unos 10 $ al mes, que son unos 8 €. Tiene que decirse así en TODAS las páginas donde aparezca (inicio, en.html,
partners.html, afiliados.html). Ahora mismo en algún sitio pone 9 $ y hay que unificarlo.

MetaTrader 4: el Cloud ejecuta en MT4 y en MT5. La versión de escritorio es sólo MT5,
porque el asesor experto está escrito en MQL5. Esto es un argumento de venta del Cloud, no
un detalle escondido: donde se comparen los dos productos tiene que verse. Y en las páginas
para dueños de canal (partners.html y afiliados.html) la frase correcta es "MT4 sólo en el
plan Cloud; la app de escritorio es sólo MetaTrader 5", nunca "hoy solo MetaTrader 5".

## 3. Explicar cómo se paga y cuándo se cobra

Hoy la web no lo dice en ninguna parte, y es la duda número uno de cualquiera que se
plantee entrar. Añadir una sección corta, y también como preguntas frecuentes:

  ¿Cuándo se me cobra?
  Al suscribirte introduces tu tarjeta y empiezas 7 días gratis. No se te cobra nada
  durante esos 7 días. Si al terminar no has cancelado, se te cobran 30 € y a partir de ahí
  cada mes. Puedes cancelar cuando quieras desde tu cuenta, y sigues teniendo servicio
  hasta el final del periodo que ya pagaste.

  ¿Necesito tarjeta para la prueba?
  Sí. Es lo que nos permite mantener la prueba en 7 días completos y sin límites de uso. No
  se te cobra nada hasta que terminan.

  ¿Qué pasa si cancelo a mitad de mes?
  Sigues teniendo el servicio hasta el día en que acaba el periodo que ya habías pagado. No
  devolvemos la parte proporcional, y así está dicho en las condiciones antes de pagar.

AVISO IMPORTANTE SOBRE ESTE APARTADO: el cobro se hace a través de Whop. Antes de publicar
estas tres respuestas hay que comprobar en Whop que el flujo real es exactamente ése —
prueba de 7 días, tarjeta por adelantado, sin devolución proporcional. Si Whop hace otra
cosa, se escribe lo que hace Whop. Prometer un cobro que no es el real es una reclamación
directa y un problema con el procesador de pagos.

## 4. Preguntas frecuentes nuevas, sobre el Cloud

  ¿Tengo que dejar el ordenador encendido?
  Con el plan Cloud no. Funciona en nuestros servidores las 24 horas: puedes apagar el
  portátil, cerrar la tapa o irte de viaje, y las señales se siguen copiando. Con la
  versión de escritorio sí, porque el programa corre en tu equipo.

  ¿Funciona con MetaTrader 4?
  Con el plan Cloud, sí: ejecuta tanto en MetaTrader 4 como en MetaTrader 5, con cualquier
  bróker. La versión de escritorio es sólo MetaTrader 5. Si tu cuenta es de MT4, el plan
  que necesitas es el Cloud.

  ¿Le doy mis claves del bróker a alguien?
  No. Tú contratas tu propia cuenta en MetaApi, metes ahí las credenciales de tu bróker —
  nosotros no las vemos en ningún momento — y nos das un permiso de acceso que puedes
  revocar cuando quieras. Además, ese permiso sirve para operar, no para sacar dinero: los
  brókers mantienen separada la contraseña de retirada.

  ¿Y mi cuenta de Telegram?
  Se conecta como cuando inicias sesión en un móvil nuevo: tu número y el código que te
  llega. La sesión sólo lee los canales que tú elijas. Nunca enviamos, respondemos ni
  publicamos nada desde tu cuenta.

  ¿Qué pasa si vuestro servidor se cae?
  Están en la Unión Europea, con copias de seguridad diarias y cifradas. Si el servicio se
  interrumpe por causa nuestra, se compensa con días de servicio gratis.

  ¿Cómo sé si el servicio está funcionando ahora mismo?
  Hay una página de estado pública en status.signalreplicator.com, abierta a cualquiera y
  sin necesidad de tener cuenta. Ahí se ve si el servicio está en marcha.

Sobre la vigilancia: ANTES estaba prohibido escribir "monitorización 24/7" porque no había
vigilante externo. Ya lo hay, así que ahora SÍ se puede decir, y hay que enlazar la página
de estado status.signalreplicator.com desde el pie de todas las páginas. Lo que se puede
afirmar es que hay vigilancia externa continua con avisos automáticos. Sigue prohibido
prometer un porcentaje de disponibilidad concreto (nada de "99,9%").

## 5. Páginas para dueños de canal — NO TOCAR SU CONTENIDO

Existen partners.html (inglés) y afiliados.html (español). Son las páginas que se están
enviando ahora mismo a dueños de canales de señales, y su texto está revisado y aprobado.
Base44 puede rediseñarlas para que encajen con el resto de la web, pero NO puede cambiar:

- La comisión: 25% mínimo por miembro, mientras el miembro siga. Nunca poner una cantidad
  fija en euros por miembro. Si se menciona lo que se paga hoy, es el 30%, y hay que dejar
  claro que el 25% es el suelo.
- La lista de "lo que deberías saber antes": que MetaApi se paga aparte, que MT4 sólo va en
  Cloud, que no leemos señales dentro de imágenes, y que no garantizamos beneficio a nadie.
- Que el dueño del canal no paga nada y no hay exclusividad.

Estas dos páginas tienen que quedar enlazadas desde el pie de inicio y de en.html.

## 6. Páginas de descarga — TIENEN QUE SEGUIR EXISTIENDO

Existen descargas.html y downloads.html. Aunque el botón principal de la web pase a ser
"suscribirse" y no "descargar", estas dos páginas NO se pueden eliminar ni dejar sin enlace.
El cliente que paga recibe la licencia por Whop, no el archivo: si no encuentra la página
de descarga, no puede usar lo que ha comprado. Ya se perdieron una vez en un rediseño
anterior y hubo que rehacerlas.

Deben quedar enlazadas desde el pie de todas las páginas, en su idioma correspondiente.

## 7. Cosas técnicas de la página

- SEO: Google sólo ve 268 caracteres de texto de esta web. Todo el contenido vive dentro
  del JavaScript, y los rastreadores de redes sociales (WhatsApp, Telegram, X) no ejecutan
  JavaScript en absoluto: sólo leen las metaetiquetas. Hay que servir el texto principal en
  el HTML, con renderizado en servidor o generación estática.
- Las fuentes se cargan desde el CDN de Google (fonts.googleapis.com). Eso manda la IP de
  cada visitante a un tercero y en la Unión Europea ha habido multas por ello. Autoalojar
  las fuentes: el panel ya lo hace y se puede copiar de ahí.
- En el pie falta el NIF y el domicilio. La LSSI los exige a quien vende por internet. El
  nombre ya está.

## Reglas

- Verde de marca #10B981. Sin emojis.
- Ninguna promesa de rentabilidad, ni ejemplos de ganancias, ni cifras de latencia, ni
  porcentajes de disponibilidad.
- Todo lo que se afirme tiene que poder comprobarlo un cliente.
- No inventar precios: los únicos válidos son Cloud 30 €/mes, Escritorio desde 23 €/mes o
  299 € de por vida, y MetaApi unos 10 $/mes (≈8 €) aparte.
