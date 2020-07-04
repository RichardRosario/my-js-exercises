const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(e){
    const id = e.target.dataset.id
    console.log(id);
    
    if(id) {
        // remove active from button
        btns.forEach(function(btn){
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        // hide other articles
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        // get active element
        const element = document.getElementById(id)
        element.classList.add('active')
    }
    
})