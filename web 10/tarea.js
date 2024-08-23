$(document).ready(function() { 
        $("#text1").click(function () { $("#text2").show(); })
        $("#text1").mouseout(function () { $("#text2").hide(); }) 

        $("#img").click(function () { $(this).css("width","100%") ; }) 
        $("#img").mouseout(function () { $(this).css("width","20%") ; })
       
        $("#caja3").dblclick(function () { $(this).css("fontSize","30px") ; }) 
        $("#caja3").click(function () { $(this).css("fontSize","12px") ; }) 
    
});


// Ayuda?