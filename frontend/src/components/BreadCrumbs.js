// components/DynamicBreadcrumbs.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styling/DynamicBreadcrumbs.css"; // Import CSS for styling

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  let path = "";
  const crumbs = segments.map((segment, index) => {
    path += `/${segment}`;
    const label = capitalize(segment);
    const isLast = index === segments.length - 1;

    return (
      <span key={index} className="breadcrumb-item">
        {!isLast ? (
          <>
            <Link to={path}>{label}</Link>
            <span className="breadcrumb-separator">{">"}</span>
          </>
        ) : (
          <span>{label}</span>
        )}
      </span>
    );
  });

  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-home">
        Home
      </Link>
      {segments.length > 0 && (
        <span className="breadcrumb-separator">{">"}</span>
      )}
      {crumbs}
    </nav>
  );
};

export default DynamicBreadcrumbs;
