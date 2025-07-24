import banner from "../../../assets/banner.png";

function HeroSection() {
  return (
    <div className="min-h-fit  px-10 py-10 flex flex-col md:flex-row items-center justify-center">
      <img src={banner} alt="banner" className="max-w-[400px] md:mr-12" />
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          SÁCH GIÁO KHOA TIẾNG ANH
        </h2>
        <p className="text-gray-700 text-lg font-light leading-relaxed text-justify">
          Áp dụng phương pháp học tập khoa học mới hệ thống học trực tuyến thông
          minh, ứng dụng công nghệ 4.0 với trí tuệ nhân tạo. Việc áp dụng phương
          pháp mới này không những mang lại hiệu quả cao, tiết kiệm thời gian mà
          còn mang đến tính sáng tạo, tư duy độc lập, sự tìm tòi, nghiên cứu của
          học sinh.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
