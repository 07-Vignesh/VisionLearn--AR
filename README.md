# VisionLearn AR

![VisionLearn AR Logo](/logo.png)

An immersive Augmented Reality (AR) animation application built with Next.js and Three.js. VisionLearn AR brings interactive 3D models and animations to life, enabling users to explore educational content through AR visualization.

## Version

**v0.1.0** - Initial Release

## Features

- 🎨 **Interactive 3D Models** - Explore educational models with Three.js
- 📱 **AR Visualization** - Augmented Reality support for immersive learning
- 🎬 **Smooth Animations** - Powered by Framer Motion for elegant transitions
- ✨ **Responsive Design** - Mobile-first approach with Tailwind CSS
- 📧 **Contact Integration** - EmailJS integration for user inquiries
- 🚀 **High Performance** - Next.js 15 with Turbopack for fast development

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org) v15.3.3
- **React**: v19.0.0
- **3D Graphics**: [Three.js](https://threejs.org) v0.177.0
- **React Three Fiber**: v9.1.2
- **React Three Drei**: v10.3.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Animations**: [Framer Motion](https://www.framer.com/motion) v12.18.1
- **Typewriter Effect**: react-simple-typewriter v5.0.1
- **Email Service**: @emailjs/browser v4.4.1
- **Type Safety**: TypeScript v5
- **Development**: Turbopack for faster builds

## Getting Started

### Prerequisites

- Node.js 18+ or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ar-animation-app
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application auto-updates as you edit files. The main page can be modified by editing `app/page.tsx`.

### Build & Production

Build the application for production:

```bash
npm run build
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
ar-animation-app/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── breakroom/           # Breakroom section
│   ├── classroom/           # Classroom section
│   └── ...
├── components/
│   ├── RightNav.tsx         # Navigation bar
│   ├── AnimatedText.tsx     # Animated text component
│   ├── ARCanva.jsx          # AR canvas
│   ├── Model.jsx            # 3D model components
│   └── ...
├── public/
│   └── models/              # 3D model assets
└── package.json
```

## Key Components

- **RightNav**: Navigation component with scroll detection
- **ARCanva/ARCanva2**: Canvas components for AR visualization
- **Model/Model2/ManModel**: 3D model loaders and renderers
- **AnimatedText**: Text animation component
- **ScrollTypewriter**: Typewriter effect on scroll

## Dependencies

### Core Dependencies
| Package | Version |
|---------|---------|
| next | 15.3.3 |
| react | 19.0.0 |
| react-dom | 19.0.0 |
| three | 0.177.0 |
| @react-three/fiber | 9.1.2 |
| @react-three/drei | 10.3.0 |
| framer-motion | 12.18.1 |
| @emailjs/browser | 4.4.1 |
| react-simple-typewriter | 5.0.1 |
| react-use | 17.6.0 |

### Dev Dependencies
| Package | Version |
|---------|---------|
| typescript | 5 |
| tailwindcss | 4 |
| @tailwindcss/postcss | 4 |
| @types/node | 20 |
| @types/react | 19 |
| @types/react-dom | 19 |

## Usage

### Viewing 3D Models

Import and use the model components:

```typescript
import Model from '@/components/Model';

export default function Page() {
  return <Model />;
}
```

### Animations

Use Framer Motion for smooth transitions:

```typescript
import { motion } from 'framer-motion';

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

## Deployment

Deploy to Vercel for optimal performance:

```bash
vercel deploy
```

Or follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For questions or support, please contact through the application's contact form or open an issue in the repository.

---

**Built with ❤️Vikneshwaran for immersive learning experiences**
