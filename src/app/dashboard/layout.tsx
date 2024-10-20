import { type ReactNode, Suspense } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Content Area */}
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}
