import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@jmv-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text>User Description</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'User description',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'It is disabled!',
  },
}
