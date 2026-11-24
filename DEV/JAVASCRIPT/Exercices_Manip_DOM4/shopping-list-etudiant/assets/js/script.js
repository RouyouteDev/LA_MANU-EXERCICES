let ul = document.querySelector("ul")
let input = document.querySelector("input")
cpt = 0

function addToList(){
    cpt+=1
    let btn = document.createElement("button")
    btn.addEventListener("click", deleteToList);
    btn.textContent = 'Delete'
    btn.classList.add(cpt)


    let elt_li = document.createElement("li")
    elt_li.classList.add(cpt)

    let span = document.createElement("span")
    span.textContent = input.value
    span.classList.add(cpt)

    elt_li.appendChild(span)
    elt_li.appendChild(btn)
    ul.appendChild(elt_li)
}

function deleteToList(event){
    let classe = event.target.classList[0]
    let btn = document.querySelectorAll("button")
    let span = document.querySelectorAll("span")
    let li = document.querySelectorAll("li")

    li.forEach(element => {

        if (String(element.classList) === String(classe)){
            console.log(classe, element.classList[0])
            element.remove()
        }
    });
}