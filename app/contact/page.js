"use client"

import React, { useContext } from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { ThemeContext } from '@/context/ThemeContext';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  budget: z.string({
    required_error: "Please select a budget range.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Page = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      budget: "",
      message: "",
    },
  });

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === "dark";

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className={`${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header />
      <section>
        <motion.div
          className="container mx-auto mt-16 flex flex-col justify-between gap-10 px-5 pt-5 lg:px-20 xl:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="xl:w-2/5">
            <motion.h2
              className="text-4xl font-bold md:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              I’d Love to Hear From You
            </motion.h2>
            <motion.p
              className="mb-10 mt-8 text-lg text-gray-600 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Have a creative idea or partnership opportunity? Reach out via the form, and expect a reply within 48 hours.
            </motion.p>

            <motion.div
              className="mb-4 p-4 border rounded-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <a
                className="flex items-center gap-3 text-xl font-bold text-gray-600 hover:text-black"
                href="mailto:mohujer90@gmail.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#5c5c5c"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
                </svg>
                <span>mohujer90@gmail.com</span>
              </a>
            </motion.div>

            <motion.div
              className="mb-8 p-4 border rounded-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <a
                className="flex items-center gap-3 text-xl font-bold text-gray-600 hover:text-black"
                href="tel:+919058876687"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#5c5c5c"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
                </svg>
                <span>+91-9058-876-687</span>
              </a>
            </motion.div>
          </div>
          <Form {...form}>
            <motion.form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-[655px] space-y-8 xl:w-[60%]"
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
                      <FormLabel className="font-bold text-md">First Name</FormLabel>
                      <FormControl>
                        <Input className={`h-20 pl-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`} placeholder="First Name" {...field} />
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
                      <FormLabel className="font-bold text-md">Last Name</FormLabel>
                      <FormControl>
                        <Input className={`h-20 pl-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`} placeholder="Last Name" {...field} />
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
                    <FormLabel className="font-bold text-md">Email</FormLabel>
                    <FormControl>
                      <Input className={`h-20 pl-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`} placeholder="Enter your email address" {...field} />
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
                    <FormLabel className="font-bold text-md">Your Budget</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={`h-20 flex items-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
                          <div className="flex items-center flex-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-currency-rupee mr-2 flex-shrink-0"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                            </svg>
                            <SelectValue placeholder="Choose Your Budget" />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-500">0-500</SelectItem>
                        <SelectItem value="500-1k">500-1k</SelectItem>
                        <SelectItem value="1k-2k">1k-2k</SelectItem>
                        <SelectItem value="2k-5k">2k-5k</SelectItem>
                        <SelectItem value="5k-10k">5k-10k</SelectItem>
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
                    <FormLabel className="font-bold text-md">How can I help bring your vision to life?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message here..."
                        className={`resize-none h-80 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <motion.div
                className={`relative h-[60px] w-[200px] ${isDarkMode
                  ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
                  : 'bg-gradient-to-r from-blue-400 via-green-500 to-blue-600'
                  }`}
              >
                <button
                  aria-label="Send message"
                  className="absolute h-[62px] bg-black text-lg font-medium text-white w-[202px] transition-transform duration-300 ease-in-out transform translate-x-0 translate-y-0 hover:translate-x-3 hover:translate-y-3 dark:bg-white dark:text-black dark:font-medium"
                  style={{ right: '8px', bottom: '8px' }}
                >
                  Submit Now!
                </button>
              </motion.div>
            </motion.form>
          </Form>
        </motion.div>
      </section>
      <div className='mt-14'>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default Page;