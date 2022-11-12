import { colors } from '@jmv-ui/tokens'
import { getContrast } from 'polished'
export const ColorsGrid = () =>
  Object.entries(colors).map(([token, color]) => (
    <div key={token} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast('#FFF', color) > 3.5 ? '#ddd' : '#222',
        }}
      >
        <strong>${token}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
