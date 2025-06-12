import React, { useEffect, useState, useRef } from "react";
import Isotope from "isotope-layout";
import AOS from "aos";
import "./portfolio.css";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { HiOutlineLink } from "react-icons/hi";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const gridRef = useRef(null);
  const iso = useRef(null);

  useEffect(() => {
    fetch("https://684966e545f4c0f5ee714084.mockapi.io/projects/")
      .then((r) => r.json())
      .then(setProjects)
      .catch(console.error);

    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      iso.current = new Isotope(gridRef.current, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
        transitionDuration: "0.5s",
      });
    }
  }, [projects]);

  const handleFilter = (f) =>
    iso.current.arrange({ filter: f === "*" ? "*" : `.${f}` });

  return (
    <section className="portfolio section py-5 px-5">
      <div className="container" data-aos="fade-up">
        <h2 className="fs-1 fw-bold text-info-emphasis">Portfolio</h2>
        <p className="fs-3 text-secondary">
          Filtering + responsive layout from MockAPI
        </p>

        {/* Filter buttons for large screens */}
<ul className="d-none d-sm-flex justify-content-center gap-4 flex-wrap my-4 list-unstyled">
  {["*", "app", "product", "branding", "books"].map(f => (
    <li
      key={f}
      className="list-hover fs-5 fw-medium text-info-emphasis"
      onClick={() => handleFilter(f)}
      style={{ cursor: "pointer" }}
    >
      {f === "*" ? "All" : f}
    </li>
  ))}
</ul>

{/* Dropdown for small screens */}
<div className="d-sm-none mb-4 text-center">
  <select
    className="form-select w-75 mx-auto"
    onChange={(e) => handleFilter(e.target.value)}
  >
    {["*", "app", "product", "branding", "books"].map(f => (
      <option key={f} value={f}>
        {f === "*" ? "All" : f}
      </option>
    ))}
  </select>
</div>

        <div className="row" ref={gridRef}>
          {projects.map((p) => (
            <div
              key={p.id}
              className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${p.category} mb-4`}
              data-aos="fade-up"
            >
              <div className="custom-card position-relative overflow-hidden rounded-0">
                <img src={p.imageUrl} alt={p.name} className="img-fluid" />
                <div className="card-overlay position-absolute bottom-0 w-100 d-flex justify-content-around align-items-center px-3 py-4 mx-5 my-2">
                  <h5 className="text-white mb-0">{p.name}</h5>
                  <div className="d-flex gap-3">
                    <a href={p.imageUrl} target="_blank" rel="noreferrer">
                      <LiaSearchPlusSolid className="text-white fs-4" />
                    </a>
                    <a href={p.projectUrl} target="_blank" rel="noreferrer">
                      <HiOutlineLink className="text-white fs-4" />
                    </a>
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
