import React from 'react';
import { Table, Button } from "react-bootstrap";

const TableComponent = ({handleRemove, handleEdit, karyawans}) => {
  return (
    <div>
      {/* table start */}
      <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Nama</th>
              <th>Jabatan</th>
              <th>Jenis Kelamin</th>
              <th>Tanggal Lahir</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {karyawans.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.nama_karyawan}</td>
                <td>{item.jabatan}</td>
                <td>{item.jenis_kelamin}</td>
                <td>{item.tanggal_lahir}</td>
                <td>
                  <Button
                    value={item.id}
                    variant="danger"
                    className="me-2"
                    onClick={handleRemove}
                  >
                    Hapus Data
                  </Button>
                  <Button
                    variant="success"
                    value={item.id}
                    onClick={handleEdit}
                  >
                    Edit Data
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* table end */}
    </div>
  )
}

export default TableComponent;
