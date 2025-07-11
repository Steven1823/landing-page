import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertLeadSchema } from "@shared/schema";
import { buttonHover } from "@/lib/animations";

const formSchema = insertLeadSchema.extend({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").optional(),
  clientType: z.string().min(1, "Please select a client type"),
  loanType: z.string().min(1, "Please select a loan type"),
  loanAmount: z.number().min(50000, "Minimum loan amount is $50,000").optional(),
  creditScore: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      clientType: "",
      loanType: "",
      propertyType: "",
      loanAmount: undefined,
      monthlyIncome: undefined,
      propertyValue: undefined,
      downPayment: undefined,
      creditScore: "",
      timeframe: "",
      additionalNotes: "",
      dscrScore: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Thank you!",
        description: "We'll be in touch soon with perfect property matches.",
      });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-charcoal" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                ✓
              </motion.div>
            </div>
            <h2 className="text-4xl font-poppins font-bold mb-4">Thank You!</h2>
            <p className="text-xl opacity-90">We'll be in touch soon with perfect property matches for you.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-charcoal" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">Ready for Smart Financing?</h2>
            <p className="text-xl opacity-90">Submit your pre-qualification - Processed through trusted lending partners</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your name"
                          className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Enter your phone"
                          className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="clientType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Client Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-gold">
                            <SelectValue placeholder="Select client type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Self-Employed">Self-Employed</SelectItem>
                          <SelectItem value="Flipper">Real Estate Flipper</SelectItem>
                          <SelectItem value="Investor">Property Investor</SelectItem>
                          <SelectItem value="CPA">CPA/Financial Advisor</SelectItem>
                          <SelectItem value="Business Owner">Business Owner</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="loanType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Loan Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-gold">
                            <SelectValue placeholder="Select loan type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="DSCR">DSCR Loan</SelectItem>
                          <SelectItem value="Bank Statement">Bank Statement Loan</SelectItem>
                          <SelectItem value="LLC Mortgage">LLC Mortgage</SelectItem>
                          <SelectItem value="Fix & Flip">Fix & Flip Loan</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="loanAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Loan Amount</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          placeholder="$500,000"
                          onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                          className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalNotes"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-white">Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          value={field.value || ""}
                          rows={4}
                          placeholder="Tell us about your financing needs..."
                          className="bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-gold"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="md:col-span-2">
                  <motion.div {...buttonHover}>
                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full bg-gold text-navy py-4 text-lg font-semibold hover:bg-yellow-300 animate-glow"
                      size="lg"
                    >
                      {mutation.isPending ? "Submitting..." : "Submit Pre-Qualification"}{" "}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
