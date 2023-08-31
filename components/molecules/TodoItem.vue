<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    editable?: boolean
    done?: boolean
    text?: string
  }>(),
  {
    editable: false,
    text: '',
  },
)
const classObject = computed(() => [
  { 'm-todo-field__text--crossed-out': props.done },
  'm-todo-field__text',
])
const emit = defineEmits(['update:done', 'update:text'])
const onCheckboxUpdate = (done: boolean) => {
  emit('update:done', done)
}
const onTextInputUpdate = (text: string) => {
  emit('update:text', text)
}
</script>

<template>
  <li class="m-todo-field u-flex u-items-center">
    <AtomsBaseCheckbox
      :value="props.done"
      :model-value="props.done"
      @update:model-value="onCheckboxUpdate"
    />
    <AtomsBaseInput
      v-if="props.editable"
      :model-value="text"
      placeholder="List item"
      :class="classObject"
      @update:model-value="onTextInputUpdate"
    />
    <AtomsBaseText v-else tag="p" :class="classObject">
      {{ props.text }}
    </AtomsBaseText>
  </li>
</template>

<style scoped lang="scss">
.m-todo-field {
  padding: indent('2xs') indent('bsse');
  &__text {
    padding-left: indent('sm');
    flex: 1;
    &--crossed-out {
      text-decoration-line: line-through;
    }
  }
}
</style>
