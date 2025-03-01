document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Функция для добавления сообщения в чат
    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender);
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Простейший алгоритм для ответа чат-бота
    function getBotResponse(input) {
        // Приводим текст пользователя к нижнему регистру, чтобы не зависеть от регистра ввода
        const userText = input.toLowerCase();

        if (userText.includes("привет")) {
            return "Привет! Как я могу помочь?";
        } else if (userText.includes("как дела")) {
            return "У меня всё хорошо, спасибо!";
		} else if (userText.includes("артем")) {
            return "Ты молодец";
		} else if (userText.includes("светлана")) {
            return "это мама артема";
		} else if (userText.includes("светлана с какого года")) {
            return "1959";
        } else if (userText.includes("пока")) {
            return "До свидания!";
        } else if (userText.includes("что ты можешь делать")) {
            return "Я могу отвечать на вопросы и помогать с различными задачами!";
        } else if (userText.includes("Погода")) {
            return "Я не могу проверить погоду, но рекомендую посмотреть в приложении на телефоне!";
        } else {
            return "Извините, я не понимаю этот вопрос.";
        }
    }

    // Функция для отправки сообщений
    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText !== "") {
            addMessage(userText, "user"); // Добавляем сообщение пользователя
            userInput.value = ""; // Очищаем поле ввода

            // Ответ бота (с небольшой задержкой)
            setTimeout(function () {
                const botResponse = getBotResponse(userText);
                addMessage("Бот: " + botResponse, "bot");
            }, 1000);
        }
    }

    // Обработчик кнопки "Отправить"
    sendBtn.addEventListener("click", sendMessage);

    // Обработчик для клавиши Enter
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});