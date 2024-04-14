const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const content = document.getElementById("content")
 

for(let i = 0; i < posts.length; i++){
   
   const  display = `<section> <div class="section-head">
    <img class="user-dp" src="${posts[i].avatar}" alt="">

    <div class="profile-description">

    <p> <strong>${posts[i].name } </strong></p> 
    <p>${posts[i].location}</p>

    </div>
    </div>

    <img class = "post" src="${posts[i].post}" alt="">
    
    <div class="icon">
    <img class="icon-image" src="images/icon-heart.png" alt="">
    <img class="icon-image" src="images/icon-comment.png" alt="">
    <img class="icon-image" src="images/icon-dm.png" alt="">
    </div>
    
    <div class="description">
    <p > <strong>${posts[i].likes}, likes</strong> </p>
    <p ><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
    </div>
    </section>
    `
    content.innerHTML += display

}
