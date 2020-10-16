//Creat map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15)

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat').value = lat;
    document.querySelector('[name=lng').value = lng

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// add photo field
function addPhotoField () {
    //Get the photo container #images
    const container = document.querySelector('#images')

    // get the container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // clone last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // check if field is empty, if yes, do not add
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // empty clone container field
    input.value = ""

    // add cloned photo to container #images
    container.appendChild(newFieldContainer)
}

function deleteField (event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

// select yes or no
function toggleSelect(event) {
    // remove .active class (from buttons)
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    // add .active class on clicked button
    const button = event.currentTarget
    button.classList.add('active')

    // update hidden input with selected value
    const input = document.querySelector('[name = "open_on_weekends"]')

    // check if it's yes or no
    input.value = button.dataset.value
}
