const questionsAndAnswers = [
    { question: "Как тебя зовут?", answer: "Я — чат-бот, рад помочь!" },
    { question: "Какие языки ты знаешь?", answer: "Я знаю много языков, включая русский, английский и другие." },
    { question: "Что ты умеешь?", answer: "Я могу отвечать на вопросы и помогать в различных задачах." },
    { question: "Ты живой?", answer: "Нет, я просто программа, созданная для общения!" },
    { question: "Какой сегодня день?", answer: "Сегодня замечательный день!" },
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

    // Поиск ответа от бота по введенному номеру
    const answer = getAnswer(userInput.trim());

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
    const num = parseInt(userInput, 10);
    if (isNaN(num) || num < 1 || num > 5) {
        return "Пожалуйста, введите цифру от 1 до 5 для выбора вопроса.";
    }
    return questionsAndAnswers[num - 1].answer;
}

// Добавляем обработку нажатия клавиши Enter
document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Останавливаем стандартное поведение (перевод строки)
        sendMessage();  // Отправляем сообщение
    }
});
