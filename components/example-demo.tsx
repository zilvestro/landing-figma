"use client";

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Skeleton } from "./ui/skeleton";
import Marquee from "./ui/marquee";
import { motion } from "framer-motion";
import { Star, Heart, ArrowRight, AlertTriangle, CheckCircle, Users, Calendar, Mail, Phone } from "lucide-react";

export function ExampleDemo() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-headline font-bold text-primary">
            Affonso Design System Demo
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete UI component library ready for implementation
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge status="success">30+ Components</Badge>
            <Badge status="primary">Design System</Badge>
            <Badge status="info">Production Ready</Badge>
          </div>
        </motion.div>

        {/* Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              All components are working perfectly.
            </AlertDescription>
          </Alert>
          <Alert variant="error">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              This is a warning alert example.
            </AlertDescription>
          </Alert>
        </div>

        {/* Tabs Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Component Categories</CardTitle>
            <CardDescription>
              Explore different component types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buttons" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="navigation">Navigation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="buttons" className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="error">Error</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="forms" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="notifications" />
                      <Label htmlFor="notifications">Enable notifications</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Label>Select an option</Label>
                    <RadioGroup defaultValue="option1">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option1" id="option1" />
                        <Label htmlFor="option1">Option 1</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option2" id="option2" />
                        <Label htmlFor="option2">Option 2</Label>
                      </div>
                    </RadioGroup>

                    <div className="space-y-2">
                      <Label>Range Slider</Label>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>

                    <div className="space-y-2">
                      <Label>Progress</Label>
                      <Progress value={75} className="w-full" />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="data" className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Role</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.jpg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        John Doe
                      </TableCell>
                      <TableCell>
                        <Badge status="success">Active</Badge>
                      </TableCell>
                      <TableCell>Developer</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        Jane Smith
                      </TableCell>
                      <TableCell>
                        <Badge status="primary">Premium</Badge>
                      </TableCell>
                      <TableCell>Designer</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="navigation" className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Getting Started</AccordionTrigger>
                    <AccordionContent>
                      Learn how to set up and use the design system components.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Advanced Usage</AccordionTrigger>
                    <AccordionContent>
                      Explore advanced patterns and customization options.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Best Practices</AccordionTrigger>
                    <AccordionContent>
                      Follow these guidelines for optimal implementation.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Team Members
                  </CardTitle>
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <CardDescription>
                  Manage your team and collaborate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex -space-x-2 mb-4">
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-background">
                    <AvatarFallback>+3</AvatarFallback>
                  </Avatar>
                </div>
                <Button className="w-full" variant="outline">
                  View Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule
                </CardTitle>
                <CardDescription>
                  Your upcoming events
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Team meeting at 2:00 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <span className="text-sm">Project review at 4:30 PM</span>
                </div>
                <Separator />
                <Badge status="primary">3 more events</Badge>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Form
                </CardTitle>
                <CardDescription>
                  Get in touch with us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your name" />
                <Input placeholder="Email address" type="email" />
                <div className="flex gap-2">
                  <Button className="flex-1">
                    Send
                  </Button>
                  <Button variant="outline" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Loading States */}
        <Card>
          <CardHeader>
            <CardTitle>Loading States</CardTitle>
            <CardDescription>
              Skeleton placeholders for better UX
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[160px]" />
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
            </div>
          </CardContent>
        </Card>

        {/* Marquee Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Marquee Animation</CardTitle>
            <CardDescription>
              Smooth scrolling text animations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Marquee className="[--duration:20s]">
              <Badge status="primary" className="mx-4">React</Badge>
              <Badge status="primary" className="mx-4">Next.js</Badge>
              <Badge status="primary" className="mx-4">TypeScript</Badge>
              <Badge status="primary" className="mx-4">Tailwind CSS</Badge>
              <Badge status="primary" className="mx-4">Framer Motion</Badge>
              <Badge status="primary" className="mx-4">Radix UI</Badge>
            </Marquee>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <CardTitle>Design System Colors</CardTitle>
            <CardDescription>
              Complete color palette with semantic tokens
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="h-16 bg-primary rounded-lg border"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-xs text-muted-foreground">#881337</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-secondary rounded-lg border"></div>
                <p className="text-sm font-medium">Secondary</p>
                <p className="text-xs text-muted-foreground">#292b35</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-accent rounded-lg border"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-xs text-muted-foreground">#ddddea</p>
              </div>
              <div className="space-y-2">
                <div className="h-16 bg-muted rounded-lg border"></div>
                <p className="text-sm font-medium">Muted</p>
                <p className="text-xs text-muted-foreground">#f8fafc</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p className="text-lg font-medium mb-2">
            🚀 Ready for Implementation
          </p>
          <p className="text-sm">
            Complete design system with 30+ components • Fully typed • Production ready
          </p>
        </div>
      </div>
    </div>
  );
} 