import { useState } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Checkbox,
  Image,
} from "antd";
import {
  UploadOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const QuestionModal = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [checked, setChecked] = useState(false);
  const [question, setQuestion] = useState("");

  const handleImageUpload = (e) => {
    const url = URL.createObjectURL(e.file);
    setImageUrl(url);
  };

  const handleAudioUpload = (e) => {
    const url = URL.createObjectURL(e.file);
    setAudioUrl(url);
  };

  const handleFinish = (values) => {
    const fullData = {
      ...values,
      imageUrl,
      audioUrl,
      checkedImage: checked,
      question,
    };
    console.log("Form submitted:", fullData);
    // TODO: gửi dữ liệu về API hoặc callback ra ngoài
  };

  return (
    <Modal
      title="Cập nhật câu hỏi"
      open={open}
      onCancel={onCancel}
      footer={null}
      width="auto"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initialValues={{
          answers: [{ text: "", correct: false }],
        }}
      >
        {/* Cột trái */}
        <div className="col-span-1">
          <Form.Item label="Khối lớp" name="grade">
            <Select placeholder="Chọn khối lớp">
              <Option value="Lớp 1">Lớp 1</Option>
              <Option value="Lớp 5">Lớp 5</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Unit" name="unit">
            <Select placeholder="Chọn unit">
              <Option value="Unit 1">Unit 1</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Kỹ năng" name="skill">
            <Input />
          </Form.Item>
          <Form.Item label="Dạng câu hỏi" name="type">
            <Select placeholder="Chọn dạng">
              <Option value="Multiple choice">Multiple choice</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Yêu cầu đề bài" name="requirement">
            <Input />
          </Form.Item>
          <Form.Item label="Mức độ nhận thức" name="level">
            <Select>
              <Option value="Nhận biết">Nhận biết</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Cột phải */}
        <div className="col-span-2">
          <Form.Item label="Link audio">
            <div className="flex items-center gap-2">
              <Input
                value={audioUrl}
                onChange={(e) => setAudioUrl(e.target.value)}
                placeholder="https://"
              />
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleAudioUpload}
              >
                <Button icon={<UploadOutlined />}>Audio Upload</Button>
              </Upload>
            </div>
            {audioUrl && (
              <audio controls className="mt-2">
                <source src={audioUrl} type="audio/mpeg" />
              </audio>
            )}
          </Form.Item>

          <Form.Item label="Link hình ảnh">
            <div className="flex items-center gap-2">
              <Input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://"
              />
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleImageUpload}
              >
                <Button icon={<UploadOutlined />}>Image Upload</Button>
              </Upload>
            </div>
            {(imageUrl && imageUrl.startsWith("blob:")) ||
            imageUrl.startsWith("http") ? (
              <div className="relative mt-2 inline-block">
                <Checkbox
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  className="absolute top-1 left-1 z-10"
                />
                <Image
                  src={imageUrl}
                  alt="preview"
                  width={150}
                  height={100}
                  className="rounded-md"
                />
              </div>
            ) : null}
          </Form.Item>

          <Form.Item label="Nội dung bài đọc (nếu có)" name="reading">
            <Input.TextArea rows={4} />
          </Form.Item>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Câu hỏi 1</h3>
            <Form.Item label="Loại đáp án là" name="answerType">
              <Select>
                <Option value="Chữ cái">Chữ cái</Option>
                <Option value="Hình ảnh">Hình ảnh</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Nội dung câu hỏi">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Nội dung câu hỏi."
              />
            </Form.Item>

            {/* Form.List cho danh sách đáp án */}
            <Form.List name="answers">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <div key={key} className="flex items-center gap-2 mb-2">
                      <Form.Item
                        {...restField}
                        name={[name, "text"]}
                        rules={[{ required: true, message: "Nhập đáp án!" }]}
                        className="flex-1"
                      >
                        <Input placeholder="Nội dung đáp án." />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "correct"]}
                        valuePropName="checked"
                      >
                        <Checkbox />
                        <MinusCircleOutlined
                          onClick={() => remove(name)}
                          className="ml-2 text-red-500 cursor-pointer text-lg hover:text-red-700"
                        />
                      </Form.Item>
                    </div>
                  ))}
                  <Form.Item>
                    <Button icon={<PlusOutlined />} onClick={() => add()}>
                      Thêm đáp án
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>

          <div className="mt-6 text-right">
            <Button className="mr-2" onClick={onCancel}>
              Đóng
            </Button>
            <Button type="primary" htmlType="submit">
              Lưu
            </Button>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default QuestionModal;
