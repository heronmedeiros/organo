import './CampoTexto.css';


export const CampoTexto = ({ label, placeholder }) => {
  const placeholderModificada = `${placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{ label }</label>
      <input placeholder={ placeholderModificada } />
    </div>
  )
}