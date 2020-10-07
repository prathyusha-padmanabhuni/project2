function loadJson(file,callback){
    //json file,the call we get
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4  && xhr.status=="200"){
          callback(xhr.responseText);
        }
    };
    xhr.send(null);
    }
loadJson("mainproject.json",function(text){
    let data=JSON.parse(text);
    console.log(data); 
    //document.writeln(data);
    static(data.card1); 
    dynamic(data.card2); 
})
var card1 = document.querySelector(".child1");
function static(cd1)
{
    var img1=document.createElement("img");
    img1.src=cd1.image;
    card1.appendChild(img1);

    var name=document.createElement("h4");
    name.textContent=cd1.name;
    card1.appendChild(name);

    var name=document.createElement("h3");
    name.textContent=cd1.emailid;
    card1.appendChild(name);

    var number=document.createElement("p");
    number.textContent=cd1.rollno;
    card1.appendChild(number);

    var number=document.createElement("p");
    number.textContent=cd1.page;
    card1.appendChild(number);

    var btn=document.createElement("button");
     btn.textContent=cd1.btn1;
     btn.setAttribute("class","btn1");
     btn.classList.add("class","btn1","btn1-primary");
     btn.onclick=function moveToPage()
     {
         location.href="../bootstrap-4.5.2-dist/htmlcss.html";
     }
     card1.appendChild(btn);

}
var card2 = document.querySelector(".child2");
function dynamic(cd2)
{
    var img1=document.createElement("img");
    img1.src=cd2.image;
    card2.appendChild(img1);

    var name=document.createElement("h4");
    name.textContent=cd2.name;
    card2.appendChild(name);

    var name=document.createElement("h3");
    name.textContent=cd2.emailid;
    card2.appendChild(name);
     
    var number=document.createElement("p");
    number.textContent=cd2.rollno;
    card2.appendChild(number);

    var number=document.createElement("p");
    number.textContent=cd2.page;
    card2.appendChild(number);

    var btn=document.createElement("button");
     btn.textContent=cd2.btn2;
     btn.setAttribute("class","btn2");
     btn.classList.add("class","btn2","btn2-primary");
     btn.onclick=function moveToPage()
     {
         location.href="project.html";
     }
     card2.appendChild(btn);



}