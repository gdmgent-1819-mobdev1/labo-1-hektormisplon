/*

+ functionaliteit - huidige bezetting vgl met voorgaande
    aantal vrije plaatsen stijgt {
        pijl naar boven
    }
    blijft gelijk {
        gelijk aan teken
    }
    dalen {
        pijl naar beneden
    }
*/
// 

function createTextElement(type, text) {
    document.createElement(type).appendChild(document.createTextNode(text));
}

fetch('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json')
    .then(response => response.json()
        .then((data) => {
            let parkings = data;
            parkings = parkings.map(parking => {
                parking = {
                    name:       parking.name,
                    status:     parking.parkingStatus.open,
                    available:  parking.parkingStatus.availableCapacity,
                    total:      parking.parkingStatus.totalCapacity,
                };
                console.log(parking);
                displayParking(parking);
                getParkingChanges(parking);
            });
        })
        .catch(error => console.error(`Could not fetch data | ${error}.`)));
        
function displayParking(p) {

    const parkingEl = document.getElementsByClassName('parking')[0];
    const parkingCardEl = document.createElement('div');

    parkingCardEl.setAttribute('class', 'card col-sm-4');
    parkingEl.appendChild(parkingCardEl);

    const parkingNameEl = document.createElement('h2');
    const parkingStatusEl = document.createElement('h3');
    const parkingAvailableEl = document.createElement('h4');

    parkingNameEl.setAttribute('class', 'card-body');
    parkingStatusEl.setAttribute('class', 'card-body');

    if(p.available > (p.total/2)) {
        parkingAvailableEl.setAttribute('class', 'card-body bg-success text-white');
    } else if(p.available >= (p.total/5)) {
        parkingAvailableEl.setAttribute('class', 'card-body bg-warning text-white');
    } else {
        parkingAvailableEl.setAttribute('class', 'card-body bg-danger text-white');
    }

    parkingNameEl.textContent = p.name;
    parkingStatusEl.textContent = p.status ? 'Open' : 'Closed';
    parkingAvailableEl.textContent = p.available + '/' + p.total + ' available';

    parkingCardEl.append(parkingNameEl, parkingStatusEl, parkingAvailableEl);
}

function getParkingChanges(p) {

}