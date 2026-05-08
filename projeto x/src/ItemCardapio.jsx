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
      <h2 style={{ margin: 0, fontSize: '18px' }}>{props.nome}</h2>
      <span
        style={{
          backgroundColor: '#c94b00',
          color: '#fff',
          padding: '8px 14px',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        R$ {props.preco.toFixed(2)}
      </span>
    </div>
  )
}

export default ItemCardapio