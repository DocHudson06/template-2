# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🌙 Dark/Light mode
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js
- 🎨 Beautiful UI with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📝 Markdown support for content
- 🧪 Comprehensive test coverage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd template-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── __tests__/     # Component tests
├── lib/               # Utility functions and hooks
├── types/             # TypeScript type definitions
└── styles/            # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Component Documentation

### Navbar
The main navigation component with responsive design and theme toggle.

```tsx
import Navbar from '@/components/Navbar'

// Usage
<Navbar />
```

### ThemeToggle
A button component for switching between light and dark themes.

```tsx
import ThemeToggle from '@/components/ThemeToggle'

// Usage
<ThemeToggle />
```

### Hero
The landing section with animated text and call-to-action buttons.

```tsx
import Hero from '@/components/Hero'

// Usage
<Hero />
```

## Testing

The project uses Jest and React Testing Library for testing. Tests are located in `__tests__` directories next to their components.

Run tests:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.