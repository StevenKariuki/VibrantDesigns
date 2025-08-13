<template>
    <div class="dark:bg-gray-700 flex flex-row justify-between  p-5 w-full h-screen">
      <Logo/>
        <n-switch v-model:value="isDark" size="large" :round="false" class="-rotate-90">
            <template #checked-icon>
                <span class="rotate-90 p-1">
                    On
                </span>
            </template>
            <template #unchecked-icon >
                <span class="rotate-90 p-1">
                    off
                </span>
            </template>
        </n-switch>

    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useUserStore } from '../stateStore/user'
import Logo from '../composables/Logo.vue'

const userStore = useUserStore()
const isDark = ref(userStore.theme === 'dark')
watch(isDark, (val) => {
    userStore.setTheme(val ? 'dark' : 'light')
})

</script>