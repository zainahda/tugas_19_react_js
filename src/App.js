import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import NavbarComponent from "./components/NavbarComponent";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      karyawans: [],
      show: false,
      edit: false,
      delete: false,
      dataKaryawan: {
        id: 0,
        nama_karyawan: "",
        jabatan: "",
        jenis_kelamin: "Laki-Laki",
        tanggal_lahir: "",
      },
    };
  }
  refreshData = () => {
    axios.get(`http://localhost:3004/karyawans`).then((res) => {
      this.setState({ karyawans: res.data, edit: false });
    });
  };

  handleChange = (e) => {
    let newDataKaryawan = { ...this.state.dataKaryawan };
    if (this.state.edit === false) {
      newDataKaryawan["id"] = new Date().getTime();
    }
    newDataKaryawan[e.target.name] = e.target.value;

    this.setState(
      {
        dataKaryawan: newDataKaryawan,
      },
      () => console.log(this.state.dataKaryawan)
    );
  };

  handleRemove = (e) => {
    swal({
      title: "Apakah Anda Ingin Menghapus",
      text: "Data akan terhapus permanent dan tidak dapat dikembalikan",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:3004/karyawans/${e.target.value}`)
          .then((res) => this.refreshData(res));

        swal("Data Karyawan Berhasil Terhapus", {
          icon: "success",
          timer: 2000,
        });
      } else {
        swal("Batal Menghapus Data Karyawan", {
          timer: 2000,
        });
      }
    });
  };

  handleEdit = (e) => {
    axios
      .get(`http://localhost:3004/karyawans/${e.target.value}`)
      .then((res) => {
        this.setState({
          dataKaryawan: res.data,
          edit: true,
          show: true,
        });
      });
  };

  addKaryawan = () => {
    if (this.state.edit === false) {
      axios
        .post(`http://localhost:3004/karyawans`, this.state.dataKaryawan)
        .then(() => {
          this.refreshData();
          this.clearData();
        });

      this.handleClose();
      swal({
        icon: "success",
        text: "Data Karyawan Berhasil Ditambah",
        timer: 2000,
        button: false,
      });
    } else {
      axios
        .put(
          `http://localhost:3004/karyawans/${this.state.dataKaryawan.id}`,
          this.state.dataKaryawan
        )
        .then(() => {
          this.refreshData();
          this.clearData();
        });

      this.handleClose();
      swal({
        icon: "success",
        text: "Data Karyawan Berhasil Diedit",
        timer: 2000,
        button: false,
      });
    }
  };

  clearData = () => {
    let newDataKaryawan = { ...this.state.dataKaryawan };
    newDataKaryawan["id"] = "";
    newDataKaryawan["nama_karyawan"] = "";
    newDataKaryawan["jabatan"] = "";
    newDataKaryawan["jenis_kelamin"] = "";
    newDataKaryawan["tanggal_lahir"] = "";

    this.setState({
      dataKaryawan: newDataKaryawan,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  componentDidMount() {
    this.refreshData();
  }

  render() {
    return (
      <Container>
        <NavbarComponent />

        <FormComponent
          show={this.show}
          onHide={this.handleClose}
          handleShow={this.handleShow}
          handleChange={this.handleChange}
          handleClose={this.handleClose}
          addKaryawan={this.addKaryawan}
          {...this.state}
        />

        <TableComponent
          handleRemove={this.handleRemove}
          handleEdit={this.handleEdit}
          {...this.state}
        />
      </Container>
    );
  }
}

export default App;
