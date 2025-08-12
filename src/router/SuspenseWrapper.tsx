import { Suspense } from "react";
import LoadingPage from "../pages/LoadingPage";

interface SuspenseWrapperProps {
  children: React.ReactNode;
}

const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => (
  <Suspense fallback={<LoadingPage />}>{children}</Suspense>
);

export default SuspenseWrapper;
