const share = document.querySelector('.share')
const shareBtn = document.querySelector('.share-icon')

shareBtn.addEventListener('click', ()=>{
    share.classList.toggle('open')
    shareBtn.classList.toggle('share-icon--active');
})