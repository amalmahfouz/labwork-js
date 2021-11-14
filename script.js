const data = {
    image:"https://bitsofco.de/content/images/2018/11/HTML-to-Render-Tree-to-Final.png",
    title:"DOM exercise",
    links:['https://www.w3.org/','https://developer.mozilla.org/','https://javascript.info/']
  }

  document.querySelector('img').src =data.image;
  document.querySelector('h1').textContent =data.title;

  var all = document.querySelectorAll('a');
  
  for( var i =0 ; i < all.length ; i++){
       all[i].href = data.links[i];
  };
  

  function display(){
    const par = document.createElement("p");
    par.textContent = document.getElementById("data").value;
    document.getElementById('newParag').appendChild(par);
  };