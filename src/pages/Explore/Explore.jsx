import React, { useEffect } from "react";
import "./style.css";
import feather from "feather-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Explore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    feather.replace();

    let lastScrollTop = 0;
    const header = document.querySelector("header");
    const toTop = document.querySelector(".to-top");
    const heroSection = document.querySelector(".hero");

    const onScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const heroSectionOffsetTop = heroSection?.offsetTop || 0;

      if (scrollTop > heroSectionOffsetTop) {
        toTop?.classList.add("active");
      } else {
        toTop?.classList.remove("active");
      }

      if (scrollTop > lastScrollTop) {
        header?.classList.add("hidden");
      } else {
        header?.classList.remove("hidden");
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div>
      <Navbar />
      <header data-aos="fade-down" data-aos-delay="200">
        <div class="container">
          <div class="content">
            {/* <div data-aos="fade-down-right" data-aos-delay="300" class="logo">
              <img src="assets/saturn.png" alt="logo" />
              <a href="">NOVASPACE</a>
            </div> */}

            {/* <div class="extra-nav">
              <button data-aos="fade-down" data-aos-delay="400">
                Let's Explore!
                <i data-feather="aperture" class="icon"></i>
              </button>
            </div> */}
          </div>
        </div>
      </header>

      <a href="#" class="to-top">
        <i data-feather="chevron-up"></i>
      </a>

      <section class="hero">
        <div class="container">
          <div class="content">
            <div class="text">
              <h1 data-aos="fade-up" data-aos-delay="200">
                Unveiling the Future of Labels
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                At our company, label making is a core service where we
                specialize in designing and producing high-quality, custom
                labels for a wide range of products and industries. We use
                advanced printing technology and durable materials to ensure
                each label is clear, professional, and long-lasting.
              </p>
              <a href="#" data-aos="fade-up" data-aos-delay="400">
                {" "}
                Learn More{" "}
              </a>
            </div>

            <div class="moon"></div>
          </div>
        </div>
      </section>

      <section class="why-us">
        <div class="container">
          <div class="content">
            <div class="title" data-aos="fade-up" data-aos-delay="400">
              <h2>WHY CHOOSE US</h2>
              <h1>Explore the Labelex Like Never Before</h1>
              <p>
                Labels and stickers are what give an identity to a product. If a
                product does not come with a label, it loses its value. The
                reason for this is that the brand of the product is indicated by
                means of the label or sticker. JK labels, featuring as
                frontrunners in the race of labels manufacturers in India,
                realize the responsibility that we hold towards our customers.
                Our patrons, who trust us to provide them with nothing lesser
                than the best, believe that we would go to any length so that
                they may get the perfect product.
              </p>
            </div>

            <div class="reason">
              <div class="card" data-aos="fade-up" data-aos-delay="400">
                <div class="icon">🚀</div>
                <div class="desc">
                  <h3>Immersive Experience</h3>
                  <p>
                    We bring your brand to life with visually stunning,
                    custom-designed labels that capture attention and
                    communicate your identity instantly. Every label we make is
                    a blend of creativity and purpose, offering an engaging look
                    and feel.
                  </p>
                </div>
                <hr />
              </div>
              <div class="card" data-aos="fade-up" data-aos-delay="600">
                <div class="icon">🔭</div>
                <div class="desc">
                  <h3>Reliable Insights</h3>
                  <p>
                    Using industry-leading tools and precise quality checks, we
                    ensure that every label is printed with clarity, accuracy,
                    and consistency. Our process is guided by data and customer
                    feedback to deliver results that meet your expectations.
                  </p>
                </div>
                <hr />
              </div>
              <div class="card" data-aos="fade-up" data-aos-delay="800">
                <div class="icon">✨</div>
                <div class="desc">
                  <h3>Space for Everyone</h3>
                  <p>
                    From startups to large-scale industries, we provide label
                    solutions tailored to every business need and budget.
                    Whether you're a first-time client or a seasoned brand, our
                    support and services scale with your growth.
                  </p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about">
        <div class="container">
          <div class="content">
            <div class="text-action">
              <h2 data-aos="fade-left" data-aos-delay="200">
                ABOUT US
              </h2>
              <h1 data-aos="fade-left" data-aos-delay="400">
                EXPLORE MYSTERIOUS LABELS WITH US
              </h1>
              <p data-aos="fade-left" data-aos-delay="600">
                Welcome to Labelex, the home of label lovers. We are committed
                to delivering quality content that opens doors to the beauty of
                the Labels. Through technology and science, we connect you to
                the Beautiful Labels.
              </p>
              <a href="" data-aos="fade-left" data-aos-delay="800">
                Learn More <i data-feather="arrow-up-right" class="icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="status">
        <div class="container">
          <div class="content">
            <div class="title" data-aos="fade-down" data-aos-delay="400">
              <h2>WHAT OUR ENSURE</h2>
              <p>
                We need Your Satisfaction in Or Works so here is the Contents
                That we Ensure you
              </p>
            </div>

            <div class="planet">
              <div class="earth">
                <div class="moon">
                  <div class="moon-desc">
                    <p>Moon</p>
                    <hr />
                  </div>
                </div>
              </div>

              <div class="desc desc-1">
                <p class="name" data-aos="fade-right" data-aos-delay="200">
                  Quality and Durability
                </p>
                <hr data-aos="fade-right" data-aos-delay="200" />
                <p class="value" data-aos="fade-right" data-aos-delay="200">
                  Labels must withstand different environments.
                </p>
              </div>
              <div class="desc desc-2">
                <p class="name" data-aos="fade-right" data-aos-delay="400">
                  Customization and Design
                </p>
                <hr data-aos="fade-right" data-aos-delay="400" />
                <p class="value" data-aos="fade-right" data-aos-delay="400">
                  Customers often need labels tailored to their brand.
                </p>
              </div>
              <div class="desc desc-3">
                <p class="name" data-aos="fade-right" data-aos-delay="600">
                  Accuracy and Compliance
                </p>
                <hr data-aos="fade-right" data-aos-delay="600" />
                <p class="value" data-aos="fade-right" data-aos-delay="600">
                  From barcode precision to ingredient lists and regulatory requirements.
                </p>
              </div>
              <div class="desc desc-4">
                <p class="name" data-aos="fade-left" data-aos-delay="200">
                  Timely Delivery and Support
                </p>
                <hr data-aos="fade-left" data-aos-delay="200" />
                <p class="value" data-aos="fade-left" data-aos-delay="200">
                  Meeting deadlines is crucial in packaging and product launches.
                </p>
              </div>
              <div class="desc desc-5">
                <p class="name" data-aos="fade-left" data-aos-delay="400">
                  Meets Your Requirements
                </p>
                <hr data-aos="fade-left" data-aos-delay="400" />
                <p class="value" data-aos="fade-left" data-aos-delay="400">
                  
                </p>
              </div>
              <div class="desc desc-6">
                <p class="name" data-aos="fade-left" data-aos-delay="600">
                  Trustable
                </p>
                <hr data-aos="fade-left" data-aos-delay="600" />
                <p class="value" data-aos="fade-left" data-aos-delay="600">
                  You Can trust us and our works that make you satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="destination">
        <div class="container">
          <div class="content">
            <div class="title" data-aos="fade-right" data-aos-delay="200">
              <h1>MOST POPULAR Works</h1>
              <p>
                Explore the fascinating satellites and Lables that our users
                adore Creating, and take your time to choose the ideal getaway
                Works that's perfect for you.
              </p>
              {/* <a href="#">
                See More
                <i data-feather="arrow-right" size="12px" class="icon"></i>
              </a> */}
            </div>
            <div class="items saturn" data-aos="fade-left" data-aos-delay="400">
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>SATURN RINGS</h1> */}
            </div>
            <div class="items moon" data-aos="fade-right" data-aos-delay="200">
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>MOON</h1> */}
            </div>
            <div class="items eyropa" data-aos="fade-left" data-aos-delay="400">
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>EYROPA</h1> */}
            </div>
            <div
              class="items mercury"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>MERCURY</h1> */}
            </div>
            <div
              class="items blackhole"
              data-aos="fade-up-right"
              data-aos-delay="200"
            >
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>BLACK HOLE</h1> */}
            </div>
            <div class="items titan" data-aos="fade-left" data-aos-delay="200">
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>TITAN</h1> */}
            </div>
            <div
              class="items neptune"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>NEPTUNE</h1> */}
            </div>
            <div class="items mars" data-aos="fade-left" data-aos-delay="400">
              {/* <a href="#"
              >Read More
              <i data-feather="arrow-right" size="12px" class="icon"></i
            ></a> */}
              {/* <h1>MARS</h1> */}
            </div>
          </div>
        </div>
      </section>

      <section class="contact">
        <div class="container">
          <div class="content">
            <div class="left-side">
              <h1 data-aos="fade-right" data-aos-delay="200">
                Get in Touch, and Our Expert Will Reach Out to You
              </h1>
              <p data-aos="fade-right" data-aos-delay="300">
                Our team is always available and ready to assist you with any
                inquiries. Thank you for your patience and for trusting our
                dedicated specialists to support you.
              </p>
            </div>
            <div class="right-side">
              <form data-aos="fade-left" data-aos-delay="400">
                <h1>CONTACT US</h1>
                <div class="row-1">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div class="row-1">
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Phone Number" />
                </div>
                <textarea placeholder="Message"></textarea>
                <div class="remember">
                  <input type="checkbox" />
                  <p>
                    By clicking on the "Submit" button, I accept the terms of
                    processing of my personal data
                  </p>
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

      {/* <footer>
        <p>All Rights Reserved • Copyright Labelex by 2025</p>
      </footer> */}
    </div>
  );
};

export default Explore;
