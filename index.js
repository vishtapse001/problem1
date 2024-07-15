function iPhone1(ASIN, color, display, camera) {
    // Create object with properties
    let iPhone = {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        // Methods
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        }
    };
    return iPhone;
}

function iPhone2(ASIN, color, display, camera, bluetooth) {
    // Create object with properties
    let iPhone = {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        bluetooth: bluetooth,
        // Methods
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        },
        connectBluetooth: function() {
            return "Bluetooth connected successfully...";
        }
    };
    return iPhone;
}


let myiPhone1 = iPhone1("ASIN123", "Black", "LCD", "12MP");
let myiPhone2 = iPhone2("ASIN456", "White", "OLED", "16MP", true);

console.log(myiPhone1.dial()); // Outputs: "tring.. tring..."
console.log(myiPhone2.connectBluetooth()); // Outputs: "Bluetooth connected successfully..."
