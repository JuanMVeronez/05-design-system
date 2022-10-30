import { FC } from 'react'
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export const TokensGrid: FC<TokensGridProps> = ({
  tokens,
  hasRemValue = false,
}) => (
  <table className="tokens-grid">
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </tr>
    </thead>
    <tbody>
      {Object.entries(tokens).map(([token, value]) => (
        <tr key={token}>
          <td>{token}</td>
          <td>{value}</td>
          {hasRemValue && <td>{Number(value.replace('rem', '')) * 16}px</td>}
        </tr>
      ))}
    </tbody>
  </table>
)
