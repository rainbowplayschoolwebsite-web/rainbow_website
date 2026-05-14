import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  parentName: z.string().min(2, { message: "Parent name is required" }),
  childName: z.string().min(2, { message: "Child name is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  visitDate: z.date({
    required_error: "Please select a preferred date for your visit.",
  }),
});

interface ScheduleVisitModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ScheduleVisitModal({ isOpen, onOpenChange }: ScheduleVisitModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Construct WhatsApp message
    const message = `Hi Rainbow Play School! I would like to schedule a visit.%0A%0A` +
      `*Parent Name:* ${values.parentName}%0A` +
      `*Child Name:* ${values.childName}%0A` +
      `*Phone:* ${values.phone}%0A` +
      `*Preferred Date:* ${format(values.visitDate, "PPP")}`;
    
    const whatsappUrl = `https://wa.me/919500055350?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    toast.success("Redirecting to WhatsApp...");
    form.reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] rounded-[32px] p-8">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-bold text-primary">Schedule a Visit</DialogTitle>
          <DialogDescription className="font-sub text-slate-500">
            Fill in the details below and we'll reach out to confirm your school visit.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="parentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sub font-semibold">Parent's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" className="rounded-xl border-slate-200 focus:ring-primary/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="childName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sub font-semibold">Child's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your child's name" className="rounded-xl border-slate-200 focus:ring-primary/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sub font-semibold">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your mobile number" className="rounded-xl border-slate-200 focus:ring-primary/20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visitDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-sub font-semibold">Preferred Visit Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal rounded-xl border-slate-200 focus:ring-primary/20",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-primary" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                        className="rounded-xl"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl transition-all shadow-lg hover:shadow-primary/20 mt-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Scheduling...
                </>
              ) : (
                "Confirm Visit Schedule"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
