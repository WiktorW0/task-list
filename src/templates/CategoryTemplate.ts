import { Category } from "../model/ListItem"
interface DOMCategoryList {
  ul: HTMLUListElement,
  render(categories: Category[], udpateSelectedCategory: (category: Category) => void, categoriesContainerElement: HTMLElement): void
}



export default class CategoryTemplate implements DOMCategoryList {
  static instance: CategoryTemplate = new CategoryTemplate()
  ul: HTMLUListElement
  private constructor() {
    this.ul = document.getElementById("categories") as HTMLUListElement
  }

  render(categories: Category[], udpateSelectedCategory: (category: Category) => void): void {
    categories.forEach(category => {

      const categoryElement: HTMLElement = document.createElement("li")
      categoryElement.classList.add(category)
      const id: string = `category-${category}`
      const labelElement: HTMLLabelElement = document.createElement("label")
      labelElement.innerText = category
      labelElement.setAttribute("for", id)


      const radioElement: HTMLInputElement = document.createElement("input")
      radioElement.type = "radio"
      radioElement.name = "category"
      radioElement.value = category
      radioElement.id = id
      radioElement.addEventListener("change", () => {
        udpateSelectedCategory(category)

      })

      categoryElement.appendChild(radioElement)
      categoryElement.appendChild(labelElement)

      this.ul.append(categoryElement)

    })
  }
}