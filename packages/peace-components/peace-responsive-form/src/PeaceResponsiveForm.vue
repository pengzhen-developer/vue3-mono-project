<script lang="tsx">
import type { VNode } from 'vue'
import { ref } from 'vue'
import { NGrid, NGridItem } from 'naive-ui'

export default {
  setup() {
    const collapsed = ref(true)
    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value
    }

    return {
      collapsed,
      toggleCollapsed
    }
  },

  render() {
    let defaultSlot = this.$slots.default?.()
    let defaultItemSlot = this.$slots.default?.()?.[0]?.children?.default?.()

    const wrapped = (
      // step 1, 使用 NGrid 布局
      // step 2, 使用 NGridItem 包装 Slot
      <NGrid responsive="screen" cols="2 m:3 l:4" collapsed={this.collapsed} collapsed-rows={1} x-gap={16}>
        {defaultItemSlot.map((slot: VNode) => {
          return <NGridItem>{slot}</NGridItem>
        })}
        <NGridItem class="suffix" suffix>
          {this.$slots.suffix?.({ collapsed: this.collapsed, toggleCollapsed: this.toggleCollapsed })}
        </NGridItem>
      </NGrid>
    )

    defaultSlot[0].children.default = () => [wrapped]

    return defaultSlot
  }
}
</script>

<style scope>
.suffix {
  display: grid;
  justify-content: flex-end;
}
</style>
