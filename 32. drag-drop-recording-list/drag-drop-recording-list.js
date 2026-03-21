let list = document.getElementById("taskList")
let dragItem = null
list.addEventListener("dragstart", e => {
    dragItem = e.target
    e.target.classList.add("dragging")
})
list.addEventListener("dragend", e => {
    e.target.classList.remove("dragging")
})
list.addEventListener("dragover", e => {
    e.preventDefault()
    let afterElement = getDragAfterElement(list, e.clientY)
    if (afterElement == null) {
        list.appendChild(dragItem)
    } else {
        list.insertBefore(dragItem, afterElement)
    }
})
function getDragAfterElement(container, y) {
    let elements = [...container.querySelectorAll("li:not(.dragging)")]
    return elements.reduce((closest, child) => {
        let box = child.getBoundingClientRect()
        let offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}