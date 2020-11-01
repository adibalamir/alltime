import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import styles from './RandomNumGenerator.css';
import routes from '../../constants/routes.json';
import BackButton from '../../components/BackButton';

export default function RandomNumGenerator() {
//   const dispatch = useDispatch();
  return (
    <div>
      <BackButton>
        <Link to={routes.HOME}>
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </BackButton>
    </div>
  );
}
