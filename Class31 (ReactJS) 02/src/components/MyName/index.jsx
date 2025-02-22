import React from 'react'
import styles from './myname.module.css'
export const MyName = (props) => {
    return (
        <div>
            <h1 className={styles.colorblue}>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    )
}
