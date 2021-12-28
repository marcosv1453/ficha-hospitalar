import Paciente from '../components/data-display/Paciente';
import Contato from '../components/data-display/Contato';
import Endereco from '../components/data-display/Endereco';
import styles from '../styles/pages/index.module.css';
import logo from '../components/images/paciente.png';
import logoMale from '../components/images/sexo-masculino.png';
import logoSave from '../components/images/mensagem.png';
import logoMensagem from '../components/images/impressora.png';
import logoPaciente from '../components/images/paciente-color.png';
import logoEndereco from '../components/images/localizacao.png';
import logoTelefone from '../components/images/telefone.png';



export default function Index(){

    return( 
    <div className={styles['paciente-container']} >
        <h1 className={styles['title']}>Detalhamento de paciente</h1>
        <div className={styles['nome-paciente']}>
             <img className={styles['icon-paciente']} src={logo} alt="paciente"/> 
            <div className={styles['nome-completo-paciente']}> Geraldo Alves Ferreira da Silva</div>
            <img className={styles['icon-male']} src={logoMale} alt="icon-male" />
            <img className={styles['icons']} src={logoSave} alt="icon-Salve" />
            <img className={styles['icons']} src={logoMensagem} alt="icon-Mensagem" />
           
        </div>
    
        <div className={styles['dados-paciente']}>
            
            <img className={styles['icons-dados']} src={logoPaciente}/>
            <Paciente />
            
            <img className={styles['icons-contato']} src={logoEndereco}/>
            <Endereco />
            
            <img className={styles['icons-contato']} src={logoTelefone}/>
            <Contato />
        </div>

        <div className={styles['button-container']}>
            <button className={styles['button']}>
                Voltar
            </button>
        </div>

    </div>
    
    );
}