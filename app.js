
var questions = [
    {
        question: "Html Stands For _________________________",
        options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _______________________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _______________________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]
var displayQuestion = document.getElementById("displayQuestion")
var currentQuestion = document.getElementById("currentQuestion")
var totalQUestionNo = document.getElementById("totalQUestionNo")
var displayButton = document.getElementById("displayButton")
var currentIndex = 0;
var marks = 0;
var displayResult = document.getElementById("displayResult")
var score = document.getElementById("score")
var percentage = document.getElementById("percentage")
var Status = document.getElementById("status")
function initRender() {
    currentQuestion.innerHTML = currentIndex+1;
    displayButton.innerHTML = ""
    totalQUestionNo.innerHTML = questions.length;
    displayQuestion.innerHTML = questions[currentIndex].question
    for (var i = 0; i < questions[currentIndex].options.length; i++) {
        displayButton.innerHTML += `<div class="col-md-5">
           <div>
               <button class="btn btn-outline-warning w-100 m-5" onclick="result('${questions[currentIndex].options[i]}', '${questions[currentIndex].correctAns}')"> ${questions[currentIndex].options[i]} </button>
           </div>
       </div>`
    }
    
}


function result (e, i) {
    if (e == i) {
        marks++
        initRender()
        console.log(marks);
    } if(questions.length == currentIndex + 1) {
        displayResult.style.display = "flex";
        score.innerHTML = marks
        let percent = (questions.length / marks)*100
        percentage.innerHTML = percent
        if(percent < 50){
            Status.innerHTML = "fail"
        }
        else{
            Status.innerHTML = "pass"
        }
    }
     else {
        currentIndex++
        initRender()
    }
}



initRender()