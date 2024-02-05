function scrollle(l){
    document.getElementById("product-grid").scrollLeft+=l;
}
function scrollri(l){
    document.getElementById("product-grid").scrollLeft-=l;
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
function more(){
    let p= document.getElementById('more').style;
    let b= document.getElementById('morebut')

    if(p.display=="-webkit-box"){
        p.display="block";
        b.innerHTML="view less..."
    }
    else{
        p.display="-webkit-box"
        b.innerHTML="view more..."
    }
}