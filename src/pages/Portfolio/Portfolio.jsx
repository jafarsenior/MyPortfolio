import { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { HiOutlineLink } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./portfolio.css";

// Rasmlar importi
import img1 from "../../assets/images/app-1.jpg";
import img2 from "../../assets/images/app-2.jpg";
import img3 from "../../assets/images/product-1.jpg";
import img4 from "../../assets/images/product-2.jpg";
import img5 from "../../assets/images/branding-2.jpg";
import img6 from "../../assets/images/books-1.jpg";

const portfolioItems = [
  { id: 1, title: "App 1", category: "app", image: img1 },
  { id: 2, title: "App 2", category: "app", image: img2 },
  { id: 3, title: "Product 1", category: "product", image: img3 },
  { id: 4, title: "Product 2", category: "product", image: img4 },
  { id: 5, title: "Branding 1", category: "branding", image: img5 },
  { id: 6, title: "Book 1", category: "books", image: img6 },
];

const Portfolio = () => {
  const isotope = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });

    // Isotope init
    isotope.current = new Isotope(gridRef.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      transitionDuration: "0.5s", // faqat bitta silliq animatsiya
    });
  }, []);

  const handleFilter = (filter) => {
    isotope.current.arrange({ filter: filter === "*" ? "*" : `.${filter}` });
  };

  return (
    <section className="portfolio section py-5 px-5">
      <div className="container" data-aos="fade-up">
        <h2 className="mb-3 fs-1 fw-bold text-info-emphasis">Portfolio</h2>
        <p className="fs-3 text-secondary">Portfolio bo‘limi — filtering va responsive layout bilan.</p>

        <ul className="d-flex justify-content-center gap-5 flex-wrap my-4">
          {["*", "app", "product", "branding", "books"].map((filter) => (
            <li
              key={filter}
              className="list-hover list-group-item fs-3 fw-medium text-info-emphasis"
              onClick={() => handleFilter(filter)}
            >
              {filter === "*" ? "All" : filter}
            </li>
          ))}
        </ul>

        <div className="row" ref={gridRef}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.category} mb-4`}
              data-aos="fade-up"
            >
              <div className="custom-card position-relative overflow-hidden rounded-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded-0"
                />
                <div className="card-overlay rounded-0 position-absolute bottom-0 start-0 w-100 d-flex justify-content-around align-items-center px-3 py-4 mx-5 my-2">
                  <h5 className="text-white mb-0">{item.title}</h5>
                  <div className="d-flex gap-3">
                    <LiaSearchPlusSolid className="text-white fs-4" />
                    <HiOutlineLink className="text-white fs-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
