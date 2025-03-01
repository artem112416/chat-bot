const questionsAndAnswers = [
    { question: "Как тебя зовут?", answer: "Я — чат-бот, рад помочь!" },
    { question: "Какие языки ты знаешь?", answer: "Я знаю много языков, включая русский, английский и другие." },
    { question: "Что ты умеешь?", answer: "Я могу отвечать на вопросы и помогать в различных задачах." },
    { question: "Ты живой?", answer: "Нет, я просто программа, созданная для общения!" },
    { question: "Какой сегодня день?", answer: "Сегодня замечательный день!" },
    { question: "Где ты живешь?", answer: "Я не имею физического тела, но доступен для общения в интернете." },
    { question: "Какой твой любимый цвет?", answer: "Мне нравится синий, но я не человек, так что у меня нет предпочтений." },
    { question: "Что ты думаешь о людях?", answer: "Я думаю, что люди замечательные! Я всегда рад помочь." },
    { question: "Ты можешь делать математику?", answer: "Да, я могу помочь с простыми математическими задачами!" },
    { question: "Ты знаешь о программировании?", answer: "Да, я много знаю о программировании и могу объяснить основы." },
    { question: "Какие языки программирования ты знаешь?", answer: "Я знаю Python, JavaScript, C++, Java и другие." },
    { question: "Как мне начать учить Python?", answer: "Начни с изучения базовых синтаксических конструкций и простых программ." },
    { question: "Что такое DevOps?", answer: "DevOps — это подход к разработке и эксплуатации ПО, который способствует улучшению взаимодействия между разработчиками и операционными командами." },
    { question: "Как улучшить свои навыки в программировании?", answer: "Практикуйся, читай документацию и участвуй в open-source проектах!" },
    { question: "Как начать работать с Docker?", answer: "Изучи основы контейнеризации и как создавать Docker-образы." },
    { question: "Что такое микросервисы?", answer: "Микросервисы — это архитектурный стиль, при котором приложение состоит из набора мелких независимых сервисов." },
    { question: "Что такое GitHub?", answer: "GitHub — это платформа для хостинга репозиториев и совместной работы над проектами." },
    { question: "Что такое CI/CD?", answer: "CI/CD — это практики, связанные с автоматизацией тестирования и развертывания программного обеспечения." },
    { question: "Как ты учишься?", answer: "Я не учусь, но могу анализировать данные и обучаться на основе информации, которая мне предоставляется." },
    { question: "Что такое Kubernetes?", answer: "Kubernetes — это система для автоматизации развертывания, масштабирования и управления контейнеризованными приложениями." },
    { question: "Как ты можешь помочь мне?", answer: "Я могу ответить на вопросы, объяснить концепции и помочь с программированием!" }
];

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatBox = document.getElementById('chatBox');
    
    if (userInput.trim() === '') return;

    // Отправка сообщения пользователя
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('chat-message', 'user-message');
    userMessageDiv.textContent = userInput;
    chatBox.appendChild(userMessageDiv);

    // Поиск ответа от бота
    const answer = getAnswer(userInput.toLowerCase());
    
    // Отправка ответа бота
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('chat-message', 'bot-message');
    botMessageDiv.textContent = answer;
    chatBox.appendChild(botMessageDiv);

    // Очищаем поле ввода
    document.getElementById('userInput').value = '';

    // Прокрутка вниз
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAnswer(userInput) {
    for (const qa of questionsAndAnswers) {
        if (userInput.includes(qa.question.toLowerCase())) {
            return qa.answer;
        }
    }
    return "Извините, я не понимаю ваш вопрос.";
}
