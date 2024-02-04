function scrollle(l){
    document.getElementById("product-grid").scrollLeft+=l;
    console.log("done")
}
function scrollri(l){
    document.getElementById("product-grid").scrollLeft-=l;
    console.log("done")
}
function ham(){
 let open;
    if(open){
        document.getElementById("options").style.transform="translateX(-70vw)";
        open=0;
    }
    else{
        document.getElementById("options").style.transform="translateX(0vw)";
        open=1;
    }
}