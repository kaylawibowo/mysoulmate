function showGift(){

document.getElementById("cover").style.display="none";

document.getElementById("gift").classList.remove("hidden");

}

function showLetter(){

document.getElementById("gift").style.display="none";

document.getElementById("letterPage").classList.remove("hidden");

}

setInterval(() => {

    const flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = "❀";

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.animationDuration =
        (Math.random() * 3 + 4) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    },7000);

},2000);
for(let i=0;i<10;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.innerHTML="✦";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.fontSize=(Math.random()*15+10)+"px";

    document.body.appendChild(star);

}

function openPhoto(photo){

    document.getElementById("photoModal")
        .classList.remove("hidden");

    document.getElementById("modalImg")
        .src = photo.src;

}

document.getElementById("photoModal")
.addEventListener("click", function(){

    this.classList.add("hidden");

});

document.getElementById("intro")
.addEventListener("click", function(){

    document.getElementById("intro")
        .style.display = "none";

    document.getElementById("cover")
        .classList.remove("hidden");

    document.getElementById("bgMusic")
        .play();

});
