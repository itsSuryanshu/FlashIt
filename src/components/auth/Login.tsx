import React from 'react';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Login: React.FC = () => {
    return (
        <div className='grid grid-cols-2 min-w-full min-h-screen justify-center bg-gradient-to-br from-green-100 to-purple-600'>
            <div className='flex col-2 m-10'>
                <Card className="w-full bg-white border border-purple-600/30 justify-center">
                    <CardHeader>
                        <CardTitle className='text-3xl text-purple-600'>Login to your account</CardTitle>
                        <CardDescription>
                            Provide the email and password set for your account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="email@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        {/*
                                        <a
                                            href="#"
                                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>*/}
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                                <div className="grid gap-2">
                                    <Button type="submit" variant="outline" className="w-full bg-white rounded-full text-purple-600">
                                        Login
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-start">
                        <text>Don't have an account?</text>
                        <CardAction className="text-purple-600">
                            <a href="#">
                                <Button variant="link">Sign Up</Button>
                            </a>
                        </CardAction>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Login;