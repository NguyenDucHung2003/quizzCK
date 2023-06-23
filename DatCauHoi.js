let arrayTypeQuetion = [
     {
          id: 1,
          typeQuestion: "questionRadio",
          lable: "Câu hỏi một đáp án (Radio)",
     },
     {
          id: 2,
          typeQuestion: "questionCheckBox",
          lable: "Câu hỏi nhiều hoặc một đáp án (CheckBox)",
     },
     {
          id: 3,
          typeQuestion: "questionButton",
          lable: "Câu hỏi một đáp án (Button)",
     },
     {
          id: 4,
          typeQuestion: "questionOptions",
          lable: " Câu hỏi nối đáp án (Option)",
     },
     {
          id: 5,
          typeQuestion: "questionText",
          lable: "Câu hỏi chữ (Text)",
     },
]
const $ = (id) => document.getElementById(id)
VoidDataOptions()
function VoidDataOptions() {
     const divQuestion = document.getElementById("questionType")
     divQuestion.innerHTML = ` <select id ="selectTypeQuestion">
          ${arrayTypeQuetion
               .map((question) => {
                    return `
             <div class="Answers_Options">
            
               <option id = "${question.id}" value="${question.typeQuestion}">${question.lable}</option>
               
             </div>
           `
               })
               .join("")}
     </select>
     `
}
const elementSelect = document.getElementById("selectTypeQuestion")
const valueQuestion = ` <input
type="text"
name=""
id="valueQuestion"
placeholder="Đặt câu hỏi"
/>`
const displayAnswerData = ` 
<input type="text" id="a" name = "answer" placeholder="Đáp án A" />
<input type="text" id="b" name = "answer" placeholder="Đáp án B" />
<input type="text" id="c" name = "answer" placeholder="Đáp án C" />
<input type="text" id="d" name = "answer" placeholder="Đáp án D" />
`
const displayQuestionOptionsData = `
<input
type="text"
name=""
id="valueQuestion"
placeholder="Đặt câu hỏi"
/>
`
if (elementSelect.value === "questionRadio") {
     $("displayAnswer").innerHTML = displayAnswerData
     $("questionData").innerHTML = ` <input
     type="text"
     id="valueQuestion"
     placeholder="Đặt câu hỏi"
     />`
     $("yesAnswer").innerHTML = `  
     <div>
     <div id="yesAnswer">
      Đáp án đúng
     </div>
     <div>
          <label for="a">Đáp án A</label>
          <input type="radio" name="answerYes" id="answer_a"/>
     </div>
     <div>
          <label for="b">Đáp án B</label>
          <input type="radio" name="answerYes" id="answer_b"  />
     </div>
     <div>
          <label for="c">Đáp án C</label>
          <input type="radio" name="answerYes" id="answer_c"  />
     </div>
     <div>
          <label for="d">Đáp án D</label>
          <input type="radio" name="answerYes" id="answer_d"  />
     </div>
     </div>`
}
// check dap an dung cua check box
let questionTypeCheckBox
// check dap an dung cua button
let questionTypeButton
//chack dap an dung cua option
let questionTypeOptions
CheckDataOptions()
function CheckDataOptions() {
     const optionData = `
     <option>a</option>
     <option>b</option>
     <option>c</option>
     <option>d</option>`
     elementSelect.onchange = () => {
          if (elementSelect.value === "questionRadio") {
               $("displayAnswer").innerHTML = displayAnswerData
               $("questionData").innerHTML = ` <input
               type="text"
               name=""
               id="valueQuestion"
               placeholder="Đặt câu hỏi"
               />`
               $("yesAnswer").innerHTML = `  
               <div>
               <div id="yesAnswer">
               Đáp án đúng
               </div>
               <div>
                    <label for="a">Đáp án A</label>
                    <input type="radio" name="answerYes" id="answer_a"/>
               </div>
               <div>
                    <label for="b">Đáp án B</label>
                    <input type="radio" name="answerYes" id="answer_b"  />
               </div>
               <div>
                    <label for="c">Đáp án C</label>
                    <input type="radio" name="answerYes" id="answer_c"  />
               </div>
               <div>
                    <label for="d">Đáp án D</label>
                    <input type="radio" name="answerYes" id="answer_d"  />
               </div>
          </div>`
          }
          if (elementSelect.value === "questionButton") {
               $("displayAnswer").innerHTML = displayAnswerData
               $("questionData").innerHTML = ` <input
               type="text"
               name=""
               id="valueQuestion"
               placeholder="Đặt câu hỏi"
               />`
               $("yesAnswer").innerHTML = ` <div>
                <div id="yesAnswer">
               Đáp án đúng </div>
               <div>
               <label for="a">Đáp án A</label>
                <input type="radio" name="answerYes" id="answer_a"/>
               </div>
              <div>
              <label for="b">Đáp án B</label>
              <input type="radio" name="answerYes" id="answer_b"  />
              </div>
               <div>
               <label for="c">Đáp án C</label>
                <input type="radio" name="answerYes" id="answer_c"  />
               </div>
              <div>
              <label for="d">Đáp án D</label>
               <input type="radio" name="answerYes" id="answer_d"  />
              </div>
          </div>`
               questionTypeButton =
                    document.querySelectorAll(`input[type ="radio"]`)
          }
          if (elementSelect.value === "questionCheckBox") {
               $("displayAnswer").innerHTML = displayAnswerData
               $("questionData").innerHTML = ` <input
               type="text"
               name=""
               id="valueQuestion"
               placeholder="Đặt câu hỏi"
               />`
               $("yesAnswer").innerHTML = `
               <div>
               <div id="yesAnswer">
               Đáp án đúng </div>
               <div>
                     <label for="answer_a">Đáp án A</label>
                     <input type="checkbox" id="answer_a" />
                   
               </div>
               <div>
                     <label for="answer_b">Đáp án B</label>
                    <input type="checkbox" name="" id="answer_b"  />
                   
               </div>
               <div>
                         <label for="answer_c">Đáp án C</label>
                        <input type="checkbox" name="" id="answer_c"  />
                     
               </div>
               <div>
                    <label for="answer_d">Đáp án D</label>
                     <input type="checkbox" name="" id="answer_d" />
                     
               </div>
              
          </div>`
               questionTypeCheckBox = document.querySelectorAll(
                    `input[type ="checkbox"]`
               )
          }
          if (elementSelect.value === "questionOptions") {
               $("defaultAnswer").innerHTML = "Các sự lựa chọn"
               $("questionData").innerHTML = `
          <input
               type="text"
               name="questionOptions"
               id="valueQuestion"
               placeholder="Đặt đề bài câu hỏi" />
          <input
               type="text"
               name="question"
               id="valueQuestion_a"
               placeholder="Đặt câu hỏi A" />
          <input
               type="text"
               name="question"
               id="valueQuestion_b"
               placeholder="Đặt câu hỏi B" />
          <input
               type="text"
               name="question"
               id="valueQuestion_c"
               placeholder="Đặt câu hỏi C" />
          <input
               type="text"
               name="question"
               id="valueQuestion_d"
               placeholder="Đặt câu hỏi D" />
          `
               $("yesAnswer").innerHTML = `
          <div>Đáp án đúng của câu hỏi A là </div> 
          <select id="select_a" name="options">
                     ${optionData}
          </select>
               <div>Đáp án đúng câu hỏi B là </div>
          <select id="select_b" name="options">
                     ${optionData}
          </select>
               <div>Đáp án đúng câu hỏi C là </div>
          <select id="select_c" name="options">
                    ${optionData}
               </select>
               <div>Đáp án đúng câu hỏi D là </div>
          <select id="select_d" name="options">
                    ${optionData}
               </select>
               `
          }
          if (elementSelect.value === "questionText") {
               $("defaultAnswer").innerHTML = "Đáp án đúng"
               $("questionData").innerHTML = `${valueQuestion} `
               $("displayAnswer").innerHTML = ""
               $("yesAnswer").innerHTML = `
               <input type="text" id="answerText" placeholder="Đáp án đúng"/> 
               `
          }
          $("valueQuestion") ? ($("valueQuestion").value = "") : null
     }
}

let ArrayData = []
let nextId = 1
let currentId
let questionTypeRadio = document.querySelectorAll(`input[type ="radio"]`)
$("Send").onclick = () => {
     if ($("valueQuestion").value !== "" && $("valueQuestion").value !== " ") {
          currentId = nextId++
     }
     let questionTypeRadioText = document.querySelectorAll(
          `input[type ="text"][name= "answer"]`
     )
     if (
          $("valueQuestion").value.includes("<") &&
          $("valueQuestion").value.includes(">")
     ) {
          $("valueQuestion").value = $("valueQuestion")
               .value.replaceAll("<", "&lt;")
               .replaceAll(">", "&gt;")
     }
     if ($("a")) {
          if ($("a").value.includes("<") && $("a").value.includes(">")) {
               $("a").value = $("a")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
          if ($("b").value.includes("<") && $("b").value.includes(">")) {
               $("b").value = $("b")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
          if ($("c").value.includes("<") && $("c").value.includes(">")) {
               $("c").value = $("c")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
          if ($("d").value.includes("<") && $("d").value.includes(">")) {
               $("d").value = $("d")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
     } else {
          null
     }
     if ($("answerText")) {
          if (
               $("answerText").value.includes("<") &&
               $("answerText").value.includes(">")
          ) {
               $("answerText").value = $("answerText")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
     } else {
          null
     }

     if (
          elementSelect.value === "questionRadio" &&
          $("valueQuestion").value != ""
     ) {
          let radioId
          let valueRadio
          for (let i = 0; i < questionTypeRadio.length; i++) {
               if (questionTypeRadio[i].checked) {
                    radioId = questionTypeRadio[i].id.slice(7, 8)
                    if (radioId == questionTypeRadioText[i].id) {
                         valueRadio = questionTypeRadio[i].value =
                              questionTypeRadioText[i].value
                    }
               }
          }
          ArrayData.push({
               id: currentId,
               type: elementSelect.value,
               question: `Câu ${currentId}: ${$("valueQuestion").value}`,
               answers: [
                    {
                         id: `${currentId}_${$("a").id}`,
                         value: $("a").id,
                         label: $("a").value,
                    },
                    {
                         id: `${currentId}_${$("b").id}`,
                         value: $("b").id,
                         label: $("b").value,
                    },
                    {
                         id: `${currentId}_${$("c").id}`,
                         value: $("c").id,
                         label: $("c").value,
                    },
                    {
                         id: `${currentId}_${$("d").id}`,
                         value: $("d").id,
                         label: $("d").value,
                    },
               ],
               answerYes: {
                    id: `${currentId}_${radioId}`,
                    value: radioId,
                    label: valueRadio,
               },
          })
          // console.log(ArrayData)
     }
     if (
          elementSelect.value === "questionCheckBox" &&
          $("valueQuestion").value != ""
     ) {
          let questionTypeCheckBoxText = document.querySelectorAll(
               `input[type ="text"][name= "answer"]`
          )

          let arrayAnswerYes = []
          for (let i = 0; i < questionTypeCheckBox.length; i++) {
               if (questionTypeCheckBox[i].checked) {
                    let CheckBoxId = questionTypeRadio[i].id.slice(7, 8)
                    let CheckBoxValue
                    if (CheckBoxId == questionTypeCheckBoxText[i].id) {
                         CheckBoxValue = questionTypeCheckBox[i].value =
                              questionTypeCheckBoxText[i].value
                    }
                    arrayAnswerYes.push({
                         id: `${currentId}_${CheckBoxId}`,
                         value: CheckBoxId,
                         label: CheckBoxValue,
                    })
               }
          }
          ArrayData.push({
               id: currentId,
               type: elementSelect.value,
               question: `Câu ${currentId}: ${$("valueQuestion").value}`,
               answers: [
                    {
                         id: `${currentId}_${$("a").id}`,
                         value: $("a").id,
                         label: $("a").value,
                    },
                    {
                         id: `${currentId}_${$("b").id}`,
                         value: $("b").id,
                         label: $("b").value,
                    },
                    {
                         id: `${currentId}_${$("c").id}`,
                         value: $("c").id,
                         label: $("c").value,
                    },
                    {
                         id: `${currentId}_${$("d").id}`,
                         value: $("d").id,
                         label: $("d").value,
                    },
               ],
               answerYes: arrayAnswerYes,
          })
          // console.log(ArrayData)
     }
     if (
          elementSelect.value === "questionButton" &&
          $("valueQuestion").value != ""
     ) {
          let questionTypeButtonText = document.querySelectorAll(
               `input[type ="text"][name= "answer"]`
          )
          let buttonId
          let valueButton
          for (let i = 0; i < questionTypeButton.length; i++) {
               if (questionTypeButton[i].checked) {
                    buttonId = questionTypeButton[i].id.slice(7, 8)
                    if (buttonId == questionTypeButtonText[i].id) {
                         valueButton = questionTypeButton[i].value =
                              questionTypeButtonText[i].value
                    }
               }
          }
          ArrayData.push({
               id: currentId,
               type: elementSelect.value,
               question: `Câu ${currentId}: ${$("valueQuestion").value}`,
               answers: [
                    {
                         id: `${currentId}_${$("a").id}`,
                         value: $("a").id,
                         label: $("a").value,
                    },
                    {
                         id: `${currentId}_${$("b").id}`,
                         value: $("b").id,
                         label: $("b").value,
                    },
                    {
                         id: `${currentId}_${$("c").id}`,
                         value: $("c").id,
                         label: $("c").value,
                    },
                    {
                         id: `${currentId}_${$("d").id}`,
                         value: $("d").id,
                         label: $("d").value,
                    },
               ],
               answerYes: {
                    id: `${currentId}_${buttonId}`,
                    value: buttonId,
                    label: valueButton,
               },
          })
          // console.log(ArrayData)
     }
     if (
          elementSelect.value === "questionOptions" &&
          $("valueQuestion").value != ""
     ) {
          let questionTypeOptionsText = document.querySelectorAll(
               `input[type ="text"][name= "question"]`
          )
          if (
               $("valueQuestion_a").value.includes("<") &&
               $("valueQuestion_a").value.includes(">")
          ) {
               $("valueQuestion_a").value = $("valueQuestion_a")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
          if (
               $("valueQuestion_b").value.includes("<") &&
               $("valueQuestion_b").value.includes(">")
          ) {
               $("valueQuestion_b").value = $("valueQuestion_b")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
          if (
               $("valueQuestion_c").value.includes("<") &&
               $("valueQuestion_c").value.includes(">")
          ) {
               $("valueQuestion_c").value = $("valueQuestion_c")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
          if (
               $("valueQuestion_d").value.includes("<") &&
               $("valueQuestion_d").value.includes(">")
          ) {
               $("valueQuestion_d").value = $("valueQuestion_d")
                    .value.replaceAll("<", "&lt;")
                    .replaceAll(">", "&gt;")
          }
          let arrayAnswers = []
          for (let i = 0; i < questionTypeOptionsText.length; i++) {
               let questionOptionsId = questionTypeOptionsText[i].id.slice(
                    14,
                    15
               )
               arrayAnswers.push({
                    id: `${currentId}_${questionOptionsId}`,
                    value: questionOptionsId,
                    label: questionTypeOptionsText[i].value,
               })
          }
          let arrayAnswerYes = []
          let answerTypeOptionsText = document.querySelectorAll(
               `input[type ="text"][name= "answer"]`
          )
          for (let i = 0; i < answerTypeOptionsText.length; i++) {
               let answerOptionsId = answerTypeOptionsText[i].id
               arrayAnswerYes.push({
                    id: `${currentId}_${answerOptionsId}`,
                    value: answerOptionsId,
                    label: answerTypeOptionsText[i].value,
               })
          }
          let selectText = document.querySelectorAll(`select[name= "options"]`)
          let arrayyesAnswerYes = []
          for (let i = 0; i < selectText.length; i++) {
               for (let j = 0; j < answerTypeOptionsText.length; j++) {
                    let answerYesOptionsId = answerTypeOptionsText[j].id
                    let text
                    if (selectText[i].value == answerYesOptionsId) {
                         text = answerTypeOptionsText[j].value
                    }
                    if (text !== undefined) {
                         arrayyesAnswerYes.push({
                              id: `${currentId}_${selectText[i].value}`,
                              value: `${selectText[i].value}`,
                              label: text,
                         })
                    } else {
                         null
                    }
               }
          }

          ArrayData.push({
               id: currentId,
               type: elementSelect.value,
               question: `Câu ${currentId}:  ${$("valueQuestion").value}`,
               answers: arrayAnswers,
               answerYes: arrayAnswerYes,
               yesAnswerYes: arrayyesAnswerYes,
          })
          // console.log(ArrayData)
     }
     if (
          elementSelect.value === "questionText" &&
          $("valueQuestion").value != ""
     ) {
          let answerYes = $("answerText").value
          ArrayData.push({
               id: currentId,
               type: elementSelect.value,
               question: `Câu ${currentId}: ${$("valueQuestion").value}`,
               answersYes: answerYes,
          })
          // console.log(ArrayData)
     }
     $("valueQuestion") ? ($("valueQuestion").value = "") : null
     $("c") ? ($("c").value = "") : null
     $("a") ? ($("a").value = "") : null
     $("b") ? ($("b").value = "") : null
     $("d") ? ($("d").value = "") : null
     $("valueQuestion_c") ? ($("valueQuestion_c").value = "") : null
     $("valueQuestion_a") ? ($("valueQuestion_a").value = "") : null
     $("valueQuestion_b") ? ($("valueQuestion_b").value = "") : null
     $("valueQuestion_d") ? ($("valueQuestion_d").value = "") : null
     $("answerText") ? ($("answerText").value = "") : null
     SendQuestionData()
}

// ArrayData

function SendQuestionData() {
     $("displayQuestionAnswer").innerHTML = ArrayData.map((answer) => {
          let deleteId = answer.id
          let deleteButtonId = `buttonDelete_${deleteId}`

          if (
               answer.type == "questionRadio" ||
               answer.type == "questionButton"
          ) {
               return `
               <div id="contentMain">
               <div>Câu hỏi thứ ${answer.id}</div>
                 <div>Kiểu câu hỏi ${answer.type}</div>
                 <div>Nội dung câu hỏi ${answer.question}</div>
                 <div>Các đáp án ${answer.answers.map((x) => x.label)}</div>
                 <div>Đáp án đúng ${answer.answerYes.label}</div>
                 <button id="${deleteButtonId}">Xóa</button>
               </div>
                 
                 <hr />
              `
          }

          if (answer.type == "questionCheckBox") {
               return `
               <div id="contentMain">
               <div>Câu hỏi thứ ${answer.id}</div>
                 <div>Kiểu câu hỏi ${answer.type}</div>
                 <div>Nội dung câu hỏi ${answer.question}</div>
                 <div>Các đáp án ${answer.answers.map((x) => x.label)}</div>
                 <div>Đáp án đúng ${answer.answerYes.map((x) => x.label)}</div>
                 <button id="${deleteButtonId}">Xóa</button>
               </div>
                 
                 <hr />
              `
          }

          if (answer.type == "questionOptions") {
               return `
               <div id="contentMain">
                <div>Câu hỏi thứ ${answer.id}</div>
                 <div>Kiểu câu hỏi ${answer.type}</div>
                 <div>Nội dung câu hỏi ${answer.question}</div>
                 <div>Các câu hỏi ${answer.answers.map((x) => x.label)}</div>
                 <div>Các đáp án có thể chọn ${answer.answerYes.map(
                      (x) => x.label
                 )}</div>
                 <div>Thứ tự lần lượt các đáp án đúng ${answer.yesAnswerYes.map(
                      (x) => x.label
                 )}</div>
                 <button id="${deleteButtonId}">Xóa</button>
               </div>
                
                 <hr />
              `
          }

          if (answer.type == "questionText") {
               return `
               <div id="contentMain">
                <div>Câu hỏi thứ ${answer.id}</div>
                 <div>Kiểu câu hỏi ${answer.type}</div>
                 <div>Nội dung câu hỏi ${answer.question}</div>
                 <div>Đáp án đúng ${answer.answersYes}</div>
                 <button id="${deleteButtonId}">Xóa</button>
               </div>
                
                 <hr />
              `
          }
     }).join("")

     let deleteButtons = document.querySelectorAll(
          "button[id^='buttonDelete_']"
     )
     let counter = 1 // Biến để cập nhật lại ID

     deleteButtons.forEach((button) => {
          button.onclick = () => {
               let deleteId = button.id.slice(13) // Lấy phần tử ID sau "buttonDelete_"
               ArrayData = ArrayData.filter(
                    (data) => data.id !== Number(deleteId)
               )

               // Cập nhật lại ID cho các câu hỏi còn lại
               ArrayData = ArrayData.map((data) => {
                    data.id = counter++
                    let convertId = data.id.toString()
                    if (data.type == "questionRadio") {
                         data.question =
                              data.question.split(" ")[0] +
                              " " +
                              convertId +
                              " " +
                              data.question.slice(6)
                         data.answerYes.id =
                              convertId + "_" + data.answerYes.id.split("_")[1]
                         data.answers.map(
                              (answer) =>
                                   (answer.id =
                                        convertId +
                                        "_" +
                                        answer.id.split("_")[1])
                         )
                    }
                    if (data.type == "questionCheckBox") {
                         data.question =
                              data.question.split(" ")[0] +
                              " " +
                              convertId +
                              " " +
                              data.question.slice(6)
                         data.answerYes.map(
                              (answer) =>
                                   (answer.id =
                                        convertId +
                                        "_" +
                                        answer.id.split("_")[1])
                         )
                         data.answers.map(
                              (answer) =>
                                   (answer.id =
                                        convertId +
                                        "_" +
                                        answer.id.split("_")[1])
                         )
                    }
                    if (data.type == "questionButton") {
                         data.question =
                              data.question.split(" ")[0] +
                              " " +
                              convertId +
                              " " +
                              data.question.slice(6)
                         data.answerYes.id =
                              convertId + "_" + data.answerYes.id.split("_")[1]
                         data.answers.map(
                              (answer) =>
                                   (answer.id =
                                        convertId +
                                        "_" +
                                        answer.id.split("_")[1])
                         )
                    }
                    if (data.type == "questionOptions") {
                         data.question =
                              data.question.split(" ")[0] +
                              " " +
                              convertId +
                              " " +
                              data.question.slice(6)
                         data.answers.map(
                              (answer) =>
                                   (answer.id =
                                        convertId +
                                        "_" +
                                        answer.id.split("_")[1])
                         )
                         data.answerYes.map(
                              (answer) =>
                                   (answer.id =
                                        convertId +
                                        "_" +
                                        answer.id.split("_")[1])
                         )
                         data.yesAnswerYes.map(
                              (answer) =>
                                   (answer.id =
                                        convertId +
                                        "_" +
                                        answer.id.split("_")[1])
                         )
                    }
                    if (data.type == "questionText") {
                         data.question =
                              data.question.split(" ")[0] +
                              " " +
                              convertId +
                              " " +
                              data.question.slice(6)
                    }
                    return data
               })
               SendQuestionData() // Gọi lại hàm SendQuestionData để hiển thị dữ liệu mới
          }
     })
}
$("confirm").onclick = () => {
     var result = confirm("Bạn đã chắc chắn ")
     if (result == true) {
          localStorage.setItem("ArrayDataQuestion", JSON.stringify(ArrayData))
          localStorage.setItem("TimeWork", JSON.stringify($("time").value))
          window.location.href = "NewTrangGiua.html"
     }
}
let x = JSON.parse(localStorage.getItem("countacc"))
if (x <= 0) {
     window.location.href = "Dangnhap.html"
}
