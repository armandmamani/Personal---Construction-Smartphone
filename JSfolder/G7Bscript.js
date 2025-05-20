// JavaScript source code
const apartmentDetails = [
{ id: "A12", sector: "0", floor: "1", typology: "2+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 118.46, commonArea: 50.25, totalArea: 168.71, verandaArea: 175.56, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :16.44, Parking: " -1P29", statusi: "Per shitje", shenime: "0" },
{ id: "A13", sector: "0", floor: "1", typology: "2+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 104.43, commonArea: 44.3, totalArea: 148.73, verandaArea: 165.08, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :25.61, Parking: " 0P11", statusi: "Per shitje", shenime: "0" },
{ id: "B13", sector: "0", floor: "1", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 118.74, commonArea: 50.37, totalArea: 169.11, verandaArea: 148.85, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :15.85, Parking: " -1P12", statusi: "Per shitje", shenime: "0" },
{ id: "B14", sector: "0", floor: "1", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 98.23, commonArea: 41.67, totalArea: 139.9, verandaArea: 152.41, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :33.1, Parking: " -1P13", statusi: "Per shitje", shenime: "0" },
{ id: "B36", sector: "0", floor: "3", typology: "1+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 68.8, commonArea: 29.19, totalArea: 97.99, verandaArea: 0, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:225.63,storeArea :17.25, Parking: " -1P19", statusi: "Per shitje", shenime: "0" },
{ id: "B51", sector: "0", floor: "5", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 91.92, commonArea: 38.99, totalArea: 130.91, verandaArea: 2.62, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :30.36, Parking: " -1P21", statusi: "Per shitje", shenime: "0" },
{ id: "A23", sector: "0", floor: "2", typology: "1+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 65.92, commonArea: 27.96, totalArea: 93.88, verandaArea: 38.21, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :13.62, Parking: " 0P10", statusi: "Rezervuar", shenime: "Iliri" },
{ id: "A24", sector: "0", floor: "2", typology: "1+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 67.79, commonArea: 28.76, totalArea: 96.55, verandaArea: 4.35, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :14.85, Parking: " 0P09", statusi: "Per shitje", shenime: "0" },
{ id: "A35", sector: "0", floor: "3", typology: "2+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 90.94, commonArea: 38.58, totalArea: 129.52, verandaArea: 36.79, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :11.05, Parking: " -1P35", statusi: "Per shitje", shenime: "0" },
{ id: "A11", sector: "0", floor: "1", typology: "Studio", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 58.9, commonArea: 24.99, totalArea: 83.89, verandaArea: 71.33, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :0, Parking: " -1P28", statusi: "Rezervuar", shenime: "0" },
{ id: "B11", sector: "0", floor: "1", typology: "1+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 71.21, commonArea: 30.21, totalArea: 101.42, verandaArea: 4.72, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :15.87, Parking: " 0P14", statusi: "Rezervuar", shenime: "0" },
{ id: "C04", sector: "0", floor: "0", typology: "1+1", scale: "C", netArea:0, loggiaArea: 0, totalNetArea: 66.19, commonArea: 28.08, totalArea: 94.27, verandaArea: 76.61, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :17.86, Parking: " -1P26", statusi: "Rezervuar", shenime: "0" },
{ id: "A31", sector: "0", floor: "3", typology: "Studio", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 53.51, commonArea: 22.7, totalArea: 76.21, verandaArea: 0, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :12.69, Parking: " -1P32", statusi: "Shitur", shenime: "0" },
{ id: "B26", sector: "0", floor: "2", typology: "1+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 65.9, commonArea: 27.96, totalArea: 93.86, verandaArea: 103.37, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :16.11, Parking: " -1P16", statusi: "Shitur", shenime: "0" },
{ id: "B23", sector: "0", floor: "2", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 99.79, commonArea: 42.33, totalArea: 142.12, verandaArea: 70.82, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :20.25, Parking: " -1P14", statusi: "Shitur", shenime: "0" },
{ id: "B33", sector: "0", floor: "3", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 95.58, commonArea: 40.55, totalArea: 136.13, verandaArea: 66.68, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :15.87, Parking: " -1P23", statusi: "Shitur", shenime: "0" },
{ id: "C06", sector: "0", floor: "0", typology: "2+1", scale: "C", netArea:0, loggiaArea: 0, totalNetArea: 112.25, commonArea: 47.62, totalArea: 159.87, verandaArea: 16.03, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :25.57, Parking: " -1P27", statusi: "Shitur", shenime: "0" },
{ id: "B32", sector: "0", floor: "3", typology: "1+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 71.26, commonArea: 30.23, totalArea: 101.49, verandaArea: 11.17, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :13.02, Parking: " -1P22", statusi: "Shitur", shenime: "0" },
{ id: "A42", sector: "0", floor: "4", typology: "1+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 68.23, commonArea: 28.94, totalArea: 97.17, verandaArea: 6.99, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :14.85, Parking: " 0P05", statusi: "Shitur", shenime: "0" },
{ id: "B24", sector: "0", floor: "2", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 87.4, commonArea: 37.08, totalArea: 124.48, verandaArea: 4.18, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :15.45, Parking: " -1P15", statusi: "Shitur", shenime: "0" },
{ id: "B34", sector: "0", floor: "3", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 94.22, commonArea: 39.97, totalArea: 134.19, verandaArea: 18.9, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :0, Parking: " -1P17", statusi: "Shitur", shenime: "0" },
{ id: "B42", sector: "0", floor: "4", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 93.9, commonArea: 39.83, totalArea: 133.73, verandaArea: 0, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :26.08, Parking: " 0P16", statusi: "Shitur", shenime: "0" },
{ id: "C02", sector: "0", floor: "0", typology: "1+1", scale: "C", netArea:0, loggiaArea: 0, totalNetArea: 69.75, commonArea: 29.59, totalArea: 99.34, verandaArea: 18.57, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :17.03, Parking: " -1P24", statusi: "Shitur", shenime: "0" },
{ id: "A34", sector: "0", floor: "3", typology: "1+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 71.77, commonArea: 30.45, totalArea: 102.22, verandaArea: 21.64, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :12.58, Parking: " -1P34", statusi: "Shitur", shenime: "0" },
{ id: "B43", sector: "0", floor: "4", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 91.64, commonArea: 38.87, totalArea: 130.51, verandaArea: 0, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :15.85, Parking: " 0P17", statusi: "Shitur", shenime: "0" },
{ id: "A43", sector: "0", floor: "4", typology: "2+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 90.75, commonArea: 38.5, totalArea: 129.25, verandaArea: 0, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :15.75, Parking: " 0P04", statusi: "Shitur", shenime: "0" },
{ id: "C03", sector: "0", floor: "0", typology: "1+1", scale: "C", netArea:0, loggiaArea: 0, totalNetArea: 70.29, commonArea: 29.82, totalArea: 100.11, verandaArea: 30.98, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :17.03, Parking: " -1P25", statusi: "Shitur", shenime: "0" },
{ id: "A41", sector: "0", floor: "4", typology: "1+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 71.57, commonArea: 30.36, totalArea: 101.93, verandaArea: 0, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :11.05, Parking: " -1P36", statusi: "Shitur", shenime: "0" },
{ id: "A51", sector: "0", floor: "5", typology: "1+1", scale: "A", netArea:0, loggiaArea: 0, totalNetArea: 69.28, commonArea: 29.39, totalArea: 98.67, verandaArea: 27.2, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :15, Parking: " 0P03", statusi: "Shitur", shenime: "0" },
{ id: "B52", sector: "0", floor: "5", typology: "2+1", scale: "B", netArea:0, loggiaArea: 0, totalNetArea: 88.61, commonArea: 37.59, totalArea: 126.2, verandaArea: 4.45, poolArea:0, greenTerraceArea: 0, usableTerrace:0, plotArea:0,storeArea :17.25, Parking: " -1P20", statusi: "Shitur", shenime: "0" },

]



function showApartmentDetails(apartmentId) {

    const details = apartmentDetails.find(apartment => apartment.id === apartmentId);
    // Find the apartment details by ID
    if (details) {
        // Populate the details table
        document.getElementById('aptId').textContent = details.id;
        document.getElementById('aptScale').textContent = details.scale;
        document.getElementById('aptTypology').textContent = details.typology;
        document.getElementById('aptFloor').textContent = details.floor;
        document.getElementById('aptNetArea').textContent = details.totalNetArea;
        document.getElementById('aptComonArea').textContent = details.commonArea;
        document.getElementById('aptTotalArea').textContent = details.totalArea;
        document.getElementById('aptVerandaArea').textContent = details.verandaArea;
        document.getElementById('aptgreenArea').textContent = details.plotArea;
        document.getElementById('aptstoreArea').textContent = details.storeArea;
        document.getElementById('aptParking').textContent = details.Parking;
        document.getElementById('status').textContent = details.statusi;

    }
}



// --- Filter by Typology on dropdown change
document.getElementById('typologyFilter').addEventListener('change', () => {
  const selectedTypology = document.getElementById('typologyFilter').value;

  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (!btn) return;

    if (!selectedTypology || apartment.typology === selectedTypology) {
       btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  });
});

// --- Filter by Area on button click
function filterByArea() {
  const maxArea = parseFloat(document.getElementById('areaFilter').value);
      const input = document.getElementById('areaFilter');
    const value = input.value.trim();
    if (value==='') return; // Do nothing if no value


  apartmentDetails.forEach(apartment => {
    const btn = document.getElementById(apartment.id);
    if (!btn) return;

    if (!isNaN(maxArea) && apartment.totalArea <= maxArea) {
      btn.style.display = 'inline-block';
    } else {
      btn.style.display = 'none';
    }
  });
}


document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to buttons "ith class 'ApBtn'
    document.querySelectorAll(".planBtn").forEach(button => {
        button.addEventListener("click", function () {
            const apartmentId = button.id; // Extract apartment ID from button ID
            if (apartmentId) {
                showApartmentDetails(apartmentId);
            }
        });
    });



    const shiturText = document.getElementById("shiturShkrimi");
    const rezervuarText = document.getElementById("rezervuarShkrimi");

    apartmentDetails.forEach(apartment => {
        const button = document.getElementById(apartment.id); // Get the button by ID
        if (button) {
            // Apply initial colors
            if (apartment.statusi === "Shitur") {
                button.style.backgroundImage = "linear-gradient(to top, #FFB9B9 0%, #ff9999 80%, #FDFDFD 100%)";
                button.style.color = "#A80000";
                button.style.fontWeight = "bold";
            } else if (apartment.statusi === "Rezervuar") {
                button.style.backgroundImage = "linear-gradient(to top, #FFEBD1 0%, #ffC170 80%, #FDFDFD 100%)";
                button.style.color = "red";
                button.style.fontWeight = "bold";

            }

            // Add click event listener
            button.addEventListener("click", function () {
                if (apartment.statusi === "Shitur") {
                    shiturText.classList.remove("hidden");
                    rezervuarText.classList.add("hidden");
                } else if (apartment.statusi === "Rezervuar") {
                    rezervuarText.classList.remove("hidden");
                    shiturText.classList.add("hidden");
                } else {
                    shiturText.classList.add("hidden");
                    rezervuarText.classList.add("hidden");
                }
            });
        }


    const displayImage = document.getElementById("display-image");
    const fullscreenContainer = document.getElementById("fullscreenContainer");
    const fullscreenImage = document.getElementById("fullscreenImage");
    const planContainer = document.getElementById("plan-container");

    // 📌 Buttons that trigger the image
    document.querySelectorAll(".planBtn").forEach(button => {
        button.addEventListener("click", () => {

            const imageSrc = `PlanetG7B/${button.id}.webp`;

            // Display the image in main vie"
            displayImage.src = imageSrc;
            // Sho" the container if it "as hidden
                planContainer.style.display = "block";
        });
    });

    // Click on display image → open fullscreen
    displayImage.addEventListener("click", () => {
        fullscreenImage.src = displayImage.src;
        fullscreenContainer.classList.remove("hidden");

        // Request full screen (Works best on mobile)
        if (fullscreenContainer.requestFullscreen) {
            fullscreenContainer.requestFullscreen();
        } else if (fullscreenContainer.webkitRequestFullscreen) {
            fullscreenContainer.webkitRequestFullscreen(); // Safari
        } else if (fullscreenContainer.msRequestFullscreen) {
            fullscreenContainer.msRequestFullscreen(); // IE
        }
    });

    // 🔙 Click on fullscreen image → close fullscreen
    fullscreenImage.addEventListener("click", () => {
        fullscreenContainer.classList.add("hidden");

        // Exit full screen
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else if (document.msFullscreenElement) {
            document.msExitFullscreen();
        }
    });
    window.addEventListener("orientationchange", () => {
        // Force redra"/resizing (if needed)
        if (document.fullscreenElement) {
            fullscreenImage.style.maxwidth = window.innerwidth + "px";
            fullscreenImage.style.maxHeight = window.innerHeight + "px";
        }
    });

    //  Click outside image in plan-container → hide container
    planContainer.addEventListener("click", (event) => {
        if (!event.target.closest("#display-image")) {
            planContainer.style.display = "none";
            document.getElementById("shiturShkrimi").classList.add("hidden");
            document.getElementById("rezervuarShkrimi").classList.add("hidden");
        }
    });

});

})
