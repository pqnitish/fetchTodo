let container = document.getElementById("container");
 async function fetchData(){
    let API_LINK ="https://jsonplaceholder.typicode.com/todos";
    let res = await fetch(API_LINK);
    let finalRes = await res.json();
   // console.log(finalRes);
   showData(finalRes);

}
function showData(arr){
   /// console.log(arr);
   arr.forEach(function(ele,i){
    let div = document.createElement("div");
    div.className ="cont"
    let para = document.createElement("p");
    para.innerHTML=ele.title;
    div.append(para);
    container.append(div);
   })

}