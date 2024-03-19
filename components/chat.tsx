"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { welcomeMessage } from "@/lib/strings";
import { useSearchParams } from "next/navigation";
import Bubble from "./chat/bubble";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Grid } from "react-loader-spinner";

interface ChatCompletionRequestMessage {
  role: "user" | "system";
  content: string;
}

export default function Chat() {
  const [textareaHeight, setTextareaHeight] = useState("h-10");

  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const scrollAreaRef = useRef<null | HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  useEffect(() => {
    console.log("Mesasgeas", messages);
  }, [messages]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("http://127.0.0.1:5000/chat", {
        messages: newMessages,
      });
      console.log("bot response", response);
      setMessages((current) => [
        ...current,
        userMessage,
        { role: "system", content: response.data.response },
      ]);

      form.reset();
    } catch (Err: any) {
      console.log(Err);
    } finally {
      router.refresh();
    }
  };

  return (
    <Card className="w-screen  z-[1000] sm:w-[450px] bg-gray-50 rounded-[19px] border-black ">
      <CardHeader className="bg-black rounded-xl">
        <div className="flex bg-black flex-row items-start justify-between max-w-[100%]">
          <CardTitle className="text-lg text-white">Banking Buddy</CardTitle>
        </div>
        <CardDescription className="text-white leading-3">
          Powered by Mudit Kapoor
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <ScrollArea
          ref={scrollAreaRef}
          className="h-[350px] overflow-y-auto w-full spacy-y-4 pr-4"
        >
          <Bubble
            message={{
              role: "system",
              content: welcomeMessage,
              id: "initialai",
            }}
          />
          {messages.map((message, index) => (
            <Bubble key={index} message={{ ...message, id: message.content }} />
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center justify-center w-full space-x-2"
          >
            <div className="relative w-full max-w-xs">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className={`pr-8 rounded-xl resize-none mendable-textarea min-h-[20px] ${textareaHeight}`}
                        placeholder="Type a message..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            // Check if Enter is pressed without the Shift key
                            e.preventDefault(); // Prevent the default action to avoid a new line
                            form.handleSubmit(onSubmit)(); // Trigger the form submission handler
                          }
                        }}
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="h-10 hover:bg-black flex py-2 justify-center items-center bg-black text-white duration-300 transition-all hover:scale-90 rounded-xl flex-col px-8 w-24"
            >
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
                "Send"
              )}
            </Button>
          </form>
        </Form>
      </CardFooter>
    </Card>
  );
}
