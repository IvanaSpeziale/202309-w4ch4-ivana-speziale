Week 4 - Challenge 3
Teléfono React
Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
No se puede introducir un número de más de 9 cifras.
El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.
Separa todo en los siguientes componentes:

Info
Display
Actions
Action
Keyboard
Key
Entrega también un listado de responsabilidades en el README

¿Qué renderiza?
Info: muestra el mensaje
Display: muestra el numero telefonico
Actions: controlalos botones de llamar y cancelar llamada.
Action:
Keyboard:tiene los botones numericos.
Key:

¿Qúe interacciones del usuario tiene?
Info:muestra mensaje cuando el usuario hace clic en botón "Llamar" y termina de forma automática la llamada después de 5 segundos sin respuesta.
Display: muestra el número de teléfono al usuario.
Actions:Llamar cuando el número cumple con 9 cifras, y cortar llamada con boton.
Action:
Keyboard:permite al usuario ingresar y borrar números de teléfono.
Key:

¿Qué información recibe y desde donde?
