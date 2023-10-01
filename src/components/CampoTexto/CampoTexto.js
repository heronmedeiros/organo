import './CampoTexto.css';


export const CampoTexto = ({ label, placeholder, obrigatorio }) => {
  const placeholderModificada = `${placeholder}...`;

  return (
    <div className="campo-texto">
      <label>{ label }</label>
      <input required={ obrigatorio } placeholder={ placeholderModificada } />
    </div>
  )
}