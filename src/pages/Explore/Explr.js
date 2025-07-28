import React, { useEffect } from 'react';

const Explr = () => {
  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const toTop = document.querySelector(".to-top");
    const heroSection = document.querySelector(".hero");

    if (!header || !toTop || !heroSection) return; // guard clause

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const heroSectionOffsetTop = heroSection.offsetTop;

      if (scrollTop > heroSectionOffsetTop) {
        toTop.classList.add("active");
      } else {
        toTop.classList.remove("active");
      }

      if (scrollTop > lastScrollTop) {
        header.classList.add("hidden");
      } else {
        header.classList.remove("hidden");
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  return <></>;
};

export default Explr;
