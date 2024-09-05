import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadcrumbNav() {
  const location = useLocation();

  // Split the current path into segments
  const pathSegments = location.pathname.split("/").filter(Boolean); // Remove empty segments

  // Map each segment to a breadcrumb item
  const breadcrumbs = pathSegments.map((segment, index) => {
    // Create a path based on the current segment
    const routeTo = `/${pathSegments.slice(0, index + 1).join("/")}`;

    // Capitalize the segment name
    const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1);

    return (
      <li key={index} className="breadcrumb-item">
        <Link to={routeTo} className="text-decoration-none breadcrumb-link">
          {segmentName}
        </Link>
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumb" className="breadcrumb pt-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <i className="fa fa-home opacity-50 me-1" aria-hidden="true"></i>
          <Link to="/" className="text-decoration-none breadcrumb-link">
            Homepage
          </Link>
        </li>
        {breadcrumbs}
      </ol>
    </nav>
  );
}

export default BreadcrumbNav;
