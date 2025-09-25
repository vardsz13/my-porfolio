import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;

    try {
      const response = await fetch("https://formspree.io/f/xpwdqnaa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();

        toast.success(`Thanks ${name}! Your message was sent successfully.`, {
          duration: 5000,
        });
      } else {
        setStatus("error");

        toast.error("Message failed to send", {
          description: "Please try again or email me directly.",
          duration: 5000,
        });
      }
    } catch (error) {
      setStatus("error");

      toast.error("Network error", {
        description: "Check your connection and try again.",
        duration: 5000,
      });
    }
  };

  if (status === "success") {
    return (
      <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800 flex items-center justify-center min-h-[220px]">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-lg font-medium">Thank you for your message!</p>
          <p className="mt-1">I'll get back to you soon.</p>
          <Button
            onClick={() => setStatus("idle")}
            variant="outline"
            className="mt-4 cursor-pointer"
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full"
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full"
          disabled={status === "submitting"}
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full min-h-[72px]"
          disabled={status === "submitting"}
        />
      </div>
      {status === "error" && (
        <div className="text-red-500 dark:text-red-400 text-sm">
          Something went wrong. Please try again.
        </div>
      )}
      <Button
        type="submit"
        className="w-full cursor-pointer"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
