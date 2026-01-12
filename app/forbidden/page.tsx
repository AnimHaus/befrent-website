'use client';

import ErrorState from "@/components/ErrorState";
import animation403 from "@/public/animations/403.json"; 

export default function Forbidden() {
  return (
    <ErrorState 
      code="403"
      title="Access Denied"
      message="Your current clearance level is insufficient to view this encrypted sector."
      animationData={animation403}
    />
  );
}