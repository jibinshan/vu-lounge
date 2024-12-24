"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  first: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  last: z.string().min(2, { message: "Name must be at least 2 characters." }),
  message: z.string(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({ }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      first: "",
      phone: "",
      email: "",
      last: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast(
        (t) => (
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-center">Your reservation request has been successfully submitted to the restaurant!</p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                form.reset();
              }}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        ),
        { duration: Infinity }
      );
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });
  return (
    <section className="flex h-full w-full items-center justify-center bg-[#070d0f]">
      <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] px-0 pl-0 md:px-2 pt-8 md:pt-24">
        <div className="flex w-full flex-col lg:flex-row gap-6">
          <div className="relative flex flex-col gap-7  w-full items-center justify-start lg:w-1/2 px-4 md:px-0">
            <p className="text-4xl md:text-7xl uppercase font-inter font-[200] text-primary">Contact<br />
              with us</p>
            <div className="w-full md:w-[350px] bg-[#091113] py-6 px-9 flex flex-col items-start justify-center gap-4">
              <p className="text-primary uppercase font-inter font-[200]">Our Email</p>
              <div className="flex items-center gap-2">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#172529] p-2">
                    <Mail className="text-primary" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href='mailto:info@vulounge.co.uk'>
                    <p className="text-xl text-primary border-b-[1px] border-b-primary">info@vulounge.co.uk</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#070d0f] pb-24 lg:w-1/2 lg:items-center lg:justify-start">
            <p className="w-4/5 text-start text-xl text-primary font-[200] font-inter uppercase px-4 md:px-0">Make a enquiry now</p>
            <div className="w-full px-3 lg:w-4/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <div className="w-full flex gap-4">
                        <FormField
                          control={form.control}
                          name="first"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  placeholder="First Name"
                                  {...field}
                                  className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="last"
                          render={({ field }) => (
                            <FormItem className="w-full">
                              <FormControl>
                                <Input
                                  placeholder="Last Name"
                                  {...field}
                                  className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Email"
                                {...field}
                                className="h-12 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-24 rounded-none border-b-[3px] border-l-0 border-r-0 border-t-0 border-b-[#323232] bg-[#0b1316] outline-none placeholder:text-[#787571] focus-visible:border-b-[2px] focus-visible:border-b-[#bc995d] focus-visible:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full pt-7">
                    <Button className="w-full py-6 px-10" disabled={bookTableMutation.isPending}
                      style={{
                        background: "linear-gradient(97deg, #9D6E2C -13.33%, #A88142 1.07%, #CBB16A 9.43%, #F6ED9B 23.15%)"
                      }}
                    >
                      Enquiry now</Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col">
          <div className="w-full py-6 bg-[#0a1315] flex justify-center items-center px-4">
            <div className="pr-2 md:pr-6 border-r-[1px] border-r-primary">
              <Image
                src='/images/tripadvisor.png'
                width={272}
                height={57}
                alt="tripadvisor"
              />
            </div>
            <div className="pl-2 md:pl-6">
              <Image
                src='/images/tripadvisor.png'
                width={272}
                height={57}
                alt="tripadvisor"
              />
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.8982009132355!2d-0.3649722239962183!3d51.643389371844535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876156c4ad8af4b%3A0xc70fe1d6707238c0!2sVu%20Lounge!5e0!3m2!1sen!2sin!4v1733298204427!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] invert grayscale"
          ></iframe>
        </div>
      </div>
    </section >
  );
};

export default Contact;
