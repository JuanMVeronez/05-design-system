import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@jmv-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  argTypes: {
    onChangeStep: {
      name: 'changeStep',
    },
  },
  decorators: [
    (Story) => (
      <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const MiddleStep: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 3,
  },
}
