import styles from './Contato.module.css';

export default function Contato(){

return(
<div>
<div className={styles['title-dados']}>Contato</div>
<div className={styles['info-dados']}>Telefone: (81) 98664.9317</div>
<div className={styles['info-dados']}>Celular:  (81) 98782.3755</div>
</div>
);
}