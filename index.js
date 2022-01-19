var arguments = process.argv; // get arguments from command line
var data = require('./ev_data.json');
const CHARGE_ABOVE = "charged_above";
const AVERAGE_DAILY_MILES = "average_daily_miles";

function main(queryType, argForQuery) {
    switch (queryType) {
        case CHARGE_ABOVE: {
            // assumption: argForQuery is string representation of float
            atleastOneChargeReading(data, parseFloat(argForQuery));
            break;
        }
        case AVERAGE_DAILY_MILES: {
            averageMilesOfVehicle(data, argForQuery);
            break;
        }

        default: {
            console.log("Improper query name provided!")
        }
    }
}

function atleastOneChargeReading(data, chargePercent) {
    /** return the number of vehicles that
    reported at least one `charge_reading` above a given % over the whole time
    period */
    let uniqueVehicles = new Set(); // maintains the unique vehicles
    let numOfVehicles = data.records.filter((dataItem) => {
        let returnDataItem = false;
        if (dataItem.charge_reading >= chargePercent && !uniqueVehicles.has(dataItem.vehicle_id)) {
            // if charge reading is greater than equal to charge percent and not in set
            uniqueVehicles.add(dataItem.vehicle_id); // add into the set so that it wont be considered for the next time if any
            returnDataItem = true;
        }
        return returnDataItem;
    });
    console.log("Num of vehicles:", numOfVehicles.length)
    return (numOfVehicles.length); // alternatively, can also return total elements in set

}

function averageMilesOfVehicle(data, vehicleId) {
    /** return the average daily miles for
    a given vehicle
    */

    let totalMiles = 0;
    let vehicles = data.records.filter((dataItem) => {
        if (dataItem.vehicle_id == vehicleId) {
            totalMiles += dataItem.range_estimate;
            return true;
        }
        return false;
    });
    console.log("Average Miles:", totalMiles / vehicles.length)
    return (totalMiles / vehicles.length);
}

main(arguments[2], arguments[3]);