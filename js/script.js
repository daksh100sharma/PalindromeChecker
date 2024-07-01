document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();

        let containerInput = document.getElementById('containerInput').value;
        let resultTab = document.getElementById('resultTab');
        console.log(containerInput);
        let reversed = "";

        for(let i of containerInput) {
            reversed = i + reversed;
        }
        
        if (containerInput == reversed) {
            alert("It's a Palindrome word.");
        } else {
            alert("It's not a Palindrome word.");
        }
    })
})