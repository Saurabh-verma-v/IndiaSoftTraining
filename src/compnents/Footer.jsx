import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
  FaPaperPlane,
  FaPhone
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

// import post1 from "../images/blog/post1.jpg";
// import post2 from "../images/blog/post2.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#0f4a85] text-white">

      {/* ================= Newsletter ================= */}
      <div className="max-w-[1058px] mx-auto px-5 pt-9">
        <div className="bg-white rounded-2xl px-8 py-7">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-7">

            {/* Logo */}
            <div className="flex items-center gap-3 min-w-[220px]">
              {/* <div className="w-11 h-11 flex items-center justify-center">
                Replace this with your actual logo
                <div className="text-3xl text-[#19c795]">
                  🎓
                </div>
              </div> */}
              <h2 className="text-2xl font-bold tracking-wide text-[#0f4a85]">
                Maatangi Techwin
              </h2>
            </div>

            {/* Newsletter Heading */}
            <div className="text-xl font-bold whitespace-nowrap text-[#0f4a85]">
              SUBSCRIB{" "}
              <span className="text-[#ffb703]">NEWSLETTER</span>
            </div>

            {/* Email Input */}
            <div className="w-full lg:w-[315px]">
              <div className="h-[43px] rounded-full border border-[#555] flex items-center overflow-hidden">

                <MdEmail className="text-[#ffb703] ml-7 mr-2 text-lg" />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-transparent outline-none text-sm text-white placeholder:text-[#777] flex-1 min-w-0"
                />

                <button
                  type="button"
                  className="w-[43px] h-[43px] rounded-full bg-[#ffb703] flex items-center justify-center shrink-0 hover:bg-[#ffb703] transition-colors"
                >
                  <FaPaperPlane className="text-white text-sm" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* ================= Main Footer ================= */}
      <div className="max-w-[1058px] mx-auto px-5 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* ---------- Get In Touch ---------- */}
          <div>
            <h3 className="text-[19px] font-bold mb-6">
              Get in Touch
            </h3>

            <p className="text-[#858585] text-[14px] leading-[21px] mb-5">
              Maatangi Techwin the ultimate destination for
              <br />
              We are committed to transforming
              <br />
              without standards
            </p>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-4">
              <FaPhone className="text-[#ffb703] text-[16px]"  />
              <span className="text-[#e5e5e5] font-semibold text-[14px]">
                +123 (4567) 890
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <MdEmail className="text-[#ffb703] text-[18px]" />

              <span className="text-[#e5e5e5] font-semibold text-[14px]">
                example@gmail.com
              </span>
            </div>
          </div>


          {/* ---------- Online Platform ---------- */}
          <div>
            <h3 className="text-[19px] font-bold mb-6">
              Online Platform
            </h3>

            <ul className="space-y-4">

              {[
                "About Us",
                "Our Courses",
                "Instructors",
                "Enroll Now",
                "Career",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-[#999] text-[14px] hover:text-[#ffb703] transition-colors"
                  >
                    <FiArrowRight className="text-[#ffb703] text-[15px]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}

            </ul>
          </div>


          {/* ---------- Quick Links ---------- */}
          <div>
            <h3 className="text-[19px] font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                "Latest Blog",
                "Our Galary",
                "Contact Us",
                "Privacy Policy",
                "FAQ’s",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-[#999] text-[14px] hover:text-[#19c795] transition-colors"
                  >
                    <FiArrowRight className="text-[#ffb703] text-[15px]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}

            </ul>
          </div>


          {/* ---------- Recent Posts ---------- */}
          {/* <div>
            <h3 className="text-[19px] font-bold mb-6">
              Recent Posts
            </h3>

            <div className="space-y-4">

              Post 1
              <a
                href="#"
                className="flex gap-3 group"
              >
                <img
                  src=""
                  alt="Online learning"
                  className="w-[61px] h-[61px] rounded-xl object-cover shrink-0"
                />

                <div>
                  <h4 className="text-[13px] leading-[18px] font-semibold text-[#ddd] group-hover:text-[#ffb703] transition-colors">
                    10 Proven Strategies to
                    <br />
                    Online Learning
                  </h4>

                  <p className="text-[#ffb703] text-[12px] mt-1">
                    8 Jan, 2026
                  </p>
                </div>
              </a>


              Post 2
              <a
                href="#"
                className="flex gap-3 group"
              >
                <img
                  src=""
                  alt="Learning trends"
                  className="w-[61px] h-[61px] rounded-xl object-cover shrink-0"
                />

                <div>
                  <h4 className="text-[13px] leading-[18px] font-semibold text-[#ddd] group-hover:text-[#ffb703] transition-colors">
                    Trends that are shaping the
                    <br />
                    Learning...
                  </h4>

                  <p className="text-[#ffb703] text-[12px] mt-1">
                    8 Jan, 2026
                  </p>
                </div>
              </a>

            </div>
          </div> */}

        </div>
      </div>


      {/* ================= Bottom Footer ================= */}
      <div className="max-w-[1058px] mx-auto px-5">

        <div className="border-t border-[#333] py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-[#858585] text-[13px]">
              © 2026{" "}
              <span className="text-[#ffb703]">
                Maatangi Techwin
              </span>
              . Designed By Maatangi Techwin
            </p>


            {/* Social Icons */}
            <div className="flex items-center gap-2">

              <a
                href="#"
                aria-label="Facebook"
                className="w-[30px] h-[30px] rounded-full bg-[#333] flex items-center justify-center text-[#ddd] hover:bg-[#ffb703] hover:text-white transition-all"
              >
                <FaFacebookF className="text-[13px]" />
              </a>

              <a
                href="#"
                aria-label="X"
                className="w-[30px] h-[30px] rounded-full bg-[#333] flex items-center justify-center text-[#ddd] hover:bg-[#ffb703] hover:text-white transition-all"
              >
                <FaXTwitter className="text-[13px]" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-[30px] h-[30px] rounded-full bg-[#333] flex items-center justify-center text-[#ddd] hover:bg-[#ffb703] hover:text-white transition-all"
              >
                <FaLinkedinIn className="text-[13px]" />
              </a>

              <a
                href="#"
                aria-label="Pinterest"
                className="w-[30px] h-[30px] rounded-full bg-[#333] flex items-center justify-center text-[#ddd] hover:bg-[#ffb703] hover:text-white transition-all"
              >
                <FaPinterestP className="text-[13px]" />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;