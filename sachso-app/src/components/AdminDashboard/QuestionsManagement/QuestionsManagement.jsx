import React, { useState } from "react";
import {
  Table,
  Input,
  Select,
  Button,
  Space,
  Row,
  Col,
  Form,
  Popconfirm,
  Modal,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import QuestionModal from "./QuestionModal";

const { Option } = Select;

const mockData = Array.from({ length: 50 }, (_, i) => ({
  key: i,
  grade: `Lớp ${[1, 2, 3, 4][i % 4]}`,
  unit: ["Unit 1", "Unit 2", "Unit Starter", "End of Year"][i % 4],
  skill: "Kỹ năng",
  question: "Câu hỏi: ",
  type: ["Multiple choice", "Fill color"][i % 2],
  level: ["Nhận biết", "Vận dụng", "Nâng cao"][i % 3],
}));

const QuestionManagement = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(mockData);
  const [filteredData, setFilteredData] = useState(mockData);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modeModal, setModeModal] = useState("");

  function handleSearch() {
    const values = form.getFieldsValue();
    const filtered = data.filter((item) => {
      // grade, unit, requirement, question, skill, type, level
      return (
        (!values.grade || item.grade === values.grade) &&
        (!values.unit || item.unit === values.unit) &&
        (!values.skill || item.skill === values.skill) &&
        (!values.question ||
          item.question
            .toLowerCase()
            .includes(values.question.toLowerCase())) &&
        (!values.type || item.type === values.type) &&
        (!values.level || item.level === values.level)
      );
    });
    setFilteredData(filtered);
  }

  const handleDelete = (key) => {
    const newData = filteredData.filter((item) => item.key !== key);
    setFilteredData(newData);
    setData(newData);
  };

  const columns = [
    {
      title: "Khối lớp",
      dataIndex: "grade",
    },
    {
      title: "Unit",
      dataIndex: "unit",
    },
    {
      title: "Kỹ năng",
      dataIndex: "skill",
    },
    {
      title: "Câu hỏi",
      dataIndex: "question",
    },
    {
      title: "Loại câu hỏi",
      dataIndex: "type",
    },
    {
      title: "Mức độ nhận thức",
      dataIndex: "level",
    },
    {
      title: "Hành động",
      render: (_, record) => (
        <Space>
          <Button color="primary" variant="outlined" icon={<EyeOutlined />} />
          <Button color="pink" variant="outlined" icon={<EditOutlined />} />
          <Popconfirm
            title="Xác nhận xoá?"
            onConfirm={() => handleDelete(record.key)}
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  function handleClick(mode) {
    if (mode === "add") {
      setIsModalOpen(true);
      setModeModal("add");
    }
  }

  return (
    <div style={{ padding: 24 }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-gray-700">QUẢN LÝ CÂU HỎI</h2>
        <Button
          onClick={() => handleClick("add")}
          icon={<PlusOutlined />}
          type="primary"
        >
          Tạo câu hỏi
        </Button>
      </div>

      <Form form={form} layout="horizontal">
        <Row gutter={16}>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="grade" label="Khối lớp">
              <Select allowClear placeholder="Tất cả">
                <Option value="Lớp 1">Lớp 1</Option>
                <Option value="Lớp 2">Lớp 2</Option>
                <Option value="Lớp 3">Lớp 3</Option>
                <Option value="Lớp 4">Lớp 4</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="unit" label="Unit">
              <Select allowClear placeholder="Tất cả">
                <Option value="Unit 1">Unit 1</Option>
                <Option value="Unit 2">Unit 2</Option>
                <Option value="Unit Starter">Unit Starter</Option>
                <Option value="End of Year">End of Year</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="skill" label="Kỹ năng">
              <Input placeholder="Nhập kỹ năng" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="type" label="Dạng câu hỏi">
              <Select allowClear placeholder="Tất cả">
                <Option value="Tất cả">Tất cả</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="requirement" label="Yêu cầu đề bài">
              <Select allowClear placeholder="Tất cả">
                <Option value="Tất cả">Tất cả</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="level" label="Mức độ nhận thức">
              <Select allowClear placeholder="Tất cả">
                <Option value="Tất cả">Tất cả</Option>
                <Option value="Nhận biết">Nhận biết</Option>
                <Option value="Vận dụng">Vận dụng</Option>
                <Option value="Nâng cao">Nâng cao</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item name="question" label="Câu hỏi">
              <Input placeholder="Câu hỏi" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6} className="flex items-end">
            <Button
              icon={<SearchOutlined />}
              type="primary"
              onClick={() => handleSearch()}
              className="w-full md:w-auto"
            >
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </Form>

      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="key"
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20", "50"],
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setPageSize(pageSize);
          },
        }}
        scroll={{ x: "max-content" }}
      />

      {/* ADD QUESTION MODAL */}
      <QuestionModal
        open={isModalOpen}
        mode={modeModal}
        onCancel={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default QuestionManagement;
