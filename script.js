// 弹窗点击按钮后隐藏
document.querySelector('.popup-content button').addEventListener('click', function() {
    const popup = document.querySelector('.intro-popup');
    popup.style.opacity = 0;  // 触发淡出效果
    setTimeout(function() {
        popup.classList.add('hidden');  // 完成动画后隐藏弹窗
    }, 1000);  // 等待动画结束后执行
});

let selectedYear = "";
const today = new Date ();
const month = today.getMonth() + 1;
const ICON = document.getElementById("icon");


function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function selectYear(year) {
    selectedYear = year;
    closePopup();
    if(selectedYear == "First Year" ){
        if (month >= 9 && month <= 12) {
            const positionPercent = 15;
            ICON.style.left = `${positionPercent}%`;
        }else if (month >= 1 && month <= 5){
            const positionPercent = 30;
            ICON.style.left = `${positionPercent}%`;
        } else if (month >= 6 && month <= 8){
            const positionPercent = 50;
            ICON.style.left = `${positionPercent}%`;
        } 
    } else if(selectedYear == "Second Year"){
        if (month >= 9 && month <= 12) {
            const positionPercent = 65;
            ICON.style.left = `${positionPercent}%`;
            }else if (month >= 1 && month <= 5){
                const positionPercent = 80;
            ICON.style.left = `${positionPercent}%`;
            } else if (month >= 6 && month <= 8){
                const positionPercent = 95;
            ICON.style.left = `${positionPercent}%`;
            } 
    }
}

document.addEventListener("DOMContentLoaded", showPopup);




