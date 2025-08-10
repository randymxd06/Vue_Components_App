<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset'
type ButtonVariant =
    | 'solid-primary'
    | 'solid-secondary'
    | 'solid-success'
    | 'solid-danger'
    | 'solid-warning'
    | 'solid-info'
    | 'solid-purple'
    | 'solid-pink'
    | 'solid-teal'
    | 'solid-orange'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-purple'
    | 'outline-pink'
    | 'outline-teal'
    | 'outline-orange'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonRounded = 'none' | 'sm' | 'md' | 'lg' | 'full'

interface Props {
    type?: ButtonType
    variant?: ButtonVariant
    size?: ButtonSize
    disabled?: boolean
    fullWidth?: boolean
    rounded?: ButtonRounded
    nativeAttributes?: Record<string, unknown>
}

const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    variant: 'solid-primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    rounded: 'md'
})

const emit = defineEmits(['click'])

const baseClasses =
    'inline-flex items-center justify-center font-medium focus:outline-none transition-colors disabled:opacity-70 disabled:cursor-not-allowed'

const sizeClasses: Record<ButtonSize, string> = {
    xs: 'px-2.5 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
    xl: 'px-6 py-3 text-xl'
}

const variantClasses: Record<ButtonVariant, string> = {
    // Solid variants
    'solid-primary':
        'bg-indigo-400 text-white hover:bg-indigo-500 active:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 shadow-sm',
    'solid-secondary':
        'bg-slate-300 text-slate-800 hover:bg-slate-400 active:bg-slate-500 focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 shadow-sm',
    'solid-success':
        'bg-emerald-400 text-white hover:bg-emerald-500 active:bg-emerald-600 focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 shadow-sm',
    'solid-danger':
        'bg-rose-400 text-white hover:bg-rose-500 active:bg-rose-600 focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 shadow-sm',
    'solid-warning':
        'bg-amber-300 text-amber-900 hover:bg-amber-400 active:bg-amber-500 focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 shadow-sm',
    'solid-info':
        'bg-sky-400 text-white hover:bg-sky-500 active:bg-sky-600 focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 shadow-sm',
    'solid-purple':
        'bg-purple-400 text-white hover:bg-purple-500 active:bg-purple-600 focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 shadow-sm',
    'solid-pink':
        'bg-pink-400 text-white hover:bg-pink-500 active:bg-pink-600 focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 shadow-sm',
    'solid-teal':
        'bg-teal-400 text-white hover:bg-teal-500 active:bg-teal-600 focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 shadow-sm',
    'solid-orange':
        'bg-orange-400 text-white hover:bg-orange-500 active:bg-orange-600 focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 shadow-sm',

    // Outline variants
    'outline-primary':
        'border border-indigo-300 text-indigo-600 hover:bg-indigo-50 active:bg-indigo-100 focus:ring-2 focus:ring-indigo-200 focus:ring-offset-1',
    'outline-secondary':
        'border border-slate-300 text-slate-600 hover:bg-slate-50 active:bg-slate-100 focus:ring-2 focus:ring-slate-200 focus:ring-offset-1',
    'outline-success':
        'border border-emerald-300 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 focus:ring-2 focus:ring-emerald-200 focus:ring-offset-1',
    'outline-danger':
        'border border-rose-300 text-rose-600 hover:bg-rose-50 active:bg-rose-100 focus:ring-2 focus:ring-rose-200 focus:ring-offset-1',
    'outline-warning':
        'border border-amber-300 text-amber-700 hover:bg-amber-50 active:bg-amber-100 focus:ring-2 focus:ring-amber-200 focus:ring-offset-1',
    'outline-info':
        'border border-sky-300 text-sky-600 hover:bg-sky-50 active:bg-sky-100 focus:ring-2 focus:ring-sky-200 focus:ring-offset-1',
    'outline-purple':
        'border border-purple-300 text-purple-600 hover:bg-purple-50 active:bg-purple-100 focus:ring-2 focus:ring-purple-200 focus:ring-offset-1',
    'outline-pink':
        'border border-pink-300 text-pink-600 hover:bg-pink-50 active:bg-pink-100 focus:ring-2 focus:ring-pink-200 focus:ring-offset-1',
    'outline-teal':
        'border border-teal-300 text-teal-600 hover:bg-teal-50 active:bg-teal-100 focus:ring-2 focus:ring-teal-200 focus:ring-offset-1',
    'outline-orange':
        'border border-orange-300 text-orange-600 hover:bg-orange-50 active:bg-orange-100 focus:ring-2 focus:ring-orange-200 focus:ring-offset-1'
}

const roundedClasses: Record<ButtonRounded, string> = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
}

// Función computed para obtener las clases de rounded
const getRoundedClass = () => {
    return roundedClasses[props.rounded]
}

function handleClick(event: MouseEvent) {
    if (!props.disabled) {
        emit('click', event)
    }
}
</script>

<template>
    <button
        :type="props.type"
        :disabled="props.disabled"
        :class="[
            baseClasses,
            sizeClasses[props.size],
            variantClasses[props.variant],
            getRoundedClass(),
            props.fullWidth ? 'w-full' : ''
        ]"
        v-bind="props.nativeAttributes"
        @click="handleClick"
    >
        <slot />
    </button>
</template>
