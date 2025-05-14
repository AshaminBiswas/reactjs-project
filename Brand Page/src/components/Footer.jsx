import { IoEarth } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    title: "Resources",
    links: [
      { name: "Find A Store", path: "/" },
      { name: "Become A Member", path: "/" },
      { name: "Running Shoe Finder", path: "/" },
      { name: "Product Advice", path: "/" },
      { name: "Send Us Feedback", path: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Get Help", path: "/" },
      { name: "Order Status", path: "/" },
      { name: "Delivery", path: "/" },
      { name: "Returns", path: "/" },
      { name: "Payment Options", path: "/" },
      { name: "Contact Us On Nike.com Inquiries", path: "/" },
      { name: "Contact Us On All Other Inquiries", path: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Nike", path: "/" },
      { name: "News", path: "/" },
      { name: "Careers", path: "/" },
      { name: "Investors", path: "/" },
      { name: "Sustainability", path: "/" },
      { name: "Impact", path: "/" },
      { name: "Report a Concern", path: "/" },
    ],
  },
];

function Footer() {
  const [expanded, setExpanded] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (title) => {
    setExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="border-t px-10 py-4">
      <span className="flex justify-end items-center pb-4">
        <IoEarth className="mr-2" /> India
      </span>

      <div className="flex justify-between md:flex-row flex-col gap-8 md:w-3/4 w-full">
        {sections.map((section) => (
          <div key={section.title}>
            <div
              onClick={() => isMobile && handleToggle(section.title)}
              onKeyDown={(e) =>
                isMobile && e.key === "Enter" ? handleToggle(section.title) : null
              }
              tabIndex={0}
              className="flex items-center justify-between cursor-pointer focus:outline-none"
            >
              <h2 className="pb-8 text-xl font-semibold">{section.title}</h2>
              {isMobile && (
                <span className="text-3xl md:hidden transition-transform duration-300">
                  <IoIosArrowDown
                    className={expanded[section.title] ? "rotate-180" : ""}
                  />
                </span>
              )}
            </div>

            {/* Handle collapse only for mobile */}
            {isMobile ? (
              <AnimatePresence>
                {expanded[section.title] && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-gray-600 font-semibold"
                  >
                    {section.links.map((link) => (
                      <li key={link.name} className="hover:text-black transition-all duration-200">
                        <Link to={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            ) : (
              <ul className="text-gray-600 font-semibold">
                {section.links.map((link) => (
                  <li key={link.name} className="hover:text-black transition-all duration-200">
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2 className=" text-center text-gray-600 font-semibold py-14">© 2025 Nike, Inc. All rights reserved</h2>
      </div>
    </footer>
  );
}

export default Footer;
