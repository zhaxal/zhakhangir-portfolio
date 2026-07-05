import { useEffect } from "react";
import { useRouter } from "next/router";

// The portfolio is now a single page; keep old links working.
function ExperienceRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#experience");
  }, [router]);

  return null;
}

export default ExperienceRedirect;
