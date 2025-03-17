# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on all devices
- **Dark Mode Support**: Automatically adapts to user preferences
- **Project Showcase**: Display your projects with images and details
- **Skills Section**: Highlight your technical skills
- **Contact Form**: Allow visitors to reach out to you
- **Smooth Animations**: Using Framer Motion for a polished feel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Create a `.env.local` file in the root directory
   - Add your email configuration (see [Email Setup](./EMAIL_SETUP.md))

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit the `src/data/portfolio-data.ts` file to update:
- Your name, title, and bio
- Contact information
- Social media links
- Skills
- Projects

### Images

Replace the images in the `public/images` directory with your own:
- Profile picture
- Project screenshots
- Background images

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

## Email Functionality

The contact form supports two methods for sending emails:
1. **EmailJS** (client-side, recommended)
2. **Node.js/Nodemailer** (server-side)

For detailed setup instructions, see [Email Setup](./EMAIL_SETUP.md).

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

### Other Platforms

You can also deploy to Netlify, GitHub Pages, or any other static site hosting:

```bash
npm run build
# or
yarn build
```

The build output will be in the `out` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
