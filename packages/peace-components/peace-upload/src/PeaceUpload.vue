<template>
  <NSteps class="mb-4" :current="current">
    <NStep title="模板下载" description="下载模板并填充数据"></NStep>
    <NStep title="上传文件" description="上传填充数据后的模板"></NStep>
    <NStep title="数据校验" description="校验数据正确性"></NStep>
    <NStep title="写入数据" description="执行数据写入"></NStep>
  </NSteps>

  <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :headers="{
      'naive-info': 'hello!'
    }"
    :data="{
      'naive-data': 'cool! naive!'
    }"
  >
    <n-button>上传文件</n-button>
  </n-upload>

  <!-- 模板下载 -->
  <template v-if="current === 1">
    <NUpload>
      <NUploadDragger class="w-full">
        <div class="mt-4 mb-8">
          <NIcon size="48" :depth="3">
            <CloudDownloadOutlined />
          </NIcon>
        </div>

        <div class="text-lg mb-2"><span class="text-primary">点击</span>下载模板文件</div>
        <div class="w-full mx-auto">
          <div class="w-max text-left mx-auto">
            <NText depth="3">* 请参考模板格式填充你所需要的数据</NText>
          </div>
        </div>
      </NUploadDragger>
    </NUpload>
  </template>

  <!-- 模板上传 -->
  <template v-if="current === 2">
    <NUpload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
      <NUploadDragger class="w-full">
        <div class="mt-4 mb-8">
          <NIcon size="48" :depth="3">
            <CloudUploadOutlined />
          </NIcon>
        </div>
        <div class="text-lg mb-2"><span class="text-primary">点击</span>或者<span class="text-primary">拖动文件到该区域</span>来上传</div>
        <div class="w-full mx-auto">
          <div class="w-max text-left mx-auto">
            <NText depth="3">* 请不要上传敏感数据，比如你的账号和密码</NText>
            <br />
            <NText depth="3">* 请按照模板格式上传，文件大小不超过 5 MB</NText>
          </div>
        </div>
      </NUploadDragger>
    </NUpload>
  </template>

  <!-- 上传失败 -->
  <template v-if="current === 3"> </template>

  <!-- 上传成功 -->
  <template v-if="current === 4"> </template>

  <div class="">
    <NButton @click="prev">Prev</NButton>
    <NButton @click="next">Next</NButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CloudUploadOutlined, CloudDownloadOutlined } from '@vicons/antd'

const current = ref(1)

const prev = () => {
  if (current.value === 0) {
    current.value = null
  } else if (current.value === null) {
    current.value = 4
  } else {
    current.value--
  }
}
const next = () => {
  if (current.value === null) {
    current.value = 1
  } else if (current.value >= 4) {
    current.value = null
  } else {
    current.value++
  }
}
</script>

<style scope>
.n-upload-trigger {
  width: 100%;
}
</style>
