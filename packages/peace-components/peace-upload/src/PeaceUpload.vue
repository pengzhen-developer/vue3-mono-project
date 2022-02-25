<template>
  <NSteps class="mb-4" :current="current">
    <NStep title="模板下载" description="下载最新的数据模板，可以指引填写所需要的数据"></NStep>
    <NStep title="模板上传" description="数据仅应用于系统必要功能，我们承诺对此类数据保密"></NStep>
    <NStep title="数据校验" description="执行云端校验，有利于保证数据一致性与正确性"></NStep>
    <NStep title="数据写入" description="执行数据写入"></NStep>
  </NSteps>

  <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f">
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

        <div class="mb-2"><span class="text-lg text-primary">点击下载</span> <span>模板文件</span></div>
        <div class="w-full mx-auto">
          <div class="w-max text-left mx-auto">
            <NText depth="3">* 你需要参考模板格式，填充需要上传的数据</NText>
            <br />
            <NText depth="3">* 不要写入敏感数据，比如你的账号和密码</NText>
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
        <div class="mb-2">
          <span class="mx-2 text-lg text-primary">点击上传</span>
          <span>或者</span>
          <span class="mx-2 text-lg text-primary">拖动文件</span>
          <span>到该区域来上传</span>
        </div>
        <div class="w-full mx-auto">
          <div class="w-max text-left mx-auto">
            <NText depth="3">* 尽可能保持网络通畅，有助于更快更准确地获取结果</NText>
            <br />
            <NText depth="3">* 一次允许上传一个文件，文件大小不应该超过 2 MB</NText>
          </div>
        </div>
      </NUploadDragger>
    </NUpload>
  </template>

  <!-- 上传失败 -->
  <template v-if="current === 3">
    <NAlert type="warning" title="校验失败">
      <NText depth="3">* 模板格式错误或模板已过期，<span class="text-primary cursor-pointer">下载模板</span></NText>
      <br />
      <NText depth="3">* 模板内容校验出错，<span class="text-primary cursor-pointer">下载错误明细</span></NText>
      <br />
      <NText depth="3">* 一次允许上传一个文件，文件大小不应该超过 2 MB，<span class="text-primary cursor-pointer">重新上传</span></NText>
    </NAlert>
  </template>

  <!-- 上传成功 -->
  <template v-if="current === 4">
    <NAlert type="success" title="上传成功">
      <NText depth="3">* 数据已成功写入</NText>
    </NAlert>
  </template>

  <div class>
    <NButton @click="prev">Prev</NButton>
    <NButton @click="next">Next</NButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CloudUploadOutlined, CloudDownloadOutlined } from '@vicons/antd'

const current = ref(1)

const prev = () => {
  current.value--
}
const next = () => {
  current.value++
}
</script>

<style scope>
.n-upload-trigger {
  width: 100%;
}
</style>
