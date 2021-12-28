import styles from './Paciente.module.css';

export default function Paciente(){

return(
<div>
<div className={styles['title-dados']}>Dados Paciente</div>
<div className={styles['info-dados']}>Data de nascimento: 1949/12/24 TO5:00:00:00 OZ</div>
<div className={styles['info-dados']}>Nome da mãe: Maria Alves Ferreira</div>
<div className={styles['info-dados']}>Estado Civ: Casado</div>
<div className={styles['info-dados']}>Tipo Sanguíneo: A+</div>
<div className={styles['info-dados']}>Doador de órgãos: NÃO</div>
<div className={styles['info-dados']}>RG: 8.529.600</div>
<div className={styles['info-dados']}>cor: 852.960.038.02</div>
<div className={styles['info-dados']}>Nacionalidade: Brasileira</div>
</div>
);
}