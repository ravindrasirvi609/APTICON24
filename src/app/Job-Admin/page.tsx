import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const SuccessPageClient = dynamic(
  () => import("../../components/SuccessPageClient"),
  { ssr: false }
);

const JobAdminPage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageClient />
    </Suspense>
  );
};

export default JobAdminPage;
