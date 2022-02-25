<script lang="tsx">
import type { VNode } from 'vue'
import { ref, defineComponent } from 'vue'
import { NButton, NFormItem, NGrid, NGridItem, NIcon, NSpace } from 'naive-ui'
import { DownOutlined, UpOutlined } from '@vicons/antd'
import { useResizeObserver } from '@vueuse/core'

export default defineComponent({
  setup() {
    const collapsed = ref(true)
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value
    }

    // HACK，希望有更好的办法解决
    // 使用原因与方案：
    // 使用 NGrid 布局组件的 collapsed 属性和 NGridItem 的 overflow 控制是否显示【展开/收缩】按钮
    // 当 collapsed = true && overflow = false 时，可以认为 body 内容足够显示所有的 NGridItem
    // 但当用户操作浏览器大小时， overflow 内部实现了响应式，collapsed 却没有
    // 因此使用 @vueuse 的 useResizeObserver，监听 document.body，当 body 发生大小变化了，则重置 collapsed = true
    useResizeObserver(document.body, () => {
      collapsed.value = true
    })

    return {
      collapsed,
      toggleCollapsed
    }
  },

  render(): any {
    const defaultSlot: any = this.$slots?.default?.()
    const defaultItemSlot: any = defaultSlot?.[0]?.children?.default?.()

    // 使用 <NGridItem></NGridItem> 包裹组件
    const nGridItemSlot = defaultItemSlot.map((slot: VNode) => <NGridItem>{slot}</NGridItem>)
    // 响应式表单的展开收缩控制按钮
    const nGridOverflowSlot = (
      <NButton circle quaternary onClick={this.toggleCollapsed}>
        {<NIcon>{this.collapsed ? <DownOutlined></DownOutlined> : <UpOutlined></UpOutlined>}</NIcon>}
      </NButton>
    )
    // 根据 collapsed 和 overflow， 判断是否显示控制按钮
    // Passing Slots
    // 参考：https://vuejs.org/guide/extras/render-function.html#passing-slots
    const nGridItemSuffixSlot = (
      <NGridItem class="suffix" suffix>
        {{
          default: ({ overflow }: { overflow: boolean }) => {
            return (
              <NFormItem>
                <NSpace>
                  {this?.$slots?.suffix?.({ collapsed: this.collapsed, overflow: overflow })}
                  {!(this.collapsed === true && overflow === false) && nGridOverflowSlot}
                </NSpace>
              </NFormItem>
            )
          }
        }}
      </NGridItem>
    )

    // 覆盖默认插槽内容
    defaultSlot[0].children.default = () => [
      <NGrid responsive="screen" cols="2 m:3 l:4" collapsed={this?.collapsed} collapsed-rows={1} x-gap={16}>
        {nGridItemSlot}
        {nGridItemSuffixSlot}
      </NGrid>
    ]

    return defaultSlot
  }
})
</script>

<style scope>
.suffix {
  display: grid;
  justify-content: flex-end;
}
</style>
