import Colaborador from '../Colaborador';
import './Time.css';

export const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  const estiloSection = {
    backgroundColor: corSecundaria,
  }
  const estiloH3 = {
    borderColor: corPrimaria
  }

  return (
    <section className='time' style={estiloSection}>
      <h3 style={estiloH3}>{nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map( colaborador => {
          return (
            <Colaborador key={colaborador.nome} colaborador={colaborador}/>
          )
        })}
      </div>
    </section>
  )
}