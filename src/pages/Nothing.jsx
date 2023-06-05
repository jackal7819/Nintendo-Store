import { TbMoodSad } from 'react-icons/tb';
import styles from './Nothing.module.scss';

const Nothing = () => {
    return (
        <div className={styles.description}>
            <TbMoodSad size={70} className={styles.description__sad} />
            <h1>Nothing found</h1>
            <p className={styles.description__text}>
                Sorry, this page isn't available.
            </p>
        </div>
    );
};

export default Nothing;
