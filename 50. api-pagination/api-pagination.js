let currentPage = 1;
let totalPage = 5;

function loadProducts(page){
    fetch("https://dummyjson.com/products?limit=10&skip="+((page-1)*10))
    .then(response=>response.json())
    .then(data=>{
        console.log("Data: ",data);
        
        let rows=""
        data.products.forEach(p => {
            rows+=`<tr>
            <td>${p.id}</td>
            <td>${p.title}</td>
            <td>${p.price}</td>
            <td>${p.category}</td>
            </tr>`
        });
         document.getElementById('productBody').innerHTML=rows
    })
}


function createPagination(){
let buttons=""
for(let i=1;i<=totalPage;i++){
buttons+=`<button onclick="changePage(${i})">${i}</button>`
}
document.getElementById("pagination").innerHTML=buttons
}

function changePage(page){
currentPage=page
loadProducts(page)
}

createPagination()
loadProducts(currentPage)
