import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SocialLinks from "@/components/sections/contact/SocialLinks";
import ContactForm from "@/components/sections/contact/ContactForm";

const Contact: React.FC = () => {
  return (
    <Card id="contact" className="scroll-mt-20">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaEnvelope aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">Connect</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-6">
          {/* Social Links */}
          <SocialLinks />

          {/* Contact Form */}
          <div className="min-h-[260px]">
            <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-3">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
