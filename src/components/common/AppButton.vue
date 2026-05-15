<template>
  <button
    :class="buttonClasses"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger', 'success'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      const baseClasses = 'app-btn inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-transform uppercase letter-spacing'

      const variantClasses = {
        primary: 'app-btn--primary',
        secondary: 'app-btn--secondary',
        danger: 'app-btn--danger',
        success: 'app-btn--success'
      }

      const sizeClasses = {
        sm: 'app-btn--sm',
        md: 'app-btn--md',
        lg: 'app-btn--lg'
      }

      return [
        baseClasses,
        variantClasses[this.variant],
        sizeClasses[this.size],
        this.loading ? 'opacity-75 cursor-wait' : ''
      ].join(' ')
    }
  }
}
</script>

<style scoped>
.app-btn {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.app-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.3s ease;
  z-index: -1;
}

.app-btn:hover::before {
  left: 100%;
}

/* Primary Button */
.app-btn--primary {
  background: linear-gradient(135deg, #4ade80, #22c55e);
  color: #0f172a;
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.32);
}

.app-btn--primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(34, 197, 94, 0.45);
}

.app-btn--primary:active:not(:disabled) {
  transform: translateY(-1px);
}

/* Secondary Button */
.app-btn--secondary {
  background: rgba(34, 197, 94, 0.14);
  color: #15803d;
  border: 2px solid rgba(34, 197, 94, 0.35);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.18);
}

.app-btn--secondary:hover:not(:disabled) {
  background: rgba(34, 197, 94, 0.22);
  border-color: #22c55e;
  box-shadow: 0 0 25px rgba(34, 197, 94, 0.32);
  transform: translateY(-2px);
}

/* Danger Button */
.app-btn--danger {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
}

.app-btn--danger:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(239, 68, 68, 0.5);
}

/* Success Button */
.app-btn--success {
  background: linear-gradient(135deg, #10b981, #059669);
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
}

.app-btn--success:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(16, 185, 129, 0.5);
}

/* Button Sizes */
.app-btn--sm {
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
}

.app-btn--md {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
}

.app-btn--lg {
  padding: 1rem 2rem;
  font-size: 1rem;
}

.app-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}
</style>
