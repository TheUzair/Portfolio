"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast"; 

const emailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const { toast } = useToast();

  const onSubmit = (data) => {
    console.log("Email submitted:", data.email);
    reset();
    toast({
      title: "Subscription Successful",
      description: "Thank you for subscribing to our newsletter!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h1>
      <p className="mb-6 text-lg">
        Stay updated with the latest tech insights and articles.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="flex flex-col items-center">
          <div className="flex items-center border-b-2 border-blue-500 py-2 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Subscribe
            </button>
          </div>
          {errors.email && (
            <p className="mt-2 text-red-500">{errors.email.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Page;