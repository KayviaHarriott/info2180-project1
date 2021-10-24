/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var email = document.querySelector('#email');
    email.focus();

    form.onsubmit = checkForm;

    function checkForm() {
        //alert(email.value);
        alert("Hello world!");
        event.preventDefault();
    }
});