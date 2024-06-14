import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="bg-[#4ade80] text-[#3f3f46]"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default SubmitButton;
