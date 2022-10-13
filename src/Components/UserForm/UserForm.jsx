import React, { useState, useContext } from "react";
import FirstPageForm from "./FirstPageForm";
import LastPageForm from "./LastPageForm";

function UserForm() {
  const [page, setPage] = useState(1);
  
  switch (page) {
    case 1:
      return <FirstPageForm handlePageNext={(val) => setPage(val)} />;

    case 2:
      return <LastPageForm handlePagePrev={(val) => setPage(val)} />;

    default:
      return <FirstPageForm />;
  }
}

export default UserForm;
