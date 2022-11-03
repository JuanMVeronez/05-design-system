import { Meta, Parameters, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  args: {},
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1: Lorem ipsum dolor sit amet, consect',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o Heading sempre será um `h2`, porém podemos utilizar o `as` para mudar caso necessário.',
      },
    },
  } as Parameters,
}
