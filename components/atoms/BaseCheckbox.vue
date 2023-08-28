<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  value: boolean
}>()
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <label class="a-checkbox u-flex">
    <input
      v-model="model"
      :value="value"
      type="checkbox"
      class="a-checkbox__native"
    />
    <AtomsBaseTile
      tag="span"
      size="small"
      class="a-checkbox__custom u-flex u-items-center u-justify-center"
    ></AtomsBaseTile>
  </label>
</template>

<style scoped lang="scss">
.a-checkbox {
  background-color: darken(color('secondary'), 5%);
  border-radius: 6px;
  cursor: pointer;
  height: 24px;
  position: relative;
  width: 24px;
  &__native {
    height: 0;
    opacity: 0;
    width: 0;
  }
  &__custom {
    height: 100%;
    width: 100%;
  }
  &__native:checked ~ &__custom::after {
    content: '';
    border: solid color('primary');
    border-width: 0 3px 3px 0;
    height: 10px;
    transform: rotate(45deg);
    width: 6px;
  }
}
</style>
