# Bangladesh Income Tax Calculator (2025-26 rates)

A web app to calculate personal income tax for private salaried persons in Bangladesh, updated for the 2025-26 tax year. Built with React and Material-UI, this tool provides a simple way to estimate your tax liability based on the latest slabs and rules.

## Features

- Supports all current tax slabs and rules for 2025-26
- Separate calculations for male and female taxpayers
- Clean, responsive UI with light/dark mode
- Instant summary and detailed tax breakdown
- Built-in validation and reset options
- Deployable to GitHub Pages

## Live Demo

[https://md-shadhin.github.io/tax-calculator/](https://md-shadhin.github.io/tax-calculator/)

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm

### Installation

```sh
git clone https://github.com/md-shadhin/tax-calculator.git
cd tax-calculator
npm install
```

### Development

Start the app in development mode:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Build the app for production:

```sh
npm run build
```

### Deployment

Deploy to GitHub Pages (as configured in `package.json`):

```sh
npm run deploy
```

## Project Structure

- `src/` — React components, models, and styles
- `public/` — Static assets and meta files (including SEO/social tags)

## Customization

- Update tax slabs or rules in the relevant React components as needed.
- Change the homepage URL in `package.json` if deploying to a different path.

## License

MIT
