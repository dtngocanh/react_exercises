import { Button, Form, Input, message } from "antd";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const navigate = useNavigate();
  async function onFinish(values) {
    try {
      const response = await axios.post("http://localhost:3000", {
        email: values.email,
        password: values.password,
      });
      console.log(response);

      const token = response.data.token;
      localStorage.setItem("access_token", token);
      localStorage.setItem("email", values.email);
      navigate("/admin/home");
    } catch (error) {
      console.error(error.message);
    }
    // console.log(values);
    props.onSuccess();
  }
  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Vui lòng nhập email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
