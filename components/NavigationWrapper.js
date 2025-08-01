"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loading from "./Loading";

export default function NavigationWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle route changes
  const handleNavigation = (url) => {
    if (url !== pathname) {
      setIsLoading(true);
    }
  };

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
