import { Form, Modal, Button } from "react-bootstrap";

import React from 'react'

const FormComponent = ({handleShow, handleClose, handleChange, show, addKaryawan, dataKaryawan}) => {
  return (
    <div>
      <Button variant="success" onClick={handleShow} className="my-3">
          Tambah Data
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Masukan Nama Karyawan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="nama_karyawan">
              <Form.Label>Nama Karyawan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Karyawan"
                onChange={handleChange}
                value={dataKaryawan.nama_karyawan}
                name="nama_karyawan"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jabatan">
              <Form.Label>Jabatan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Posisi Jabatan"
                onChange={handleChange}
                value={dataKaryawan.jabatan}
                name="jabatan"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="jenis_kelamin">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Select
                onChange={handleChange}
                value={dataKaryawan.jenis_kelamin}
                name="jenis_kelamin"
              >
                <option value="Laki-Laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="tanggal_lahir">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                onChange={handleChange}
                value={dataKaryawan.tanggal_lahir}
                name="tanggal_lahir"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={addKaryawan}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* add data end */}
    </div>
  )
}

export default FormComponent


