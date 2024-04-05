import type { IMemoItem } from './items'

interface IAssociationSettings {
  listId: number
  count: number
}

export interface ICountRange {
  min: number
  max: number
}

interface ISuggestionSettings {
  listId: number
  count: number | ICountRange
  totalCount: number
}

export interface IKeyboardKey {
  code: string
  altKey: boolean
  shiftKey: boolean
  ctrlKey: boolean
}

export interface IInputData {
  items: IMemoItem[]
  keys: IKeyboardKey[]
}

export type Validator = (inputData: IInputData, result: IMemoItem[]) => boolean

export interface IMemoConfig {
  associations: IAssociationSettings
  suggestions: ISuggestionSettings
  validator?: Validator
}
