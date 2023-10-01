import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

export const Formulario = () => {

  const times = [
    'Progamação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão',
  ];

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("form foi submetido");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome"   placeholder="Digite o seu nome" obrigatorio={true} />
        <CampoTexto label="Cargo"  placeholder="Digite o seu seu cargo" obrigatorio={true}/>
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times} obrigatorio={true}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};
