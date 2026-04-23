"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavigationLoader {
  isLoading: boolean;
  startLoading: (targetPath: string) => void;
}

export function useNavigationLoader(): NavigationLoader {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== currentPath) {
      setIsLoading(false);
      setCurrentPath(pathname);
    }
  }, [pathname, currentPath]);

  const startLoading = (targetPath: string) => {
    if (targetPath !== currentPath) {
      setIsLoading(true);
    }
  };

  return { isLoading, startLoading };
}
