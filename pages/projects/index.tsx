import { useEffect } from "react";
import { useRouter } from "next/router";

// The portfolio is now a single page; keep old links working.
function ProjectsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#projects");
  }, [router]);

  return null;
}

export default ProjectsRedirect;
