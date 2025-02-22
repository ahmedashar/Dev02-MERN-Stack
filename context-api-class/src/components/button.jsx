
import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';
import styles from './btn.module.css';
export default function Button({ title, onClick }) {
    const { isDark } = useContext(ThemeContext);
    return <button
        className={`${styles.btn} ${isDark && styles.dark}`}
        onClick={onClick}>{title}</button>
}