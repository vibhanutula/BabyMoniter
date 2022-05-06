img = "";
status = "";
Objects = [];
alarm = "";

function preload() {
    //alarm = loadSound("bad_to_the_bone.mp3");
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    
}

function gotResults(error, results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
        Objects = results;
    }
}

function draw() {
    image(video, 0, 0, 380, 380);

    if(status != "") {
        objectDetector.detect(video, gotResults)
        r = random(255);
        g = random(255);
        b = random(255);
        for(i = 0; i < Objects.length; i++) {
            if(Objects.length < 0){
                document.getElementById("status").innerHTML = "Status:Object not Detected.";
                document.getElementById("Number").innerHTML = "Baby not Found.";
               // alarm.play();

               window.alert("Baby Is Not Roaming Around");
            }
            if(Objects.label = "person"){
                document.getElementById("status").innerHTML = "Status:Object Detected.";
                document.getElementById("Number").innerHTML = "Baby Found.";
               // alarm.stop();

            }

            //fill(r, g, b);
            //percent = floor(Objects[i].confidence * 100);
            //text(Objects[i].label + " " + percent + "%" , Objects[i].x - 30, Objects[i].y + 70);
            //noFill();
            //stroke(r, g, b);
            //rect(Objects[i].x - 40 , Objects[i].y - 70 , Objects[i].width , Objects[i].height);
        }
    }
}