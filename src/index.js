// write your code here
const getHeader = document.querySelector('#header');
const menuDiv = document.querySelector('#ramen-menu');
document.addEventListener('DOMContentLoaded', ()=>{
    fetch(`http://localhost:3000/ramens`,{
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify()
    } )
    .then (response => response.json())
    .then (data =>{renderRamen(data)})
    })


    document.querySelector('#new-ramen').addEventListener('submit', addRamen)



    function addRamen(e){
        e.preventDefault()
        
        const myObj =[{
            "image": e.target[2].value,
            "name": e.target[0].value,
            "restaurant": e.target[1].value,
            "rating": e.target[3].value,
            "comment": e.target[4].value
        }]
        renderRamen(myObj)


    //     fetch(`http://localhost:3000/ramens`,{
    //     method: `POST`,
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(myObj)
    // })
    
    // .then(data => {
    //     renderRamen(data)
    // })
    }




    function renderRamen(data){
        data.forEach(item =>{
        const itemImg = document.createElement('img');
        itemImg.src = item.image
        
        
        itemImg.addEventListener('click', (e)=>{
            e.preventDefault();
            const nameH2 = document.querySelector(`.name`)
            nameH2.textContent = item.name


            const mainImg = document.querySelector('.detail-image');
            mainImg.src = item.image;

            const getPlace = document.querySelector(`.restaurant`)
            getPlace.textContent = item.restaurant

            const getRating = document.querySelector(`#rating-display`)
            getRating.textContent = `${item.rating}`


            const getComment = document.querySelector(`#comment-display`)
            getComment.textContent = `${item.comment}`
    })
    menuDiv.append(itemImg);
})
}