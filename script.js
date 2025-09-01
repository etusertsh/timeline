document.addEventListener('DOMContentLoaded', () => {
    // --- 1. 歷史事件資料 ---
    const eventsData = [
        // 早期關鍵技術與發明 ( category: tech )
        { name: "半導體積體電路發明", year: 1958, answered: false, category: 'tech' },
        { name: "網際網路前身ARPANET上線", year: 1969, answered: false, category: 'tech' },
        { name: "個人電腦(PC)概念誕生", year: 1974, answered: false, category: 'tech' },
        { name: "WWW全球資訊網發明", year: 1989, answered: false, category: 'tech' },
        { name: "Wi-Fi技術標準問世", year: 1997, answered: false, category: 'tech' },
        { year: 1991, name: 'Linux 核心首次發布', category: 'tech' },

        // 重要公司創立與里程碑 ( category: company )
        { name: "Intel成立", year: 1968, answered: false, category: 'company' },
        { name: "Sony（索尼）成立", year: 1946, answered: false, category: 'company' }, // 新增：Sony
        { name: "Microsoft成立", year: 1975, answered: false, category: 'company' },
        { name: "Apple成立", year: 1976, answered: false, category: 'company' },
        { name: "Cisco Systems成立", year: 1984, answered: false, category: 'company' },
        { name: "Dell (戴爾)成立", year: 1984, answered: false, category: 'company' },
        { name: "ASML (艾司摩爾)成立", year: 1984, answered: false, category: 'company' },
        { name: "TSMC (台積電)成立", year: 1987, answered: false, category: 'company' },
        { name: "NVIDIA成立", year: 1993, answered: false, category: 'company' },
        { name: "Amazon成立", year: 1994, answered: false, category: 'company' },
        { name: "Google成立", year: 1998, answered: false, category: 'company' },
        { name: "Facebook成立", year: 2004, answered: false, category: 'company' },

        // 中國科技 ( category: china-tech )
        { name: "華為（Huawei）成立", year: 1987, answered: false, category: 'china-tech' },
        { name: "馬化騰成立騰訊", year: 1998, answered: false, category: 'china-tech' },
        { name: "馬雲成立阿里巴巴", year: 1999, answered: false, category: 'china-tech' },
        { name: "李彥宏成立百度", year: 2000, answered: false, category: 'china-tech' },
        { name: "小米（Xiaomi）成立", year: 2010, answered: false, category: 'china-tech' },
        { name: "OPPO 成立", year: 2004, answered: false, category: 'china-tech' },
        { name: "vivo 成立", year: 2009, answered: false, category: 'china-tech' },
        // AI 技術與重大突破 ( category: ai )
        {year: 1950, name: '圖靈提出圖靈測試', category: 'ai'},
        { year: 1956, name: '第一次 AI 會議 (達特茅斯會議)', category: 'ai' },
        { name: "深度學習概念提出", year: 1986, answered: false, category: 'ai' },
        { name: "IBM Deep Blue 擊敗世界棋王", year: 1997, answered: false, category: 'ai' },
        { name: "Google 發表 AlphaGo", year: 2015, answered: false, category: 'ai' },
        { name: "Google AlphaGo 擊敗李世乭", year: 2016, answered: false, category: 'ai' },
        { name: "OpenAI 發布 GPT-3", year: 2020, answered: false, category: 'ai' },
        { name: "ChatGPT 首次發布", year: 2022, answered: false, category: 'ai' },
        { year: 2012, name: 'AlexNet 在 ImageNet 競賽中獲勝，引爆深度學習革命', category: 'ai' },
        { year: 2015, name: 'Google 開源 TensorFlow', category: 'ai' },

        // 遊戲主機與行動裝置 ( category: device )
        { name: "第一款商用遊戲主機 Magnavox Odyssey", year: 1972, answered: false, category: 'device' },
        { name: "任天堂推出紅白機 (Famicom/NES)", year: 1983, answered: false, category: 'device' },
        { name: "Sony PlayStation 發售", year: 1994, answered: false, category: 'device' },
        { name: "Microsoft Xbox 發售", year: 2001, answered: false, category: 'device' },
        { name: "Sony PlayStation 2 發售", year: 2000, answered: false, category: 'device' },
        { name: "Nintendo Switch 發售", year: 2017, answered: false, category: 'device' },
        { name: "Motorola推出第一款商用手機", year: 1983, answered: false, category: 'device' },
        { name: "Nokia 推出 3310 手機", year: 2000, answered: false, category: 'device' },
        { name: "第一個iPhone發布", year: 2007, answered: false, category: 'device' },
        { name: "iPad 平板電腦發布", year: 2010, answered: false, category: 'device' },
        { year: 1971, name: 'Intel 4004 微處理器', category: 'device' },

        // 其他與趨勢 ( category: others )
        { name: "區塊鏈技術概念提出", year: 2008, answered: false, category: 'others' },
        { name: "阿里巴巴在香港上市", year: 2007, answered: false, category: 'others' },
        { year: 2001, name: '維基百科上線', category: 'others' },
        { year: 2008, name: '比特幣白皮書發布', category: 'others' },

        // 程式語言 ( category: programming )
        { name: "C 語言誕生", year: 1972, answered: false, category: 'programming' },
        { name: "C++ 語言誕生", year: 1983, answered: false, category: 'programming' },
        { name: "Python 語言發布", year: 1991, answered: false, category: 'programming' },
        { name: "Java 語言發布", year: 1995, answered: false, category: 'programming' },
        { name: "JavaScript 語言發布", year: 1995, answered: false, category: 'programming' },
        { name: "PHP 語言發布", year: 1995, answered: false, category: 'programming' },
        { name: "C# 語言發布", year: 2000, answered: false, category: 'programming' },
        { name: "Ruby on Rails 框架發布", year: 2004, answered: false, category: 'programming' },
        { name: "Swift 語言發布", year: 2014, answered: false, category: 'programming' },

        // 台灣資訊科技公司 ( category: taiwan-company )
        { name: "宏碁（Acer）成立", year: 1976, answered: false, category: 'taiwan-company' },
        { name: "華碩（ASUS）成立", year: 1989, answered: false, category: 'taiwan-company' },
        { name: "宏達電（HTC）成立", year: 1997, answered: false, category: 'taiwan-company' },
        { name: "聯發科（MediaTek）成立", year: 1997, answered: false, category: 'taiwan-company' },
        { name: "趨勢科技（Trend Micro）成立", year: 1988, answered: false, category: 'taiwan-company' },
        { name: "台達電（Delta）成立", year: 1971, answered: false, category: 'taiwan-company' },
    ];

    // --- 2. 快取 DOM 元素 ---
    const quizContainer = document.querySelector('.quiz-container');
    const eventQuestion = document.getElementById('event-question');
    const userAnswer = document.getElementById('user-answer');
    const submitButton = document.getElementById('submit-button');
    const feedback = document.getElementById('feedback');
    const showAllButton = document.getElementById('show-all-button');
    const categoryFilter = document.querySelector('.category-filter');
    const timelineContainer = document.querySelector('.timeline-container');

    let currentQuizEvent = null;

    // --- 3. 核心功能函式 ---

    /**
     * 開始新一回合的測驗
     */
    function startNewQuizRound() {
        currentQuizEvent = eventsData[Math.floor(Math.random() * eventsData.length)];
        eventQuestion.textContent = `請問「${currentQuizEvent.name}」大約發生在西元哪一年？`;
        feedback.textContent = '';
        userAnswer.value = '';
        userAnswer.focus();
    }

    /**
     * 處理測驗答案提交
     */
    function handleQuizSubmit() {
        const answer = parseInt(userAnswer.value, 10);
        if (isNaN(answer)) {
            feedback.textContent = '請輸入有效的年份！';
            feedback.style.color = 'orange';
            return;
        }

        if (answer === currentQuizEvent.year) {
            feedback.textContent = `答對了！就是 ${currentQuizEvent.year} 年。`;
            feedback.style.color = 'lightgreen';
            showAllButton.style.display = 'inline-block'; // 顯示「全部顯示」按鈕
        } else {
            feedback.textContent = `不對喔，正確答案是 ${currentQuizEvent.year} 年。再試一個看看！`;
            feedback.style.color = 'lightcoral';
            setTimeout(startNewQuizRound, 2000); // 2秒後開始新一輪
        }
    }

    /**
     * 顯示完整時間軸
     */
    function showTimeline() {
        quizContainer.style.display = 'none';
        showAllButton.style.display = 'none';
        timelineContainer.style.display = 'block';
        categoryFilter.style.display = 'flex';

        generateEventCards(eventsData);
        recalculateLayout();
    }

    /**
     * 從資料動態生成事件卡片 HTML
     * @param {Array} data - 事件資料陣列
     */
    function generateEventCards(data) {
        // 清空現有卡片，保留時間線
        timelineContainer.innerHTML = '<div class="timeline-line"></div>';
        const fragment = document.createDocumentFragment();
        data.forEach(event => {
            const eventEl = document.createElement('div');
            eventEl.className = `timeline-event ${event.category}`;
            eventEl.dataset.category = event.category;
            eventEl.dataset.year = event.year;
            eventEl.innerHTML = `
                <div class="event-bubble">
                    <div class="event-year">${event.year}</div>
                    <div class="event-name">${event.name}</div>
                </div>
            `;
            fragment.appendChild(eventEl);
        });
        timelineContainer.appendChild(fragment);
    }

    /**
     * 重新計算並應用時間軸佈局
     */
    function recalculateLayout() {
        const visibleEvents = [...timelineContainer.querySelectorAll('.timeline-event:not(.hidden)')];
        if (visibleEvents.length === 0) return;

        visibleEvents.sort((a, b) => a.dataset.year - b.dataset.year);

        const minYear = parseInt(visibleEvents[0].dataset.year, 10);
        const maxYear = parseInt(visibleEvents[visibleEvents.length - 1].dataset.year, 10);
        const yearSpan = maxYear - minYear;

        let lastPosition = -100; // 用於追蹤上一個卡片的位置
        let layerIndex = 0;

        visibleEvents.forEach((eventEl, index) => {
            const year = parseInt(eventEl.dataset.year, 10);
            const position = yearSpan > 0 ? ((year - minYear) / yearSpan) * 95 + 2.5 : 50; // 左右留白 2.5%

            // 避免重疊
            if (position - lastPosition < 8) { // 8% 是一個經驗值，可以調整
                layerIndex++;
            } else {
                layerIndex = 0;
            }

            eventEl.style.left = `${position}%`;
            eventEl.style.setProperty('--layer-index', layerIndex);
            eventEl.classList.toggle('down', layerIndex % 2 !== 0);
            eventEl.classList.toggle('up', layerIndex % 2 === 0);

            lastPosition = position;
        });
    }

    /**
     * 處理類別篩選
     */
    function handleFilterChange() {
        const checkedCategories = new Set(
            [...categoryFilter.querySelectorAll('input:checked')].map(input => input.value)
        );

        timelineContainer.querySelectorAll('.timeline-event').forEach(event => {
            const isVisible = checkedCategories.has(event.dataset.category);
            event.classList.toggle('hidden', !isVisible);
            event.classList.remove('active'); // 篩選時重設 active 狀態
        });

        recalculateLayout(); // 篩選後重新計算佈局
    }

    /**
     * 處理卡片點擊 (事件委派)
     * @param {MouseEvent} e
     */
    function handleTimelineClick(e) {
        const clickedEvent = e.target.closest('.timeline-event');
        if (!clickedEvent) return;

        // 移除其他卡片的 active 狀態
        timelineContainer.querySelectorAll('.timeline-event.active').forEach(activeEl => {
            if (activeEl !== clickedEvent) {
                activeEl.classList.remove('active');
            }
        });

        // 切換被點擊卡片的 active 狀態
        clickedEvent.classList.toggle('active');
    }


    // --- 4. 設定事件監聽器 ---

    // 測驗按鈕
    submitButton.addEventListener('click', handleQuizSubmit);
    userAnswer.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleQuizSubmit();
        }
    });

    // 顯示時間軸按鈕
    showAllButton.addEventListener('click', showTimeline);

    // 類別篩選
    categoryFilter.addEventListener('change', handleFilterChange);

    // 時間軸卡片點擊 (事件委派)
    timelineContainer.addEventListener('click', handleTimelineClick);

    // 視窗大小改變時重新計算佈局 (使用 debounce 優化)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(recalculateLayout, 250);
    });

    // --- 5. 程式進入點 ---
    startNewQuizRound();
});