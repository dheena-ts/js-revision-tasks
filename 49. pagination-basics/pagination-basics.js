const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9', 'Item10', 'Item11', 'Item12', 'Item13', 'Item14', 'Item15',
    'Item16', 'Item17', 'Item18', 'Item19', 'Item20','Item21', 'Item22', 'Item23', 'Item24', 'Item25','Item26', 'Item27', 'Item28', 'Item29', 'Item30'
];

const itemsPerPage = 10;
let currentPage = 1;
const totalPages = Math.ceil(items.length / itemsPerPage);

function displayItems(page) {
    const list = document.getElementById('list')
    list.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);

    paginatedItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function setPagination() {
    const pagination = document.getElementById('pagination')
    pagination.innerHTML = ''

    const prevBtn = document.createElement('button');
    prevBtn.textContent = "Prev";
    prevBtn.onclick = () => changePage(currentPage - 1);
    pagination.appendChild(prevBtn);


    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) {
            btn.classList.add("active");
        }
        btn.onclick = () => changePage(i);
        pagination.appendChild(btn);
    }


    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.onclick = () => changePage(currentPage + 1);
    pagination.appendChild(nextBtn);

}

function changePage(page) {
    if (page < 1 || page > totalPages)
    {
     return;
    }
    currentPage = page;
    displayItems(currentPage);
    setPagination();
}
displayItems(currentPage);
setPagination();