/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.onsubmit = checkForm;

    
    function checkForm() {
        event.preventDefault();
        var email = document.querySelector('#email');
        let messageSec = document.getElementsByClassName("message");

        if (email.value==' ' || email.value  =='' || email.value == null){
            messageSec[0].textContent = "Please enter a valid email address";
            //alert("Hello world!");
        }
        else{
            messageSec[0].textContent = "Thank you! Your email address " + email.value + " has been added to our mailing list!";
            
        }
    }
});