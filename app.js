const form = document.querySelector('.right-column form');
const inputs = document.querySelectorAll('.right-column form input');

form.addEventListener('submit', (e) => {
    inputs.forEach(input => {
        // console.log(input.value);
        //whenever thers is no value in any of the inputs
        if (!input.value) {
            //Add a class error
            input.parentElement.classList.add('error');
        } else {
            //if not remove class error
            input.parentElement.classList.remove('error');
        }
    })


    e.preventDefault();
})