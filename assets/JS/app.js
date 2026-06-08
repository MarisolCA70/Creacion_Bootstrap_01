document.addEventListener("DOMContentLoaded", function() {
    const botonArriba = document.getElementById("btn-ir-arriba");
    if (!botonArriba) return;

    const toggleBoton = function() {
        if (window.scrollY > 150) {
            botonArriba.classList.add("visible");
        } else {
            botonArriba.classList.remove("visible");
        }
    };

    window.addEventListener("scroll", toggleBoton);
    toggleBoton();

    botonArriba.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});
$(document).ready(function() {

            // ================================================================
            // 1. VINCULACIÓN BÁSICA
            // ================================================================
            
            // a) Método reducido (Atajo directo)
            $('#btn-reducido').click(function() {
                console.log("Clic mediante método .click()");
            });

            // b) Método estándar .on() (Recomendado para proyectos reales)
            $('#btn-on').on('click', function() {
                console.log("Clic mediante método .on('click')");
            });

            // ================================================================
            // 2. VINCULAR CON INFORMACIÓN ASOCIADA
            // ================================================================
            // Pasamos un objeto con datos como segundo argumento. 
            // jQuery lo recibe dentro de 'event.data'.
            $('#btn-datos').on('click', { usuario: "Profesor", curso: "JavaScript" }, function(event) {
                console.log("Datos recibidos -> Usuario: " + event.data.usuario + " | Curso: " + event.data.curso);
            });

            // ================================================================
            // 3. EJECUTAR UNA SOLA VEZ (.one)
            // ================================================================
            // Al hacer el primer clic, ejecuta el código y automáticamente 
            // destruye el escuchador del evento.
            $('#btn-una-vez').one('click', function() {
            console.log("¡Se ejecutó! Si vuelves a hacer clic, no pasará nada.");
                alert("Este mensaje no volverá a aparecer aunque hagas clic de nuevo.");
            });

            // ================================================================
            // 4. DESVINCULAR EVENTOS (.off)
            // ================================================================
            
            // Primero, activamos el evento clic en el recuadro gris
            $('#zona-clic').on('click', function() {
                alert("¡Hiciste clic en la zona gris!");
            });

            // Al presionar el botón de abajo, apagamos el evento del recuadro usando .off()
            $('#btn-apagar').on('click', function() {
                $('#zona-clic').off('click'); // Remueve el escuchador por completo
                console.log("El evento del recuadro gris ha sido removido.");
                alert("El recuadro gris ha sido desactivado. Ya no enviará alertas.");
            });
            $(function(){
                $("#contacto-form").validate({
                    rules: {
                        nombre: {
                            required: true
                        },
                        password: {
                            required: true,
                            minlength: 6
                        }
                    }
                });
            })

        });
