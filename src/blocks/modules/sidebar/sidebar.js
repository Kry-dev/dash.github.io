import $ from "jquery";

$(document).ready(function(){
    $("#sidebar .nav-link").on("click", function (){
        $("#sidebar .nav-item").removeClass("active");
        $(this).parent().toggleClass("active");
    });
    $(".js-edit").on("click", function(){
        $(this).find(".fa-pencil-square-o").toggleClass("fa-check-square-o text-success");
        
        let form = $(this).parent().find("form");
        form.toggleClass("is-readonly is-editing");
        
        let isReadonly = form.hasClass("is-readonly");
        form.find("input,textarea").prop("disabled", isReadonly);
    });
});
