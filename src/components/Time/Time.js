import './Time.css';

export const Time = ({ nome, corPrimaria, corSecundaria }) => {
  const estiloSection = {
    backgroundColor: corSecundaria,
  }
  const estiloH3 = {
    borderColor: corPrimaria
  }

  return (
    <section className='time' style={estiloSection}>
      <h3 style={estiloH3}>{nome}</h3>
    </section>
  )
}