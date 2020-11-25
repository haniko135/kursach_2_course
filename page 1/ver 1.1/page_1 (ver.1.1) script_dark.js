let j = 0;
function openNav() {
    if(j == 0){
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
        document.getElementById("searchIcon").style.backgroundColor = "#ceba85";
        document.getElementById("homeIcon").style.backgroundColor = "rgba(86, 86, 86, 0.01)";
        j++;
    }
    else if(j == 1){
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "#0e0e0e";
        document.getElementById("searchIcon").style.backgroundColor = "#0e0e0e";
        document.getElementById("homeIcon").style.backgroundColor = "#ceba85";
        j--;
    }
}
 
let i = 0;
function dropMenu(){
    if(i == 0){
        document.getElementById("pageMenu").style.width="9.5%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
        document.getElementById("menuIcon").style.backgroundColor = "rgba(86, 86, 86, 0.01)";
        document.getElementById("menuBar").style.backgroundColor = "rgba(86, 86, 86, 0.01)";
        i++;
    }
    else if(i == 1){
        document.getElementById("pageMenu").style.width = "0";
        document.body.style.backgroundColor = "#0e0e0e";
        document.getElementById("menuIcon").style.backgroundColor = "#ceba85";
        document.getElementById("menuBar").style.backgroundColor = "#ceba85";
        i--;
    }
}

function searchOnPage() {

    var input, filter, ul, li, a, i;
    input = document.getElementById("textToFind");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menuSearch");
    li = ul.getElementsByTagName("li");
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
    }
}

let tooltipElem;
document.onmouseover = function(event) {
    let focus = event.target;

    let tooltipHtml = focus.dataset.tooltip;
    if (!tooltipHtml) return;

    tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltipHtml;
    document.body.append(tooltipElem);

    let coords = focus.getBoundingClientRect();

    let right = coords.right - (focus.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (right < 0) { right = 0; } // не заезжать за левый край окна

    let top = coords.top + tooltipElem.offsetHeight - 30;
    if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
        top = coords.top + focus.offsetHeight;
    }
    tooltipElem.style.left = right + 'px';
    tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
};