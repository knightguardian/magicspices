function scrollle(l){
    document.getElementById("product-grid").scrollLeft+=l;
    console.log("done")
}
function scrollri(l){
    document.getElementById("product-grid").scrollLeft-=l;
    console.log("done")
}
function ham(){
 let open=document.getElementById("options").style;
    if(open.opacity=="1"){
        open.transform="translateX(-70vw)";
        open.opacity="0";
    }
    else{
        open.transform="translateX(0vw)";
        open.opacity="1";
    }
}
function clickon(){
    if(window.screen.width<=700){
    let open=document.getElementById("options").style;

    open.transform="translateX(-70vw)";
    open.opacity="0";
    }
    else{
        return;
    }
}