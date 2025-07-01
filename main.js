// 헤더에는 특별한 자바스크립트가 필요하지 않아요.
// 나중에 메뉴를 클릭했을 때 동작을 추가하고 싶으면 여기에 코드를 써요. 

// 히어로(캐러셀) 슬라이드를 자동으로 넘기고, 화살표로도 넘길 수 있게 해요
const slides = document.querySelectorAll('.slide'); // 모든 슬라이드를 가져와요
const leftArrow = document.querySelector('.left-arrow'); // 왼쪽 화살표
const rightArrow = document.querySelector('.right-arrow'); // 오른쪽 화살표
let current = 0; // 현재 보여주는 슬라이드 번호
let timer; // 자동 넘김을 위한 타이머

// 슬라이드를 보여주는 함수에요
function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active'); // 모두 숨기고
    if (i === idx) slide.classList.add('active'); // 선택한 것만 보여줘요
  });
  current = idx;
}

// 다음 슬라이드로 넘어가는 함수에요
function nextSlide() {
  let next = (current + 1) % slides.length;
  showSlide(next);
}

// 이전 슬라이드로 넘어가는 함수에요
function prevSlide() {
  let prev = (current - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// 자동으로 3초마다 슬라이드가 넘어가요
function startAutoSlide() {
  timer = setInterval(nextSlide, 3000);
}
// 마우스를 올리면 자동 넘김이 멈춰요
function stopAutoSlide() {
  clearInterval(timer);
}

// 화살표를 클릭하면 슬라이드가 바뀌어요
leftArrow.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});
rightArrow.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

// 슬라이드에 마우스를 올리면 자동 넘김이 멈춰요
const heroSection = document.querySelector('.hero-carousel');
heroSection.addEventListener('mouseenter', stopAutoSlide);
heroSection.addEventListener('mouseleave', startAutoSlide);

// 처음에 첫 슬라이드를 보여주고, 자동 넘김을 시작해요
showSlide(0);
startAutoSlide();

// 제품 설명의 '더보기' 버튼을 누르면 전체 설명이 보이고, 다시 누르면 3줄만 보여요
const moreBtns = document.querySelectorAll('.more-btn'); // 모든 더보기 버튼을 가져와요
moreBtns.forEach((btn) => {
  btn.addEventListener('click', function() {
    const desc = btn.parentElement;
    const shortDesc = desc.querySelector('.desc-short');
    const fullDesc = desc.querySelector('.desc-full');
    if (fullDesc.style.display === 'none') {
      // 전체 설명을 보여줘요
      fullDesc.style.display = 'block';
      shortDesc.style.display = 'none';
      btn.textContent = '닫기';
    } else {
      // 3줄만 보여줘요
      fullDesc.style.display = 'none';
      shortDesc.style.display = 'block';
      btn.textContent = '더보기';
    }
  });
});

// CEO 인사말의 '더보기' 버튼을 누르면 전체 인사말이 보이고, 다시 누르면 4줄만 보여요
const greetingBtn = document.querySelector('.greeting-btn'); // 더보기/닫기 버튼을 가져와요
const greetingShort = document.querySelector('.greeting-short'); // 4줄 짧은 인사말
const greetingFull = document.querySelector('.greeting-full'); // 전체 인사말

greetingBtn.addEventListener('click', function() {
  if (greetingFull.style.display === 'none') {
    // 전체 인사말을 보여줘요
    greetingFull.style.display = 'block';
    greetingShort.style.display = 'none';
    greetingBtn.textContent = '닫기';
  } else {
    // 4줄만 보여줘요
    greetingFull.style.display = 'none';
    greetingShort.style.display = 'block';
    greetingBtn.textContent = '더보기';
  }
});

// 리뷰(고객후기) 섹션에는 특별한 자바스크립트가 필요하지 않아요. 

// Q&A 섹션 - 질문 보내기 버튼을 누르면 메시지가 나타나요
const submitBtn = document.getElementById('submit-question'); // 질문 보내기 버튼
const questionTitle = document.getElementById('question-title'); // 질문 제목 입력칸
const questionContent = document.getElementById('question-content'); // 질문 내용 입력칸
const questionMessage = document.getElementById('question-message'); // 접수 메시지

submitBtn.addEventListener('click', function() {
  // 제목과 내용이 모두 입력되었는지 확인해요
  if (questionTitle.value.trim() && questionContent.value.trim()) {
    // 접수 메시지를 보여줘요
    questionMessage.style.display = 'block';
    // 입력칸을 비워줘요
    questionTitle.value = '';
    questionContent.value = '';
    // 3초 후에 메시지를 숨겨줘요
    setTimeout(() => {
      questionMessage.style.display = 'none';
    }, 3000);
  } else {
    // 입력하지 않았으면 알려줘요
    alert('질문 제목과 내용을 모두 입력해주세요.');
  }
});

// FAQ 아코디언 - 질문을 클릭하면 답변이 보이거나 숨겨져요
const faqQuestions = document.querySelectorAll('.faq-question'); // 모든 FAQ 질문들

faqQuestions.forEach((question) => {
  question.addEventListener('click', function() {
    const faqItem = question.parentElement; // FAQ 항목 전체
    const answer = faqItem.querySelector('.faq-answer'); // 답변 부분
    const toggle = question.querySelector('.faq-toggle'); // + 또는 - 표시
    
    if (answer.style.display === 'none' || answer.style.display === '') {
      // 답변을 보여줘요
      answer.style.display = 'block';
      toggle.textContent = '-';
    } else {
      // 답변을 숨겨줘요
      answer.style.display = 'none';
      toggle.textContent = '+';
    }
  });
}); 