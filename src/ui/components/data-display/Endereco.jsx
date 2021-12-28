import styles from './Endereco.module.css';

export default function Endereco(){

return(
<div>
<div className={styles['title-dados']}>Endereço</div>
<div className={styles['info-dados']}>Rua Santa Clara, 111 -Vasco da Gama - Recife - PE</div>
<div className={styles['info-dados']}>cep: 52081140</div>
</div>
);
}