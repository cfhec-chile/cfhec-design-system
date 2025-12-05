// Main entry point for @cfhec/design-system
// This exports the Tailwind config preset for consumers to extend

const tailwindcssAnimate = require('tailwindcss-animate');

module.exports = {
    darkMode: "class",
    content: [],  // Consumers will override this
    theme: {
        extend: {
            colors: {
                // Base semantic colors
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",

                // Primary - CCCC Blue
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    light: "hsl(var(--primary-light))",
                    dark: "hsl(var(--primary-dark))",
                    foreground: "hsl(var(--primary-foreground))",
                },

                // Secondary
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },

                // Semantic states
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                success: {
                    DEFAULT: "hsl(var(--success))",
                    light: "hsl(var(--success-light))",
                    foreground: "hsl(var(--success-foreground))",
                },
                warning: {
                    DEFAULT: "hsl(var(--warning))",
                    light: "hsl(var(--warning-light))",
                    foreground: "hsl(var(--warning-foreground))",
                },
                info: {
                    DEFAULT: "hsl(var(--info))",
                    light: "hsl(var(--info-light))",
                    foreground: "hsl(var(--info-foreground))",
                },

                // UI elements
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },

                // Layout components
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-bg))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    border: "hsl(var(--sidebar-border))",
                },
                navbar: {
                    DEFAULT: "hsl(var(--navbar-bg))",
                    foreground: "hsl(var(--navbar-foreground))",
                    border: "hsl(var(--navbar-border))",
                },
            },

            fontFamily: {
                sans: [
                    "Inter",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "sans-serif",
                ],
                mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
            },

            fontSize: {
                // Display sizes
                "display-xl": ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
                "display-lg": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
                // Metric for KPIs
                metric: ["2rem", { lineHeight: "1.1", fontWeight: "700" }],
                // Overline
                overline: [
                    "0.6875rem",
                    { lineHeight: "1.3", fontWeight: "500", letterSpacing: "0.05em" },
                ],
            },

            spacing: {
                // Layout constants
                navbar: "var(--navbar-height)",
                "sidebar-expanded": "var(--sidebar-width)",
                "sidebar-collapsed": "var(--sidebar-collapsed)",
            },

            width: {
                sidebar: "var(--sidebar-width)",
                "sidebar-collapsed": "var(--sidebar-collapsed)",
            },

            height: {
                navbar: "var(--navbar-height)",
            },

            maxWidth: {
                container: "var(--container-max)",
                "container-wide": "var(--container-wide)",
                content: "var(--content-max)",
            },

            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },

            boxShadow: {
                low: "0 1px 2px rgba(0, 0, 0, 0.05)",
                normal: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                elevated: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                modal: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            },

            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "fade-out": {
                    from: { opacity: "1" },
                    to: { opacity: "0" },
                },
                "slide-in-right": {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(0)" },
                },
                "slide-out-right": {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(100%)" },
                },
            },

            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.2s ease-out",
                "fade-out": "fade-out 0.2s ease-out",
                "slide-in-right": "slide-in-right 0.3s ease-out",
                "slide-out-right": "slide-out-right 0.3s ease-out",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};
