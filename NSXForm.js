import React, { useState } from 'react';
import axios from 'axios';

const NSXForm = () => {
    const [nsx, setNsx] = useState({ MaNSX: '', TenNSX: '', DiaChi: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/nsx', nsx)
            .then(() => alert('Thêm thành công'))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Mã NSX" onChange={(e) => setNsx({...nsx, MaNSX: e.target.value})} />
            <input type="text" placeholder="Tên NSX" onChange={(e) => setNsx({...nsx, TenNSX: e.target.value})} />
            <input type="text" placeholder="Địa Chỉ" onChange={(e) => setNsx({...nsx, DiaChi: e.target.value})} />
            <button type="submit">Thêm</button>
        </form>
    );
};

export default NSXForm;
