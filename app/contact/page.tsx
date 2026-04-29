"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { Loader2, Mail, Phone, IndianRupee } from "lucide-react";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  budget: z.string({ required_error: "Please select a budget range." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Page = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      budget: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? "Something went wrong");
      }

      form.reset();
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I'll reply within 48 hours.",
      });
    } catch (err) {
      toast({
        title: "Failed to send",
        description: err instanceof Error ? err.message : "Please try again later.",
        variant: "destructive",
      });
    }
  }

  const inputClass =
    "h-16 pl-4 bg-background/60 border-border/60 backdrop-blur focus-visible:ring-brand-cyan-500/40 focus-visible:border-brand-cyan-500";

  return (
    <div className="surface-page relative overflow-hidden">
      <div className="blob blob-cyan w-[420px] h-[420px] -top-20 -left-20 opacity-25" />
      <div className="blob blob-amber w-[360px] h-[360px] top-1/3 -right-24 opacity-20" style={{ animationDelay: "4s" }} />

      <Header />
      <section className="relative">
        <motion.div
          className="container mx-auto mt-12 flex flex-col md:flex-row justify-between gap-12 px-5 pt-5 lg:px-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-2/5">
            <span className="eyebrow">Let&rsquo;s Talk</span>
            <motion.h2
              className="mt-3 text-4xl font-bold md:text-5xl lg:text-6xl leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I&rsquo;d Love to <span className="text-gradient">Hear From You</span>
            </motion.h2>
            <motion.p
              className="mb-10 mt-6 text-lg text-muted-foreground md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Have a creative idea or partnership opportunity? Reach out via the form,
              and expect a reply within 48 hours.
            </motion.p>

            <motion.a
              href="mailto:mohujer90@gmail.com"
              className="group mb-4 flex items-center gap-3 p-4 rounded-xl glass hover:shadow-glow-cyan hover:border-brand-cyan-400/50 transition-all"
              whileHover={{ x: 4 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-cyan-500/15 text-brand-cyan-500 group-hover:bg-brand-cyan-500/25 transition-colors">
                <Mail className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold">mohujer90@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+919058876687"
              className="group mb-8 flex items-center gap-3 p-4 rounded-xl glass hover:shadow-glow-amber hover:border-brand-amber-400/50 transition-all"
              whileHover={{ x: 4 }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-amber-500/15 text-brand-amber-500 group-hover:bg-brand-amber-500/25 transition-colors">
                <Phone className="h-5 w-5" />
              </span>
              <span className="text-base font-semibold">+91-9058-876-687</span>
            </motion.a>
          </div>

          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-[655px] w-full space-y-6 xl:w-[60%] glass rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex flex-col gap-4 md:flex-row">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-semibold">First Name</FormLabel>
                      <FormControl>
                        <Input className={inputClass} placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="font-semibold">Last Name</FormLabel>
                      <FormControl>
                        <Input className={inputClass} placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input className={inputClass} placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Your Budget</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value ?? ""}>
                      <FormControl>
                        <SelectTrigger className={`${inputClass} flex items-center`}>
                          <div className="flex items-center flex-1 gap-2">
                            <IndianRupee className="h-4 w-4 text-brand-cyan-500 flex-shrink-0" />
                            <SelectValue placeholder="Choose Your Budget" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-500">0–500</SelectItem>
                        <SelectItem value="500-1k">500–1k</SelectItem>
                        <SelectItem value="1k-2k">1k–2k</SelectItem>
                        <SelectItem value="2k-5k">2k–5k</SelectItem>
                        <SelectItem value="5k-10k">5k–10k</SelectItem>
                        <SelectItem value="More than 10k">More than 10k</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      How can I help bring your vision to life?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project…"
                        className="resize-none h-56 bg-background/60 border-border/60 backdrop-blur focus-visible:ring-brand-cyan-500/40 focus-visible:border-brand-cyan-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Send message"
                className="relative inline-flex h-14 w-full sm:w-[220px] items-center justify-center
                           rounded-md bg-gradient-brand text-base font-semibold text-white
                           shadow-glow-cyan hover:shadow-glow-amber transition-all
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </span>
                ) : (
                  "Submit Now ✨"
                )}
              </button>
            </motion.form>
          </Form>
        </motion.div>
      </section>

      <div className="mt-20">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
