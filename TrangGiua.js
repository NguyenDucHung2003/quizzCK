import {
     questionData,
     questionDataCheckBox,
     questionDataButton,
     questionOptions,
     questionText,
} from "./Data.js"
const $ = (id) => document.getElementById(id)
let x = JSON.parse(localStorage.getItem("countacc"))

if (x <= 0) {
     window.location.href = "Dangnhap.html"
}
VoidDataRadio()
function VoidDataRadio() {
     const divQuestion = document.getElementById("container_Radio")
     divQuestion.innerHTML = questionData
          .map((question, index) => {
               return `<div id="TypeRadio_${index + 1}">
               <div class="Question_Radio">${question.question}</div>
    <div class="Answers_Radio">
      ${question.answers
           .map((answer) => {
                return `<div class="inputRadio"><input type="radio" id="${answer.id}" name="question_${question.id}" value="${answer.label}" /> <label for="${answer.id}">${answer.label}</label></div>`
           })
           .join("")}
    </div></div>`
          })
          .join("")
}

VoidDataCheckBox()
function VoidDataCheckBox() {
     const divQuestion = document.getElementById("container_CheckBox")
     divQuestion.innerHTML = questionDataCheckBox
          .map((question, index) => {
               return `<div id="TypeCheckBox_${
                    index + 1
               }">  <div class="Question_CheckBox">${question.question}</div>
    <div class="Answers_CheckBox">
      ${question.answers
           .map((answer) => {
                return `<div class="TypeCheckBoxChild"><input type="checkbox" id="${answer.id}" name="question_${question.id}" value="${answer.label}" /> <label for="${answer.id}">${answer.label}</label></div>`
           })
           .join("")}
    </div> </div>`
          })
          .join("")
}
VoidDataButton()
function VoidDataButton() {
     const divQuestion = document.getElementById("container_Button")
     divQuestion.innerHTML = questionDataButton
          .map((question) => {
               return ` <div class="TypeButton"><div class="Question_Button">${
                    question.question
               }</div>
      <div class="Answers_Button">
        ${question.answers
             .map((answer) => {
                  return `<div class="TypeButtonChild"><input type="button" class="Answers_Button_Input"  id="${answer.id}" name="question_${question.id}" value="${answer.label}" /></div>`
             })
             .join("")}
      </div></div>`
          })
          .join("")
}

VoidDataOptions()
function VoidDataOptions() {
     const divQuestion = document.getElementById("container_Options")
     divQuestion.innerHTML = questionOptions
          .map((question) => {
               const answerOptions = question.answerYes
                    .map((answer) => {
                         return `<option id = "${answer.id}" value="${answer.value}">${answer.label}</option>
          `
                    })
                    .join("")
               const answerInputs = question.answers
                    .map((answer) => {
                         return `<input type="text" id="${answer.id}" name="question_${question.id}" value="${answer.label}" />
          <br />`
                    })
                    .join("")

               return `
               <div class="TypeOptions">
        <div class="Question_Options">${question.question}</div>
        <div class="QuestionAnswers_Options">
          ${answerInputs}
        </div>
        <div class="Answers_Options">
          <select name="answer_${question.id}">
          <option>${answerOptions} </option>  
          </select>
          <select name="answer_${question.id}">
          <option>${answerOptions} </option>  
          </select>
          <select name="answer_${question.id}">
          <option>${answerOptions} </option>  
          </select>
          <select name="answer_${question.id}">
          <option>${answerOptions} </option>  
          </select>
        </div></div>
      `
          })
          .join("")
}

VoidataText()
function VoidataText() {
     const divQuestion = document.getElementById("container_Text")
     divQuestion.innerHTML = questionText
          .map((question) => {
               return ` <div class="TypeText">
               <div class="Question_Text">${question.question}</div>
               <input class="Answer_Text" type="text" id="${question.id}" name="questiontext_${question.id}" placeholder ="Nhập đáp án vào đây"/>
               </div>
               `
          })
          .join("")
}

questionDataButton.forEach((question) => {
     const textButtons = document.querySelectorAll(
          `input[type="button"][name="question_${question.id}"]`
     )
     textButtons.forEach((button) => {
          button.addEventListener("click", () => {
               textButtons.forEach((btn) => btn.classList.remove("active"))
               button.classList.add("active")
          })
     })
})

let getUserNow = localStorage.getItem("UserNow")
let Acccountnew = JSON.parse(getUserNow)
information()
function information() {
     const html = `    
     <div class="Information_Account">Thông tin cá nhân</div>
     <div class="Information_Account_Name">Tên: ${Acccountnew.UserName}</div>
     <div class="Information_Account_Email">Email: ${Acccountnew.UserEmail}</div>
     <div class="Information_Account_Phone">Số điện thoại :${Acccountnew.UserPhone}</div>
     `

     $("container_count").innerHTML = html
}
countdown()
function countdown() {
     var i = 1800000
     var minutes = Math.floor((i % (1000 * 60 * 60)) / (1000 * 60))
     var seconds = Math.floor((i % (1000 * 60)) / 1000)

     document.getElementById("time").innerHTML = minutes + "m " + seconds + "s "
     var x = setInterval(function () {
          document.getElementById("time").innerHTML =
               minutes + "m " + seconds + "s "
          seconds--
          if (seconds < 0) {
               seconds = 59
               minutes--
          }
          i--
          if (i < 0) {
               clearInterval(x)
               document.getElementById("time").innerHTML = "Hết giờ!"
          }
     }, 1000)
     setTimeout(() => {
          window.location.href = "TrangCuoi.html"
     }, 1800000)
}
RadioChecked()
function RadioChecked() {
     for (let z = 1; z <= 5; z++) {
          let x = document.querySelectorAll(
               `#TypeRadio_${z} .Answers_Radio .inputRadio`
          )
          let y = document.querySelectorAll(`#TypeRadio_${z} input[type=radio]`)
          for (let i = 0; i < y.length; i++) {
               y[i].addEventListener("change", () => {
                    if (y[i].checked) {
                         for (let j = 0; j < x.length; j++) {
                              x[j].style.backgroundColor = "white"
                         }
                         x[i].style.backgroundColor = "#54e369"
                    }
               })
          }
     }
}
RadioCheckBox()
function RadioCheckBox() {
     for (let z = 1; z <= 5; z++) {
          let checkboxStates = []
          let x = document.querySelectorAll(
               `#TypeCheckBox_${z} .Answers_CheckBox .TypeCheckBoxChild`
          )
          let y = document.querySelectorAll(
               `#TypeCheckBox_${z} input[type=checkbox]`
          )
          for (let i = 0; i < y.length; i++) {
               checkboxStates.push(false)
               y[i].addEventListener("change", () => {
                    checkboxStates[i] = y[i].checked
                    for (let j = 0; j < x.length; j++) {
                         x[j].style.backgroundColor = checkboxStates[j]
                              ? "#54e369"
                              : "antiquewhite"
                    }
               })
          }
     }
}

$("form").addEventListener("click", () => {
     let count = 0.0
     let ArrayCheck = []
     questionData.forEach((question) => {
          const selectedAnswer = document.querySelector(
               `input[type ="radio"][name="question_${question.id}"]:checked`
          )
          const numberAnswer = selectedAnswer?.id.split("_")[0]
          const result = selectedAnswer?.id.split("_")[1]
          const typeQuestion = question.type
          ArrayCheck.push([{ numberAnswer, result, typeQuestion }])
          if (selectedAnswer && selectedAnswer.id === question.answerYes.id) {
               count++
          }
     })

     questionDataCheckBox.forEach((question) => {
          const selectedAnswers = document.querySelectorAll(
               `input[type="checkbox"][name="question_${question.id}"]:checked`
          )
          selectedAnswers.forEach((selectAnswer) => {
               const [numberAnswer_CheckBox, result_CheckBox] =
                    selectAnswer?.id.split("_")
               const typeQuestion = question.type
               ArrayCheck.push([
                    { numberAnswer_CheckBox, result_CheckBox, typeQuestion },
               ])
          })
          let x = question.answerYes.map((answer) => {
               return answer.id
          })
          let y = []
          for (const value of selectedAnswers.values()) {
               y.push(value.id)
          }
          const sameArray = JSON.stringify(x) === JSON.stringify(y)
          if (sameArray) {
               count++
          }
     })

     const clasButton = document.getElementsByClassName("active")
     const selectButton = []
     const checkButtonYes = []
     questionDataButton.forEach((question) => {
          checkButtonYes.push(question.answerYes.id)
     })

     for (let i = 0; i < clasButton.length; i++) {
          let x = clasButton[i].id
          const numberAnswer_Button = x.substring(0, 2)
          const result_Button = x.split("_")[1]
          let typeQuestion = ""
          questionDataButton.forEach((question) => {
               typeQuestion = question.type
          })
          selectButton.push({
               numberAnswer_Button,
               result_Button,
               typeQuestion,
          })
     }
     const checkButton = []
     selectButton.forEach((selectButton) => {
          checkButton.push(
               `${selectButton.numberAnswer_Button}_${selectButton.result_Button}`
          )
     })
     for (let i = 0; i < checkButtonYes.length; i++) {
          for (let j = 0; j < checkButton.length; j++) {
               if (checkButtonYes[i] === checkButton[j]) {
                    count++
               }
          }
     }

     ArrayCheck.push(selectButton)
     checkSelectedOptions()
     function checkSelectedOptions() {
          const selectElements = document.querySelectorAll(
               'select[name^="answer_"]'
          )
          const selectedOptions = []

          selectElements.forEach((select) => {
               const selectedOption = select.options[select.selectedIndex]
               const numberAnswer_Options = select.name.split("_")[1]
               const result_Options = selectedOption.value
               let typeQuestion = ""
               questionOptions.forEach((question) => {
                    typeQuestion = question.type
               })

               selectedOptions.push({
                    numberAnswer_Options,
                    result_Options,
                    typeQuestion,
               })
          })
          const checkOptionsYes = []
          questionOptions.forEach((question) => {
               question.answerYes.forEach((answer) => {
                    checkOptionsYes.push(answer.id)
               })
          })
          const checkOptions = []
          selectedOptions.forEach((option) => {
               checkOptions.push(
                    `${option.numberAnswer_Options}_${option.result_Options}`
               )
          })
          let g = 0

          for (let i = 0; i < checkOptionsYes.length; i++) {
               if (checkOptionsYes[i] === checkOptions[i]) {
                    g++
                    count += 0.25
               }
          }
          ArrayCheck.push(selectedOptions)
     }
     const selectText = []

     questionText.forEach((question) => {
          const selectedAnswerText = document.querySelectorAll(
               `input[type=text][name="questiontext_${question.id}"]`
          )
          selectedAnswerText.forEach((answer) => {
               const numberAnswer_Text = answer.id
               const result_Text = answer.value
               const typeQuestion = question.type
               selectText.push({ numberAnswer_Text, result_Text, typeQuestion })
               if (answer.value === question.answersYes) {
                    count++
               }
          })
     })
     // let countLocal = JSON.parse(localStorage.getItem("UserNow"))
     ArrayCheck.push(selectText)
     // let soLanLamBai = []
     pushQuestionToLocal(ArrayCheck)
     var result = confirm("Bạn đã chắc chắn nộp bài ")
     if (result == true) {
          // soLanLamBai.push(count)
          localStorage.setItem("count", JSON.stringify(count))
          // countLocal.UserCount.push(count)
          // console.log(countLocal.UserCount)
          //window.location.href = "TrangCuoi.html"
     }
})
function pushQuestionToLocal(question) {
     localStorage.setItem("questions", JSON.stringify(question))
}
