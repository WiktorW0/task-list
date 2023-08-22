import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement
  clear(): void
  render(fullList: FullList): void
}

export default class ListTemplate implements DOMList {
  static instance: ListTemplate = new ListTemplate()
  ul: HTMLUListElement;
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement
  }

  clear(): void {
    this.ul.innerHTML = ""
  }

  render(fullList: FullList): void {
    this.clear()
    fullList.list.forEach(item => {
      const liElement: HTMLLIElement = document.createElement("li")
      liElement.className = "item"
      if (item.category) {
        liElement.classList.add(item.category)
      }

      const checkboxElement: HTMLInputElement = document.createElement("input")
      checkboxElement.type = "checkbox"
      checkboxElement.id = item.id
      checkboxElement.checked = item.checked
      liElement.append(checkboxElement)
      checkboxElement.addEventListener("change", () => {
        item.checked = !item.checked
        fullList.save
      })

      const labelElement: HTMLLabelElement = document.createElement("label")
      labelElement.innerText = item.item
      labelElement.htmlFor = item.id
      liElement.append(labelElement)

      const buttonElement: HTMLButtonElement = document.createElement("button")
      buttonElement.className = "button"
      buttonElement.innerText = "X"
      liElement.append(buttonElement)

      buttonElement.addEventListener("click", () => {
        fullList.removeItem(item.id)
        this.render(fullList)
      })

      this.ul.append(liElement)
    })
  }
}