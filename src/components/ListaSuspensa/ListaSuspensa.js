import './ListaSuspensa.css';

export const ListaSuspensa = ({ label, itens, obrigatorio }) => {
  return (
    <div className='lista-suspensa'>
      <label>{ label }</label>
      <select>
        { itens.map(item => {
          return <option required={ obrigatorio }key={ item }>{ item }</option>
        })}
      </select>
    </div>
  )
}