const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvcmVzdHxlbnwwfHx8fDE2NTcwNDEwODg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvcmVzdHxlbnwwfHx8fDE2NTcwNDEwODg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZvcmVzdHxlbnwwfHx8fDE2NTcwNDEwODg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvcmVzdHxlbnwwfHx8fDE2NTcwNDEwODg&ixlib=rb-1.2.1&q=80&w=1080'
];
let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

function showImage(index) {
    sliderImage.src = images[index];
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

prevBtn.addEventListener('click', showPreviousImage);
nextBtn.addEventListener('click', showNextImage);

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        showImage(currentIndex);
    });
});

showImage(currentIndex);
