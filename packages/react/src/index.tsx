import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      lg: {
        fontSize: '$lg',
        padding: '$3 $6',
      },
      md: {
        fontSize: '$md',
        padding: '$2 $4',
      },
      sm: {
        fontSize: '$sm',
        padding: '$1 $2',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
