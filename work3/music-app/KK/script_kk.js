console.log("Welcome to Spotify");

//initialize the variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let progress=document.getElementById('progress');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songName'));
const durationInSeconds = audioElement.duration;
const minutes = Math.floor(durationInSeconds / 60);
const seconds = Math.floor(durationInSeconds % 60);
let songs=[
    {songName:"Allah Hafiz", filePath:"1.mp3",coverPath:"1_c.jpeg"},
    {songName:"Dil Kyu Ye Mera", filePath:"2.mp3",coverPath:"2_c.jpeg"},
    {songName:"Piya Aaye Na", filePath:"3.mp3",coverPath:"3_c.jpg"},
    {songName:"O Jaana", filePath:"4.mp3",coverPath:"4_c.jpg"},
    {songName:"Ajab Si", filePath:"5.mp3",coverPath:"5_c.jpg"},
    {songName:"Labon Ko", filePath:"6.mp3",coverPath:"6_c.jpeg"},
    {songName:"Sach Keh Raha Hai", filePath:"7.mp3",coverPath:"7_c.jpeg"},
    {songName:"Khuda Jaane", filePath:"8.mp3",coverPath:"8_c.jpeg"},
    {songName:"Zara Sa", filePath:"9.mp3",coverPath:"9_c.jpeg"},
    {songName:"Haan Tu Hai", filePath:"10.mp3",coverPath:"10_c.png"},
    {songName:"Tu Jo Mila", filePath:"11.mp3",coverPath:"11_c.jpg"},
    {songName:"Dil Ibaadat", filePath:"12.mp3",coverPath:"12_c.jpg"}
]
songItem.forEach((element,i) => {
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songNamee")[0].innerText=songs[i].songName;
    //element.querySelector(".timestamp").innerHTML=`${minutes}:${seconds}`;
});

//audioElement.play();

//handle play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
        document.querySelector(".playing").style.opacity=1;
        const elements = document.querySelectorAll('.songItemPlay');
        elements[songIndex].classList.remove('fa-circle-play');
        elements[songIndex].classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
        document.querySelector(".playing").style.opacity=1;
        const elements = document.querySelectorAll('.songItemPlay');
        elements[songIndex].classList.remove('fa-circle-pause');
        elements[songIndex].classList.add('fa-circle-play');
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log("time update");
    //update seek bar
    p=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progress.value=p;
})
progress.addEventListener('change',()=>{
    audioElement.currentTime=progress.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        document.querySelector(".playing").style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        document.querySelector(".playing").innerHTML=songs[songIndex].songName;
    })
})

document.getElementById('next').addEventListener('click',(e)=>{
    console.log(e);
    makeAllPlays();
    if(songIndex>=17){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    console.log(songIndex);
    const elements = document.querySelectorAll('.songItemPlay');
    elements[songIndex].classList.remove('fa-circle-play');
    elements[songIndex].classList.add('fa-circle-pause');
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    document.querySelector(".playing").style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    document.querySelector(".playing").innerHTML=songs[songIndex].songName;
})

document.getElementById('previous').addEventListener('click',(e)=>{
    makeAllPlays();
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    const elements = document.querySelectorAll('.songItemPlay');
    elements[songIndex].classList.remove('fa-circle-play');
    elements[songIndex].classList.add('fa-circle-pause');
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    document.querySelector(".playing").style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    document.querySelector(".playing").innerHTML=songs[songIndex].songName;
})