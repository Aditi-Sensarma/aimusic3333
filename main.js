song="";
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;

song1 = "";


function setup(){
    
    canvas = createCanvas(600,530);

    canvas.center();
    video = createCapture(VIDEO);

    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);

    
}

function preload(){
 song   = loadSound("505.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

    song1 = song.isPlaying();
    console.log(song1);

  
    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
      
        if(song1 == false){
         song.play();
        }
        else{
            console.log("Song Name: 505");
            document.getElementById("song_id").innerHTML = "Song Name: 505";
        }
    }


}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

 

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

    }
}