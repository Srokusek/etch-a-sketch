const grid = document.querySelector("#grid")
const tile = document.createElement("div")
const button = document.querySelector("#btn")
tile.classList.add("tile")


function createGrid(rows) {
    for (i=0; i<rows**2; i++) {
        grid.appendChild(tile.cloneNode())
    }
    const tiles = document.querySelectorAll("#grid > *")
    console.log(rows)
    grid.setAttribute("style", `grid-template-columns: repeat(${rows}, 1fr);`)
    tiles.forEach(tile => {
        tile.addEventListener("mouseover", () => {
            tile.setAttribute("style", "background-color : black")
        })
    })
    return tiles
}


button.addEventListener("click", () => {
    const size = prompt("How large do you want your new grid to be?")
    if (size > 100) {
        const size = prompt("That is too large! Put in a smaller number")
    }
    grid.replaceChildren()
    createGrid(size)
})

createGrid(16)