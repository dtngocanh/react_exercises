import {
  HomeOutlined,
  BellOutlined,
  BookOutlined,
  ToolOutlined,
  AppstoreAddOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const menuItems = [
  {
    key: "/admin/home",
    icon: <HomeOutlined style={{ color: "#00B2FF" }} />,
    label: "Trang chủ",
  },
  {
    key: "/admin/notifications",
    icon: <BellOutlined style={{ color: "#1677ff" }} />,
    label: "Thông báo",
  },
  {
    key: "/admin/ebook-offline",
    icon: <BookOutlined style={{ color: "#FFD400" }} />,
    label: "Sách điện tử (offline)",
  },
  {
    key: "/admin/tools",
    icon: <ToolOutlined />,
    label: "Công cụ",
  },
  {
    key: "/admin/ebooks",
    icon: <BookOutlined style={{ color: "#4B72FF" }} />,
    label: "Sách điện tử",
  },
  {
    key: "/admin/classes",
    icon: <TeamOutlined style={{ color: "#00BC88" }} />,
    label: "Lớp học",
  },
  {
    key: "/admin/games",
    icon: <AppstoreAddOutlined style={{ color: "#4D63FF" }} />,
    label: "Education Game",
  },
  {
    key: "/admin/guide",
    icon: <BookOutlined style={{ color: "#FF4D4F" }} />,
    label: "Hướng dẫn sử dụng",
  },
  {
    type: "divider",
  },
  {
    type: "group",
    label: <span>ADMINISTRATORS</span>,
    children: [
      {
        key: "/admin/library",
        icon: <BookOutlined />,
        label: "Thư viện",
      },
      {
        key: "/admin/questions",
        icon: <QuestionCircleOutlined />,
        label: "Quản lý câu hỏi",
      },
      {
        key: "/admin/classes",
        icon: <TeamOutlined />,
        label: "Quản lý lớp học",
      },
      {
        key: "/admin/bank",
        icon: <BookOutlined />,
        label: "Ngân hàng đề kiểm tra",
      },
      {
        key: "/admin/users",
        icon: <UserOutlined />,
        label: "Quản lý người dùng",
      },
      {
        key: "/admin/settings",
        icon: <SettingOutlined />,
        label: "Type & OptionType",
      },
    ],
  },
];

export default menuItems;
