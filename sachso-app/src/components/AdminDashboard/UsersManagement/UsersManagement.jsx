import { Form, Table, Tag, Space, Tooltip, Select, Input, Button } from "antd";
import {
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
  ImportOutlined,
  UserAddOutlined,
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import UserModal from "./UserModal";

import * as XLSX from "xlsx";
import { useRef } from "react";

function Users() {
  const data = [
    {
      key: "1",
      id: "U001",
      name: "Nguyễn Văn A",
      typeAccount: "student",
      level: "1",
      email: "a@example.com",
      phoneNumber: "0123456789",
      dateCreated: "2023-01-01",
    },
    {
      key: "2",
      id: "U002",
      name: "Trần Thị B",
      typeAccount: "teacher",
      level: "3",
      email: "b@example.com",
      phoneNumber: "0987654321",
      dateCreated: "2023-02-15",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      render: (value, record, index) => index + 1,
    },
    {
      title: "Mã",
      dataIndex: "id",
      key: "id",
      render: (value) => <span className="whitespace-nowrap">{value}</span>,
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (value) => (
        <span className="whitespace-nowrap">
          <UserOutlined className="mr-1" />
          {value}
        </span>
      ),
    },
    {
      title: "Loại tài khoản",
      dataIndex: "typeAccount",
      key: "typeAccount",
      render: (value) => (
        <Tag color={value === "teacher" ? "geekblue" : "green"}>
          {value === "teacher" ? "Giáo viên" : "Học sinh"}
        </Tag>
      ),
    },
    {
      title: "Cấp",
      dataIndex: "level",
      key: "level",
      render: (value) => (
        <Tag color={value == 1 ? "green" : value == 2 ? "blue" : "red"}>
          Cấp {value}
        </Tag>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (value) => (
        <span className="whitespace-nowrap">
          <MailOutlined className="mr-1" />
          {value}
        </span>
      ),
    },
    {
      title: "Điện thoại",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (value) => (
        <span className="whitespace-nowrap">
          <PhoneOutlined className="mr-1" />
          {value}
        </span>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "dateCreated",
      key: "dateCreated",
      render: (value) => (
        <span className="whitespace-nowrap">
          <CalendarOutlined className="mr-1" />
          {value}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (value, record) => (
        <Space size="middle">
          <Tooltip title="Xem chi tiết">
            <KeyOutlined
              onClick={() => handleOpenModal("view", record)}
              style={{ color: "#1890ff", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Sửa">
            <EditOutlined
              onClick={() => handleOpenModal("edit", record)}
              style={{ color: "#52c41a", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Xoá">
            <DeleteOutlined
              onClick={() => handleDelete(record.id)}
              style={{ color: "#ff4d4f", cursor: "pointer" }}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const [users, setUsers] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMode, setModelMode] = useState("add");
  const [selectedUser, setSelectedUser] = useState(null);

  const [form] = Form.useForm();
  const [filteredUsers, setFilteredUsers] = useState(users);

  function handleDelete(id) {
    setUsers((preUser) => preUser.filter((user) => user.id !== id));
  }

  function handleOpenModal(mode, user) {
    setSelectedUser(user || {});
    setModelMode(mode);
    setModalVisible(true);
  }

  function handleSubmit(values) {
    if (modalMode === "edit") {
      console.log("Cập nhật:", values);
      const updatedUser = users.map((user) =>
        user.id === selectedUser.id ? { ...user, ...values } : user
      );
      setUsers(updatedUser);
      setFilteredUsers(updatedUser);
    } else {
      const newUser = {
        key: `${Date.now()}-${users.length + 1}`,
        id: `${Date.now()}-${users.length + 1}`,
        name: `${values.name}`,
        typeAccount: `${values.typeAccount}`,
        level: `${values.level}`,
        email: `${values.email}`,
        phoneNumber: `${values.phoneNumber}`,
        dateCreated: new Date().toLocaleString(),
      };
      console.log("Thêm:", values);

      setUsers([...users, newUser]);
      setFilteredUsers([...users, newUser]);
    }
    setModalVisible(false);
  }

  function handleSearch() {
    // console.log(form);
    const values = form.getFieldValue();
    // console.log(!values.typeAccount);

    const foundUser = users.filter((user) => {
      return (
        (!values.typeAccount || user.typeAccount === values.typeAccount) &&
        (!values.level || user.level === values.level) &&
        (!values.email || user.email === values.email) &&
        (!values.phoneNumber || user.phoneNumber === values.phoneNumber)
      );
    });
    setFilteredUsers(foundUser);
  }

  const fileInputRef = useRef();

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      // hàm chạy sau khi đọc file
      const data = new Uint8Array(evt.target.result); // chuyển Excel sang byte array
      const workbook = XLSX.read(data, { type: "array" }); // workbook gồm các sheet
      const sheetName = workbook.SheetNames[0]; // lấy sheet đầu tiên
      const sheet = workbook.Sheets[sheetName]; // lấy nội dung sheet đó
      const jsonData = XLSX.utils.sheet_to_json(sheet); // chuyển data sang JSON

      const importedUsers = jsonData.map((item, index) => ({
        key: `${Date.now()}-${index}`,
        id: `${Date.now()}-${index}`,
        name: item["Họ và tên"],
        email: item["Email"],
        phoneNumber: item["Số điện thoại"],
        typeAccount: item["Loại tài khoản"],
        level: item["Cấp"],
        dateCreated: new Date().toLocaleString(),
      }));
      // console.log(importedUsers);
      setUsers((prev) => [...prev, ...importedUsers]);
      setFilteredUsers((prev) => [...prev, ...importedUsers]);
    };
    reader.readAsArrayBuffer(file); // đọc file
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h2 className="text-base font-semibold">QUẢN LÝ NGƯỜI DÙNG</h2>
        <div className="flex gap-4 ">
          <Button
            onClick={() => handleOpenModal("add")}
            icon={<UserAddOutlined />}
          >
            Thêm người dùng
          </Button>
          <>
            <Button icon={<ImportOutlined />} onClick={handleImportClick}>
              Nhập từ excel
            </Button>

            <input
              type="file"
              accept=".xlsx, .xls"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </>
        </div>
      </div>

      <Form
        form={form}
        layout="inline"
        className="flex flex-col md:flex-row md:flex-wrap gap-3"
      >
        <Form.Item
          name="typeAccount"
          label={<span className="text-xs">Loại tài khoản</span>}
          className="w-full md:flex-1 md:max-w-[180px] mb-0"
        >
          <Select size="small" className="min-w-[80px]">
            <Select.Option value="teacher">Giáo viên</Select.Option>
            <Select.Option value="student">Học sinh</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="level"
          label={<span className="text-xs">Cấp</span>}
          className="w-full md:flex-1 md:max-w-[150px] mb-0"
        >
          <Select size="small" className="min-w-[80px]">
            <Select.Option value="1">Cấp 1</Select.Option>
            <Select.Option value="2">Cấp 2</Select.Option>
            <Select.Option value="3">Cấp 3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="email"
          label={<span className="text-xs">Email</span>}
          className="w-full md:flex-1 md:max-w-[180px] mb-0"
        >
          <Input
            size="small"
            className="w-full min-w-[120px]"
            placeholder="example@gmail.com"
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label={<span className="text-xs">Điện thoại</span>}
          className="w-full md:flex-1 md:max-w-[220px] mb-0"
        >
          <Input
            size="small"
            className="w-full min-w-[120px]"
            placeholder="0123..."
          />
        </Form.Item>

        <Form.Item className="w-full md:w-auto mb-0">
          <Button
            type="primary"
            onClick={handleSearch}
            size="small"
            className="w-full md:w-auto"
          >
            Tìm kiếm
          </Button>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={filteredUsers}
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />

      <UserModal
        onCancel={() => setModalVisible(false)}
        onSubmit={handleSubmit}
        visible={modalVisible}
        mode={modalMode}
        userData={selectedUser}
      />
    </div>
  );
}

export default Users;
