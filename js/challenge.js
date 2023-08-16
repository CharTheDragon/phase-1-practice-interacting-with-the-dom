let counter = document.querySelector('#counter')

let intervalID  

let pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click',(e)=>pauseOrResume(e))

let plus = document.querySelector('#plus')
plus.addEventListener('click',()=>parseInt(counter.innerText++))

let minus = document.querySelector('#minus')
minus.addEventListener('click',()=>parseInt(counter.innerText--))

function setInt() {
    intervalID = setInterval(incrementCounter, 1000)
}

setInt()

function incrementCounter() {
    return parseInt(counter.innerText++) 
}

function pauseOrResume(event) {
    if (event.target.innerText === 'pause') {
        event.target.innerText = 'resume';
        clearInterval(intervalID);
    } else if (event.target.innerText === 'resume'){
        event.target.innerText = 'pause' 
        setInt() 
}}

let likesList = document.querySelector('.likes')

let likeButton= document.querySelector('#heart')
likeButton.addEventListener('click',() => handleLikes())

let objOfLikes = {}

function handleLikes() {
    
    let likedNumber = counter.innerText
    if (likedNumber in objOfLikes) {
        const likedEl = likesList.querySelector(`[id='${likedNumber}']`)
        objOfLikes[likedNumber]++
        likedEl.innerText = `${likedNumber} has been liked ${objOfLikes[likedNumber]} times!`
    } else {
        objOfLikes[likedNumber] = 1
        let li = document.createElement('li')
        li.id = likedNumber
        li.innerText = `${likedNumber} has been liked ${objOfLikes[likedNumber]} times!`
        likesList.append(li)
    }   
}



document.querySelector('#comment-form').addEventListener("submit", (e) => {
    e.preventDefault()
    let newComment = document.createElement('p')
    newComment.textContent = e.target['comment-input'].value
    document.querySelector('#list').append(newComment)
})
