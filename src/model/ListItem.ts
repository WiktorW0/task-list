export type Category = "general" | "work" | "gym" | "hobby" | "social"

export interface Item {
  id: string,
  item: string,
  checked: boolean,
  category: Category
}

export default class ListItem implements Item {
  constructor(
    private _id: string = '',
    private _item: string = '',
    private _checked: boolean = false,
    private _category: Category = "general"
  ) { }
  get id(): string {
    return this._id
  }

  set id(id: string) {
    this._id = id
  }

  get item(): string {
    return this._item
  }

  set item(item: string) {
    this._item = item
  }

  get checked(): boolean {
    return this._checked
  }

  set checked(checked: boolean) {
    this._checked = checked
  }
  get category(): Category {
    return this._category
  }

  set category(category: Category) {
    this._category = category
  }
}