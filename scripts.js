/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');    
    var email = document.querySelector('#email');
    let messageSec = document.getElementsByClassName("message");
    
    form.onsubmit = myFunction();

    function myFunction(){
    }

    form.addEventListener('submit', function(evt){
        evt.preventDefault();

        if (email.value == "" || email.value == null) {
            messageSec[0].textContent = "Please enter a valid email address";
            
            
        }        
        else {
            email.setCustomValidity('');
            if ( (email.value.includes("@")==true) && (email.value.includes(".")==true )) {
                messageSec[0].textContent = "Thank you! Your email address " + email.value + " has been added to our mailing list!";
            }
            else{
                email.setCustomValidity('');
                messageSec[0].textContent = "Please enter a valid email address";
            }
        }

    })
});