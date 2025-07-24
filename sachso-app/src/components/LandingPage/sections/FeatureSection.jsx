import ai from "../../../assets/ai.svg";
import c from "../../../assets/c.png";
import parents from "../../../assets/parents.png";
import feature from "../../../assets/feature.png";

const features = [
  {
    title: "CHẤM ĐIỂM AI TỰ ĐỘNG",
    description:
      "Việc tích hợp hệ thống AI chấm điểm giúp hạn chế việc lấy đi một khoảng thời gian đáng kể trong khi thời gian đó có thể được sử dụng để trao đổi với học sinh, chuẩn bị trang bị lớp học hay các công việc khác phục vụ thiết yếu phục vụ cho công tác dạy và học.",
    color: "blue",
    icon: ai,
    buttons: ["CÁC BÀI TRẮC NGHIỆM", "LUYỆN TẬP VỚI A.I"],
  },
  {
    title: "GIÁO VIÊN QUẢN LÝ HỌC SINH",
    description:
      "Xây dựng hệ thống quản lý lớp học từ xa. Là nơi giáo viên có thể chủ động theo dõi việc học và làm bài của học sinh từ đó giúp giáo viên có thể quản lý lớp một cách bao quát hơn. Bên cạnh đó luôn đòi hỏi học sinh làm việc khẩn trương theo đúng lộ trình giáo viên đã đặt ra.",
    color: "orange",
    icon: c,
    buttons: ["QUẢN LÝ LỚP", "ĐÁNH GIÁ KẾT QUẢ HỌC TẬP"],
  },
  {
    title: "PHỤ HUYNH THEO DÕI HỌC SINH",
    description:
      "Nhu cầu theo dõi việc học tập của con cái đối với phụ huynh là một nhu cầu hàng đầu. Hệ thống được xây dựng với mục đích đáp ứng nhu cầu trên và tạo sự kết nối chặt chẽ hơn giữa phụ huynh học sinh với nhà trường để kịp thời nắm bắt và theo dõi.",
    color: "indigo",
    icon: parents,
    buttons: ["THEO DÕI KẾT QUẢ HỌC TẬP"],
  },
];

export default function FeatureSection() {
  return (
    <div className="py-18 px-4">
      <h2 className="text-3xl font-semibold text-blue-600 mb-20 text-center">
        TÍNH NĂNG NỔI BẬT
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen mx-auto mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`
              relative bg-white rounded-xl shadow-md px-6 pt-20 pb-6
              transition hover:shadow-xl duration-300
              ${index === 2 ? "md:col-span-1 md:col-start-auto" : ""}
            `}
          >
            <div
              className={`
                absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
               rounded-full w-25 shadow-lg
              `}
            >
              <img src={feature.icon} alt="icon" className="w-full" />
            </div>

            <h3
              className={`text-lg font-semibold mb-3 ${
                feature.color === "blue"
                  ? "text-blue-600"
                  : feature.color === "orange"
                  ? "text-orange-500"
                  : "text-indigo-600"
              }`}
            >
              {feature.title}
            </h3>

            <p className="text-gray-600 text-base mb-6 leading-relaxed text-justify">
              {feature.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {feature.buttons.map((btn, i) => (
                <button
                  key={i}
                  className={`
                    text-white border-none text-xs p-1 rounded-xl
                    ${
                      feature.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : feature.color === "orange"
                        ? "bg-orange-500 hover:bg-orange-600"
                        : "bg-indigo-600 hover:bg-indigo-700"
                    }
                  `}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen mb-20  mx-auto">
        <div className="">
          <img src={feature} alt="" />
        </div>
        <div className=" bg-[#5e72e4] px-6 py-20 rounded-l-4xl text-white text-justify ">
          <h2 className="text-2xl">
            Phương pháp học Tiếng Anh dựa theo "Tháp học tập"
          </h2>
          <ul>
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Hệ thống bài học được thiết kế công phu, khoa học và hấp dẫn, giúp
              học viên học sâu qua các chủ đề giao tiếp thông dụng
            </li>
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Giúp học viên ghi nhớ lâu những kiến thức được học thông qua trải
              nghiệm trực tiếp và quá trình lặp đi lặp lại nhiều lần
            </li>
            <li className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              Bằng việc ứng dụng hình ảnh, âm thanh, hành động và cảm xúc vào
              việc học từ vựng, học viên sẽ ghi nhớ từ vựng lâu hơn, hiệu quả
              hơn và có hứng thú hơn khi học
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
