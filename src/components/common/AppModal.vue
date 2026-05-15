<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click="closeOnBackdrop && $emit('close')">
        <div class="bg-white rounded-lg shadow-lg max-w-md w-full mx-4 transform transition-all" @click.stop>
          <div v-if="title" class="flex justify-between items-center p-4 border-b">
            <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
            <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
          </div>
          <div class="p-4">
            <slot />
          </div>
          <div v-if="$slots.footer" class="flex justify-end p-4 border-t space-x-2">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}
</style>