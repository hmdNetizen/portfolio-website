import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { LoaderIcon } from "lucide-react";

export default function SubmitFormButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="bg-primary text-white font-medium w-full hover:bg-primary/90 md:w-40"
      disabled={pending}
    >
      {pending ? (
        <LoaderIcon className="animate-spin repeat-infinite" />
      ) : (
        "Send Message"
      )}
    </Button>
  );
}
