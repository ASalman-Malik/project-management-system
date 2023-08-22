// import { Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <>
      <header>
        <div className="nav-area">
          <nav>
            <Navbar />
          </nav>
        </div>
      </header>
    </>
  );
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState( [
    {
        "aricle_id": 2,
        "aricle_name": "Medical News",
        "url": "medical-news",
        "article_icon": null,
        "article_image": null,
        "article_type": "text",
        "sub_article": null
    },
    {
        "aricle_id": 3,
        "aricle_name": "eMCEs",
        "url": "emces",
        "article_icon": null,
        "article_image": null,
        "article_type": "videos",
        "sub_article": null
    },
    {
        "aricle_id": 4,
        "aricle_name": "Scientific Resources",
        "url": "scientific-resources",
        "article_icon": null,
        "article_image": null,
        "article_type": null,
        "sub_article": [
            {
                "id": 151,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "expert-s-views",
                "aricle_name": "Expert's Views",
                "sub_article":[
                    {
                        "id": 151,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "expert-s-views",
                "aricle_name": "Eexpert-s Views", 
                    },
                    {
                        "id": 151,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "expert-s-views",
                "aricle_name": "Eexpert", 
                "sub_article":[
                  {
                    "aricle_id": 3,
                    "aricle_name": "eMCEs",
                    "url": "emces",
                    "article_icon": null,
                    "article_image": null,
                    "article_type": "videos",
                    "sub_article":[
                      {
                        "aricle_id": 3,
                        "aricle_name": "eMCEs",
                        "url": "emces",
                        "article_icon": null,
                        "article_image": null,
                        "article_type": "videos",
                      }
                    ]
                  }
                ]
                    }
                ]
               
            },
            {
                "id": 152,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "slide-library",
                "aricle_name": "Slide Library"
            },
            {
                "id": 153,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "guidelines",
                "aricle_name": "Guidelines"
            },
            {
                "id": 154,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "our-research",
                "aricle_name": "Our Research"
            },
            {
                "id": 155,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "key-trials",
                "aricle_name": "Key Trials"
            },
            {
                "id": 156,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "conference-proceedings",
                "aricle_name": "Conference Proceedings"
            },
            {
                "id": 157,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "patient-education",
                "aricle_name": "Patient Education"
            },
            {
                "id": 158,
                "image": null,
                "icon": null,
                "kt_article_id": 4,
                "format_type": null,
                "url": "clinical-tools",
                "aricle_name": "Clinical Tools"
            }
        ]
    },
    {
        "aricle_id": 5,
        "aricle_name": "Topics",
        "url": "topics",
        "article_icon": null,
        "article_image": null,
        "article_type": null,
        "sub_article": [
            {
                "id": 1,
                "image": null,
                "icon": null,
                "kt_article_id": 5,
                "format_type": null,
                "url": "addiction",
                "aricle_name": "Addiction"
            },
            {
                "id": 2,
                "image": null,
                "icon": null,
                "kt_article_id": 5,
                "format_type": null,
                "url": "adolescent-health",
                "aricle_name": "Adolescent Health"
            },
            {
                "id": 3,
                "image": null,
                "icon": null,
                "kt_article_id": 5,
                "format_type": null,
                "url": "aging-skin",
                "aricle_name": "Aging Skin"
            },
            {
                "id": 4,
                "image": null,
                "icon": null,
                "kt_article_id": 5,
                "format_type": null,
                "url": "allergic-rhinitis",
                "aricle_name": "Allergic Rhinitis"
            },
            {
                "id": 5,
                "image": null,
                "icon": null,
                "kt_article_id": 5,
                "format_type": null,
                "url": "allergy",
                "aricle_name": "Allergy"
            },
            {
                "id": 6,
                "image": null,
                "icon": null,
                "kt_article_id": 5,
                "format_type": null,
                "url": "allied",
                "aricle_name": "Allied"
            }
        ]
    },
    {
        "aricle_id": 6,
        "aricle_name": "Infographics",
        "url": "infographics",
        "article_icon": null,
        "article_image": null,
        "article_type": null,
        "sub_article": null
    },
    {
        "aricle_id": 7,
        "aricle_name": "Product Index",
        "url": "product-index",
        "article_icon": null,
        "article_image": null,
        "article_type": null,
        "sub_article": null
    },
    {
        "aricle_id": 8,
        "aricle_name": "Medico-Legal",
        "url": "medico-legal",
        "article_icon": null,
        "article_image": null,
        "article_type": null,
        "sub_article": null
    }
]);
  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     axios.get(`https://demoquaeretech.in/api/kt-articles-master`).then((res) => {
//       if (res.data.status === 1) {
//         setLoading(false);
//         // setMenuItems(res.data.result);
//       } else {
//         setLoading(true);
//       }
//     });
//   }, []);

  return (
    <nav>
      {loading ? (
        <>
          {/* <Skeleton animation="wave" width={1200} />
          <Skeleton width={1000} /> */}
        </>
      ) : (
        <ul className="menus">
          {" "}
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}{" "}
        </ul>
      )}
    </nav>
  );
};

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.sub_article ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.aricle_name}{" "}
            {depthLevel > 0 ? (
              <span className="fa fa-caret-right">  </span>
            ) : (
              <span className="arrow" />
            )}{" "}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.sub_article}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={`/${items.url}`}>
          {" "}
          {items.aricle_name ? items.aricle_name : ""}{" "}
        </Link>
      )}{" "}
    </li>
  );
};

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {" "}
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </ul>
  );
};

export default NavList;