import { Modal, Form, Input, Select } from "antd";
import { useEffect } from "react";
function UserModal({ visible, onCancel, onSubmit, mode, userData }) {
  const [form] = Form.useForm();
  const isViewMode = mode === "view";

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(userData);
    }
  }, [visible, userData, form]);

  return (
    <Modal
      title={
        mode === "add"
          ? "Thêm người dùng"
          : mode === "edit"
          ? "Chỉnh sửa người dùng"
          : "Xem thông tin chi tiết"
      }
      open={visible}
      onOk={() => {
        if (!isViewMode) {
          form.validateFields().then(onSubmit);
        } else {
          onCancel();
        }
      }}
      onCancel={onCancel}
      okText="Lưu"
      cancelText="Thoát"
      okButtonProps={{ disabled: isViewMode }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => onFinish(values)}
      >
        <Form.Item label="Họ và tên" name="name" rules={[{ required: true }]}>
          <Input disabled={isViewMode} />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input disabled={isViewMode} />
        </Form.Item>
        <Form.Item label="Số điện thoại" name="phoneNumber">
          <Input disabled={isViewMode} />
        </Form.Item>
        <Form.Item label="Loại tài khoản" name="typeAccount">
          <Select disabled={isViewMode}>
            <Select.Option value="teacher">Giáo viên</Select.Option>
            <Select.Option value="student">Học sinh</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Cấp" name="level">
          <Select disabled={isViewMode}>
            <Select.Option value="1">Cấp 1</Select.Option>
            <Select.Option value="2">Cấp 2</Select.Option>
            <Select.Option value="3">Cấp 3</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UserModal;
