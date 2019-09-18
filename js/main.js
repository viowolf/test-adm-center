function openBox(content_1){
    display = document.getElementById(content_1).style.display;
    if(display=='none'){
          document.getElementById(content_1).style.display='block';
    }else{
          document.getElementById(content_1).style.display='none';
    }
}