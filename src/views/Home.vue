<script setup lang="ts">
import BSelect from '@/components/BSelect.vue'
import BInput from '@/components/BInput.vue'
import BCheckbox from '@/components/BCheckbox.vue'

import { computed, ref } from 'vue'

export const methods = ['getMe', 'setWebHook']

export const input = ref('teste')
export const select = ref(methods[0])
export const checkbox = ref(false)

export const models = computed(() => ({
  input: input.value,
  select: select.value,
  checkbox: checkbox.value
}))

export default {
  name: 'Home',
  components: {
    BSelect,
    BInput,
    BCheckbox
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Telegram Bot API Caller</h1>

      <form class="form">
        <b-input
          label="Telegram Bot Token"
          type="password"
          v-model="input"
          icon-left="fas fa-key"
        />
        <b-select
          disabled
          v-model="select"
          icon-left="fas fa-key"
          :items="methods"
          label="Método da API"
        />
        <b-checkbox v-model="checkbox" label="Enviar mesmo?" />
      </form>

      <pre class="is-family-code">{{ JSON.stringify(models, null, 4) }}</pre>
    </div>
  </section>
</template>
