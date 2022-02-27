<template>
  <NForm ref="formRef" size="large" label-placement="left" label-width="auto" :model="formValue" :rules="rules" @keyup.enter="login">
    <NForm-item path="user.name">
      <NInput v-model:value="formValue.user.name" placeholder="输入用户名">
        <template #suffix>
          <n-icon :component="UserOutlined" />
        </template>
      </NInput>
    </NForm-item>
    <NForm-item path="user.age">
      <NInput v-model:value="formValue.user.age" placeholder="输入密码" type="password">
        <template #suffix>
          <n-icon :component="LockOutlined" />
        </template>
      </NInput>
    </NForm-item>
    <NForm-item>
      <NButton class="!w-full" @click="login"> 登录 </NButton>
    </NForm-item>
  </NForm>
</template>

<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { UserOutlined, LockOutlined } from '@vicons/antd'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formRef = ref<FormInst | null>(null)

const formValue = ref({
  user: {
    name: '',
    age: ''
  },
  phone: ''
})

const rules = {
  user: {
    name: {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    age: {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  }
}

const login = (e: MouseEvent | KeyboardEvent) => {
  e.preventDefault()

  formRef.value?.validate().then(() => {
    router.push({ name: 'dashbord' })
  })
}
</script>
