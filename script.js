
function areaOfRect(length, width) {
    let area = length * width;
    return area;
}

// Area of rectangle
const rectForm = document.getElementById('rectangleSubmit');

rectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // get the elements involved
    const length = document.querySelector('#rect-length').value;
    const width = document.getElementById('rect-width').value;
    const areaOutput = document.querySelector('.rect-result');

    // calculate the area by calling the areaOfRect function
    let area = areaOfRect(length, width);

    // print the area to the user
    areaOutput.textContent = "The area of the rectangle is " + area;
    // areaOutput.innerHTML = `<h1>The area of the rectangle is ${area}</h1>`;
    
});


// Form Validation
const ageLimit = 18;
const ageInput = document.getElementById('age');

ageInput.addEventListener('input', function() {
    // const age = ageInput.value;
    const age = Number(ageInput.value);
    const form = document.querySelector('.show-form');
    const notEligible = document.querySelector('.not-eligible');
    

    if ((age == 0) || (age < 0) || (isNaN(age))) {
        form.classList.add('hide');
        notEligible.classList.add('hide');
    } else if (age >= ageLimit) {
        form.classList.remove('hide');
        notEligible.classList.add('hide');
    } else if (age < ageLimit) {
        form.classList.add('hide');
        notEligible.classList.remove('hide');
    } else { return }

});

