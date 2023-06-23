import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
             

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Fullstack Course</h3>
                <span className="qualification__subtitle">
                Guvi  IIT-M & IIM-A
                </span>
                <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> BSC computer Science </h3>
                <span className="qualification__subtitle">
                GFGC
                </span>
                <div className="qualification__calender">
                  {/* <i className="uil uil-calendar-alt"></i> 2011 - 2014 */}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">PUC </h3>
                <span className="qualification__subtitle">
                GGC 
                </span>
                <div className="qualification__calender">
                  {/* <i className="uil uil-calendar-alt"></i> 2021 - Present */}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                GHS
                </span>
                <div className="qualification__calender">
                  {/* <i className="uil uil-calendar-alt"></i> 2023 - Present */}
                </div>
              </div>
            </div>
           
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend developer</h3>
                <span className="qualification__subtitle">
                  Iween Software Solution Pvt.Ltd,
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 March - 2023 March
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">junior Frontend Developer</h3>
                <span className="qualification__subtitle">
                  Travel Pd 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Customer Reletionship Exicutive</h3>
                <span className="qualification__subtitle">
                 Skoda Automobiles
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
