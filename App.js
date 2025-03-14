import React from 'react';
import NSXList from './components/NSXList';
import NSXForm from './components/NSXForm';

function App() {
    return (
        <div>
            <h1>Quản lý Nhà Sản Xuất</h1>
            <NSXForm />
            <NSXList />
        </div>
    );
}

export default App;
