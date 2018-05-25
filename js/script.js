//Começo Java Script
$(document).ready(function(){
    // DEBUGAR //console.log('Funcionou!')
    $('#txtNome').blur(function(){
     alert($(this).val());
    });
});