/*
realtime parkeerstatussen parkeergarages Ghent 
    weergeven. 
    indien het aantal vrije plaatsen >50% {
        status: groene kleur. 
    } 
    indien het aantal vrije plaatsen >=20% en <=50% {
        status: oranje kleur
    }
    indien < dan 20% {
        status: rode kleur
    } 
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
fetch('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json')
    .then(response => response.json()
    .then((data) => {
        let parkings = data;
        parkings.map(parking => {
            parking = {
                parkingName: parking.name,
                parkingOpen: parking.parkingStatus.open,
                parkingAvailable: parking.parkingStatus.availableCapacity,
                parkingTotal: parking.parkingStatus.totalCapacity,
            }
        });
    })
    .catch(error => console.error(`Could not fetch data | ${error}.`)));