const questions=[{
    question:"Which is the highest waterfall in India?",
    answers:[
        {text:"Dudhsagar Falls", correct:false},
        {text:"Palaruvi Falls", correct:false},
        {text:"Jog Falls", correct:true},
        {text:"Meenmutty Falls", correct:false}
    ]
},
{
    question:"Which is the most literate Union territory in India?",
    answers:[
        {text:"Delhi", correct:false},
        {text:"Lakshadweep", correct:true},
        {text:"Chandigarh", correct:false},
        {text:"Puducherry", correct:false}
    ]
},
{
    question:"Which is the first atomic station in India",
    answers:[
        {text:"Rajasthan Power Station", correct:false},
        {text:"Madras Power Station", correct:false},
        {text:"Narora Power Station", correct:false},
        {text:"Tarapore Power Station", correct:true}
    ]  
},
{
    question:"Which is the largest auditorium in India?",
    answers:[
        {text:"Saint Andrew Auditorium", correct:false},
        {text:"Tejpal Auditorium", correct:false},
        {text:"Sudarshan Rangmanch", correct:false},
        {text:"Sri Shanmukhananda Hall", correct:true}
    ]
},
{
    question:"Which is the highest award in India?",
    answers:[
        {text:"Padma Vubhushan", correct:false},
        {text:"Padma Bhushan", correct:false},
        {text:"Padma Shri", correct:false},
        {text:"Bharat Ratna", correct:true}
    ]
},
{
    question:"Which of the following states is not located in the North?",
    answers:[
        {text:"Jharkhand", correct:true},
        {text:"Jammu and Kashmir", correct:false},
        {text:"Himachal Pradesh", correct:false},
        {text:"Haryana", correct:false}
    ] 
},
{
    question:"Which is the largest coffee-producing state of India?",
    answers:[
        {text:"Kerala", correct:false},
        {text:"Tamil Nadu", correct:false},
        {text:"Arunachal Pradesh", correct:false},
        {text:"Karnataka", correct:true}
    ]
},
{
    question:"Which state has the largest area?",
    answers:[
        {text:"Rajasthan", correct:true},
        {text:"Maharashtra", correct:false},
        {text:"Madhya Pradesh", correct:false},
        {text:"Uttar Pradesh", correct:false}
    ]
},
{
    question:"Which state has the largest population?",
    answers:[
        {text:"Maharashtra", correct:false},
        {text:"Uttar Pradesh", correct:true},
        {text:"Bihar", correct:false},
        {text:"Andra Pradesh", correct:false}
    ]
},
{
    question:"In what state is Elephant Falls located?",
    answers:[
        {text:"Mizoram", correct:false},
        {text:"Orissa", correct:false},
        {text:"Meghalaya", correct:true},
        {text:"Manipur", correct:false}
    ]
}];

let ques=document.querySelector(".q");
let answerBtn=document.querySelector("#options");
let nextButton=document.querySelector(".btn");

let quesCountIndex=0;
let score=0;

function startQuiz(){
    nextButton.innerHTML="Next";
    showQues();
}

function showQues()
{
    resetState();
    let currques=questions[quesCountIndex];
    let quesno=quesCountIndex+1;
    ques.innerHTML=quesno+"."+currques.question;

    currques.answers.forEach(answer => {
        let op = document.createElement("button");
        op.innerHTML = answer.text;
        //console.log(op);
        op.classList.add("optn"); 
        options.appendChild(op); 
        if(answer.correct)
        {
            op.dataset.correct=answer.correct;
        }
        op.addEventListener("click", selectAnswer);
    });
}

function resetState()
{
    nextButton.style.display="none";
    while(answerBtn.firstChild)
    {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }
    else
       selectedBtn.classList.add("incorrect");
    Array.from(answerBtn.children).forEach(op=>{
        if(op.dataset.correct==="true")
        {
            op.classList.add("correct");
        }
        op.disabled=true;
    });
    nextButton.style.display="block";
}

function restartQuiz() {
    quesCountIndex = 0;
    score = 0;
    startQuiz();
}


function showScore(){
    resetState();
    ques.innerHTML=`You scored ${score} out of ${questions.length}!`;
    console.log(quesCountIndex);
    console.log(questions.length);
    //score=0;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
    score=0; 
}

function handleNextButton(){
    quesCountIndex++;
    if(quesCountIndex<questions.length){
        showQues();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(quesCountIndex<questions.length){
        handleNextButton();
    }
    else{
        restartQuiz();
    }
})
startQuiz();
