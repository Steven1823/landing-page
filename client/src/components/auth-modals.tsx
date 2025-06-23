import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the terms"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginData = z.infer<typeof loginSchema>;
type SignupData = z.infer<typeof signupSchema>;

export default function AuthModals() {
  const { toast } = useToast();

  const loginForm = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const signupForm = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const closeModal = (modalId: string) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  };

  const switchModal = (from: string, to: string) => {
    closeModal(from);
    setTimeout(() => {
      const modal = document.getElementById(to);
      if (modal) {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
      }
    }, 100);
  };

  const onLogin = (data: LoginData) => {
    // Dummy login - just show success message
    toast({
      title: "Login successful!",
      description: "Welcome back to PremiumHomes.",
    });
    closeModal("loginModal");
    loginForm.reset();
  };

  const onSignup = (data: SignupData) => {
    // Dummy signup - just show success message
    toast({
      title: "Account created!",
      description: "Welcome to PremiumHomes. You can now explore our premium properties.",
    });
    closeModal("signupModal");
    signupForm.reset();
  };

  return (
    <>
      {/* Login Modal */}
      <div 
        id="loginModal" 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal("loginModal");
        }}
      >
        <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-scale-in relative">
          <button
            onClick={() => closeModal("loginModal")}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-poppins font-bold mb-2">Welcome Back</h3>
            <p className="text-warm-gray">Sign in to your account</p>
          </div>

          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email Address"
                        className="focus:border-gold"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="focus:border-gold"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <FormField
                  control={loginForm.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-warm-gray">Remember me</FormLabel>
                    </FormItem>
                  )}
                />
                <a href="#" className="text-sm text-gold hover:underline">Forgot password?</a>
              </div>

              <Button type="submit" className="w-full bg-navy text-white hover:bg-charcoal">
                Sign In
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-warm-gray">
              Don't have an account?{" "}
              <button
                onClick={() => switchModal("loginModal", "signupModal")}
                className="text-gold hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div 
        id="signupModal" 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal("signupModal");
        }}
      >
        <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-scale-in relative">
          <button
            onClick={() => closeModal("signupModal")}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center mb-6">
            <h3 className="text-2xl font-poppins font-bold mb-2">Join PremiumHomes</h3>
            <p className="text-warm-gray">Create your account</p>
          </div>

          <Form {...signupForm}>
            <form onSubmit={signupForm.handleSubmit(onSignup)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={signupForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="First Name"
                          className="focus:border-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={signupForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Last Name"
                          className="focus:border-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={signupForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email Address"
                        className="focus:border-gold"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={signupForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                        className="focus:border-gold"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={signupForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Confirm Password"
                        className="focus:border-gold"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={signupForm.control}
                name="agreeToTerms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-warm-gray">
                      I agree to the Terms of Service and Privacy Policy
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-gold text-navy hover:bg-yellow-300">
                Create Account
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-warm-gray">
              Already have an account?{" "}
              <button
                onClick={() => switchModal("signupModal", "loginModal")}
                className="text-gold hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
