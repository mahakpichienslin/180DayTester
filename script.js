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

  maxPlays: 2,

  answers: [
    "ฉันขอกาแฟหนึ่งแก้วได้ไหม",
    "ฉันขอชาหนึ่งแก้วได้ไหม",
    "ฉันขอน้ำหนึ่งแก้วได้ไหม",
    "ฉันขอนมหนึ่งแก้วได้ไหม"
  ],

  correct: 0
},


  // =========================
  // 02
  // =========================

  {
  spokenText:
    "Can I see the menu, please?",

  maxPlays: 2,

  answers: [
    "ฉันขอดูใบเสร็จได้ไหม",
    "ฉันขอเมนูอาหารได้ไหม",
    "ฉันขอดูราคาได้ไหม",
    "ฉันขอโต๊ะได้ไหม"
  ],

  correct: 1
},


  // =========================
  // 03
  // =========================

  {
  spokenText:
    "I would like to pay now.",

  maxPlays: 2,

  answers: [
    "ฉันต้องการสั่งอาหารเพิ่ม",
    "ฉันต้องการยกเลิกออเดอร์",
    "ฉันต้องการจ่ายเงิน",
    "ฉันต้องการใบเสร็จ"
  ],

  correct: 2
},


  // =========================
  // 04
  // =========================

 {
  spokenText:
    "I'm looking for a coffee shop.",

  maxPlays: 2,

  answers: [
    "ฉันกำลังมองหาร้านกาแฟ",
    "ฉันกำลังมองหาร้านอาหาร",
    "ฉันกำลังมองหาห้องน้ำ",
    "ฉันกำลังมองหาที่จอดรถ"
  ],

  correct: 0
},


  // =========================
  // 05
  // =========================

  {
  spokenText:
    "What time do you open?",

  maxPlays: 2,

  answers: [
    "ปิดกี่โมง",
    "เปิดกี่โมง",
    "วันนี้เปิดไหม",
    "พรุ่งนี้เปิดกี่โมง"
  ],

  correct: 1
},


  // =========================
  // 06
  // =========================

  {
  spokenText:
    "This tastes really good.",

  maxPlays: 2,

  answers: [
    "อันนี้ราคาแพงมาก",
    "อันนี้ร้อนมาก",
    "อันนี้อร่อยมาก",
    "อันนี้เย็นมาก"
  ],

  correct: 2
},

  // =========================
  // 07
  // =========================

  {
  spokenText:
    "Where is the bathroom?",

  maxPlays: 2,

  answers: [
    "ห้องน้ำอยู่ตรงไหน",
    "ทางออกอยู่ตรงไหน",
    "ครัวอยู่ตรงไหน",
    "โต๊ะของฉันอยู่ตรงไหน"
  ],

  correct: 0
},


  // =========================
  // 08
  // =========================

  {
  spokenText:
    "Can I get a copy of the receipt?",

  maxPlays: 1,

  answers: [
    "ฉันขอกาแฟเพิ่มได้ไหม",
    "ฉันขอสำเนาใบเสร็จได้ไหม",
    "ฉันขอเปลี่ยนโต๊ะได้ไหม",
    "ฉันขอกาแฟร้อนได้ไหม"
  ],

  correct: 1
},


  // =========================
  // 09
  // =========================

  {
  spokenText:
    "That will be fifteen dollars.",

  maxPlays: 1,

  answers: [
    "50 ดอลลาร์",
    "55 ดอลลาร์",
    "15 ดอลลาร์",
    "5 ดอลลาร์"
  ],

  correct: 2
},


  // =========================
  // 10
  // =========================

  {
  spokenText:
    "I don't want coffee, I'll have tea instead.",

  maxPlays: 1,

  answers: [
    "ฉันอยากได้กาแฟ ไม่เอาชา",
    "ฉันไม่เอาชา ขอกาแฟแทน",
    "ฉันไม่เอากาแฟ ขอชาแทน",
    "ฉันเอาทั้งกาแฟและชา"
  ],

  correct: 2
},



  // =========================
  // 11
  // =========================

   {
  spokenText:
    "Excuse me, could you turn down the music a little?",

  maxPlays: 1,

  answers: [
    "ขอเปิดเพลงดังขึ้นหน่อยได้ไหม",
    "ขอเปลี่ยนเพลงได้ไหม",
    "ขอลดเสียงเพลงลงหน่อยได้ไหม",
    "ขอปิดเพลงได้ไหม"
  ],

  correct: 2
},


  // =========================
  // 12
  // =========================

   {
  spokenText:
    "The meeting starts at half past three, not three.",

  maxPlays: 1,

  answers: [
    "ประชุมเริ่ม 3 โมงตรง",
    "ประชุมเริ่ม 3 โมงครึ่ง",
    "ประชุมเริ่ม 3 โมง 15",
    "ประชุมเลื่อนเป็นพรุ่งนี้"
  ],

  correct: 1
},


  // =========================
  // 13
  // =========================

  {
  spokenText:
    "I ordered a small coffee, not a large one.",

  maxPlays: 1,

  answers: [
    "ฉันสั่งกาแฟแก้วใหญ่",
    "ฉันสั่งกาแฟแก้วเล็ก",
    "ฉันสั่งกาแฟสองแก้ว",
    "ฉันไม่ได้สั่งกาแฟ"
  ],

  correct: 1
},


  // =========================
  // 14
  // =========================

  {
  spokenText:
    "Sorry, we're out of milk, but we do have cream.",

  maxPlays: 1,

  answers: [
    "นมหมดแล้ว มีแต่ครีม",
    "ครีมหมดแล้ว มีแต่นม",
    "ทั้งนมและครีมหมด",
    "มีทั้งนมและครีม"
  ],

  correct: 0
},


  // =========================
  // 15
  // =========================

  {
  spokenText:
    "Could you point me to somewhere I could grab a quick bite?",

  maxPlays: 1,

  answers: [
    "ถามทางไปห้องน้ำ",
    "ถามทางไปร้านกาแฟ",
    "ถามหาที่กินอาหารเร็วๆ",
    "ถามหาที่นั่งพักผ่อน"
  ],

  correct: 2
},


  // =========================
  // 16
  // =========================

   {
  spokenText:
    "I'm afraid the kitchen's just closed, but the bar's still serving.",

  maxPlays: 1,

  answers: [
    "ครัวปิดแล้ว แต่บาร์ยังเปิดขายอยู่",
    "ครัวยังเปิดอยู่ แต่บาร์ปิดแล้ว",
    "ทั้งครัวและบาร์ปิดแล้ว",
    "ทั้งครัวและบาร์ยังเปิดอยู่"
  ],

  correct: 0
},


  // =========================
  // 17
  // =========================

  {
  spokenText:
    "Would you mind keeping an eye on my bag while I use the restroom?",

  maxPlays: 1,

  answers: [
    "ขอให้ช่วยเก็บกระเป๋าไว้",
    "ขอให้ช่วยดูกระเป๋าให้แป๊บนึง",
    "ขอให้ช่วยพาไปห้องน้ำ",
    "ขอให้ช่วยถือกระเป๋าไปด้วย"
  ],

  correct: 1
},


  // =========================
  // 18
  // =========================

  {
  spokenText:
    "It's on the house — no charge for the coffee today.",

  maxPlays: 1,

  answers: [
    "กาแฟวันนี้ลดราคาครึ่งหนึ่ง",
    "กาแฟวันนี้ฟรี ไม่คิดเงิน",
    "กาแฟวันนี้ต้องจ่ายเพิ่ม",
    "กาแฟวันนี้ขายไม่ได้แล้ว"
  ],

  correct: 1
},


  // =========================
  // 19
  // =========================

  {
  spokenText:
    "I hate to be a bother, but could we possibly get the check whenever you get a chance?",

  maxPlays: 1,

  answers: [
    "ขอความช่วยเหลือเรื่องอื่น",
    "ขอยกเลิกออเดอร์",
    "ขอบิล/เช็คบิลแบบไม่รีบ",
    "ขอเปลี่ยนโต๊ะแบบไม่รีบ"
  ],

  correct: 2
},



  // =========================
  // 20
  // =========================

   {
  spokenText:
    "Let's split the bill down the middle, shall we?",

  maxPlays: 1,

  answers: [
    "ให้อีกฝ่ายจ่ายทั้งหมด",
    "หารเงินค่าอาหารกันคนละครึ่ง",
    "ขอส่วนลดครึ่งราคา",
    "ยกเลิกบิลทั้งหมด"
  ],

  correct: 1
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
// TEXT TO SPEECH - ENGLISH US
// ===========================================

let currentSpeech = null;


// เลือกเสียงภาษาอังกฤษ US
function getUSVoice() {

  const voices =
    window.speechSynthesis.getVoices();


  // ลองหาเสียง US ก่อน
  let voice =
    voices.find(v =>
      v.lang === "en-US"
    );


  // ถ้าไม่มี en-US แบบตรงตัว
  // ให้หาเสียงที่ขึ้นต้นด้วย en-US
  if (!voice) {

    voice =
      voices.find(v =>
        v.lang
          .toLowerCase()
          .startsWith("en-us")
      );

  }


  // ถ้ายังไม่มี
  // ใช้ English voice ตัวแรก
  if (!voice) {

    voice =
      voices.find(v =>
        v.lang
          .toLowerCase()
          .startsWith("en")
      );

  }


  return voice;
}



// Browser บางตัวโหลด voices ช้า
window.speechSynthesis.onvoiceschanged =
  () => {

    getUSVoice();

  };



// ===========================================
// PLAY AUDIO BUTTON
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


    // หยุดเสียงเดิมก่อน
    window.speechSynthesis.cancel();


    const speech =
      new SpeechSynthesisUtterance(
        question.spokenText
      );


    // ภาษาอังกฤษ US
    speech.lang =
      "en-US";


    const voice =
      getUSVoice();


    if (voice) {

      speech.voice =
        voice;

    }


    // =====================================
    // SPEED BY QUESTION LEVEL
    // =====================================

    if (currentQuestion <= 6) {

      // Q1-Q7
      speech.rate = 0.92;

    }

    else if (currentQuestion <= 13) {

      // Q8-Q14
      speech.rate = 1.0;

    }

    else {

      // Q15-Q20
      speech.rate = 1.05;

    }


    speech.pitch = 1;

    speech.volume = 1;


    currentSpeech =
      speech;


    // ปิดปุ่มระหว่างกำลังพูด
    playAudioBtn.disabled =
      true;


    speech.onend = () => {

      playsUsed++;


      const remaining =
        question.maxPlays -
        playsUsed;


      listenCount.textContent =
        `ฟังได้อีก ${remaining} ครั้ง`;


      if (remaining > 0) {

        playAudioBtn.disabled =
          false;

      }

      else {

        playAudioBtn.disabled =
          true;

      }

    };


    speech.onerror =
      event => {

        console.error(
          "Speech synthesis error:",
          event
        );


        playAudioBtn.disabled =
          false;

      };


    window.speechSynthesis.speak(
      speech
    );

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


     
