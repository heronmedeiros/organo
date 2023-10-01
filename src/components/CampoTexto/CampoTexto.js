import './CampoTexto.css';

export const CampoTexto = ({ label, placeholder, obrigatorio, aoAlterado, valor }) => {
  const placeholderModificada = `${placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{ label }</label>
      <input
        value={ valor }
        onChange={event => aoAlterado(event.target.value)}
        required={ obrigatorio }
        placeholder={ placeholderModificada }
      />
    </div>
  )
}