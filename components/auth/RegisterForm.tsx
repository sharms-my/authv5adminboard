"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { InputTransparent } from "@/components/ui/input-transparent";
import { register } from "@/action/user";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Please enter a valid email",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  confirmPassword: z.string().min(1, {
    message: "Confirm Password is required",
  }),
});

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Card className="bg-tranparent text-white border-none shadow-none">
      <CardContent className="p-3 space-y-2">
        <Form {...form}>
          <form action={register} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs text-white">
                    Username
                  </FormLabel>
                  <FormControl>
                    <InputTransparent
                      className="text-white"
                      placeholder="Enter First Name"
                      {...field}
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
                <FormItem>
                  <FormLabel className="uppercase text-xs text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <InputTransparent
                      className="text-white"
                      placeholder="Enter Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <InputTransparent
                      type="password"
                      className="text-white"
                      placeholder="Enter Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-xs text-white">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <InputTransparent
                      type="password"
                      className="text-white "
                      placeholder="Enter Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full">Sign In</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
