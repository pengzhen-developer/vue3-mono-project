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
          <NDropdown trigger="hover" :options="options">
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
import { MenuFoldOutlined, MenuUnfoldOutlined, FullscreenOutlined, FullscreenExitOutlined, UserOutlined, SettingOutlined } from '@vicons/antd'
import { MoonOutline, SunnyOutline, ExitOutline } from '@vicons/ionicons5'
import { ApplicationDarkMode } from '@/components'

import { useLayout } from '@/store/layout'
import { useTheme } from '@/store/theme'
import { renderIcon } from '@/util/icon'
import { useFullscreen } from '@vueuse/core'
import { NButton, NIcon, NDropdown, NTooltip, NAvatar } from 'naive-ui'

const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()

const layoutStore = useLayout()
const themeStore = useTheme()

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
</script>
