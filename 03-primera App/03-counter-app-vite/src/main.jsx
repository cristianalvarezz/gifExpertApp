import React from 'react'
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import { CouterApp } from './CouterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CouterApp value = {20} />
    </React.StrictMode>
);