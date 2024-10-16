const form = document.querySelector('form')
const input = document.querySelector("input")
const listItems = document.querySelector("ul[role=list]")
const warning = document.querySelector(".warning-wrapper.hide")

const createItem = function (itemName) {
  // Item da lista
  const newItem = document.createElement("li")
  
  // Check Wrapper do item
  const newCheckWrapper = document.createElement("div")
  newCheckWrapper.classList.add("check-wrapper")
  
  // Imagem do check
  const newCheckBoxImage = document.createElement("div")
  newCheckBoxImage.classList.add("checkbox-image")
  
  // Input checkbox
  const newInputCheck = document.createElement("input")
  newInputCheck.setAttribute('type', 'checkbox')
  newInputCheck.setAttribute('name', 'item')
  newInputCheck.setAttribute('value', itemName.replace(/ /g,'-'))
  newInputCheck.setAttribute('id', itemName.replace(/ /g,'-'))
  // console.log(newCheckWrapper)
  
  // Descrição item
  const newLabel = document.createElement("label")
  newLabel.setAttribute('for', itemName.replace(/ /g,'-'))
  newLabel.textContent = itemName

  newCheckWrapper.append(newCheckBoxImage, newInputCheck, newLabel)

  // Botão de lixeira do item
  const newBtn = document.createElement('button')
  newBtn.setAttribute('type', 'button')
  newBtn.classList.add('btn')

  newItem.append(newCheckWrapper, newBtn)

  return newItem
}

// submit do formulário - insere item
form.addEventListener("submit", (event) => {
  event.preventDefault()

  // Pega o nome dos itens da lista
  const labels = document.querySelectorAll("label")

  // Verifica se o item já está na lista
  let itemExists = false
  for (let i = 0; i < labels.length; i++) { 
    if (labels[i].textContent == input.value) {
      itemExists = true
    }
  }
  
  // Se o item ainda não existe na lista, adiciona
  if (input.value == '') {
    alert("Preencha o campo corretamente.")
  } else {
    if (!itemExists) {
      listItems.append(createItem(input.value))
      // listItems = document.querySelector("ul[role=list]")
    } else {
      alert('O item já está na lista!')
    }
  }

  input.value = ''
  input.focus()
})

// Reconhece click no item da lista
listItems.addEventListener("click", function (event) {
  console.log(event)
  
  // Verifica se onde foi clicado tem a classe btn e remove o item da lista
  if (event.target.classList.contains("btn")) {
    console.log(event)
    const item = event.target.closest("li")
    item.remove()

    warning.classList.remove("hide")
  }
})

// Reconhece click na mensagem de exclusão
warning.addEventListener("click", function (event) {
  // console.log(event)
  // Verifica se onde foi clicado tem a classe btn-x e esconde a mensagem de exclusão
  if (event.target.classList.contains("btn-x")) {
    // console.log(event)
    warning.classList.add("hide")
  }
})
