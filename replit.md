# Overview

RME Energy is a single-page web application showcasing a Web3 clean energy project tokenized on the Solana blockchain. The site serves as a comprehensive landing page featuring the company's roadmap, hybrid magnetic rotor technology, team information, and community engagement tools. Built with React and modern web technologies, it provides an immersive experience with smooth animations, responsive design, and integrated wallet connectivity for potential token purchases.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based single-page architecture with TypeScript for type safety. The frontend is built with Vite as the build tool and bundler, providing fast development and optimized production builds. The component structure follows a modular approach with dedicated sections for each part of the landing page (hero, roadmap, technology, team, community).

The UI framework leverages shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable components. Styling is handled through Tailwind CSS with a custom design system featuring a dark theme with green accent colors that align with the clean energy branding.

## Backend Architecture
The backend follows a minimalist Express.js server architecture designed primarily to serve the React application. The server includes middleware for request logging and error handling, with a placeholder routing system that can be extended for API endpoints. The backend uses TypeScript and ESM modules for consistency with the frontend.

Storage is currently implemented with an in-memory solution but includes interfaces for database operations, making it easy to swap to a persistent database solution. The architecture includes user management schemas using Drizzle ORM with PostgreSQL dialect configuration.

## Data Storage Solutions
The application is configured to use PostgreSQL as the primary database with Drizzle ORM as the query builder and schema management tool. Database migrations are handled through Drizzle Kit, with schemas defined in a shared directory accessible to both frontend and backend. Currently includes user management with username/password authentication structure.

The storage layer uses an interface-based approach, allowing easy switching between different storage implementations (currently in-memory for development, but ready for PostgreSQL in production).

## Authentication and Authorization
The application integrates Web3 wallet authentication through Solana wallet adapters, supporting multiple wallet providers including Phantom, Solflare, and Sollet. The wallet connection system provides a seamless user experience for connecting to the Solana blockchain.

Traditional authentication is also prepared with user schemas including username and password fields, though the primary focus is on Web3 wallet-based interactions for token purchases and community engagement.

## Design and User Experience
The application features a sophisticated design system with smooth scroll animations, intersection observers for progressive content loading, and responsive layouts optimized for both desktop and mobile devices. Custom CSS animations include glow effects, pulse animations, and fade-in transitions that enhance the futuristic clean energy theme.

The navigation system uses smooth scrolling to different sections of the single-page layout, with a fixed header providing easy access to all content areas. The design emphasizes visual storytelling with high-quality images and strategic use of green accent colors throughout.

# External Dependencies

## Solana Blockchain Integration
- **@solana/wallet-adapter-react**: Core wallet connection functionality
- **@solana/wallet-adapter-react-ui**: Pre-built UI components for wallet interactions
- **@solana/wallet-adapter-wallets**: Support for multiple wallet providers
- **@solana/web3.js**: Solana blockchain interaction library

## Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-zod**: Schema validation integration
- **connect-pg-simple**: PostgreSQL session store

## UI Framework and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **@tanstack/react-query**: Server state management

## Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **typescript**: Type safety and enhanced developer experience

## External Services
- **Raydium DEX**: Token trading platform integration for RME token purchases
- **Social Media Platforms**: Integration points for Twitter and Instagram community engagement
- **Image Hosting**: External image hosting for project visuals and team photos