"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { auth } from "@/services/firebaseConfig";
import { Label } from "@radix-ui/react-label";
import { GoogleAuthProvider, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";

export function AuthForm() {
  const form = useForm();

  const handleMagicLinkLogin = form.handleSubmit ((data) => {
    console.log(data.email);

    sendSignInLinkToEmail(auth, data.email, {
      url: "http://localhost:3000/auth",
      handleCodeInApp: true
    })
      .then(() => {
        window.localStorage.setItem("emailForSignIn", data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Digite seu email abaixo e enviaremos um link mágico para você fazer login.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <form className="space-y-4" onSubmit={handleMagicLinkLogin}>
              <div>
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input id="email" type="email"  placeholder="m@example.com" required {...form.register("email")} />
              </div>
              <Button type="submit" className="w-full">
                Continuar com Link Mágico
              </Button>
              <span>Ou</span>
              <Button type="button" className="w-full" onClick={handleGoogleLogin}>
                Continuar com Google
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}