import {
     questionData,
     questionDataCheckBox,
     questionDataButton,
     questionOptions,
} from "./Data.js"
const $ = (id) => document.getElementById(id)

const check = (data) => {
     if (data.type === "questionRadio") {
          let arrayList = []
          const questions = JSON.parse(localStorage.getItem("questions"))
          questions.forEach((question) => {
               question.forEach((answer) => {
                    if (answer.typeQuestion === "questionRadio") {
                         arrayList.push(answer)
                    }
               })
          })
          arrayList.push(data)
          return `<div class="Question_Radio">${data.question}</div>
      <div class="Answers_Radio">
        ${data.answers
             .map((answer) => {
                  let checked = false
                  arrayList.forEach((answers) => {
                       if (
                            answer.id ===
                            `${answers.numberAnswer}_${answers.result}`
                       ) {
                            checked = true
                       }
                  })
                  return `<input type="radio" id="${answer.id}" value="${
                       answer.label
                  }" ${checked ? "checked" : ""} /> <label for="${answer.id}">${
                       answer.label
                  }</label><br />`
             })
             .join("")}
      </div>`
     }
     if (data.type === "questionCheckBox") {
          let arrayListCheckBox = []
          const questions = JSON.parse(localStorage.getItem("questions"))
          questions.forEach((question) => {
               question.forEach((answer) => {
                    if (answer.typeQuestion === "questionCheckBox") {
                         arrayListCheckBox.push(answer)
                    }
               })
          })
          arrayListCheckBox.push(data)
          return `<div class="Question_Button">${data.question}</div>
      <div class="Answers_Button">
        ${data.answers
             .map((answer) => {
                  let checked = false
                  arrayListCheckBox.forEach((answers) => {
                       if (
                            answer.id ===
                            `${answers.numberAnswer_CheckBox}_${answers.result_CheckBox}`
                       ) {
                            checked = true
                       }
                  })
                  return `<input type="checkbox" id="${answer.id}" value="${
                       answer.label
                  }" ${checked ? "checked" : ""} /> <label for="${answer.id}">${
                       answer.label
                  }</label><br />`
             })
             .join("")}
      </div>`
     }
}
const getDataButton = (data) => {
     let arrayList = []
     let bHTML
     if (data.type === "questionButton") {
          const questions = JSON.parse(localStorage.getItem("questions"))
          questions.forEach((question) => {
               question.forEach((answer) => {
                    if (answer.typeQuestion === "questionButton") {
                         arrayList.push(answer)
                    }
               })
          })
          arrayList.push(data)
          const number_resultsButtonArray = arrayList
               .map((obj) => {
                    if (
                         obj.numberAnswer_Button !== undefined &&
                         obj.result_Button !== undefined
                    )
                         return `${obj.numberAnswer_Button}_${obj.result_Button}`
               })
               .filter((value) => value !== undefined)
          bHTML = arrayList
               .map((answer) => {
                    let html
                    const activeButtons = []
                    if (answer.answers !== undefined) {
                         html = `<div class="Question_Button">${answer.question}</div>`
                         answer.answers.forEach((answers) => {
                              if (
                                   number_resultsButtonArray.includes(
                                        answers.id
                                   )
                              ) {
                                   activeButtons.push(
                                        `<input type="button" class="active"  id="${answers.id}" name="question_${answer.id}" value="${answers.label}" /> <br />`
                                   )
                              } else {
                                   activeButtons.push(
                                        `<input type="button" id="${answers.id}" name="question_${answer.id}" value="${answers.label}" /> <br />`
                                   )
                              }
                         })
                         html += activeButtons.join("")
                    }
                    return html
               })
               .join("")
     }
     return bHTML
}

const getDataOptions = (data) => {
     let arrayList = []
     let arrayListOptions = []
     let bHTML
     if (data.type === "questionOptions") {
          const questions = JSON.parse(localStorage.getItem("questions"))
          questions.forEach((question) => {
               question.forEach((answer) => {
                    if (answer.typeQuestion === "questionOptions") {
                         arrayList.push(answer)
                    }
               })
          })
     }
     arrayList.push(data)
     const number_resultsOptionsArray = arrayList
          .map((obj) => {
               if (
                    obj.numberAnswer_Options !== undefined &&
                    obj.result_Options !== undefined
               )
                    return `${obj.numberAnswer_Options}_${obj.result_Options}`
          })
          .filter((value) => value !== undefined)
     bHTML = arrayList
          .map((answer) => {
               let html
               const activeOptions = []
               if (answer.answers !== undefined) {
                    html = `<div class="Question_Options">${answer.question}</div>`
                    answer.answers.map((ans) => {
                         activeOptions.push(
                              `<input type="text" id="${ans.id}" name="question_${ans.id}" value="${ans.label}" />`
                         )
                    })
                    html += activeOptions.join("")
               }
               let activeOptionss = []
               if (answer.answerYes !== undefined) {
                    answer.answerYes.forEach((ansYes, index) => {
                         console.log(ansYes)
                         html += `<select name="answer_${ansYes.id}"> 
          <option id="option_${answer.id}_index_${index}" value="${ansYes.label}">${ansYes.label}</option>
          </select>`
                    })
               }

               return html
          })
          .join("")

     return bHTML
}
const getDataOptionsFake = (data) => {
     // let datas = 0
     let arrayList = []
     if (data.type === "questionOptions") {
          const questions = JSON.parse(localStorage.getItem("questions"))
          questions.forEach((question) => {
               question.forEach((answer) => {
                    if (answer.typeQuestion === "questionOptions") {
                         arrayList.push(answer)
                    }
               })
          })
     }
     // arrayList.push(data)
     console.log(data)
     const number_resultsOptionsArray = arrayList
          .map((obj) => {
               if (
                    obj.numberAnswer_Options !== undefined &&
                    obj.result_Options !== undefined
               )
                    return `${obj.numberAnswer_Options}_${obj.result_Options}`
          })
          .filter((obj) => obj !== undefined)
     // console.log(number_resultsOptionsArray)
     const answerInputs = data.answers
          .map((answer) => {
               return `<input type="text" id="${answer.id}" name="question_${data.id}" value="${answer.label}" />
          <br />`
          })
          .join("")
     return `
        <div class="Question_Options">${data.question}</div>
        <div class="QuestionAnswers_Options">
          ${answerInputs}
        </div>
        <div class="Answers_Options">
          <select name="answer_${data.id}_a" disabled>
           ${data.answerYes
                .map((answer, index) => {
                     let datas = index
                     let select = false

                     //  console.log("123", datas)
                     //  if (
                     //    `option_${answer.id}_index_${index}` ===
                     //    `option_${number_resultsOptionsArray[datas]}_index_${index}`
                     //  ) {
                     //    select = true
                     //  }
                     //  console.log("id", `option_${answer.id}_index_${index}`)
                     //  let y = number_resultsOptionsArray.forEach((x) => {
                     //       console.log(x)
                     //  })
                     //  console.log(y)

                     //  if (y === `option_${answer.id}_index_${index}`) {
                     //       select = true
                     //  }
                     let foundOption = number_resultsOptionsArray.find(
                          (option) =>
                               `option_${answer.id}_index_${index}` ===
                               `option_${option.numberAnswer_Options}_index_${index}`
                     )

                     if (foundOption) {
                          select = true
                     }

                     return `<option  ${
                          select ? "selected" : ""
                     } id = "option_${answer.id}_index_${index}" value="${
                          answer.value
                     }" >${answer.label}</option>`
                })
                .join("")}
          </select>
          <select name="answer_${data.id}_a" disabled>
           ${data.answerYes
                .map((answer, index) => {
                     let datas = index
                     let select = false

                     //  console.log("123", datas)
                     //  if (
                     //    `option_${answer.id}_index_${index}` ===
                     //    `option_${number_resultsOptionsArray[datas]}_index_${index}`
                     //  ) {
                     //    select = true
                     //  }
                     //  console.log("id", `option_${answer.id}_index_${index}`)
                     //  let y = number_resultsOptionsArray.forEach((x) => {
                     //       console.log(x)
                     //  })
                     //  console.log(y)

                     //  if (y === `option_${answer.id}_index_${index}`) {
                     //       select = true
                     //  }
                     let foundOption = number_resultsOptionsArray.find(
                          (option) =>
                               `option_${answer.id}_index_${index}` ===
                               `option_${option.numberAnswer_Options}_index_${index}`
                     )

                     if (foundOption) {
                          select = true
                     }

                     return `<option  ${
                          select ? "selected" : ""
                     } id = "option_${answer.id}_index_${index}" value="${
                          answer.value
                     }" >${answer.label}</option>`
                })
                .join("")}
          </select>
          <select name="answer_${data.id}_a" disabled>
           ${data.answerYes
                .map((answer, index) => {
                     let datas = index
                     let select = false

                     //  console.log("123", datas)
                     //  if (
                     //    `option_${answer.id}_index_${index}` ===
                     //    `option_${number_resultsOptionsArray[datas]}_index_${index}`
                     //  ) {
                     //    select = true
                     //  }
                     //  console.log("id", `option_${answer.id}_index_${index}`)
                     //  let y = number_resultsOptionsArray.forEach((x) => {
                     //       console.log(x)
                     //  })
                     //  console.log(y)

                     //  if (y === `option_${answer.id}_index_${index}`) {
                     //       select = true
                     //  }
                     let foundOption = number_resultsOptionsArray.find(
                          (option) =>
                               `option_${answer.id}_index_${index}` ===
                               `option_${option.numberAnswer_Options}_index_${index}`
                     )

                     if (foundOption) {
                          select = true
                     }

                     return `<option  ${
                          select ? "selected" : ""
                     } id = "option_${answer.id}_index_${index}" value="${
                          answer.value
                     }" >${answer.label}</option>`
                })
                .join("")}
          </select>
          <select name="answer_${data.id}_a" disabled>
          ${data.answerYes
               .map((answer, index) => {
                    let datas = index
                    let select = false

                    //  console.log("123", datas)
                    //  if (
                    //    `option_${answer.id}_index_${index}` ===
                    //    `option_${number_resultsOptionsArray[datas]}_index_${index}`
                    //  ) {
                    //    select = true
                    //  }
                    //  console.log("id", `option_${answer.id}_index_${index}`)
                    //  let y = number_resultsOptionsArray.forEach((x) => {
                    //       console.log(x)
                    //  })
                    //  console.log(y)

                    //  if (y === `option_${answer.id}_index_${index}`) {
                    //       select = true
                    //  }
                    let foundOption = number_resultsOptionsArray.find(
                         (option) =>
                              `option_${option}_index_${index}` ===
                              `option_${answer.id}_index_${index}`
                    )
                    console.log("123", foundOption)
                    // if (foundOption !== undefined) {
                    //      console.log(foundOption)
                    // }

                    // if (foundOption === `option_${answer.id}_index_${index}`) {
                    //      select = true
                    // }
                    return `<option  ${select ? "selected" : ""} id = "option_${
                         answer.id
                    }_index_${index}" value="${answer.value}" >${
                         answer.label
                    }</option>`
               })
               .join("")}
         </select>

        </div>
      `
}
function tacke() {}

VoidDataRadio()
function VoidDataRadio() {
     const divRadio = document.getElementById("container_TrangCuoi")
     const html = questionData.map((question) => check(question)).join("")
     divRadio.innerHTML = html
}

VoidDataCheckBox()
function VoidDataCheckBox() {
     const divCheckBox = document.getElementById("container_CheckBox_TrangCuoi")
     const html = questionDataCheckBox
          .map((question) => check(question))
          .join("")
     divCheckBox.innerHTML = html
}
VoidDataButton1()
function VoidDataButton1() {
     const divButton = document.getElementById("container_Button_TrangCuoi")
     const html = questionDataButton
          .map((question) => getDataButton(question))
          .join("")
     divButton.innerHTML = html
}
VoidDataOptions()
function VoidDataOptions() {
     const divButton = document.getElementById("container_Options_TrangCuoi")
     const html = questionOptions
          .map((question) => getDataOptionsFake(question))
          .join("")
     divButton.innerHTML = html
}

// VoidDataOptions()
// function VoidDataOptions() {
//   const data = JSON.parse(localStorage.getItem("questions"))
//   let LastData = data[data.length - 1]
//   let currentElement = 0
//   const divQuestion = document.getElementById("container_Options_TrangCuoi")
//   divQuestion.innerHTML = questionOptions
//     .map((question) => {
//       const answerInputs = question.answers
//         .map((answer) => {
//           return `<input type="text" id="${answer.id}" name="question_${question.id}" value="${answer.label}" />
//           <br />`
//         })
//         .join("")
//       return `
//         <div class="Question_Options">${question.question}</div>
//         <div class="QuestionAnswers_Options">
//           ${answerInputs}
//         </div>
//         <div class="Answers_Options">
//           <select name="answer_${question.id}" disabled>
//            ${question.answerYes
//              .map((answer, index) => {
//                const [
//                  { numberAnswer_Options: answerNuber, result_Oprions: result },
//                ] = LastData[currentElement]
//                if (index === question.answerYes.length - 1) {
//                  currentElement++
//                }
//                if (answer.id === `${answerNuber}_${result}`)
//                  return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}" >${answer.label}</option>`
//                return `<option id = "option_${answer.id}_index_${index}" value="${answer.value}" >${answer.label}</option>`
//              })
//              .join("")}
//           </select>
//           <select name="answer_${question.id}" disabled>
//         ${question.answerYes
//           .map((answer, index) => {
//             const [
//               { numberAnswer_Options: answerNuber, result_Oprions: result },
//             ] = LastData[currentElement]

//             // console.log("ket", `${answerNuber}_${result}`);
//             // console.log("answer_id", answer.id);
//             if (index === question.answerYes.length - 1) {
//               currentElement++
//             }
//             if (answer.id === `${answerNuber}_${result}`)
//               return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}">${answer.label}</option>`
//             return `<option id = "option_${answer.id}_index_${index}" value="${answer.value}">${answer.label}</option>`
//           })
//           .join("")}
//           </select>
//           <select name="answer_${question.id}" disabled>
//           ${question.answerYes
//             .map((answer, index) => {
//               const [
//                 { numberAnswer_Options: answerNuber, result_Oprions: result },
//               ] = LastData[currentElement]

//               // console.log("ket", `${answerNuber}_${result}`);
//               // console.log("answer_id", answer.id);
//               if (index === question.answerYes.length - 1) {
//                 currentElement++
//               }
//               if (answer.id === `${answerNuber}_${result}`)
//                 return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}">${answer.label}</option>`
//               return `<option id = "option_${answer.id}_index_${index}" value="${answer.value}">${answer.label}</option>`
//             })
//             .join("")}
//           </select>
//           <select name="answer_${question.id}" disabled>
//       ${question.answerYes
//         .map((answer, index) => {
//           const [
//             { numberAnswer_Options: answerNuber, result_Oprions: result },
//           ] = LastData[currentElement]

//           // console.log("ket 2", `${answerNuber}_${result}`);
//           // console.log("answer_id", answer.id);
//           if (index === question.answerYes.length - 1) {
//             currentElement++
//           }
//           if (answer.id === `${answerNuber}_${result}`)
//             return `<option id = "option_${answer.id}_index_${index}" selected value="${answer.value}">${answer.label}</option>`
//           return `<option id = "option_${answer.id}_index_${index}" value="${answer.value}">${answer.label}</option>`
//         })
//         .join("")}
//           </select>
//         </div>
//       `
//     })
//     .join("")
// }

let getQuestionToLocal = localStorage.getItem("questions")
let t = JSON.parse(getQuestionToLocal)
let disabledButtons = document.getElementsByTagName("input")
for (let i = 0; i < disabledButtons.length; i++) {
     disabledButtons[i].disabled = true
}
t.forEach((element) => {
     if (element.numberAnswer !== undefined && element.result !== undefined) {
          const id = `${element.numberAnswer}_${element.result}`
          document.getElementById(id).checked = true
     } else if (element.typeQuestion === "questionCheckBox") {
          const idCheckbox = `${element.numberAnswer_CheckBox}_${element.result_CheckBox}`
          document.getElementById(idCheckbox).checked = true
     }
})
// questionData.forEach((question) => {
//   question.answers.forEach((answer) => {
//     if (question.answerYes.id === answer.id) {
//       document.getElementById(answer.id).checked = true
//     }
//   })
// })

// questionDataCheckBox.forEach((question) => {
//   question.answers.forEach((answer) => {
//     question.answerYes.forEach((answerAnswer) => {
//       if (answerAnswer.id === answer.id) {
//         document.getElementById(answer.id).checked = true;
//       }
//     });
//   });
// });

// questionOptions.forEach((question) => {
//   question.answers.forEach((answer) => {
//     question.answerYes.forEach((answerAnswer) => {
//       if (answerAnswer.id === answer.id) {
//         document.getElementsByName("answer_${question.id}").select =
//           document.getElementById(answer.id).value;
//         // document.getElementById(answer.id).value ;
//       }
//     });
//   });
// })
