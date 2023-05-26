import {
     questionData,
     questionDataCheckBox,
     questionDataButton,
     questionOptions,
} from "./Data.js"
const $ = (id) => document.getElementById(id)

VoidDataRadio()
function VoidDataRadio() {
     const divQuestion = document.getElementById("container_Radio")
     divQuestion.innerHTML = questionData
          .map((question) => {
               return `<div class="Question_Radio">${question.question}</div>
    <div class="Answers_Radio">
      ${question.answers
           .map((answer) => {
                return `<input type="radio" id="${answer.id}" name="question_${question.id}" value="${answer.label}" /> <label for="${answer.id}">${answer.label}</label><br />`
           })
           .join("")}
    </div>`
          })
          .join("")
}

VoidDataCheckBox()
function VoidDataCheckBox() {
     const divQuestion = document.getElementById("container_CheckBox")
     divQuestion.innerHTML = questionDataCheckBox
          .map((question) => {
               return `<div class="Question_CheckBox">${question.question}</div>
    <div class="Answers_CheckBox">
      ${question.answers
           .map((answer) => {
                return `<input type="checkbox" id="${answer.id}" name="question_${question.id}" value="${answer.label}" /> <label for="${answer.id}">${answer.label}</label><br />`
           })
           .join("")}
    </div>`
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
        </div>
      `
          })
          .join("")
}

VoidDataButton()
function VoidDataButton() {
     const divQuestion = document.getElementById("container_Button")
     divQuestion.innerHTML = questionDataButton
          .map((question) => {
               return `<div class="Question_Button">${question.question}</div>
      <div class="Answers_Button">
        ${question.answers
             .map((answer) => {
                  return `<input type="button"  id="${answer.id}" name="question_${question.id}" value="${answer.label}" /> <br />`
             })
             .join("")}
      </div>`
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

$("form").addEventListener("click", () => {
     let count = 0.0
     let ArrayCheck = []
     questionData.forEach((question) => {
          const selectedAnswer = document.querySelector(
               `input[name="question_${question.id}"]:checked`
          )
          const numberAnswer = selectedAnswer.id.split("_")[0]
          const result = selectedAnswer.id.split("_")[1]
          const typeQuestion = question.type
          ArrayCheck.push([{ numberAnswer, result, typeQuestion }])

          if (selectedAnswer && selectedAnswer.id === question.answerYes.id) {
               count++
          }
          console.log("count radio", count)
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
          console.log("countCheckB", count)
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
     console.log("selectButton", selectButton)
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
     console.log("Count But", count)
     ArrayCheck.push(selectButton)

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
          console.log("checkOptionsYes", checkOptionsYes)
          const checkOptions = []
          selectedOptions.forEach((option) => {
               checkOptions.push(
                    `${option.numberAnswer_Options}_${option.result_Options}`
               )
          })
          // function checkArrays(arr1, arr2) {
          //   // Kiểm tra độ dài của hai mảng
          //   if (arr1.length !== arr2.length) {
          //     return false // Khác độ dài, không cùng thứ tự
          //   }

          //   // So sánh từng phần tử của hai mảng
          //   for (let i = 0; i < arr1.length; i++) {
          //     if (arr1[i] !== arr2[i]) {
          //       return false // Khác giá trị, không cùng thứ tự
          //     }
          //   }

          //   return true // Cùng thứ tự và giá trị
          // }
          let g = 0
          // if (checkArrays(checkOptionsYes, checkOptions)) {
          //   g++
          //   count += 0.25
          // }
          for (let i = 0; i < checkOptionsYes.length; i++) {
               if (checkOptionsYes[i] === checkOptions[i]) {
                    g++
                    count += 0.25
               }
          }

          console.log("checkOptions", checkOptions)
          // for (let i = 0; i < checkOptionsYes.length; i++) {
          //   for (let j = 0; j < checkOptions.length; j++) {
          //     if (checkOptionsYes[i] === checkOptions[j]) {
          //     }
          //   }
          // }
          console.log("cau dung", g)
          console.log("Count But2", count)
          ArrayCheck.push(selectedOptions)
     }
     checkSelectedOptions()
     // console.log(ArrayCheck)
     pushQuestionToLocal(ArrayCheck)
     var result = confirm("Bạn đã chắc chắn nộp bài ")
     if (result == true) {
          alert("Bạn được" + " " + count + " " + "điểm")
          // window.location.href = "TrangCuoi.html"
     } else {
          alert("Chưa chắn chắn ")
     }
})

function pushQuestionToLocal(question) {
     localStorage.setItem("questions", JSON.stringify(question))
}
