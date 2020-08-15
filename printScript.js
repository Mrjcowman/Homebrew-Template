function printDivs(divClass){
    const divs = document.getElementsByClassName(divClass);
    document.body.style.visibility = "hidden";

    for(let i=0; i<divs.length; i++){
        divs[i].setAttribute("class", "page printedPage");
        divs[i].style.top = (i*11)+"in";
        divs[i].style.left = '0';
    }

    print();

    for(let i=0; i<divs.length; i++){
        divs[i].setAttribute("class", "page");
    }

    document.body.style.visibility = "visible";

}