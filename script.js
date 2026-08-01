function showGift(){

document.getElementById("cover").style.display="none";

document.getElementById("gift").classList.remove("hidden");

}

function showLetter(){

document.getElementById("gift").style.display="none";

document.getElementById("letterPage").classList.remove("hidden");

}
function openGift(){

    const gift = document.querySelector(".gift-box");
    const button = document.getElementById("letterButton");

    gift.classList.add("open");

    setTimeout(()=>{
        button.classList.remove("hidden");
    },800);

}
function showLetter(){

    alert("💌 Happy Birthday Niwniw 🤍");

}
