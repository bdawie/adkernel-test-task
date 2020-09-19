import React from 'react';
import 'antd/dist/antd.css'

import './Layout.css';

const Layout = props => {
    return (
        <div className="LayoutWrapper">
            <header>
                <h1>Softindex Employee Form</h1>
            </header>
            <main>
                <section>
                    {props.children}
                </section>
            </main>
        </div>
    );
}

export default Layout;
