import ItemCardapio from './ItemCardapio'

function App() {
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
            marginBottom: '25px'
          }}
        >
          Cardápio da Lanchonete
        </h1>

        <ItemCardapio nome="Coxinha" preco={7.5} />
        <ItemCardapio nome="Enroladinho de Salsicha" preco={6.0} />
        <ItemCardapio nome="Empada" preco={8.0} />
        <ItemCardapio nome="Kibe" preco={6.5} />
        <ItemCardapio nome="Refrigerante" preco={5.0} />
      </div>
    </div>
  )
}

export default App