import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../../components/atoms/Button.vue'

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component:
                    'Reusable button component with multiple variants, sizes, and states. Implements Atomic Design as a fundamental atom of the interface.'
            }
        }
    },
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
            description: 'HTML type of button'
        },
        variant: {
            control: { type: 'select' },
            options: [
                'solid-primary',
                'solid-secondary',
                'solid-success',
                'solid-danger',
                'solid-warning',
                'solid-info',
                'solid-purple',
                'solid-pink',
                'solid-teal',
                'solid-orange',
                'outline-primary',
                'outline-secondary',
                'outline-success',
                'outline-danger',
                'outline-warning',
                'outline-info',
                'outline-purple',
                'outline-pink',
                'outline-teal',
                'outline-orange'
            ],
            description: 'Visual variant of the button (solid or outline)'
        },
        size: {
            control: { type: 'select' },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Button size'
        },
        rounded: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'full'],
            description: 'Corner roundness level'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Button disabled status'
        },
        fullWidth: {
            control: { type: 'boolean' },
            description:
                'If the button should occupy the entire available width'
        },
        default: {
            control: { type: 'text' },
            description: 'Button content (slot)'
        },
        onClick: {
            action: 'clicked',
            description: 'Event triggered when clicked'
        }
    },
    args: {
        default: 'Button'
    }
}

export default meta
type Story = StoryObj<typeof Button>

/**=============
 * MAIN STORY
================*/
export const Default: Story = {
    args: {
        variant: 'solid-primary',
        size: 'md',
        rounded: 'md'
    }
}

/**=================
 * SOLID VARIANTS
====================*/
export const SolidVariants: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="solid-primary">Primary</Button>
        <Button variant="solid-secondary">Secondary</Button>
        <Button variant="solid-success">Success</Button>
        <Button variant="solid-danger">Danger</Button>
        <Button variant="solid-warning">Warning</Button>
        <Button variant="solid-info">Info</Button>
        <Button variant="solid-purple">Purple</Button>
        <Button variant="solid-pink">Pink</Button>
        <Button variant="solid-teal">Teal</Button>
        <Button variant="solid-orange">Orange</Button>
      </div>
    `
    }),
    parameters: {
        docs: {
            description: {
                story: 'All available solid variants of the Button component.'
            }
        }
    }
}

/**===================
 * OUTLINE VARIANTS
======================*/
export const OutlineVariants: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex flex-wrap gap-3">
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-purple">Purple</Button>
        <Button variant="outline-pink">Pink</Button>
        <Button variant="outline-teal">Teal</Button>
        <Button variant="outline-orange">Orange</Button>
      </div>
    `
    }),
    parameters: {
        docs: {
            description: {
                story: 'All available outline variants of the Button component.'
            }
        }
    }
}

/**========
 * SIZES
===========*/
export const Sizes: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex items-end gap-3">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
    `
    }),
    parameters: {
        docs: {
            description: {
                story: 'Diferentes tamaños disponibles del componente Button.'
            }
        }
    }
}

/**==================
 * ROUNDED CORNERS
=====================*/
export const Rounded: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex gap-3">
        <Button rounded="none">None</Button>
        <Button rounded="sm">Small</Button>
        <Button rounded="md">Medium</Button>
        <Button rounded="lg">Large</Button>
        <Button rounded="full">Full</Button>
      </div>
    `
    }),
    parameters: {
        docs: {
            description: {
                story: 'Different levels of roundness for the corners of the button.'
            }
        }
    }
}

/**=========
 * STATES
============*/
export const States: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="flex gap-3">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
        <Button variant="outline-primary" disabled>Disabled Outline</Button>
      </div>
    `
    }),
    parameters: {
        docs: {
            description: {
                story: 'Normal and disabled states of the button.'
            }
        }
    }
}

/**=============
 * FULL WIDTH
================*/
export const FullWidth: Story = {
    render: () => ({
        components: { Button },
        template: `
      <div class="w-96">
        <Button fullWidth>Full Width Button</Button>
      </div>
    `
    }),
    parameters: {
        docs: {
            description: {
                story: 'Button that spans the entire width of the container.'
            }
        }
    }
}

/**===========================
 * BUTTON TYPES (FOR FORMS)
==============================*/
export const ButtonTypes: Story = {
    render: () => ({
        components: { Button },
        template: `
      <form class="flex gap-3" @submit.prevent="onSubmit">
        <Button type="button" variant="outline-secondary">Button</Button>
        <Button type="submit" variant="solid-success">Submit</Button>
        <Button type="reset" variant="outline-danger">Reset</Button>
      </form>
    `,
        methods: {
            onSubmit() {
                alert('Form submitted!')
            }
        }
    }),
    parameters: {
        docs: {
            description: {
                story: 'Different types of HTML buttons for use in forms.'
            }
        }
    }
}