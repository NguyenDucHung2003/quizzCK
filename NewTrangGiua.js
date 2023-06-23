import { newQuestionSum } from "./Data.js"
const $ = (id) => document.getElementById(id)
let x = JSON.parse(localStorage.getItem("countacc"))
if (x <= 0) {
     window.location.href = "Dangnhap.html"
}
$("container-map").innerHTML = `<table>
<tr>
     ${newQuestionSum
          .map((x) => {
               if (x.type == "questionRadio")
                    return `<td id="question_${x.id}"><a href="#${x.id}">${x.id}</a></td>`
               return ""
          })
          .join("")}
</tr>
<tr>
     ${newQuestionSum
          .map((x) => {
               if (x.type == "questionCheckBox")
                    return `<td id="question_${x.id}"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
<tr>
     ${newQuestionSum
          .map((x) => {
               if (x.type == "questionButton")
                    return `<td id="question_${x.id}"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
<tr>
     ${newQuestionSum
          .map((x) => {
               if (x.type == "questionOptions")
                    return `<td id="question_${x.id}"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
<tr>
     ${newQuestionSum
          .map((x) => {
               if (x.type == "questionText")
                    return `<td id="question_${x.id}"><a href="#${x.id}">${x.id}</a></td>`
          })
          .join("")}
</tr>
</table>`
VoidDataRadio()
function VoidDataRadio() {
     const divQuestion = document.getElementById("container_Radio")
     divQuestion.innerHTML = newQuestionSum
          .map((question, index) => {
               if (question.type == "questionRadio") {
                    return `<div id="TypeRadio_${index + 1}">
               <div class="Question_Radio" id="${question.id}">${
                         question.question
                    }</div>
    <div class="Answers_Radio">
      ${question.answers
           .map((answer) => {
                return `<div class="inputRadio"><input type="radio" id="${answer.id}" name="question_${question.id}" value="${answer.label}" /> <label for="${answer.id}">${answer.label}</label></div>`
           })
           .join("")}
    </div></div>`
               }
          })
          .join("")
}

VoidDataCheckBox()
function VoidDataCheckBox() {
     const divQuestion = document.getElementById("container_CheckBox")
     divQuestion.innerHTML = newQuestionSum
          .map((question, index) => {
               if (question.type == "questionCheckBox") {
                    return `<div id="TypeCheckBox_${
                         index + 1
                    }">  <div class="Question_CheckBox" id="${question.id}">${
                         question.question
                    }</div>
     <div class="Answers_CheckBox">
          ${question.answers
               .map((answer) => {
                    return `<div class="TypeCheckBoxChild"><input type="checkbox" id="${answer.id}" name="question_${question.id}" value="${answer.label}" /> <label for="${answer.id}">${answer.label}</label></div>`
               })
               .join("")}
     </div> </div>`
               }
          })
          .join("")
}
VoidDataButton()
function VoidDataButton() {
     const divQuestion = document.getElementById("container_Button")
     divQuestion.innerHTML = newQuestionSum
          .map((question) => {
               if (question.type == "questionButton") {
                    return ` <div class="TypeButton"><div class="Question_Button" id="${
                         question.id
                    }">${question.question}</div>
      <div class="Answers_Button">
        ${question.answers
             .map((answer) => {
                  return `<div class="TypeButtonChild"><input type="button" class="Answers_Button_Input"  id="${answer.id}" name="question_${question.id}" value="${answer.label}" /></div>`
             })
             .join("")}
      </div></div>`
               }
          })
          .join("")
}

VoidDataOptions()
function VoidDataOptions() {
     const divQuestion = document.getElementById("container_Options")
     divQuestion.innerHTML = newQuestionSum
          .map((question) => {
               if (question.type == "questionOptions") {
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
        <div class="Question_Options" id="${question.id}">${question.question}</div>
        <div class="QuestionAnswers_Options">
          ${answerInputs}
        </div>
        <div class="Answers_Options">
          <select name="answer_${question.id}">
          ${answerOptions} 
          </select>
          <select name="answer_${question.id}">
          ${answerOptions} 
          </select>
          <select name="answer_${question.id}">
         ${answerOptions} 
          </select>
          <select name="answer_${question.id}">
          ${answerOptions} 
          </select>
        </div></div>
      `
               }
          })
          .join("")
}

VoidataText()
function VoidataText() {
     const divQuestion = document.getElementById("container_Text")
     divQuestion.innerHTML = newQuestionSum
          .map((question) => {
               if (question.type == "questionText") {
                    return ` <div class="TypeText">
               <div class="Question_Text" id="${question.id}">${question.question}</div>
               <input class="Answer_Text" type="text" id="${question.id}" name="questiontext_${question.id}" placeholder ="Nhập đáp án vào đây"/>
               </div>
               `
               }
          })
          .join("")
}

newQuestionSum.forEach((question) => {
     if (question.type == "questionButton") {
          const textButtons = document.querySelectorAll(
               `input[type="button"][name="question_${question.id}"]`
          )
          textButtons.forEach((button) => {
               button.addEventListener("click", (e) => {
                    if (e.target.id.split("_")[0] == question.id) {
                         $(`question_${question.id}`).style.backgroundColor =
                              "red"
                    }
                    textButtons.forEach((btn) => {
                         return btn.classList.remove("active")
                    })
                    button.classList.add("active")
               })
          })
     }
})

checkedOption()
function checkedOption() {
     const textOptions = document.querySelectorAll(`select`)
     textOptions.forEach((x) => {
          x.addEventListener("change", (e) => {
               console.log(e.target.name.substr(7))
               newQuestionSum.forEach((typeQuestion) => {
                    if (typeQuestion.type == "questionOptions")
                         if (e.target.name.substr(7) == typeQuestion.id)
                              $(
                                   `question_${typeQuestion.id}`
                              ).style.backgroundColor = "red"
               })
          })
     })
}
checkText()
function checkText() {
     const textText = document.querySelectorAll(`input.Answer_Text`)
     textText.forEach((x) => {
          x.addEventListener("change", (e) => {
               console.log(e.target.value)
               newQuestionSum.forEach((typeQuestion) => {
                    if (typeQuestion.type == "questionText") {
                         if (
                              e.target.id == typeQuestion.id &&
                              e.target.value !== undefined
                         ) {
                              $(
                                   `question_${typeQuestion.id}`
                              ).style.backgroundColor = "red"
                         }
                         if (
                              e.target.id == typeQuestion.id &&
                              e.target.value === ""
                         ) {
                              $(
                                   `question_${typeQuestion.id}`
                              ).style.backgroundColor = "antiquewhite"
                         }
                    }
               })
          })
     })
}

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

// countdown()
// function countdown() {
//      var i = 1800000
//      let minutes = Math.floor((i % (1000 * 60 * 60)) / (1000 * 60))
//      let seconds = Math.floor((i % (1000 * 60)) / 1000)
//      document.getElementById("time").innerHTML = minutes + "m " + seconds + "s "
//      let x = setInterval(function () {
//           document.getElementById("time").innerHTML =
//                minutes + "m " + seconds + "s "
//           seconds--
//           if (seconds < 0) {
//                seconds = 59
//                minutes--
//           }
//           i--
//           if (i < 0) {
//                clearInterval(x)
//                document.getElementById("time").innerHTML = "Hết giờ!"
//           }
//      }, 1000)
//      setTimeout(() => {
//           window.location.href = "NewTrangCuoi.html"
//      }, 1800000)
// }
let timeWork = Number(JSON.parse(localStorage.getItem("TimeWork")))
countdown()
function countdown() {
     let i = timeWork * 60 // Convert timeWork to minutes
     let minutes, seconds

     let x = setInterval(function () {
          minutes = Math.floor(i / 60)
          seconds = i % 60

          document.getElementById("time").innerHTML =
               minutes + "m " + seconds + "s "

          if (i <= 0) {
               clearInterval(x)
               document.getElementById("time").innerHTML = "Hết giờ!"
               setTimeout(() => {
                    window.location.href = "NewTrangCuoi.html"
               }, 1000)
          }

          i--
     }, 1000)
}

RadioChecked()
function RadioChecked() {
     newQuestionSum.forEach((typeQuestion) => {
          if (typeQuestion.type == "questionRadio") {
               let x = document.querySelectorAll(
                    `#TypeRadio_${typeQuestion.id} .Answers_Radio .inputRadio`
               )
               console.log(x)
               let y = document.querySelectorAll(
                    `#TypeRadio_${typeQuestion.id} input[type=radio]`
               )
               for (let i = 0; i < y.length; i++) {
                    y[i].addEventListener("change", () => {
                         if (y[i].checked) {
                              for (let j = 0; j < x.length; j++) {
                                   x[j].style.backgroundColor = "white"
                              }
                              x[i].style.backgroundColor = "#54e369"
                              $(
                                   `question_${typeQuestion.id}`
                              ).style.backgroundColor = "red"
                         }
                    })
               }
          }
     })
}
CheckCheckBox()
function CheckCheckBox() {
     newQuestionSum.forEach((typeQuestion) => {
          if (typeQuestion.type == "questionCheckBox") {
               let checkboxStates = []
               let x = document.querySelectorAll(
                    `#TypeCheckBox_${typeQuestion.id} .Answers_CheckBox .TypeCheckBoxChild`
               )
               let y = document.querySelectorAll(
                    `#TypeCheckBox_${typeQuestion.id} input[type=checkbox]`
               )
               for (let i = 0; i < y.length; i++) {
                    checkboxStates.push(false)
                    y[i].addEventListener("change", () => {
                         checkboxStates[i] = y[i].checked
                         console.log(y[i].checked)
                         if (checkboxStates[i]) {
                              $(
                                   `question_${typeQuestion.id}`
                              ).style.backgroundColor = "red"
                              x[i].style.backgroundColor = "#54e369"
                         } else {
                              $(
                                   `question_${typeQuestion.id}`
                              ).style.backgroundColor = "antiquewhite"
                              x[i].style.backgroundColor = "antiquewhite"
                         }
                    })
               }
          }
     })
}

$("form").addEventListener("click", () => {
     let count = 0.0
     let ArrayCheck = []
     newQuestionSum.forEach((question) => {
          if (question.type == "questionRadio") {
               const selectedAnswer = document.querySelector(
                    `input[type ="radio"][name="question_${question.id}"]:checked`
               )
               const numberAnswer = selectedAnswer?.id.split("_")[0]
               const result = selectedAnswer?.id.split("_")[1]
               const typeQuestion = question.type
               ArrayCheck.push([{ numberAnswer, result, typeQuestion }])
               if (
                    selectedAnswer &&
                    selectedAnswer.id === question.answerYes.id
               ) {
                    count++
               }
          }
     })

     newQuestionSum.forEach((question) => {
          if (question.type == "questionCheckBox") {
               const selectedAnswers = document.querySelectorAll(
                    `input[type="checkbox"][name="question_${question.id}"]:checked`
               )
               selectedAnswers.forEach((selectAnswer) => {
                    const [numberAnswer_CheckBox, result_CheckBox] =
                         selectAnswer?.id.split("_")
                    const typeQuestion = question.type
                    ArrayCheck.push([
                         {
                              numberAnswer_CheckBox,
                              result_CheckBox,
                              typeQuestion,
                         },
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
          }
     })

     const clasButton = document.getElementsByClassName("active")
     const selectButton = []
     const checkButtonYes = []
     newQuestionSum.forEach((question) => {
          if (question.type == "questionButton") {
               checkButtonYes.push(question.answerYes.id)
          }
     })

     for (let i = 0; i < clasButton.length; i++) {
          let x = clasButton[i].id
          const numberAnswer_Button = x.substring(0, 2)
          const result_Button = x.split("_")[1]
          let typeQuestion = ""
          newQuestionSum.forEach((question) => {
               if (question.type == "questionButton") {
                    typeQuestion = question.type
               }
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
               newQuestionSum.forEach((question) => {
                    if (question.type == "questionOptions") {
                         typeQuestion = question.type
                    }
               })

               selectedOptions.push({
                    numberAnswer_Options,
                    result_Options,
                    typeQuestion,
               })
          })
          const checkOptions = []
          selectedOptions.forEach((option) => {
               checkOptions.push(
                    `${option.numberAnswer_Options}_${option.result_Options}`
               )
          })
          const checkOptionsYes = []
          newQuestionSum.forEach((question) => {
               if (question.type == "questionOptions") {
                    question.yesAnswerYes.forEach((answer) => {
                         checkOptionsYes.push(answer.id)
                    })
               }
          })

          for (let i = 0; i < checkOptionsYes.length; i++) {
               if (checkOptionsYes[i] === checkOptions[i]) {
                    count += 0.25
               }
          }
          ArrayCheck.push(selectedOptions)
     }
     const selectText = []

     newQuestionSum.forEach((question) => {
          if (question.type == "questionText") {
               const selectedAnswerText = document.querySelectorAll(
                    `input[type=text][name="questiontext_${question.id}"]`
               )
               selectedAnswerText.forEach((answer) => {
                    const numberAnswer_Text = answer.id
                    const result_Text = answer.value
                    const typeQuestion = question.type
                    selectText.push({
                         numberAnswer_Text,
                         result_Text,
                         typeQuestion,
                    })
                    if (answer.value === question.answersYes) {
                         count++
                    }
               })
          }
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
          window.location.href = "NewTrangCuoi.html"
     }
})
function pushQuestionToLocal(question) {
     localStorage.setItem("questions", JSON.stringify(question))
}
