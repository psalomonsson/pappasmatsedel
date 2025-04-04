tailwind = {
  config: {
    theme: {
      extend: {
        colors: {
          'food-cream': '#FFF8E8',
          'food-orange': '#FF6B35',
          'food-charcoal': '#2B303A',
          'food-green': '#7DCE82'
        },
        fontFamily: {
          'display': ['Georgia', 'serif'],
        },
        animation: {
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      }
    }
  }
}