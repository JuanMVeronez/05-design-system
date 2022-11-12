import { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@jmv-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    placeholder: 'Type your username',
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
      >
        {Story()}
        <Text>Accept terms and conditions</Text>
      </Box>
    ),
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
