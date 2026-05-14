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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  childName: z.string().min(2, { message: "Child's name is required" }),
  childDob: z.date({ required_error: "Date of birth is required" }),
  gender: z.string({ required_error: "Please select gender" }),
  parentName: z.string().min(2, { message: "Parent's name is required" }),
  parentPhone: z.string().min(10, { message: "Valid phone number is required" }),
  program: z.string({ required_error: "Please select a program" }),
  address: z.string().min(5, { message: "Address is required" }),
});

interface AdmissionFormModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AdmissionFormModal({ isOpen, onOpenChange }: AdmissionFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      parentName: "",
      parentPhone: "",
      address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    const message = `Hi Rainbow Play School! I would like to apply for admission.%0A%0A` +
      `*Child Name:* ${values.childName}%0A` +
      `*Date of Birth:* ${format(values.childDob, "PPP")}%0A` +
      `*Gender:* ${values.gender}%0A` +
      `*Parent Name:* ${values.parentName}%0A` +
      `*Phone:* ${values.parentPhone}%0A` +
      `*Program:* ${values.program}%0A` +
      `*Address:* ${values.address}`;
    
    const whatsappUrl = `https://wa.me/919500116162?text=${message}`;
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    toast.success("Redirecting to WhatsApp...");
    form.reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] rounded-[32px] p-8 overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-bold text-coral">Admission Application</DialogTitle>
          <DialogDescription className="font-sub text-slate-500">
            Please provide the details below to begin the admission process for your child.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sub font-semibold">Child's Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Child's name" className="rounded-xl border-slate-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="childDob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="font-sub font-semibold">Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={cn("w-full pl-3 text-left font-normal rounded-xl border-slate-200", !field.value && "text-muted-foreground")}>
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50 text-coral" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date()} initialFocus className="rounded-xl" />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sub font-semibold">Gender</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl border-slate-200">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Boy">Boy</SelectItem>
                        <SelectItem value="Girl">Girl</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sub font-semibold">Program Applied For</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-xl border-slate-200">
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Playgroup">Playgroup</SelectItem>
                        <SelectItem value="Nursery">Nursery</SelectItem>
                        <SelectItem value="LKG">LKG</SelectItem>
                        <SelectItem value="UKG">UKG</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="parentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sub font-semibold">Parent's Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter parent's name" className="rounded-xl border-slate-200" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parentPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sub font-semibold">Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Mobile number" className="rounded-xl border-slate-200" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sub font-semibold">Residential Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your full address" className="rounded-xl border-slate-200 min-h-[80px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-coral hover:bg-coral/90 text-white font-bold py-6 rounded-xl transition-all shadow-lg hover:shadow-coral/20 mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
