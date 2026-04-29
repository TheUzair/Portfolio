"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type EmailFormValues = z.infer<typeof emailSchema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
  });

  const { toast } = useToast();

  const onSubmit = (data: EmailFormValues) => {
    console.log("Email submitted:", data.email);
    reset();
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to the newsletter!",
    });
  };

  return (
    <div className="surface-page min-h-screen flex flex-col relative overflow-hidden">
      <div className="blob blob-cyan w-[500px] h-[500px] -top-20 -left-20 opacity-25" />
      <div className="blob blob-amber w-[400px] h-[400px] bottom-0 -right-20 opacity-20" style={{ animationDelay: "5s" }} />

      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16 relative">
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 max-w-2xl w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand mb-6 shadow-glow-cyan">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Subscribe to the <span className="text-gradient">Newsletter</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Stay updated with the latest tech insights and articles delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email")}
                className="flex-1 px-5 py-3 rounded-full bg-background/60 border border-border/60 backdrop-blur
                           focus:outline-none focus:ring-2 focus:ring-brand-cyan-500/40 focus:border-brand-cyan-500
                           transition-colors text-base"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                           bg-gradient-brand text-white font-semibold shadow-glow-cyan
                           hover:shadow-glow-amber transition-shadow
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                Subscribe
              </button>
            </div>
            {errors.email && (
              <p className="mt-3 text-sm text-destructive text-left px-2">
                {errors.email.message as string}
              </p>
            )}
          </form>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
