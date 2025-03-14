import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NSXList = () => {
    const [nsxList, setNsxList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/nsx')
            .then(res => setNsxList(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteNSX = (MaNSX) => {
        axios.delete(`http://localhost:5000/nsx/${MaNSX}`)
            .then(() => setNsxList(nsxList.filter(nsx => nsx.MaNSX !== MaNSX)))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Danh sách Nhà Sản Xuất</h2>
            <ul>
                {nsxList.map(nsx => (
                    <li key={nsx.MaNSX}>
                        {nsx.TenNSX} - {nsx.DiaChi}
                        <button onClick={() => deleteNSX(nsx.MaNSX)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NSXList;
