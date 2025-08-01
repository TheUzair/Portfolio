"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function useNavigationLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsLoading(false);
      setCurrentPath(pathname);
    }
  }, [pathname, currentPath]);

  const startLoading = (targetPath) => {
    if (targetPath !== currentPath) {
      setIsLoading(true);
    }
  };

  return { isLoading, startLoading };
}
