// 定義資訊科技發展的歷史事件資料
const events = [
    // 早期關鍵技術與發明 ( category: tech )
    { name: "半導體積體電路發明", year: 1958, answered: false, category: 'tech' },
    { name: "網際網路前身ARPANET上線", year: 1969, answered: false, category: 'tech' },
    { name: "個人電腦(PC)概念誕生", year: 1974, answered: false, category: 'tech' },
    { name: "WWW萬維網發明", year: 1989, answered: false, category: 'tech' },
    { name: "Wi-Fi技術標準問世", year: 1997, answered: false, category: 'tech' },

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
    { name: "深度學習概念提出", year: 1986, answered: false, category: 'ai' },
    { name: "IBM Deep Blue 擊敗世界棋王", year: 1997, answered: false, category: 'ai' },
    { name: "Google 發表 AlphaGo", year: 2015, answered: false, category: 'ai' },
    { name: "Google AlphaGo 擊敗李世乭", year: 2016, answered: false, category: 'ai' },
    { name: "OpenAI 發布 GPT-3", year: 2020, answered: false, category: 'ai' },
    { name: "ChatGPT 首次發布", year: 2022, answered: false, category: 'ai' },

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
    
    // 其他與趨勢 ( category: others )
    { name: "區塊鏈技術概念提出", year: 2008, answered: false, category: 'others' },
    { name: "阿里巴巴在香港上市", year: 2007, answered: false, category: 'others' },

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

const eventQuestion = document.getElementById('event-question');
const userAnswer = document.getElementById('user-answer');
const submitButton = document.getElementById('submit-button');
const feedback = document.getElementById('feedback');
const timelineContainer = document.querySelector('.timeline-container');
const quizContainer = document.querySelector('.quiz-container');
const showAllButton = document.getElementById('show-all-button');
const categoryFilter = document.querySelector('.category-filter');

const minYear = 1945; // 調整時間軸起始年份以容納Sony
const maxYear = 2025;
const eventCardWidth = 180;
const eventCardHeight = 90;
const spacing = 10;

let currentEvent = null;
let maxZIndex = 1;

function getPosition(year) {
    return ((year - minYear) / (maxYear - minYear)) * 100;
}

function pickRandomEvent() {
    const unansweredEvents = events.filter(e => !e.answered);
    if (unansweredEvents.length === 0) {
        eventQuestion.textContent = "恭喜你！所有資訊科技事件都已完成！";
        userAnswer.style.display = 'none';
        submitButton.style.display = 'none';
        feedback.textContent = "";
        return null;
    }
    const randomIndex = Math.floor(Math.random() * unansweredEvents.length);
    currentEvent = unansweredEvents[randomIndex];
    eventQuestion.textContent = `請問「${currentEvent.name}」是發生在哪一年？`;
}

function repositionEvents() {
    const existingEvents = Array.from(document.querySelectorAll('.timeline-event'));
    
    existingEvents.sort((a, b) => {
        const yearA = a.getAttribute('data-year');
        const yearB = b.getAttribute('data-year');
        return yearA - yearB;
    });

    const timelineRect = timelineContainer.getBoundingClientRect();
    const timelineWidth = timelineRect.width;

    existingEvents.forEach(e => e.classList.remove('up', 'down'));
    
    const upLayers = {};
    const downLayers = {};
    let maxUpLayer = 0;
    let maxDownLayer = 0;

    existingEvents.forEach(eventElement => {
        if (eventElement.style.display === 'none') return;

        const eventYear = parseInt(eventElement.getAttribute('data-year'));
        const eventPos = getPosition(eventYear) * timelineWidth / 100;

        let upLayerIndex = 0;
        let isOverlappingUp = true;
        while (isOverlappingUp) {
            isOverlappingUp = false;
            if (upLayers[upLayerIndex] && upLayers[upLayerIndex] + eventCardWidth > eventPos) {
                isOverlappingUp = true;
                upLayerIndex++;
            }
        }
        
        let downLayerIndex = 0;
        let isOverlappingDown = true;
        while (isOverlappingDown) {
            isOverlappingDown = false;
            if (downLayers[downLayerIndex] && downLayers[downLayerIndex] + eventCardWidth > eventPos) {
                isOverlappingDown = true;
                downLayerIndex++;
            }
        }

        if (upLayerIndex <= downLayerIndex) {
            eventElement.style.setProperty('--layer-index', upLayerIndex);
            eventElement.classList.add('up');
            upLayers[upLayerIndex] = eventPos + eventCardWidth;
            if (upLayerIndex > maxUpLayer) {
                maxUpLayer = upLayerIndex;
            }
        } else {
            eventElement.style.setProperty('--layer-index', downLayerIndex);
            eventElement.classList.add('down');
            downLayers[downLayerIndex] = eventPos + eventCardWidth;
            if (downLayerIndex > maxDownLayer) {
                maxDownLayer = downLayerIndex;
            }
        }
    });

    const upHeight = (maxUpLayer + 1) * eventCardHeight + spacing;
    const downHeight = (maxDownLayer + 1) * eventCardHeight + spacing;
    timelineContainer.style.minHeight = `${upHeight + downHeight}px`;
    timelineContainer.style.marginTop = `${upHeight + 30}px`;
}

function addEventToTimeline(event) {
    const eventElement = document.createElement('div');
    eventElement.classList.add('timeline-event', event.category);
    eventElement.setAttribute('data-year', event.year);
    eventElement.setAttribute('data-category', event.category);

    const position = getPosition(event.year);
    eventElement.style.left = `${position}%`;

    eventElement.innerHTML = `
        <div class="event-bubble" title="${event.name}">
            <div class="event-year">${event.year}</div>
            <div class="event-name">${event.name}</div>
        </div>
    `;

    eventElement.addEventListener('click', () => {
        maxZIndex++;
        eventElement.style.zIndex = maxZIndex;
    });

    timelineContainer.appendChild(eventElement);
    repositionEvents();
}

function checkAnswer() {
    const answer = parseInt(userAnswer.value);
    if (isNaN(answer)) {
        feedback.textContent = "請輸入一個有效的年份！";
        feedback.style.color = 'red';
        return;
    }

    if (answer === currentEvent.year) {
        feedback.textContent = "答對了！";
        feedback.style.color = 'green';
        currentEvent.answered = true;
        addEventToTimeline(currentEvent);
        
        userAnswer.value = "";
        setTimeout(pickRandomEvent, 1000);
    } else {
        feedback.textContent = `答案錯誤！正確年份是 ${currentEvent.year} 年。`;
        feedback.style.color = 'red';
        
        currentEvent.answered = true;
        addEventToTimeline(currentEvent);
        setTimeout(pickRandomEvent, 2000);
    }
}

function handleCategoryFilter() {
    const checkedCategories = Array.from(document.querySelectorAll('.category-filter input:checked')).map(cb => cb.value);
    
    document.querySelectorAll('.timeline-event').forEach(eventElement => {
        const category = eventElement.getAttribute('data-category');
        if (checkedCategories.includes(category)) {
            eventElement.style.display = 'block';
        } else {
            eventElement.style.display = 'none';
        }
    });

    repositionEvents();
}

function showAllEvents() {
    quizContainer.style.display = 'none';
    showAllButton.style.display = 'none';
    categoryFilter.style.display = 'flex';

    timelineContainer.innerHTML = '<div class="timeline-line"></div>';

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event', event.category);
        eventElement.setAttribute('data-year', event.year);
        eventElement.setAttribute('data-category', event.category);
        
        const position = getPosition(event.year);
        eventElement.style.left = `${position}%`;
        
        eventElement.innerHTML = `
            <div class="event-bubble" title="${event.name}">
                <div class="event-year">${event.year}</div>
                <div class="event-name">${event.name}</div>
            </div>
        `;
        
        eventElement.addEventListener('click', () => {
            maxZIndex++;
            eventElement.style.zIndex = maxZIndex;
        });

        timelineContainer.appendChild(eventElement);
    });

    repositionEvents();
}

submitButton.addEventListener('click', checkAnswer);
userAnswer.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});
showAllButton.addEventListener('click', showAllEvents);

document.querySelectorAll('.category-filter input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', handleCategoryFilter);
});

pickRandomEvent();