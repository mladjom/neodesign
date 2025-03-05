"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Create a schema for form validation
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactFormSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            // Track form submission attempt
            trackEvent("contact", "submit_attempt", "contact_form");

            // Send form data to API route
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to submit the form.");
            }

            // Success
            trackEvent("contact", "submit_success", "contact_form");
            setSubmitSuccess(true);
            form.reset();
        } catch (error) {
            console.error("Form submission error:", error);
            trackEvent("contact", "submit_error", "contact_form");
            setSubmitError(error instanceof Error ? error.message : "An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <SectionWrapper background="muted">
            <motion.div
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Card className="p-8">
                    {submitSuccess ? (
                        <div className="text-center py-4 space-y-4">
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
                            <h3 className="text-xl font-semibold">Message Sent!</h3>
                            <p className="text-muted-foreground">
                                Thank you for your message. We'll get back to you as soon as possible.
                            </p>
                            <Button
                                variant="outline"
                                onClick={() => setSubmitSuccess(false)}
                            >
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {submitError && (
                                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg flex items-start gap-3">
                                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-medium">There was a problem submitting your form.</p>
                                            <p className="text-sm text-muted-foreground">{submitError}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="grid gap-6 md:grid-cols-2">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
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
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="your.email@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="What is your message about?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="How can we help you?"
                                                    rows={6}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </Form>
                    )}
                </Card>
            </motion.div>
        </SectionWrapper>
    );
}