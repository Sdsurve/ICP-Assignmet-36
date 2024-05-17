function changeImg1(){
    const LikeImg = document.getElementById("img-like-1")

    LikeImg.src="./../images/like.png";
}
function changeImg2(){
    const LikeImg1 = document.getElementById("img-like-2")
    LikeImg1.src="./../images/like.png";
}
function changeImg3(){
    const LikeImg2 = document.getElementById("img-like-3")
    LikeImg2.src="./../images/like.png";
}
function ChangeThem1(){
    const LightThem = document.getElementById("light")
    const DarkThem = document.getElementById("dark")
    LightThem.src="./../images/brightness (1).png"
    DarkThem.src="./../images/night-mode.png"
    const BodyElement = document.getElementById("body")
        BodyElement.className = "light-them"
    

}
function ChangeThem2(){
    const LightThem = document.getElementById("light")
    const DarkThem = document.getElementById("dark")
    LightThem.src="./../images/brightness.png"
    DarkThem.src="./../images/dark.png"
    const BodyElement = document.getElementById("body")
        BodyElement.className = "dark-them"

}