const apiKey = '';
const photoElement = document.getElementById('photo');
const photographerElement = document.getElementById('photographer');
const likeButton = document.getElementById('likeButton');
const likeCountElement = document.getElementById('likeCount');

async function getRandomPhoto() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        
        // Проверка, что запрос был успешным
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const data = await response.json();

        const imageUrl = data.urls.regular;
        const photographerName = data.user.name;
        const photoId = data.id;

        // Отображаем изображение и информацию о фотографе
        photoElement.src = imageUrl;
        photographerElement.textContent = photographerName;

        // Инициализация счетчика лайков
        initLikeButton(photoId);
    } catch (error) {
        console.error('Ошибка при получении изображения:', error);
    }
}

// Функция инициализации лайков с учетом сохраненных данных
function initLikeButton(photoId) {
    let likeCount = localStorage.getItem(photoId) || 0;
    likeCountElement.textContent = likeCount;

    likeButton.onclick = () => {
        likeCount++;
        likeCountElement.textContent = likeCount;
        localStorage.setItem(photoId, likeCount);
    };
}

// Загружаем случайное фото при загрузке страницы
window.onload = getRandomPhoto;
