import './ListaSuspensa.css';

export const ListaSuspensa = ({ label, itens, obrigatorio, valor, aoAlterado }) => {
  return (
    <div className='lista-suspensa'>
      <label>{ label }</label>
      <select
        value={ valor }
        onChange={ event => aoAlterado(event.target.value) }
        required={ obrigatorio }
      >
        { itens.map(item => {
          return <option
            key={ item }>
              { item }
            </option>
        })}
      </select>
    </div>
  )
}