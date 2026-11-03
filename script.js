tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                darkBg: '#090a0f', // Very dark blue/gray
                surface: '#151722', // Slightly lighter for cards
                surfaceHover: '#1c1f2e',
            },
            backgroundImage: {
                'primary-gradient': 'linear-gradient(to right, #3b82f6, #a855f7)', // Blue to Purple
                'primary-gradient-hover': 'linear-gradient(to right, #2563eb, #9333ea)',
            }
        }
    }
}