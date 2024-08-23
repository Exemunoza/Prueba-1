$(document).ready(function() { 
    // El código escrito acá se ejecutará luego de que se carguen los elementos de la página web 

    //$("selectorPorEtiqueta"); // Retornará un arreglo con todos los componentes con la etiqueta correspondiente 
    //$(".selectorPorClase"); // Retornará un arreglo con todos los componentes con la clase correspondiente 
    //$("#selectorPorId"); // Retornará el primer elemento encontrado con el id correspondiente

    /*var miTexto = $("#texto").text();  //Text(): establece o devuelve el contenido de texto de los elementos seleccionados
    alert(miTexto);

    $(document).ready(function () { 
        var miTexto = $("#contenido").html();  //Html(): Establece o devuelve el contenido de los elementos seleccionados, incluido el marcado HTML.
        alert(miTexto); })

        var miAtributo = $("#nombre").attr("type"); //Val(): Establece o devuelve el valor de los campos del formulario. No es aplicable en este ejemplo.
        alert(miAtributo);*/

 /* $("#caja1").mouseenter(function () { $("#caja2").show(); })
        $("#caja1").mouseout(function () { $("#caja2").hide(); }) 
*/

        $("#caja1").mouseenter(function () { $("#caja2").toggle(); })

        $("#boton").click(function () {   //se haga clic en el botón “enviar” se capturen los datos del formulario y se muestren con una alerta
            var nombre = $("#nombre").val(); 
            var correo = $("#correo").val(); 
        alert("su nombre es: " + nombre + " y su correo es: " + correo); })

    
});

window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Desktop Browser Market Share in 2016"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 51.08, label: "Chrome" },
                { y: 27.34, label: "Internet Explorer" },
                { y: 10.62, label: "Firefox" },
                { y: 12.2, label: "Microsoft Edge" },
                
            ]
        }]
    });
    chart.render();
    
    }
