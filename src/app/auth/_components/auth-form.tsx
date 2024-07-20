"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/services/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export function AuthForm() {
  // const form = useForm();

  // const [ user, loading, error ] = useAuthState(auth);

  // const handleSubmit = form.handleSubmit ((data) => {
  //   console.log(data.email);

  //   try {
  //     sendSignInLinkToEmail(auth, data.email, {
  //       url: "http://localhost:3000/auth",
  //       handleCodeInApp: true
  //     });

  //     window.localStorage.setItem("emailForSignIn", data.email);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

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
          <CardContent>
            <form className="space-y-4">
              {/* <div>
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input id="email" type="email"  placeholder="m@example.com" required {...form.register("email")} />
              </div> */}
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