<template>
  <ApplicationDarkMode>
    <div class="flex justify-between h-16 shadow-sm dark:shadow-gray-800">
      <div class="flex px-4 h-full" id="1">
        <NButton text @click="layoutStore.siderCollapse = !layoutStore.siderCollapse">
          <NIcon size="24">
            <template v-if="layoutStore.siderCollapse">
              <MenuUnfoldOutlined></MenuUnfoldOutlined>
            </template>
            <template v-else>
              <MenuFoldOutlined></MenuFoldOutlined>
            </template>
          </NIcon>
        </NButton>
      </div>

      <div class="flex">
        <NTooltip>
          <template #trigger>
            <div class="flex px-4 h-full">
              <NButton text @click="toggleFullScreen">
                <NIcon size="24">
                  <FullscreenExitOutlined v-if="isFullscreen" />
                  <FullscreenOutlined v-else />
                </NIcon>
              </NButton>
            </div>
          </template>
          <span>全屏</span>
        </NTooltip>

        <NTooltip>
          <template #trigger>
            <div class="flex px-4 h-full">
              <NButton text @click="themeStore.toggleTheme">
                <NIcon size="24">
                  <template v-if="themeStore.isLightTheme">
                    <SunnyOutline></SunnyOutline>
                  </template>
                  <template v-if="themeStore.isDarkTheme">
                    <MoonOutline></MoonOutline>
                  </template>
                </NIcon>
              </NButton>
            </div>
          </template>
          <span>主题模式</span>
        </NTooltip>

        <div class="flex px-4 h-full">
          <NDropdown trigger="hover" :options="options" @select="handleSelect">
            <NButton text>
              <NAvatar round size="small" src="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93" />

              <span class="ml-4">User Jo</span>
            </NButton>
          </NDropdown>
        </div>
      </div>
    </div>
  </ApplicationDarkMode>
</template>

<script setup lang="tsx">
import { useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import { MenuFoldOutlined, MenuUnfoldOutlined, FullscreenOutlined, FullscreenExitOutlined, UserOutlined, SettingOutlined } from '@vicons/antd'
import { MoonOutline, SunnyOutline, ExitOutline } from '@vicons/ionicons5'

import { useFullscreen } from '@vueuse/core'
import { useLayout } from '@/store/layout'
import { useTheme } from '@/store/theme'

const router = useRouter()
const layoutStore = useLayout()
const themeStore = useTheme()
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

const options = [
  {
    label: '用户中心',
    key: '用户中心',
    icon: () => (
      <NIcon>
        <UserOutlined></UserOutlined>
      </NIcon>
    )
  },
  {
    label: '配置中心',
    key: '配置中心',
    icon: () => (
      <NIcon>
        <SettingOutlined></SettingOutlined>
      </NIcon>
    )
  },
  {
    type: 'divider',
    key: 'divider'
  },
  {
    label: '退出登录',
    key: '退出登录',
    icon: () => (
      <NIcon>
        <ExitOutline></ExitOutline>
      </NIcon>
    )
  }
]

const handleSelect = (key: string) => {
  if (key === '退出登录') {
    router.push({ name: 'login' })
  }
}
</script>
