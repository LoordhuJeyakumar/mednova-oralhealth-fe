import React from "react";
import { Link } from "react-router-dom";

function BreadcrumbNav() {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb pt-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item  ">
          <i className="fa fa-home opacity-50 me-1" aria-hidden="true"></i>
          <Link to={"/"} className="text-decoration-none breadcrumb-link">
            Homepage
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <Link className="breadcrumb-link ">Questionnaire</Link>
        </li>
      </ol>
    </nav>
  );
}

export default BreadcrumbNav;
