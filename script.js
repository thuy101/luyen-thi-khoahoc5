// =========================================================
//                  I. NGÂN HÀNG CÂU HỎI KHOA HỌC (15 CÂU)
// =========================================================

const questionBank = [
    // ------------------------------------------------------------------------------------------------
    // 12 CÂU CHỌN 1 ĐÁP ÁN (C1)
    // ------------------------------------------------------------------------------------------------
    { 
        id: 1, 
        type: 'C1', 
        text: 'Khi trời khô hạn, đất trên đồng ruộng nứt nẻ. Điều đó chứng tỏ thành phần nào có trong đất đã bị mất đi?', 
        options: [
            'Mùn', 
            'Khoáng', 
            'Không khí', 
            'Nước'
        ], 
        correctAnswer: 'Nước' 
    },
    { 
        id: 2, 
        type: 'C1', 
        text: 'Trong tự nhiên, các chất có thể tồn tại ở những trạng thái nào?', 
        options: [
            'Trạng thái rắn, lỏng.', 
            'Trạng thái rắn, khí, nước.', 
            'Trạng thái rắn, lỏng, khí.', 
            'Trạng thái lỏng, nước, hơi.'
        ], 
        correctAnswer: 'Trạng thái rắn, lỏng, khí.'
    },
    { 
        id: 3, 
        type: 'C1', 
        text: 'Đất gồm những thành phần nào?', 
        options: [
            'Chất khoáng, ánh sáng, sỏi, đá, nước,....', 
            'Sỏi, đá, ánh sáng, không khí, nước,…', 
            'Chất khoáng, mùn, không khí, nước,…', 
            'Chất khoáng, ánh sáng, mùn, sỏi, đá,…'
        ], 
        correctAnswer: 'Chất khoáng, mùn, không khí, nước,…'
    },
    { 
        id: 4, 
        type: 'C1', 
        text: 'Trong tự nhiên, Chất tồn tại ở trạng thái rắn được gọi là:', 
        options: ['Chất lỏng.', 'Chất khí.', 'Chất rắn.', 'Chất hòa tan.'], 
        correctAnswer: 'Chất rắn.'
    },
    { 
        id: 5, 
        type: 'C1', 
        text: 'Các giai đoạn phát triển của thực vật là:', 
        options: [
            'Cây nhỏ, cây trưởng thành.', 
            'Nảy mầm, cây con, trưởng thành.', 
            'Nảy mầm, trưởng thành.', 
            'Cả 3 ý A, B, C đều đúng.'
        ], 
        correctAnswer: 'Nảy mầm, cây con, trưởng thành.'
    },
    { 
        id: 6, 
        type: 'C1', 
        text: 'Bộ phận nào trong cơ quan sinh sản của thực vật có hoa phát triển thành quả?', 
        options: [
            'Bao phấn', 
            'Bầu nhụy', 
            'Noãn', 
            'Nhị'
        ], 
        correctAnswer: 'Bầu nhụy'
    },
    { 
        id: 7, 
        type: 'C1', 
        text: 'Ngoài những cây mọc lên từ hạt, cây con có thể mọc lên từ một số bộ phận nào của cây mẹ?', 
        options: [
            'Quả', 
            'Lá, thân, rễ', 
            'Chồi', 
            'Ngọn'
        ], 
        correctAnswer: 'Lá, thân, rễ'
    },
    { 
        id: 8, 
        type: 'C1', 
        text: 'Các cơ quan sinh dục cái và cơ quan sinh dục đực của thực vật có hoa là:', 
        options: [
            'Đài và cánh hoa.', 
            'Nhụy và nhị.', 
            'Đài và bao phấn.', 
            'Nhụy hoa và cánh hoa.'
        ], 
        correctAnswer: 'Nhụy và nhị.'
    },
    { 
        id: 9, 
        type: 'C1', 
        text: 'Nguồn năng lượng nào khi sử dụng tạo ra khí thải gây ô nhiễm môi trường?', 
        options: [
            'Năng lượng mặt trời', 
            'Năng lượng gió', 
            'Năng lượng nước chảy', 
            'Năng lượng chất đốt'
        ], 
        correctAnswer: 'Năng lượng chất đốt'
    },
    { 
        id: 10, 
        type: 'C1', 
        text: 'Vì sao năng lượng được coi là quan trọng trong cuộc sống?', 
        options: [
            'Vì nó giúp con người thực hiện các hoạt động hằng ngày thuận tiện hơn.', 
            'Vì nó giữ vai trò quan trọng trong nhiều lĩnh vực sản xuất.', 
            'Vì nó cần thiết cho mọi hoạt động của con người, sinh vật và các thiết bị, phương tiện, máy móc.', 
            'Vì nó góp phần duy trì sự vận hành ổn định của môi trường sống.'
        ], 
        correctAnswer: 'Vì nó cần thiết cho mọi hoạt động của con người, sinh vật và các thiết bị, phương tiện, máy móc.'
    },
    { 
        id: 11, 
        type: 'C1', 
        text: 'Vật nào dưới đây hoạt động được nhờ sử dụng năng lượng gió?', 
        options: [
            'Tủ lạnh.', 
            'Pin mặt trời.', 
            'Bánh xe nước.', 
            'Thuyền buồm.'
        ], 
        correctAnswer: 'Thuyền buồm.'
    },
    { 
        id: 12, 
        type: 'C1', 
        text: 'Nguồn năng lượng nào khi sử dụng KHÔNG tạo ra khí thải gây ô nhiễm môi trường?', 
        options: [
            'Xăng dầu.', 
            'Khí đốt.', 
            'Năng lượng mặt trời.', 
            'Củi đốt.'
        ], 
        correctAnswer: 'Năng lượng mặt trời.'
    },

    // ------------------------------------------------------------------------------------------------
    // 3 CÂU DẠNG NỐI/ĐIỀN TỪ (N)
    // ------------------------------------------------------------------------------------------------
    { 
        id: 13, 
        type: 'N', 
        text: 'Em hãy nối tên bộ phận của mạch điện thắp sáng đơn giản với số thứ tự tương ứng (Tham khảo hình vẽ: 1. Pin, 2. Bóng đèn, 3. Khóa (công tắc), 4. Dây dẫn):', 
        pairs: [
            // Các cặp này mô phỏng việc điền tên bộ phận vào chỗ trống tương ứng (1, 2, 3, 4)
            { left: '1. Bộ phận cung cấp điện năng', right: 'Pin' }, 
            { left: '2. Bộ phận phát sáng', right: 'Bóng đèn' }, 
            { left: '3. Bộ phận đóng/ngắt mạch', right: 'Khóa (công tắc)' }, 
            { left: '4. Bộ phận kết nối các chi tiết', right: 'Dây dẫn' } 
        ]
    },
    { 
        id: 14, 
        type: 'N', 
        text: 'Em hãy nối thông tin về cấu tạo của hoa với tên gọi phù hợp:', 
        pairs: [
            { left: 'Chỉ có nhị hoặc nhụy.', right: 'Hoa đơn tính' }, 
            { left: 'Có cả nhị và nhụy trên cùng một hoa.', right: 'Hoa lưỡng tính' }, 
            { left: 'Chỉ có nhị (cơ quan sinh dục đực)', right: 'Hoa đực' }, 
            { left: 'Chỉ có nhuỵ (cơ quan sinh dục cái)', right: 'Hoa cái' } 
        ]
    },
    { 
        id: 15, 
        type: 'N', 
        text: 'Em hãy nối thông tin về đặc điểm của hoa với hình thức thụ phấn:', 
        pairs: [
            { left: 'Cánh hoa nhỏ, màu sắc không sặc sỡ, khô, nhẹ…', right: 'Hoa thụ phấn nhờ gió' }, 
            { left: 'Cánh hoa to, màu sắc sặc sỡ, có mùi hương, mật hoa, chất dính…', right: 'Hoa thụ phấn nhờ côn trùng' }, 
            { left: 'Phấn hoa từ cây này chuyển sang nhụy hoa của cây khác.', right: 'Thụ phấn chéo' }, 
            { left: 'Phấn hoa rơi vào đầu nhụy của chính hoa đó.', right: 'Thụ phấn tự nhiên' } 
        ]
    },
];

// =========================================================
//                  II. CẤU HÌNH VÀ BIẾN TOÀN CỤC
// =========================================================

const EXAM_CONFIG = {
    C1: 7, // Chọn 1 đáp án: 7 câu ngẫu nhiên
    N: 3,  // Dạng Nối / Điền từ: Cố định 3 câu
};
const TOTAL_QUESTIONS = 10;
let currentExam = []; 
let currentQuestionIndex = 0; 
let userAnswers = []; 
let isExamSubmitted = false; 
let currentExamId = 1; 

// Lấy các phần tử DOM quan trọng
const questionTextEl = document.getElementById('question-text');
const answerOptionsEl = document.getElementById('answer-options');
const questionHeaderEl = document.getElementById('question-header');
const progressContainerEl = document.getElementById('progress-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const submitBtn = document.getElementById('submit-exam-btn');
const resultBoxEl = document.getElementById('result-box');
const currentQuestionInfoEl = document.getElementById('current-question-info');
const examTabsContainer = document.getElementById('exam-selection-tabs');
const correctAnswerDisplayEl = document.getElementById('correct-answer-display');
const correctAnswerTextEl = document.getElementById('correct-answer-text');


// =========================================================
//                  III. HÀM TIỆN ÍCH VÀ RÚT ĐỀ
// =========================================================

/** Hàm xáo trộn mảng (Fisher-Yates) */
function shuffleArray(array) {
    const arr = [...array]; 
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/** HÀM RÚT ĐỀ THI 10 CÂU NGẪU NHIÊN THEO CẤU HÌNH */
function generateExam() {
    let exam = [];
    let remainingQuestions = [...questionBank]; 
    
    // 1. CHỌN CÁC CÂU NỐI/ĐIỀN TỪ (N - Cố định 3 câu)
    const N_questions = remainingQuestions.filter(q => q.type === 'N');
    // Chỉ chọn 3 câu N đầu tiên (ID 13, 14, 15) và xáo trộn vị trí của chúng
    const selectedN = N_questions.slice(0, EXAM_CONFIG.N);
    exam.push(...shuffleArray(selectedN)); 
    
    // 2. CHỌN CÁC CÂU CHỌN 1 (C1 - Ngẫu nhiên 7 câu)
    const C1_questions = remainingQuestions.filter(q => q.type === 'C1');
    const shuffledC1 = shuffleArray(C1_questions);
    const selectedC1 = shuffledC1.slice(0, EXAM_CONFIG.C1);
    exam.push(...selectedC1);
    
    // 3. XÁO TRỘN VỊ TRÍ CUỐI CÙNG VÀ ĐẢM BẢO CHỈ 10 CÂU
    return shuffleArray(exam).slice(0, TOTAL_QUESTIONS);
}

// =========================================================
//                  IV. HÀM HIỂN THỊ (RENDER)
// =========================================================

/** Tạo các nút 1-10 và gắn sự kiện */
function setupProgressBar() {
    progressContainerEl.innerHTML = ''; 
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const button = document.createElement('button');
        button.className = 'q-number';
        button.textContent = i + 1;
        button.dataset.index = i; 
        
        button.disabled = false; 
        
        button.addEventListener('click', () => {
            if (!isExamSubmitted) { 
                saveUserAnswer(currentQuestionIndex);
            }
            renderQuestion(i);
        });
        
        progressContainerEl.appendChild(button);
    }
}

/** Cập nhật trạng thái và màu sắc của Progress Bar */
function updateProgressBar(index) {
    const progressButtons = document.querySelectorAll('.q-number');
    progressButtons.forEach((btn, i) => {
        btn.classList.remove('active');
        
        if (!isExamSubmitted) {
            btn.classList.remove('correct', 'incorrect');
            if (userAnswers[i] !== null) {
                btn.classList.add('answered');
            } else {
                btn.classList.remove('answered');
            }
        } 
    });
    
    if(progressButtons[index]) {
        progressButtons[index].classList.add('active');
    }
    
    currentQuestionInfoEl.textContent = `Câu hỏi | Đề số: ${index + 1}/10`;
}

/** Hiển thị câu trả lời đã lưu khi chuyển lại câu cũ */
function loadUserAnswer(question) {
    const savedAnswer = userAnswers[currentQuestionIndex];
    if (savedAnswer === null) return;
    
    if (question.type === 'C1') {
        const radio = document.querySelector(`input[name="q${question.id}"][value="${savedAnswer}"]`);
        if (radio) radio.checked = true;
    } else if (question.type === 'N') { // Áp dụng cho cả Nối và Điền từ đã chuyển đổi
        for (const leftItem in savedAnswer) {
            const select = document.querySelector(`select[data-left-item="${leftItem}"]`);
            if (select) select.value = savedAnswer[leftItem];
        }
    }
}

/** HÀM QUAN TRỌNG: Hiển thị câu hỏi và các tùy chọn trả lời */
function renderQuestion(index) {
    if (index < 0 || index >= currentExam.length) return;

    const question = currentExam[index];
    currentQuestionIndex = index;
    const disabledAttr = isExamSubmitted ? 'disabled' : ''; 

    questionHeaderEl.textContent = `Câu hỏi ${index + 1}:`;
    questionTextEl.textContent = question.text;
    answerOptionsEl.innerHTML = ''; 
    correctAnswerDisplayEl.classList.add('hidden'); 

    let htmlContent = '';

    switch (question.type) {
        case 'C1':
            question.options.forEach((option) => {
                htmlContent += `
                    <label class="option-item">
                        <input type="radio" name="q${question.id}" value="${option}" ${disabledAttr}>
                        ${option}
                    </label>
                `;
            });
            break;

        case 'N':
            htmlContent += '<div class="matching-container">';
            // Vẫn xáo trộn các lựa chọn bên phải (các từ cần điền)
            const rightOptions = shuffleArray(question.pairs.map(p => p.right));
            
            question.pairs.forEach((pair) => {
                htmlContent += `
                    <div class="match-row">
                        <span class="left-item">${pair.left}</span>
                        <select class="match-select" data-left-item="${pair.left}" ${disabledAttr}>
                            <option value="">-- Chọn đáp án --</option>
                            ${rightOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                        </select>
                    </div>
                `;
            });
            htmlContent += '</div>';
            break;
    }
    
    answerOptionsEl.innerHTML = htmlContent;
    loadUserAnswer(question);
    updateNavigationButtons();
    updateProgressBar(index);
    
    // HIỂN THỊ ĐÁP ÁN ĐÚNG KHI XEM LẠI
    if (isExamSubmitted) {
        showCorrectAnswer(question);
    }
}

/** Hiển thị đáp án đúng */
function showCorrectAnswer(question) {
    let answerText = '';
    if (question.type === 'C1') {
        answerText = question.correctAnswer;
    } else if (question.type === 'N') {
        // Hiển thị từng cặp Nối/Điền từ
        answerText = question.pairs.map((p, index) => `${index + 1}. ${p.left} -> ${p.right}`).join('; ');
    }
    correctAnswerTextEl.textContent = answerText;
    correctAnswerDisplayEl.classList.remove('hidden');
}


// =========================================================
//                  V. LOGIC LƯU VÀ ĐIỀU HƯỚNG
// =========================================================

/** Lưu câu trả lời hiện tại của người dùng vào mảng userAnswers */
function saveUserAnswer(index) {
    if (isExamSubmitted) return; 

    const question = currentExam[index];
    let answer = null;
    
    if (question.type === 'C1') {
        const selectedRadio = document.querySelector(`input[name="q${question.id}"]:checked`);
        if (selectedRadio) {
            answer = selectedRadio.value;
        }
    } else if (question.type === 'N') {
        const matchingPairs = {};
        const selects = document.querySelectorAll('.match-select');
        
        selects.forEach(select => {
            if (select.value) {
                matchingPairs[select.dataset.leftItem] = select.value;
            }
        });
        
        // Chỉ lưu nếu có ít nhất 1 lựa chọn
        if (Object.keys(matchingPairs).length > 0) { 
             answer = matchingPairs; 
        } else {
             answer = null; 
        }
    }
    
    if (answer !== null) {
        userAnswers[index] = answer;
    } else if (userAnswers[index] !== undefined) {
        userAnswers[index] = null; 
    }
    
    updateProgressBar(currentQuestionIndex);
}

/** Cập nhật trạng thái enabled/disabled của nút điều hướng */
function updateNavigationButtons() {
    
    if (isExamSubmitted) {
        nextBtn.disabled = true;
        prevBtn.disabled = true;
        submitBtn.style.display = 'none'; 
        return;
    }
    
    submitBtn.style.display = 'block';
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentExam.length - 1;
}

// =========================================================
//                  VI. LOGIC CHẤM ĐIỂM
// =========================================================

/** Kiểm tra đáp án của 1 câu hỏi */
function checkAnswer(question, userAnswer) {
    if (userAnswer === null) return false;

    if (question.type === 'C1') {
        return userAnswer === question.correctAnswer;
    }
    
    if (question.type === 'N') {
        let isCorrect = true;
        
        // Câu trả lời Nối/Điền từ được coi là đúng nếu TẤT CẢ các cặp đều khớp.
        if (Object.keys(userAnswer).length !== question.pairs.length) {
            return false;
        }

        for (const userLeft in userAnswer) {
            const userRight = userAnswer[userLeft];
            const correctPair = question.pairs.find(p => p.left === userLeft);
            
            if (!correctPair || correctPair.right !== userRight) {
                isCorrect = false;
                break;
            }
        }
        return isCorrect;
    }
    
    return false;
}

/** HÀM CHẤM ĐIỂM TOÀN BỘ BÀI THI */
function checkExam() {
    let correctCount = 0;
    
    isExamSubmitted = true;
    submitBtn.disabled = true;
    
    for (let i = 0; i < currentExam.length; i++) {
        const question = currentExam[i];
        const userAnswer = userAnswers[i];
        
        const isCorrect = checkAnswer(question, userAnswer);
        
        if (isCorrect) {
            correctCount++;
        }
        
        const progressButton = document.querySelector(`.q-number[data-index="${i}"]`);
        progressButton.classList.remove('answered', 'active');
        if (isCorrect) {
            progressButton.classList.add('correct'); 
        } else {
            progressButton.classList.add('incorrect'); 
        }
        progressButton.disabled = false;
    }
    
    const totalScore = correctCount;
    // Điều kiện đậu: Đạt tối thiểu 8/10 câu
    const isPassed = totalScore >= 8; 

    // 2. Cập nhật Hộp Kết Quả 
    document.getElementById('correct-count').textContent = totalScore;
    document.getElementById('incorrect-count').textContent = TOTAL_QUESTIONS - totalScore;
    resultBoxEl.classList.remove('hidden');

    let statusMessage = document.getElementById('exam-status');
    
    if (isPassed) {
        statusMessage.textContent = "CHÚC MỪNG, ĐẠT YÊU CẦU!";
        statusMessage.style.color = 'green';
    } else {
        statusMessage.textContent = "CHƯA ĐẠT (Cần ôn tập thêm)";
        statusMessage.style.color = 'orange';
    }
    
    // 3. Hiển thị lại câu hiện tại (để disable input và show đáp án đúng)
    renderQuestion(currentQuestionIndex);
}

// =========================================================
//                  VII. KHỞI TẠO VÀ SỰ KIỆN
// =========================================================

/** HÀM KHỞI TẠO BÀI THI */
function initExam(examId = 1) {
    currentExamId = examId;
    isExamSubmitted = false; 
    
    currentExam = generateExam(); 
    currentQuestionIndex = 0;
    userAnswers = Array(TOTAL_QUESTIONS).fill(null);
    
    // Reset giao diện và các nút
    resultBoxEl.classList.add('hidden');
    submitBtn.disabled = false;
    correctAnswerDisplayEl.classList.add('hidden');

    // Cập nhật tab active
    document.querySelectorAll('.exam-tab').forEach(tab => {
        if (parseInt(tab.dataset.examId) === examId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    setupProgressBar(); 
    renderQuestion(currentQuestionIndex); 
}

// 1. Gắn sự kiện cho nút điều hướng
nextBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex < currentExam.length - 1) {
        renderQuestion(currentQuestionIndex + 1);
    }
});

prevBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    if (currentQuestionIndex > 0) {
        renderQuestion(currentQuestionIndex - 1);
    }
});

// 2. Gắn sự kiện cho nút Nộp bài
submitBtn.addEventListener('click', () => {
    saveUserAnswer(currentQuestionIndex); 
    checkExam();
});

// 3. Gắn sự kiện cho nút Làm Đề Mới (trong Result Box)
document.getElementById('select-new-exam-btn').addEventListener('click', () => {
    initExam(currentExamId); 
});

// 4. Gắn sự kiện cho các Tab chọn đề (Đề 1 - Đề 5)
examTabsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('exam-tab')) {
        const newExamId = parseInt(e.target.dataset.examId);
        initExam(newExamId);
    }
});


// KHỞI ĐỘNG ỨNG DỤNG LẦN ĐẦU
initExam(1);