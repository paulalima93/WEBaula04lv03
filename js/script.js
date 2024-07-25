// selecionando todos os elementos necessários
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// quando o botão startQuiz é clicado
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // mostrar caixa de informações
}

// quando o botão exitQuiz é clicado
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // esconder caixa de informações
}

// quando o botão continueQuiz é clicado
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // esconder caixa de informações
    quiz_box.classList.add("activeQuiz"); // mostrar caixa de quiz
    // chame a função showQestions
    
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

function showQuestions(index) {
    
}


let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


