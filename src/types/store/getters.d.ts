import type { jourDataTypes, storeTypes } from './state'
export type gettersType = {
  getMeiti: (storeTypes: storeTypes) => jourDataTypes,
  getYaowen: (storeTypes: storeTypes) => jourDataTypes,
  getChuanzhen: (storeTypes: storeTypes) => jourDataTypes,
}