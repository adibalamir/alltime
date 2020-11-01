import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './css/BackButton.css';

export default function BackButton(): JSX.Element {
    return (
        <div className={styles.button} data-tid="backButton">
            <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
            </Link>
        </div>
    )
}