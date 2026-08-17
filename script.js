// ===========================================
// 180 DAY - LISTENING SCREENING TEST
// ===========================================


// ===========================================
// QUESTIONS
//
// spokenText = ข้อความที่จะนำไปสร้างเสียง
// ห้ามแสดง spokenText ให้ Tester เห็น
// ===========================================

const questions = [

  // =========================
  // 01
  // =========================

  {
    spokenText:
      "Could I have a cup of coffee, please?",

    audio:
      "audio/q01.mp3",

    maxPlays: 2,

    answers: [
      "ฉันขอกาแฟหนึ่งแก้วได้ไหม",
      "ฉันขอเมนูอาหารได้ไหม",
      "ฉันต้องการจ่ายเงิน",
      "ฉันกำลังมองหาร้านกาแฟ"
    ],

    correct: 0
  },


  // =========================
  // 02
  // =========================

  {
    spokenText:
      "Where is the nearest train station?",

    audio:
      "audio/q02.mp3",

    maxPlays: 2,

    answers: [
      "สถานีรถไฟที่ใกล้ที่สุดอยู่ที่ไหน",
      "รถไฟจะมาถึงเมื่อไร",
      "ฉันสามารถซื้อตั๋วได้ที่ไหน",
      "รถไฟขบวนนี้ไปสนามบินไหม"
    ],

    correct: 0
  },


  // =========================
  // 03
  // =========================

  {
    spokenText:
      "What time do you finish work?",

    audio:
      "audio/q03.mp3",

    maxPlays: 2,

    answers: [
      "คุณเลิกงานกี่โมง",
      "คุณเริ่มงานกี่โมง",
      "วันนี้คุณทำงานไหม",
      "คุณทำงานที่ไหน"
    ],

    correct: 0
  },


  // =========================
  // 04
  // =========================

  {
    spokenText:
      "Can you help me carry this bag?",

    audio:
      "audio/q04.mp3",

    maxPlays: 2,

    answers: [
      "คุณช่วยฉันถือกระเป๋าใบนี้ได้ไหม",
      "คุณเห็นกระเป๋าของฉันไหม",
      "คุณช่วยเปิดกระเป๋าให้ฉันได้ไหม",
      "กระเป๋าใบนี้ราคาเท่าไร"
    ],

    correct: 0
  },


  // =========================
  // 05
  // =========================

  {
    spokenText:
      "I'm looking for the bathroom.",

    audio:
      "audio/q05.mp3",

    maxPlays: 2,

    answers: [
      "ฉันกำลังมองหาห้องน้ำ",
      "ฉันกำลังทำความสะอาดห้องน้ำ",
      "ฉันกำลังรออยู่หน้าห้อง",
      "ฉันต้องการเปลี่ยนห้องพัก"
    ],

    correct: 0
  },


  // =========================
  // 06
  // =========================

  {
    spokenText:
      "Could you speak more slowly, please?",

    audio:
      "audio/q06.mp3",

    maxPlays: 2,

    answers: [
      "คุณช่วยพูดช้าลงหน่อยได้ไหม",
      "คุณช่วยพูดให้ดังขึ้นได้ไหม",
      "คุณช่วยเขียนให้ฉันได้ไหม",
      "คุณช่วยพูดอีกภาษาได้ไหม"
    ],

    correct: 0
  },


  // =========================
  // 07
  // =========================

  {
    spokenText:
      "I'd like to buy a ticket for tomorrow morning.",

    audio:
      "audio/q07.mp3",

    maxPlays: 2,

    answers: [
      "ฉันต้องการซื้อตั๋วสำหรับพรุ่งนี้ตอนเช้า",
      "ฉันต้องการยกเลิกตั๋วของวันนี้",
      "ฉันต้องการเดินทางคืนนี้",
      "ฉันต้องการเปลี่ยนที่นั่ง"
    ],

    correct: 0
  },


  // =========================
  // 08
  // =========================

  {
    spokenText:
      "Do you have this shirt in a larger size?",

    audio:
      "audio/q08.mp3",

    maxPlays: 2,

    answers: [
      "คุณมีเสื้อตัวนี้ไซซ์ใหญ่กว่านี้ไหม",
      "คุณมีเสื้อตัวนี้สีอื่นไหม",
      "เสื้อตัวนี้ลดราคาไหม",
      "ฉันสามารถลองเสื้อตัวนี้ได้ไหม"
    ],

    correct: 0
  },


  // =========================
  // 09
  // =========================

  {
    spokenText:
      "I'm sorry, I don't understand what you mean.",

    audio:
      "audio/q09.mp3",

    maxPlays: 2,

    answers: [
      "ขอโทษ ฉันไม่เข้าใจว่าคุณหมายถึงอะไร",
      "ขอโทษ ฉันไม่ได้ยินที่คุณพูด",
      "ขอโทษ ฉันจำชื่อคุณไม่ได้",
      "ขอโทษ ฉันไม่สามารถช่วยคุณได้"
    ],

    correct: 0
  },


  // =========================
  // 10
  // =========================

  {
    spokenText:
      "Could you tell me where the nearest pharmacy is?",

    audio:
      "audio/q10.mp3",

    maxPlays: 2,

    answers: [
      "คุณช่วยบอกได้ไหมว่าร้านขายยาที่ใกล้ที่สุดอยู่ที่ไหน",
      "คุณช่วยบอกได้ไหมว่าโรงพยาบาลที่ใกล้ที่สุดอยู่ที่ไหน",
      "คุณช่วยซื้อยาให้ฉันได้ไหม",
      "คุณช่วยพาฉันไปพบหมอได้ไหม"
    ],

    correct: 0
  },


  // =========================
  // 11
  // =========================

  {
    spokenText:
      "I usually take the bus to work, but today I drove.",

    audio:
      "audio/q11.mp3",

    maxPlays: 2,

    answers: [
      "ปกติผู้พูดขึ้นรถประจำทางไปทำงาน แต่วันนี้ขับรถ",
      "ปกติผู้พูดขับรถไปทำงาน แต่วันนี้ขึ้นรถประจำทาง",
      "วันนี้ผู้พูดไม่ได้ไปทำงาน",
      "วันนี้ผู้พูดเดินไปทำงาน"
    ],

    correct: 0
  },


  // =========================
  // 12
  // =========================

  {
    spokenText:
      "I'm meeting my friend at the restaurant after work.",

    audio:
      "audio/q12.mp3",

    maxPlays: 2,

    answers: [
      "ผู้พูดจะไปพบเพื่อนที่ร้านอาหารหลังเลิกงาน",
      "ผู้พูดทำงานอยู่ที่ร้านอาหารกับเพื่อน",
      "ผู้พูดจะกลับบ้านทันทีหลังเลิกงาน",
      "ผู้พูดกำลังรอเพื่อนมารับที่ทำงาน"
    ],

    correct: 0
  },


  // =========================
  // 13
  // =========================

  {
    spokenText:
      "The train is delayed, so we'll probably arrive late.",

    audio:
      "audio/q13.mp3",

    maxPlays: 2,

    answers: [
      "รถไฟล่าช้า ดังนั้นพวกเขาน่าจะไปถึงช้า",
      "รถไฟมาเร็ว ดังนั้นพวกเขาจะถึงก่อนเวลา",
      "รถไฟถูกยกเลิกและพวกเขาจะไม่เดินทาง",
      "พวกเขาขึ้นรถไฟผิดขบวน"
    ],

    correct: 0
  },


  // =========================
  // 14
  // =========================

  {
    spokenText:
      "I haven't eaten anything since this morning, so I'm really hungry.",

    audio:
      "audio/q14.mp3",

    maxPlays: 2,

    answers: [
      "ผู้พูดยังไม่ได้กินอะไรตั้งแต่เช้าจึงหิวมาก",
      "ผู้พูดกินอาหารเช้ามากเกินไป",
      "ผู้พูดกำลังทำอาหารเช้า",
      "ผู้พูดไม่ต้องการกินอะไรในวันนี้"
    ],

    correct: 0
  },


  // =========================
  // 15
  // =========================

  {
    spokenText:
      "I wanted to go for a walk, but it started raining, so I stayed home.",

    audio:
      "audio/q15.mp3",

    maxPlays: 2,

    answers: [
      "ผู้พูดตั้งใจจะออกไปเดิน แต่ฝนตกจึงอยู่บ้าน",
      "ผู้พูดออกไปเดินเล่นท่ามกลางฝน",
      "ผู้พูดกลับบ้านหลังจากเดินเล่นเสร็จ",
      "ผู้พูดรอให้ฝนหยุดแล้วออกไปข้างนอก"
    ],

    correct: 0
  },


  // =========================
  // 16
  // =========================

  {
    spokenText:
      "My phone battery is almost dead. Do you know where I can charge it?",

    audio:
      "audio/q16.mp3",

    maxPlays: 2,

    answers: [
      "แบตโทรศัพท์ใกล้หมด และผู้พูดกำลังหาที่ชาร์จ",
      "โทรศัพท์ของผู้พูดหาย",
      "ผู้พูดกำลังจะซื้อโทรศัพท์เครื่องใหม่",
      "โทรศัพท์ของผู้พูดไม่มีสัญญาณ"
    ],

    correct: 0
  },


  // =========================
  // 17
  // =========================

  {
    spokenText:
      "I ordered a chicken sandwich, but they brought me a beef burger instead.",

    audio:
      "audio/q17.mp3",

    maxPlays: 2,

    answers: [
      "ผู้พูดสั่งแซนด์วิชไก่ แต่ได้รับเบอร์เกอร์เนื้อแทน",
      "ผู้พูดเปลี่ยนจากแซนด์วิชเป็นเบอร์เกอร์เอง",
      "ร้านไม่มีทั้งแซนด์วิชและเบอร์เกอร์",
      "ผู้พูดต้องการสั่งอาหารเพิ่ม"
    ],

    correct: 0
  },


  // =========================
  // 18
  // =========================

  {
    spokenText:
      "I was supposed to meet Sarah at six, but she just texted me saying she'll be about thirty minutes late.",

    audio:
      "audio/q18.mp3",

    maxPlays: 2,

    answers: [
      "Sarah แจ้งว่าจะมาช้าประมาณสามสิบนาที",
      "Sarah ต้องการเลื่อนนัดไปเป็นวันพรุ่งนี้",
      "ผู้พูดเป็นฝ่ายไปสายประมาณสามสิบนาที",
      "Sarah มาถึงก่อนเวลานัด"
    ],

    correct: 0
  },


  // =========================
  // 19
  // =========================

  {
    spokenText:
      "I thought the store closed at nine, but when I got there, it had already closed at eight.",

    audio:
      "audio/q19.mp3",

    maxPlays: 2,

    answers: [
      "ผู้พูดคิดว่าร้านปิดสามทุ่ม แต่จริง ๆ ร้านปิดสองทุ่ม",
      "ผู้พูดไปถึงร้านก่อนร้านเปิด",
      "ร้านเปลี่ยนเวลาปิดจากสองทุ่มเป็นสามทุ่ม",
      "ผู้พูดไปซื้อของเสร็จก่อนสองทุ่ม"
    ],

    correct: 0
  },


  // =========================
  // 20
  // =========================

  {
    spokenText:
      "I was going to take the subway, but there was a problem with the line, so I decided to get a taxi instead.",

    audio:
      "audio/q20.mp3",

    maxPlays: 2,

    answers: [
      "ผู้พูดตั้งใจขึ้นรถไฟใต้ดิน แต่มีปัญหาจึงเปลี่ยนไปนั่งแท็กซี่",
      "ผู้พูดนั่งรถไฟใต้ดินเพราะแท็กซี่มีปัญหา",
      "ผู้พูดรอรถไฟใต้ดินจนกลับมาให้บริการ",
      "ผู้พูดตัดสินใจเดินไปแทนการใช้รถ"
    ],

    correct: 0
  }

];



// ===========================================
// STATE
// ===========================================

let tester = {
  name: "",
  instagram: ""
};


let currentQuestion = 0;

let selectedAnswer = null;

let playsUsed = 0;

let score = 0;


let testAnswers = [];



// ===========================================
// ELEMENTS
// ===========================================

const registerScreen =
  document.getElementById("registerScreen");

const startScreen =
  document.getElementById("startScreen");

const testScreen =
  document.getElementById("testScreen");

const submitScreen =
  document.getElementById("submitScreen");

const thankYouScreen =
  document.getElementById("thankYouScreen");


const nameInput =
  document.getElementById("name");

const instagramInput =
  document.getElementById("instagram");

const consentInput =
  document.getElementById("consent");

const registerError =
  document.getElementById("registerError");


const questionNumber =
  document.getElementById("questionNumber");

const progressPercent =
  document.getElementById("progressPercent");

const progressBar =
  document.getElementById("progressBar");

const playAudioBtn =
  document.getElementById("playAudioBtn");

const listenCount =
  document.getElementById("listenCount");

const answersContainer =
  document.getElementById("answersContainer");

const nextBtn =
  document.getElementById("nextBtn");



// ===========================================
// SCREEN FUNCTION
// ===========================================

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(item => {
      item.classList.remove("active");
    });


  screen.classList.add("active");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}



// ===========================================
// REGISTER
// ===========================================

document
  .getElementById("continueBtn")
  .addEventListener("click", () => {

    const name =
      nameInput.value.trim();

    const instagram =
      instagramInput.value
        .trim()
        .replace("@", "");


    if (!name) {

      registerError.textContent =
        "กรุณากรอกชื่อ";

      return;

    }


    if (!instagram) {

      registerError.textContent =
        "กรุณากรอก Instagram";

      return;

    }


    if (!consentInput.checked) {

      registerError.textContent =
        "กรุณายินยอมก่อนดำเนินการต่อ";

      return;

    }


    registerError.textContent = "";


    tester.name = name;

    tester.instagram = instagram;


    showScreen(startScreen);

  });



// ===========================================
// START
// ===========================================

document
  .getElementById("startBtn")
  .addEventListener("click", () => {

    currentQuestion = 0;

    score = 0;

    testAnswers = [];


    showScreen(testScreen);

    loadQuestion();

  });



// ===========================================
// LOAD QUESTION
// ===========================================

function loadQuestion() {

  const question =
    questions[currentQuestion];


  selectedAnswer = null;

  playsUsed = 0;


  nextBtn.disabled = true;


  questionNumber.textContent =
    `Question ${currentQuestion + 1} / ${questions.length}`;


  const progress =
    ((currentQuestion + 1) / questions.length) * 100;


  progressPercent.textContent =
    `${Math.round(progress)}%`;


  progressBar.style.width =
    `${progress}%`;


  listenCount.textContent =
    `ฟังได้อีก ${question.maxPlays} ครั้ง`;


  playAudioBtn.disabled = false;


  // ล้างคำตอบเก่า

  answersContainer.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement("button");


      button.className =
        "answer-btn";


      button.textContent =
        answer;


      button.addEventListener(
        "click",
        () => {

          selectAnswer(
            button,
            index
          );

        }
      );


      answersContainer.appendChild(
        button
      );

    }
  );

}



// ===========================================
// AUDIO
// ===========================================

playAudioBtn.addEventListener(
  "click",
  () => {

    const question =
      questions[currentQuestion];


    if (
      playsUsed >=
      question.maxPlays
    ) {
      return;
    }


    const audio =
      new Audio(question.audio);


    audio.play()
      .catch(error => {

        console.error(
          "ไม่พบไฟล์เสียง:",
          question.audio,
          error
        );

      });


    playsUsed++;


    const remaining =
      question.maxPlays -
      playsUsed;


    listenCount.textContent =
      `ฟังได้อีก ${remaining} ครั้ง`;


    if (remaining <= 0) {

      playAudioBtn.disabled =
        true;

    }

  }
);



// ===========================================
// ANSWER
// ===========================================

function selectAnswer(
  button,
  index
) {

  selectedAnswer = index;


  document
    .querySelectorAll(".answer-btn")
    .forEach(btn => {

      btn.classList.remove(
        "selected"
      );

    });


  button.classList.add(
    "selected"
  );


  nextBtn.disabled = false;

}



// ===========================================
// NEXT
// ===========================================

nextBtn.addEventListener(
  "click",
  () => {

    if (selectedAnswer === null) {
      return;
    }


    const question =
      questions[currentQuestion];


    const isCorrect =
      selectedAnswer ===
      question.correct;


    if (isCorrect) {
      score++;
    }


    // เก็บรายละเอียดคำตอบ

    testAnswers.push({

      question:
        currentQuestion + 1,

      selected:
        selectedAnswer,

      correct:
        question.correct,

      isCorrect:
        isCorrect,

      playsUsed:
        playsUsed

    });


    currentQuestion++;


    if (
      currentQuestion <
      questions.length
    ) {

      loadQuestion();

    }

    else {

      showScreen(
        submitScreen
      );

    }

  }
);



// ===========================================
// SUBMIT
// ===========================================

document
  .getElementById("submitBtn")
  .addEventListener(
    "click",
    async () => {

      const result = {

        name: tester.name,

        instagram: tester.instagram,

        score: score,

        answers: testAnswers.map(
          answer =>
            answer.isCorrect
              ? 1
              : 0
        ),

        listenCount: testAnswers.reduce(
          (total, answer) =>
            total +
            answer.playsUsed,
          0
        )

      };


      const submitButton =
        document.getElementById(
          "submitBtn"
        );


      submitButton.disabled =
        true;

      submitButton.textContent =
        "กำลังส่งข้อมูล...";


      try {

        await fetch(
          "https://script.google.com/macros/s/AKfycbzowvMOr6hB_9xFpRiiXU101h5eOHoR1Ox6bvu0j0uxSflzhBUwUPQKuYBmXs6MP3XP/exec",
          {

            method: "POST",

            mode: "no-cors",

            headers: {
              "Content-Type":
                "text/plain;charset=utf-8"
            },

            body:
              JSON.stringify(result)

          }
        );


        localStorage.setItem(
          "180DayTestResult",
          JSON.stringify(result)
        );


        showScreen(
          thankYouScreen
        );

      }

      catch (error) {

        console.error(error);

        alert(
          "ไม่สามารถส่งข้อมูลได้"
        );

        submitButton.disabled =
          false;

        submitButton.textContent =
          "ส่งแบบทดสอบ";

      }

    }
  );


     
