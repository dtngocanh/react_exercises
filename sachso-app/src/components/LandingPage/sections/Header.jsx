import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import LoginForm from "../LoginForm";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      setIsMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "home", label: "Trang chủ" },
    { key: "phuongnam", label: "Phương Nam" },
    { key: "login", label: "Đăng nhập" },
    { key: "signup", label: "Đăng ký học sinh" },
  ];

  function handleMenuClick(key) {
    if (key === "login") {
      setIsLoginModalOpen(true);
    } else {
      navigate(`/`);
    }
    setIsMenuOpen(false);
  }

  return (
    <header className="flex items-center px-4 py-3 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-[140px] h-auto" />

      {/* Menu desktop */}
      {!isMobile && (
        <nav className="flex gap-6 text-blue-700 font-medium px-4">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className="py-4 px-2 hover:bg-blue-50 rounded transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}

      {/* Mobile: nút menu */}
      {isMobile && (
        <div className="ml-auto">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      )}

      {/* Mobile: modal menu */}
      <Modal
        open={isMenuOpen && isMobile}
        onCancel={() => setIsMenuOpen(false)}
        footer={null}
        closable={false}
        style={{ top: 0 }}
      >
        <div className="flex flex-col w-full bg-white p-4">
          <img src={logo} alt="Logo" className="w-[140px] h-auto py-2" />

          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className="py-2 px-4 text-left text-blue-700 font-medium hover:bg-blue-50 rounded transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      </Modal>

      {/* Modal login */}
      <Modal
        open={isLoginModalOpen}
        onCancel={() => setIsLoginModalOpen(false)}
        footer={null}
        centered
      >
        <LoginForm onSuccess={() => setIsLoginModalOpen(false)} />
      </Modal>
    </header>
  );
}

export default Header;
