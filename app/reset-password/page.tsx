import { Suspense } from "react";
import ResetPasswordForm from "@/app/components/ResetPasswordForm";

const Loading = () => {
  return <div>Loading...</div>;
};

const ResetPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <Suspense fallback={<Loading />}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
