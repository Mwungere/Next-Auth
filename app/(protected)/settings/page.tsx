"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import React, { useTransition, useState } from "react";

import { SettingsSchema } from "@/schemas";
import { Form, FormField } from "@/components/ui/form";


const Settings = () => {
  const { update } = useSession()
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: "",
    },
  });
 
  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {

    startTransition(() => {
      settings(values)
      .then((data) => {

        if(data.error){
          setError(data.error);
        }

        if(data.success){
          setSuccess(data.success);
          update();
        }

      });
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onClick={form.handleSubmit(onSubmit)}>
            {/* <FormField/> */}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Settings;
