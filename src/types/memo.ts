import type { IMemoItem } from './items'

interface IMemoAssociationSettings {
  listId: string
  count: number
}

export interface IMemoCountRange {
  min: number
  max: number
}

interface IMemoSuggestionSettings {
  listId: string
  count: number | IMemoCountRange
  totalCount: number
}

export interface IMemoKeyboardKey {
  code: string
  altKey: boolean
  shiftKey: boolean
  ctrlKey: boolean
}

export interface IInputData {
  items: IMemoItem[]
  keys: IMemoKeyboardKey[]
}

export type MemoValidator = (
  inputData: IInputData,
  result: IMemoItem[],
) => boolean

export interface IMemoConfig {
  associations: IMemoAssociationSettings
  suggestions: IMemoSuggestionSettings
  validator?: MemoValidator
}
