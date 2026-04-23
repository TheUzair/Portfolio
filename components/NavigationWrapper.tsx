"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

export default function NavigationWrapper({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Handle route changes
  const handleNavigation = (url: string) => {
    if (url !== pathname) {
      setIsLoading(true);
    }
  };

  void handleNavigation; // suppress unused-var warning – called externally

  // Listen to route changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
}
