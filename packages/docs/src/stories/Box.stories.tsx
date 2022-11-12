import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@jmv-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o componente</Text>,
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {},
}
