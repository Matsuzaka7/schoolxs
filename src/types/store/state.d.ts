/**文章类别list */
type jourDataListTypes = {
  /**文章ID */
  id: number,
  /**文章内容 */
  text: string,
  /**文章时间 */
  time: string
}

/**文章类别 */
export type jourDataTypes = {
  /**类别名称 */
  name: string,
  /**类别地址 */
  url: string,
  /**类别详情文章数据 */
  list: jourDataListTypes[]
}

export type storeTypes = {
  /**文章数据 */
  jourData: jourDataTypes[]
}