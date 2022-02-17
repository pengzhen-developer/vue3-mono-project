import { cloneDeep } from 'lodash'

/**
 * like `interface` prefix, `type` prefix is `T`
 */
export type Tree<T> = {
  children?: Tree<T>[]
} & T

/**
 * flat list to tree
 *
 * @param list - a flat list
 * @param params - `{ id, parentId }`: id name and parentId name
 * @example `arrayToTree<IFolder>(folderArr, { id: 'folderId', parentId: 'folderParentId' });`
 * @returns `Tree`
 */
export const arrayToTree = <T>(list: T[], { id, parentId }: { id: string; parentId: string }): Tree<T>[] | [] => {
  /** map between id and array position */

  const map: number[] = []
  const listColone: T[] = cloneDeep(list)
  const treeList: Tree<T>[] = listColone as Tree<T>[]

  for (let i = 0; i < treeList.length; i += 1) {
    /** initialize the map */
    map[(treeList[i] as Tree<T> & { [id: string]: number })[id]] = i
    /** initialize the children */
    treeList[i].children = []
  }

  let node: Tree<T> & { [parentId: string]: number }
  /** return value */
  const roots: Tree<T>[] = []

  for (const item of treeList) {
    node = item as Tree<T> & { [parentId: string]: number }
    if (node[parentId] === 0 || node[parentId] === null || node[parentId] === undefined) {
      roots.push(node)
    } else {
      if (treeList[map[node[parentId]]] !== undefined) {
        treeList[map[node[parentId]]].children?.push(node)
      }
    }
  }

  return roots
}
