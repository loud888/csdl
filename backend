import { useState, useEffect } from "react";
import { Button, Input, Table } from "@/components/ui";
import axios from "axios";

export default function NSXManagement() {
  const [nsxList, setNsxList] = useState([]);
  const [newNSX, setNewNSX] = useState({ MaNSX: "", TenNSX: "", DiaChi: "" });

  useEffect(() => {
    fetchNSX();
  }, []);

  const fetchNSX = async () => {
    try {
      const res = await axios.get("http://localhost:5000/nsx");
      setNsxList(res.data);
    } catch (error) {
      console.error("Error fetching NSX:", error);
    }
  };

  const handleAddNSX = async () => {
    try {
      await axios.post("http://localhost:5000/nsx", newNSX);
      fetchNSX();
      setNewNSX({ MaNSX: "", TenNSX: "", DiaChi: "" });
    } catch (error) {
      console.error("Error adding NSX:", error);
    }
  };

  const handleDeleteNSX = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/nsx/${id}`);
      fetchNSX();
    } catch (error) {
      console.error("Error deleting NSX:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Quản lý Nhà Sản Xuất</h1>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Mã NSX"
          value={newNSX.MaNSX}
          onChange={(e) => setNewNSX({ ...newNSX, MaNSX: e.target.value })}
        />
        <Input
          placeholder="Tên NSX"
          value={newNSX.TenNSX}
          onChange={(e) => setNewNSX({ ...newNSX, TenNSX: e.target.value })}
        />
        <Input
          placeholder="Địa chỉ"
          value={newNSX.DiaChi}
          onChange={(e) => setNewNSX({ ...newNSX, DiaChi: e.target.value })}
        />
        <Button onClick={handleAddNSX}>Thêm NSX</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Mã NSX</th>
            <th>Tên NSX</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {nsxList.map((nsx) => (
            <tr key={nsx.MaNSX}>
              <td>{nsx.MaNSX}</td>
              <td>{nsx.TenNSX}</td>
              <td>{nsx.DiaChi}</td>
              <td>
                <Button onClick={() => handleDeleteNSX(nsx.MaNSX)}>Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
