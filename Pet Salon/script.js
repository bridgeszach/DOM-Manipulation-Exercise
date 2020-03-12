// Object Literal

const salon = {
    name: "The Fashion Pet",
    phone: "704-555-5555",
    address: {
        street: "N Main St.",
        number: "123"
    },
    workingHours: {
        days: "Mon-Fri",
        open: "9:00 A.M.",
        close: "6:00 P.M."
    },
    pets: []
}

console.log(salon);

let {
    name,
    phone,
    address: {
        street,
        number
    },
    workingHours: {
        days,
        open,
        close
    }
} = salon;

document.querySelector('.info').innerHTML = `Contact Us ${phone}, ${number} ${street} <br> Open from ${open} to ${close}`

//object constructor
var c = 0;
class Pet {
    constructor(name, age, gender, breed, service, ownerName, ownerPhone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.ownerPhone = ownerPhone;
        this.hunger = 10;
        this.happiness = 5;
        this.id = 'Pet' + c;
        c += 1;
    }
    ownerInfo = function () {
        console.log("Owner Name: " + this.ownerName + "\n" + "Contact Phone:" + this.ownerPhone);
    }

    feed = function () {
        this.hunger -= 5;
        this.happiness += 5;
        console.log("Feeding...");
    }

    status = function () {
        console.log("Hunger: " + this.hunger + "\n" + "Happiness: " + this.happiness);
    }
}

const pet1 = new Pet("Shaggy", 2, "male", "boxer", "Shower", "Zach", "7045555555");
const pet2 = new Pet("Scrappy", 4, "male", "Great Dane", "Hair-Cut", "Rocky", "5551231232");
const pet3 = new Pet("Ozzy", 6, "Male", "Mixed", "Shower", "Omar", "1234567890");
pet1.ownerInfo();
pet2.ownerInfo();

pet1.status();
pet1.feed();
pet1.status();

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

var textName = document.getElementById('txtName');
var textAge = document.getElementById('txtAge');
var textGender = document.getElementById('txtGender');
var textBreed = document.getElementById('txtBreed');
var textService = document.getElementById('txtService');
var textOwner = document.getElementById('txtOwner');
var textPhone = document.getElementById('txtPhone');
var searchText = document.getElementById('petSearch');


function register() {

    const thePet = new Pet(textName.value, textAge.value, textGender.value, textBreed.value, textService.value, textOwner.value, textPhone.value);
    salon.pets.push(thePet);
    alert("You registered a new pet.");
    display(thePet);
    clear();

}

function clear() {
    textName.value = "";
    textAge.value = "";
    textGender.value = "";
    textBreed.value = "";
    textService.value = "";
    textOwner.value = "";
    textPhone.value = "";
    searchText.value = "";
}

function display(aPet) {
    var tbody = document.getElementById('rowPet');

    var row = `<tr id = '${aPet.id}'>
                    <td> ${aPet.name}</td>
                    <td> ${aPet.age}</td>
                    <td> ${aPet.gender}</td>
                    <td> ${aPet.breed}</td>
                    <td> ${aPet.service}</td>
                    <td> ${aPet.ownerName}</td>
                    <td> ${aPet.ownerPhone}</td>  
                    <td> <button id = "delBtn" onclick="deletePet("${aPet.id}")">Delete </button></td>  
                </tr>`;
    tbody.innerHTML += row;


}

display(pet1);
display(pet2);
display(pet3);

function deletePet(petId) {
    var tr = document.getElementById(petId);
    var indexDelete;

    for (var i = 0; i < salon.pets.length; i++) {
        var selected = salon.pets[i];
        if (selected.id === petId) {
            indexDelete = i;
        }
    }

    salon.pets.splice(indexDelete, 1);
    tr.remove();
}

// Function for searching information
function Search() {
    var ss = document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();
    for (var j = 0; j < salon.pets.length; j++) {
        var searchPet = salon.pets[j];
        if (searchString === searchPet.name.toLowerCase() || searchString == searchPet.id) {
            thePet = j;
            document.getElementById('Pet' + j).setAttribute('class', 'selected');
            $('.selected').css("color", "blue"); // change the selected row font color to be more readable
        }
    }
    clear();
}


// Search Button Event - Enter trigger
var input = document.getElementById('petSearch');

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('search').click();
    }
});


// Enjoy :D
$("a[href='about.html']").attr('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')