"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/services/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

export function AuthForm() {
  const form = useForm();
  const [ user, loading, error ] = useAuthState(auth);

  const handleSubmit = form.handleSubmit ((data) => {
    console.log(data);
    console.log(user);
    console.log(loading);
    console.log(error);
  });

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Digite seu email abaixo e enviaremos um link mágico para você fazer login.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input id="email" type="email"  placeholder="m@example.com" required {...form.register("email")} />
              </div>
              <Button type="submit" className="w-full">
                Enviar Link Mágico
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}