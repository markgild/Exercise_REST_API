const url = 'https://nominatim.openstreetmap.org/search?format=json&q=Roermond';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const lat = Number(data[0].lat);
    const lon = Number(data[0].lon);

    document.getElementById("result").textContent = "Latitude: " + data[0].lat + ", Longitude: " + data[0].lon;

    const map = L.map('map').setView([lat, lon], 13);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, lon])
        .addTo(map)
        .bindPopup('Roermond')
        .openPopup();
  })
  .catch(error =>  console.log('Error fetching data:', error));