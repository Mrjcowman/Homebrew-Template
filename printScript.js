function printDiv(divName){
    const div = document.getElementById(divName);
    const printContents = div.innerHTML;
    const originalContents = document.body.innerHTML;

    // document.body.innerHTML = printContents;
    // document.body.setAttribute("class", "page");

    // print();

    // document.body.removeAttribute("class");

    document.body.style.visibility = "hidden";

    let children = div.children;
    const numChildren = children.length;

    for(let i=0; i<numChildren; i++){
        children[i].style.visibility = "visible";
    }

    div.setAttribute("class", "page printedPage");

    print();

    div.setAttribute("class", "page");

    document.body.style.visibility="visible";


    // document.body.innerHTML = originalContents;
}

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