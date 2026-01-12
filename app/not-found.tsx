'use client';

import ErrorState from "@/components/ErrorState";
import animation404 from "@/public/animations/404.json";

export default function NotFound() {
  return (
    <ErrorState 
      code="404"
      title="Lost Connection"
      message="Looks like love glitched out."
      animationData={animation404}
    />
  );
}