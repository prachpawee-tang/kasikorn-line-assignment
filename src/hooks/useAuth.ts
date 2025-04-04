import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setAuthenticated(
      typeof window !== "undefined"
        ? sessionStorage.getItem("authenticated")
        : null
    );
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && !authenticated && pathname !== "/passcode") {
      router.push("/passcode");
    }
  }, [isLoading, authenticated, pathname, router]);

  return {
    isLoading: isLoading && !authenticated,
    isAuthenticated: !!authenticated,
  };
};
