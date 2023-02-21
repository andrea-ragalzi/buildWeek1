
var rootEl = document.querySelector(':root');
var rootStyle = getComputedStyle(rootEl);
var donut = document.querySelector('.donut');
var donutBefore = getComputedStyle(donut,'::before');
var percentage = 33;

function checkPercent() {
    console.log(rootStyle.getPropertyValue('--percentage'));
}

checkPercent();

function changePercent() {
   rootEl.style.setProperty('--percentage',`${percentage}`);
}

console.log(rootStyle);
changePercent();