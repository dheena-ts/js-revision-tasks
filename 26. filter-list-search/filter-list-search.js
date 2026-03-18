const input = document.getElementById('userInput')
const listItems = document.querySelectorAll('.listItem')

input.addEventListener('input', function(){
    const filterValue = input.value.toLowerCase();
    listItems.forEach(function(item){
        const text = item.innerText.toLowerCase();
        if(text.includes(filterValue)){
            item.classList.remove('hidden');
        }else{
            item.classList.add('hidden');
        }
    })
})