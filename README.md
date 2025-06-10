# Affonso Landing Page - Figma Design Implementation

This project is specifically set up for the Fiverr developer to implement the new Figma landing page.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The page will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
landing-figma/
├── app/
│   ├── globals.css          # Global styles (Design System)
│   └── page.tsx             # Homepage
├── components/
│   ├── ui/                  # Complete UI Component Library
│   │   ├── accordion.tsx    # Collapsible content sections
│   │   ├── alert.tsx        # Alert notifications
│   │   ├── alert-dialog.tsx # Modal alert dialogs
│   │   ├── avatar.tsx       # User avatars
│   │   ├── badge.tsx        # Status badges
│   │   ├── bento-grid.tsx   # Grid layout component
│   │   ├── button.tsx       # Button component
│   │   ├── card.tsx         # Card containers
│   │   ├── checkbox.tsx     # Checkbox inputs
│   │   ├── command.tsx      # Command palette
│   │   ├── dialog.tsx       # Modal dialogs
│   │   ├── dropdown-menu.tsx # Dropdown menus
│   │   ├── form.tsx         # Form components
│   │   ├── icons.tsx        # Icon library
│   │   ├── input.tsx        # Text inputs
│   │   ├── label.tsx        # Form labels
│   │   ├── marquee.tsx      # Scrolling text
│   │   ├── navigation-menu.tsx # Navigation menus
│   │   ├── pagination.tsx   # Page navigation
│   │   ├── password-input.tsx # Password inputs
│   │   ├── popover.tsx      # Popover content
│   │   ├── progress.tsx     # Progress bars
│   │   ├── radio-group.tsx  # Radio button groups
│   │   ├── scroll-area.tsx  # Custom scrollbars
│   │   ├── select.tsx       # Select dropdowns
│   │   ├── separator.tsx    # Visual separators
│   │   ├── sheet.tsx        # Side panels
│   │   ├── skeleton.tsx     # Loading skeletons
│   │   ├── slider.tsx       # Range sliders
│   │   ├── switch.tsx       # Toggle switches
│   │   ├── table.tsx        # Data tables
│   │   ├── tabs.tsx         # Tab navigation
│   │   ├── textarea.tsx     # Text areas
│   │   ├── toast.tsx        # Toast notifications
│   │   ├── tooltip.tsx      # Tooltips
│   │   └── tooltip-image.tsx # Image tooltips
│   └── example-demo.tsx     # Demo component (can be deleted)
├── lib/
│   └── utils.ts             # Utility functions (cn, etc.)
├── tailwind.config.ts       # Tailwind configuration
├── components.json          # shadcn/ui configuration
└── package.json             # Dependencies
```

## 🎨 Design System

The project uses the complete **Affonso Design System** with:

### Colors
- **Primary**: `#881337` (Bordeaux Red)
- **Secondary**: `#292b35` (Dark Gray)
- **Accent**: `#ddddea` (Light Gray)

### Components
**Complete UI component library ready to use:**

#### Layout & Navigation
- `Card` - Content containers with headers/footers
- `Sheet` - Side panels and drawers
- `Dialog` - Modal dialogs and overlays
- `Navigation Menu` - Complex navigation structures
- `Tabs` - Tab-based navigation
- `Accordion` - Collapsible content sections

#### Form Controls
- `Button` - Various button styles and states
- `Input` - Text input fields
- `Password Input` - Secure password inputs
- `Textarea` - Multi-line text inputs
- `Select` - Dropdown selections
- `Checkbox` - Boolean selections
- `Radio Group` - Single selection from options
- `Switch` - Toggle controls
- `Slider` - Range value selection
- `Form` - Complete form validation system

#### Data Display
- `Table` - Data tables with sorting/filtering
- `Badge` - Status indicators and tags
- `Avatar` - User profile images
- `Progress` - Progress indicators
- `Skeleton` - Loading placeholders
- `Alert` - Information displays
- `Toast` - Notification messages

#### Interactive Elements
- `Tooltip` - Hover information
- `Popover` - Contextual content
- `Dropdown Menu` - Action menus
- `Command` - Command palette interface
- `Alert Dialog` - Confirmation dialogs

#### Advanced Components
- `Bento Grid` - Modern grid layouts
- `Marquee` - Scrolling text animations
- `Scroll Area` - Custom scrollable regions
- `Pagination` - Page navigation controls
- `Icons` - Complete icon library

### Typography
- **Headlines**: `font-headline` class
- **Body**: Standard `font-sans`

## 🛠 Available Technologies

- **Next.js 15** - React Framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible UI Primitives
- **React Hook Form** - Form management
- **CMDK** - Command interfaces
- **Lucide React** - Icons
- **clsx & tailwind-merge** - Conditional styling

## 📦 Important Dependencies

All important design dependencies are already installed:
- Radix UI Components (complete suite)
- Class Variance Authority
- Tailwind Plugins
- Framer Motion
- React Hook Form
- CMDK
- Lucide Icons

## 🎯 For the Developer

### What's ready:
✅ Complete Design System  
✅ 30+ UI Components  
✅ Form Management System  
✅ Animation Library  
✅ Icon Library  
✅ Tailwind Configuration  
✅ TypeScript Setup  
✅ All necessary Dependencies  

### To do:
1. Convert Figma designs into React components
2. Create new components in `components/`
3. Implement the homepage (`app/page.tsx`)
4. Implement responsive design

### Tips:
- Use the existing UI components from `components/ui/`
- Check `example-demo.tsx` for component usage examples
- Use the `cn()` function for conditional styling
- All Tailwind classes from the design system are available
- Use Framer Motion for animations
- Form validation with React Hook Form is set up

## 🎨 Example Usage

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function MyComponent() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>John Doe</CardTitle>
          <Badge variant="primary">Premium</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
```

## 🚦 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Linting

## 📞 Support

For questions about the design system or components:
- Check `example-demo.tsx` for usage examples
- All components are TypeScript typed
- Tailwind classes match the original design
- Full component documentation in each file

**Good luck with the implementation! 🚀**
