//Javascript Document

//Object template that represents a vacation rental property
function initMap(){

    let tunnelresort = {
        lat: 51.184723,
        lng: -115.5526402
    };
    let logcabin = {
        lat: 51.168203,
        lng: -115.5678237
    };

    let borabora ={
        lat:-16.4730898,
        lng:-151.7078312
    };
    let malidives = {
        lat: 3.940187,
        lng: 73.4868769
    };


let div = document.getElementById('centered');

let map = new google.maps.Map(div, {
    zoom: 18,
    center: tunnelresort
  });
  
  let marker1 = new google.maps.Marker({position:tunnelresort, map:map});
  let marker2 = new google.maps.Marker({position:logcabin, map:map});
  let marker3 = new google.maps.Marker({position:malidives, map:map});
  let marker4 = new google.maps.Marker({position:borabora, map:map});

};


class Property {
    constructor(name, price, rating, location, rooms, availability, features) {
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.location = location;
        this.rooms = rooms;
        this.availability = availability;
        this.features = features;
    }

    //Method to display the Property Information.
    propertyInfo() {
        let section = document.querySelector('section');
        let h3 = document.createElement('h3');
        let para2 = document.createElement('p');
        let para3 = document.createElement('p');
        let propertyName = "Property Name: " + this.name;
        let priceInfo = "Price: " + this.price + " $/night. Rating: " + this.rating;
        let propertyDescripition = this.name + " is locatated at " + this.location + ". It has " + this.rooms + " rooms and have features such as " + this.features;
        h3.innerHTML = propertyName;
        para2.innerHTML = priceInfo;
        para3.innerHTML = propertyDescripition;
        section.appendChild(h3);
        section.appendChild(para2);
        section.appendChild(para3);
    };

    //Method to display availability Information.
    availabilityInfo() {
        let section = document.querySelector('section');
        let paragraph = document.createElement('p');
        let isAvailable = "This Vacation rental is  " + this.availability;
        paragraph.innerHTML = isAvailable;
        section.appendChild(paragraph);
    };

}

//Instantiating 2 new instances of Property Object
let property1 = new Property('Tunnel Mountain Resort', '75', '4.5', 'Banff National Park', '1', 'Available', ['Indoor pool', ' hot tub', ' kitchen']);
let property2 = new Property('Log Cabin', '169', '4.7', 'Banff National Park', '2', 'Not Available', ['Swimming Pool', ' Wi-fi', ' Gym']);

//Buttons which returns property and availability informations
let button1 = document.getElementById('btn1');
button1.addEventListener('click', function() {
    property1.propertyInfo();
})

let button2 = document.getElementById('btn2');
button2.addEventListener('click', function() {
    property1.availabilityInfo();
})

let button3 = document.getElementById('btn3');
button3.addEventListener('click', function() {
    property2.propertyInfo();
})

let button4 = document.getElementById('btn4');
button4.addEventListener('click', function() {
    property2.availabilityInfo();
})

//Specia Property Object template that represents a vacation rental property which inherits all properties from previous 
//object with special rate and a new type property 
class SpecialProperty extends Property {
    constructor(name, price, rating, location, rooms, availability, features, type) {
        super(name, price, rating, location, rooms, availability, features);
        this.type = type;
    }

    //Method to calculate special rate from instantiated rate
    rate() {
        let specRate = (this.price * 20) / 100;
        let changedRate = this.price - specRate;
        return changedRate;
    };

    //Method to display special Rate
    specialRate() {
        let section = document.querySelector('section');
        let h4 = document.createElement('h4');
        let newRate = this.type + ' for this rental is ' + this.rate() + ' $/night';
        h4.innerHTML = newRate;
        section.appendChild(h4);
    };

}

//Instantiating 1 instance of the Special Property Object
let property3 = new SpecialProperty('Ocean Beach', '115', '4.4', 'Maldives', '3', 'Not Available', ['Swimming Pool', ' Hottub', ' Gym'], 'Special Rate');

//Buttons which returns property and availability informations
let button5 = document.getElementById('btn5');
button5.addEventListener('click', function() {
    property3.propertyInfo();
    property3.specialRate();
})

let button6 = document.getElementById('btn6');
button6.addEventListener('click', function() {
    property3.availabilityInfo();
})

//SuperHost Object template that represents a vacation rental property which inherits all properties from previous 
//object with superhost rating and a type property 
class SuperHost extends Property {
    constructor(name, price, rating, location, rooms, availability, features, type) {
        super(name, price, rating, location, rooms, availability, features);
        this.type = type;
    }

    //Method to display Superhost rating 
    superhostRating() {
        let section = document.querySelector('section');
        let h3 = document.createElement('h3');
        let para5 = document.createElement('p');
        let host = this.type;
        let newRating = 'SuperHost Rating: ' + this.rating;
        para5.innerHTML = newRating;
        h3.innerHTML = host;
        section.appendChild(h3);
        section.appendChild(para5);
    }
}

//Instantiating 1 instance of the SuperHost Object
let property4 = new SuperHost('Bora Bora Overwater Bungalow', '200', '4.7', 'Bora Bora', '2', 'Available', ['Balcony', ' Kitchen', ' Direct lagoon access'], 'Superhost');

//Buttons which returns property and availability informations
let button7 = document.getElementById('btn7');
button7.addEventListener('click', function() {
    property4.superhostRating();
    property4.propertyInfo();

})

let button8 = document.getElementById('btn8');
button8.addEventListener('click', function() {
    property4.availabilityInfo();
})

