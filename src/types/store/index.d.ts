import type { storeTypes } from './state'
import type { gettersType } from './getters.d'
export type state = {
  id: string,
  state: () => storeTypes,
  getters: gettersType
}