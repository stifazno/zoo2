function toggleNav() {
    const navList = document.querySelector('.nav');
    navList.classList.toggle('show');
}




window.addEventListener('DOMContentLoaded', function() {
    
    const mainImage = document.getElementById('mainImage');
    if(mainImage){
    function toggleImage() {
        const screenWidth = window.innerWidth;
  
        if (screenWidth <= 520) {
            mainImage.src = 'img/BackGroundDo520.jpg';
        } else if (screenWidth <= 980) {
            mainImage.src = 'img/BackGroundDo980.jpg';
        } else if (screenWidth <= 1584) {
            mainImage.src = "img/background1920.webp";
        } else {
            mainImage.src = 'img/ls.png';
        }
    }
  
    // Вызываем функцию при загрузке страницы и при изменении размера окна
    toggleImage();
    window.addEventListener('resize', toggleImage);
}
});


