# Prompt para Base44 — corregir la web pública

Copiar y pegar tal cual. Es la web `signalreplicator.com`, no el panel.

---

Hay que corregir información falsa o desactualizada de la web, y cambiar el peso que se le
da a cada producto. Van por orden de gravedad.

## 1. Quitar lo que es directamente falso

**a) En las preguntas frecuentes, la pregunta "¿Qué pasa si el grupo manda señales en un
formato raro?" responde:**

> "El parser es inteligente y detecta señales en formato libre. **En el plan Pro usamos IA
> para parsear cualquier formato, en cualquier idioma.**"

**No existe ningún "plan Pro".** Los planes son Mensual, Anual y De por vida. Y la lectura
por IA está desactivada en producción. Sustituir la respuesta por:

> "El parser reconoce los formatos habituales de los canales de señales: símbolo,
> dirección, entrada, stop loss y varios take profits, escritos de muchas maneras
> distintas y en cinco idiomas. Si un canal escribe de una forma muy poco convencional,
> escríbenos y lo miramos: añadir un formato nuevo es trabajo nuestro, no tuyo."

**b) Revisar la pregunta "¿Funciona en Mac y Windows?"**, que dice que el EA de MT5
funciona en Mac vía Wine "ya incluido en la instalación". Confirmar que eso es cierto para
un cliente en su Mac antes de dejarlo escrito. Si no está verificado, decir que la versión
de escritorio es para Windows y que en Mac la opción es el plan Cloud.

**c) Ninguna cifra de latencia.** Nada de milisegundos, "sub-20ms", "18ms" ni contadores
animados con tiempos. No son demostrables y dependen de Telegram, del proveedor de
ejecución y del bróker. Si hace falta hablar de velocidad, lo único que se puede afirmar
es: *"cada operación guarda la hora a la que llegó la señal y la hora a la que el bróker la
ejecutó, y las puedes consultar"*.

**d) Ningún beneficio inventado en las maquetas.** Nada de "+$23.40" ni de cifras de
ganancia. Las maquetas enseñan ESTADO de conexión (Telegram conectado, bróker conectado,
operación ejecutada), nunca dinero ganado.

## 2. El Cloud pasa a ser el producto principal

Ahora mismo toda la web habla de la versión de escritorio: el instalador, Windows y Mac,
Wine, "el bot corre en tu ordenador". El Cloud aparece como un añadido al final. Es al
revés: **el Cloud es el producto que queremos vender.**

- El titular y la sección de precios deben presentar **primero el Cloud** y después la
  versión de escritorio como alternativa para quien prefiera tenerlo en su propio equipo.
- Las 6 preguntas frecuentes actuales hablan **sólo del escritorio**. Añadir las del Cloud
  (abajo van escritas).
- El botón principal de la página debe llevar a suscribirse al Cloud, no a descargar.

**Los dos productos, con sus datos correctos:**

| | **Cloud** (principal) | Escritorio |
|---|---|---|
| Precio | **25 €/mes** | 19 €/mes · 144 €/año · 249 € pago único |
| Prueba | 7 días gratis, con tarjeta | 7 días gratis |
| Dónde corre | En nuestros servidores, 24 h | En el ordenador del cliente |
| Requisitos | Un navegador + cuenta propia de MetaApi (unos 9 $/mes, la paga él) | Windows + MetaTrader 5 abierto |
| Ordenador encendido | **No hace falta** | Sí |

Que quede claro que en el Cloud el cliente paga **aparte** su cuenta de MetaApi. No
esconderlo: si aparece en la factura y no estaba dicho, es una reclamación.

## 3. Explicar cómo se paga y cuándo se cobra

Hoy la web no lo dice en ninguna parte, y es la duda número uno de cualquiera que se
plantee entrar. Añadir una sección corta, y también como preguntas frecuentes:

> **¿Cuándo se me cobra?**
> Al suscribirte introduces tu tarjeta y empiezas 7 días gratis. No se te cobra nada
> durante esos 7 días. Si al terminar no has cancelado, se te cobran 25 € y a partir de ahí
> cada mes. Puedes cancelar cuando quieras desde tu cuenta, y sigues teniendo servicio
> hasta el final del periodo que ya pagaste.

> **¿Necesito tarjeta para la prueba?**
> Sí. Es lo que nos permite mantener la prueba en 7 días completos y sin límites de uso.
> No se te cobra nada hasta que terminan.

> **¿Qué pasa si cancelo a mitad de mes?**
> Sigues teniendo el servicio hasta el día en que acaba el periodo que ya habías pagado.
> No devolvemos la parte proporcional, y así está dicho en las condiciones antes de pagar.

## 4. Preguntas frecuentes nuevas, sobre el Cloud

> **¿Tengo que dejar el ordenador encendido?**
> Con el plan Cloud no. Funciona en nuestros servidores las 24 horas: puedes apagar el
> portátil, cerrar la tapa o irte de viaje, y las señales se siguen copiando. Con la
> versión de escritorio sí, porque el programa corre en tu equipo.

> **¿Le doy mis claves del bróker a alguien?**
> No. Tú contratas tu propia cuenta en MetaApi, metes ahí las credenciales de tu bróker —
> nosotros no las vemos en ningún momento — y nos das un permiso de acceso que puedes
> revocar cuando quieras. Además, ese permiso sirve para operar, no para sacar dinero: los
> brókers mantienen separada la contraseña de retirada.

> **¿Y mi cuenta de Telegram?**
> Se conecta como cuando inicias sesión en un móvil nuevo: tu número y el código que te
> llega. La sesión sólo lee los canales que tú elijas. Nunca enviamos, respondemos ni
> publicamos nada desde tu cuenta.

> **¿Qué pasa si vuestro servidor se cae?**
> Están en la Unión Europea, con copias de seguridad diarias y cifradas. Si el servicio se
> interrumpe por causa nuestra, se compensa con días de servicio gratis.

*(No escribir "vigilancia continua" ni "monitorización 24/7" hasta que esté montado un
vigilante externo de verdad.)*

## 5. Cosas técnicas de la página

- **SEO: Google sólo ve 268 caracteres de texto** de esta web. Todo el contenido vive
  dentro del JavaScript, y los rastreadores de redes sociales (WhatsApp, Telegram, X) no
  ejecutan JavaScript en absoluto: sólo leen las metaetiquetas. Hay que servir el texto
  principal en el HTML, con renderizado en servidor o generación estática.
- **Las fuentes se cargan desde el CDN de Google** (`fonts.googleapis.com`). Eso manda la
  IP de cada visitante a un tercero y en la Unión Europea ha habido multas por ello.
  Autoalojar las fuentes: el panel ya lo hace y se puede copiar de ahí.
- **En el pie falta el NIF y el domicilio.** La LSSI los exige a quien vende por internet.
  El nombre ya está.

## Reglas

- Verde de marca `#10B981`. Sin emojis.
- **Ninguna promesa de rentabilidad, ni ejemplos de ganancias, ni cifras de latencia.**
- Todo lo que se afirme tiene que poder comprobarlo un cliente.
