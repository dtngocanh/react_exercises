import {
  ClockCircleOutlined,
  HomeOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import img from "../../../assets/footer.png";
import logo from "../../../assets/logo.png";
function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <div className="flex justify-center text-sm text-[#32325d]">
        <ul>
          <li>
            <HomeOutlined /> 231 Nguyễn Văn Cừ - Phường 4 - Quận 5 - TP.HCM
          </li>
          <li>
            <PhoneOutlined /> (028) 73 035 556
          </li>
          <li>
            <ClockCircleOutlined /> Thời gian làm việc (08:00 - 17:00)
          </li>
        </ul>
      </div>
      <div className="md:col-span-2 md:col-start-1 lg:col-span-1">
        <div className="flex flex-col justify-center items-center h-full">
          <img width="120px" src={logo} alt="" />
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="text-[#5e72e4]">Sách số</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
