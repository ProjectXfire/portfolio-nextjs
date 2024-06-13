// Components & Styles
import styles from './PersonalInfo.module.css';
import InfoBlock from './InfoBlock';

function PersonalInfo(): JSX.Element {
  return (
    <div className={styles['personal-info']}>
      <div>
        <InfoBlock keyData='Name' data='Gabriel Vargas Bravo' />
        <InfoBlock keyData='Nationality' data='Peruvian' />
      </div>
      <div>
        <InfoBlock keyData='Phone' data='(+011) 51 990 994 750' />
        <InfoBlock keyData='Email' data='gvbdeveloper@gmail.com' />
      </div>
    </div>
  );
}
export default PersonalInfo;
