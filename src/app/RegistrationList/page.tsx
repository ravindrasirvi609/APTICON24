import RegistrationTable from "@/components/RegistrationTable";
import React from "react";
import { RegistrationList } from "../../../confirmRegData";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <RegistrationTable data={RegistrationList} />
    </div>
  );
};

export default App;
