// import { useEnsureRegeneratorRuntime } from "@/app/hooks/useEnsureRegeneratorRuntime";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { Grid } from "react-loader-spinner";

import { MicIcon } from "../icons/mic-icon";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

interface SendForm {
  input: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function SendForm({
  input,
  handleSubmit,
  isLoading,
  handleInputChange,
}: SendForm) {
  // useEnsureRegeneratorRuntime();

  const [textareaHeight, setTextareaHeight] = useState("h-10");

  const textareaRef = useRef(null);

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
      className="flex items-center justify-center w-full space-x-2"
    >
      <div className="relative w-full max-w-xs">
        <Textarea
          value={input}
          onChange={handleInputChange}
          className={`pr-8 resize-none mendable-textarea min-h-[20px] ${textareaHeight}`}
          placeholder="Type a message..."
          ref={textareaRef}
        />
      </div>

      <Button className="h-10">
        {isLoading ? (
          <div className="flex gap-2 items-center">
            <Grid
              height={12}
              width={12}
              radius={5}
              ariaLabel="grid-loading"
              color="#fff"
              visible={true}
            />
            {"Loading..."}
          </div>
        ) : (
          <div className="flex flex-col w-16">Send</div>
        )}
      </Button>
    </form>
  );
}
