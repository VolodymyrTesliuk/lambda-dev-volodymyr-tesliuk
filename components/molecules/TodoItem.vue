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
defineEmits(['update:done', 'update:text'])
</script>

<template>
  <li class="m-todo-field u-flex u-items-center">
    <AtomsBaseCheckbox
      :value="props.done"
      :model-value="props.done"
      @input="
        $emit('update:done', Boolean(($event.target as HTMLInputElement).value))
      "
    />
    <AtomsBaseInput
      v-if="props.editable"
      :model-value="text"
      placeholder="List item"
      :class="classObject"
      @input="$emit('update:text', ($event.target as HTMLInputElement).value)"
    />
    <AtomsBaseText v-else tag="p" :class="classObject">
      {{ props.text }}
    </AtomsBaseText>
  </li>
</template>

<style scoped lang="scss">
.m-todo-field {
  padding: 6px 16px;
  &__text {
    padding-left: 12px;
    flex: 1;
    &--crossed-out {
      text-decoration-line: line-through;
    }
  }
}
</style>
