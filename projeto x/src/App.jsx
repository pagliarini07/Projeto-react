import { useState } from 'react'
import ItemCardapio from './ItemCardapio'

function App() {
  const [totalPedido, setTotalPedido] = useState(0)

  function adicionarItem() {
    setTotalPedido((valorAtual) => valorAtual + 1)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #fff3d6 0%, #ffd089 100%)',
        padding: '30px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: '#fff8ee',
          padding: '25px',
          borderRadius: '20px',
          border: '4px solid #8b2e00',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)'
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#8b2e00',
            marginBottom: '10px'
          }}
        >
          Cardápio da Lanchonete
        </h1>

        <p
          style={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#5a1c00',
            marginBottom: '25px'
          }}
        >
          Total de itens no pedido: {totalPedido}
        </p>

        <ItemCardapio nome="Coxinha" preco={7.5} adicionarAoPedido={adicionarItem} />
        <ItemCardapio nome="Enroladinho de Salsicha" preco={6.0} adicionarAoPedido={adicionarItem} />
        <ItemCardapio nome="Empada" preco={8.0} adicionarAoPedido={adicionarItem} />
        <ItemCardapio nome="Kibe" preco={6.5} adicionarAoPedido={adicionarItem} />
        <ItemCardapio nome="Refrigerante" preco={5.0} adicionarAoPedido={adicionarItem} />
      </div>
    </div>
  )
}

export default App