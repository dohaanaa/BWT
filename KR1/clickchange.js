function find_edit(){
    const surname_node  = document.getElementById('surname')
    console.log(surname_node.innerText)
    surname_node.innerHTML="Do"
    
    const name_node  = document.getElementById('name')
    console.log(name_node.innerText)
    name_node.innerHTML="Ha Phuong"
    
    const gender_node  = document.getElementById('gender')
    console.log(gender_node.innerText)
    gender_node.innerHTML="F"

    const place_node  = document.getElementById('place')
    console.log(place_node.innerText)
    place_node.innerHTML="Pyatigorsk Stavropol region"
}

const node_for_click = document.getElementById("click")
node_for_click.addEventListener("click",find_edit)
