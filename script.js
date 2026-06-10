
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

// gimme an example of foreach and for loop
const numbers = [1, 2, 3, 4, 5];

// using for loop
for (let i = 0; i < numbers.length; i++) {
    // console.log("For loop: " + numbers[i]);
}

// use while loop too
let j = 0;
while (j < numbers.length) {
    // console.log("While loop: " + numbers[j]);
    j++;
}

// using foreach
numbers.forEach(function(number) {
    // console.log("For each: " + number);
});

// can map be used too
const squaredNumbers = numbers.map(function(number) {
    return number * number;
});

// console.log("Squared numbers: " + squaredNumbers);

// examples of js methods to loop objects
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
// using for in loop
for (let key in person) {
    // console.log(key + ": " + person[key]);
}

// using Object.keys
Object.keys(person).forEach(function(key) {
    // console.log(key + ": " + person[key]);
});
// what does oject.keys return
// Object.keys returns an array of the keys of the object. In this case, it would return ["name", "age", "city"].


// using Object.values
Object.values(person).forEach(function(value) {
    // console.log(value);
});

// can you use Object.entries
Object.entries(person).forEach(function([key, value]) {
    // console.log(key + ": " + value);
});


// can you use foreach on an object
// no, foreach is for arrays, but you can convert the object to an array using Object.entries or Object.keys or Object.values and then use foreach on that array.
// how about map on an object
// no, map is also for arrays, but you can convert the object to an array using Object.entries or Object.keys or Object.values and then use map on that array.

// i need a simple image slider using js
const images = [
    "./images/image1.jpg",
    "./images/image2.jpg",
    "./images/image3.jpg"
];

// console.log(images[0]);


let currentImageIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
function showImage(index) {
    sliderImage.src = images[index];
}
prevButton.addEventListener('click', function() {
    // currentImageIndex = currentImageIndex - 1;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    // what does the above line do
    // the above line updates the currentImageIndex to the previous index in the images array. It uses the modulo operator to wrap around to the end of the array if the index goes below 0.
    showImage(currentImageIndex);
});
nextButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});
// show the first image initially
showImage(currentImageIndex);

// make it loop automatically every 3 seconds
setInterval(function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}, 5000);

// fetch sample function
async function fetchSample() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerHTML = "<h4>Users:</h4><ul>" + data.map(user => `<li>${user.name} (${user.email})</li>`).join('') + "</ul>";
}
fetchSample();

async function fetchPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
    console.log(post);
}
// fetchPost(1);

const createUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value
            })
        });
        const newUser = await response.json();
        console.log(newUser);
        
    } catch (error) {
        console.error('Error creating user:', error);
    }
};
createUser();




// async function fetchSample() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching sample data:', error);
//     }
// }