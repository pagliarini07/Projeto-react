function ItemCardapio(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '15px 20px',
        marginBottom: '12px',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div>
        <h2 style={{ margin: 0, fontSize: '18px' }}>{props.nome}</h2>
        <p style={{ margin: '6px 0 0 0', color: '#555' }}>
          R$ {props.preco.toFixed(2)}
        </p>
      </div>

      <button
        onClick={props.adicionarAoPedido}
        style={{
          backgroundColor: '#c94b00',
          color: '#fff',
          border: 'none',
          padding: '10px 14px',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Adicionar ao pedido
      </button>
    </div>
  )
}

export default ItemCardapio