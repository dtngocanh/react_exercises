import "./App.css";
import menuItems from "./components/AdminDashboard/MenuItems";
import logo from "./assets/logo.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Routes, Route } from "react-router-dom";
import UsersManagement from "./components/AdminDashboard/UsersManagement/UsersManagement";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import QuestionsManagement from "./components/AdminDashboard/QuestionsManagement/QuestionsManagement";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [collapsed, setCollapsed] = useState(false);
  const [titleInfor, setTitleInfor] = useState("Trang chủ");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Tìm label dựa vào path
  const findLabelInMenu = (items, path) => {
    const match = items.find((item) => item.key === path);
    if (match) return match.label;

    for (const item of items) {
      if (item.children) {
        const childLabel = findLabelInMenu(item.children, path);
        if (childLabel) return childLabel;
      }
    }

    return null;
  };

  const getLabelByPath = (path) => {
    return findLabelInMenu(menuItems, path) || "Không rõ";
  };

  useEffect(() => {
    const label = getLabelByPath(location.pathname); // "admin/users"
    setTitleInfor(label);
  }, [location.pathname]);

  const handleClickItem = (e) => {
    navigate(e.key); // "admin/users"
  };

  const email = localStorage.getItem("email");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        style={{ background: "#fff" }}
        // collapsible
        // collapsed={collapsed}
        // onCollapse={setCollapsed}
        trigger={null}
      >
        <div style={{ padding: 16 }}>
          <img src={logo} alt="Logo" width="100%" />
        </div>
        <Menu
          onClick={handleClickItem}
          mode="inline"
          selectedKeys={[location.pathname]} //["/users"]
          items={menuItems}
          theme="light"
          style={{ width: "100%" }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-end items-center gap-6 ">
            <div className="relative cursor-pointer">
              <BellOutlined className="text-2xl text-gray-700 hover:text-blue-500" />
              <span className="absolute top-[6px] -right-[6px] bg-red-500 text-white text-[10px] px-[5px] py-[1px] rounded-full leading-none shadow-sm">
                3
              </span>
            </div>
            <div className="cursor-pointer">
              <UserOutlined className="text-2xl bg-blue-300 p-4 rounded-[50%]" />
              <span className="px-2">{email}</span>
            </div>
          </div>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[
              {
                title: (
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#1677ff",
                      fontWeight: "500",
                    }}
                  >
                    {titleInfor || "Trang chính"}
                  </span>
                ),
              },
            ]}
          />
          <div
            style={{
              // overflowX: "auto",
              // minHeight: 360,
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/questions" element={<QuestionsManagement />} />
              <Route path="/users" element={<UsersManagement />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
