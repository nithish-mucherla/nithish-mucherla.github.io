import React from "react";
import citi from "../images/Citi.avif";
import ecil from "../images/ECIL.png";
import haxxorz from "../images/haxxorz.png";
import riviera from "../images/riviera.png";
import tems from "../images/TEMS.png";

export const experiences = [
  {
    alt: "CITI",
    src: citi,
    weblink: "https://www.citigroup.com/",
    org: "CITI",
    roles: [
      {
        role: "Apps Development Supervisor",
        dur: "Sept' 2023 - Present",
        skills: [
          "Micro Frontend",
          "Postman",
          "Java",
          "React js",
          "Express",
          "Cypress",
          "Openshift",
        ],
      },
      {
        role: "Technology Analyst II",
        dur: "July 2022 - Sept' 2023",
        skills: [
          "React js",
          "Express",
          "Minimal API",
          "Postman",
          "C#",
          "REST API",
        ],
      },
      {
        role: "Technology Analyst I",
        dur: "July 2021 - July 2022",
        skills: [
          "React js",
          "react-bootstrap",
          "Postman",
          "C#",
          "Selenium",
          "REST API",
        ],
      },
    ],
  },
  {
    alt: "TEMS1",
    src: tems,
    weblink: "https://ieeetemsvit.org",
    org: "IEEE TEMS",
    roles: [
      {
        role: "Chairperson",
        dur: "Feb' 2020 - Feb'2021",
        des: (
          <div>
            IEEE-Technology and Engineering Management Society is a student
            chapter at VIT University, Vellore. {<br />}
            Developed the initial version of the chapter website &nbsp;
            {
              <a href="https://ieeetemsvit.org" className="link">
                TEMS VIT
              </a>
            }
          </div>
        ),
        proof:
          "https://drive.google.com/file/d/1TfjoavsBzyFZySsSvGbZDRL_Kc1uXou_/view?usp=sharing",
      },
    ],
  },
  {
    alt: "p and m",
    src: riviera,
    weblink: "https://www.facebook.com/rivieraVITUniversity",
    org: "Riviera",
    roles: [
      {
        role: "Coordinator, Team Publicity & Marketing",
        dur: "Feb' 2019",
        des: "'Publicity & Marketing' is one of the organizing committees of Riviera'20, an international cultural fest organized by VIT.",
        proof:
          "https://drive.google.com/file/d/1rPKF5HBN1g3eyBsy-abl0KqHg-sOaVGX/view?usp=drivesdk",
      },
    ],
  },
  {
    alt: "haxxorz",
    src: haxxorz,
    weblink: null,
    org: "Haxxorz",
    roles: [
      {
        role: "Event Coordinator",
        dur: "Sept' 2019",
        des: " 'Haxxorz is a Digital Forensics workshop in Gravitas, an international Techno-management fest organized by VIT.",
        proof:
          "https://drive.google.com/open?id=1ZxfEhS10C6gWGoey_KC4EuxYx-0CFwT9",
      },
    ],
  },
  {
    alt: "ECIL",
    src: ecil,
    weblink: "http://www.ecil.co.in/",
    org: "ECIL",
    roles: [
      {
        role: "Android Development intern",
        dur: "June 2019 - July 2019",
        des: "Developed an android application 'Cool Cabs', where independent drivers and cab operators can register to serve the customers.",
        proof: "",
      },
    ],
  },
  {
    alt: "TEMS2",
    src: tems,
    weblink: "https://ieeetemsvit.org",
    org: "IEEE TEMS",
    roles: [
      {
        role: "Core committee member",
        dur: "Oct' 2017 – Feb' 2020",
        des: "Being an active member of the chapter helped me know a lot of things and also helped me develop my interpersonal skills.",
        proof: "",
      },
    ],
  },
];
