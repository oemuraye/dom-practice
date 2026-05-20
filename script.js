
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