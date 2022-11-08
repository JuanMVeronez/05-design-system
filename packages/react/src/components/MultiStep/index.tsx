import { ComponentProps, useEffect } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export interface MultiStepProps
  extends ComponentProps<typeof MultiStepContainer> {
  size: number
  currentStep?: number
  onChangeStep?: (step: number) => unknown
}

export function MultiStep({
  size,
  currentStep = 1,
  onChangeStep = () => undefined,
  ...props
}: MultiStepProps) {
  useEffect(() => {
    onChangeStep(currentStep)
  }, [currentStep, onChangeStep])

  return (
    <MultiStepContainer {...props}>
      <Label>
        Passo {currentStep} de {size}
        <Steps css={{ '--steps-size': size }}>
          {Array.from({ length: size }, (_, i) => i + 1).map((step) => (
            <Step key={step} active={currentStep >= step} />
          ))}
        </Steps>
      </Label>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
