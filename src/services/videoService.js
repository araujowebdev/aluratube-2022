import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ixahccelzferqcatptco.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4YWhjY2VsemZlcnFjYXRwdGNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODQ1MTEsImV4cCI6MTk4Mzc2MDUxMX0.c9zOJ_WZHDV9k8qeTJq6cb9s9j4fwaUyjSXbF9h5m5Q";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
