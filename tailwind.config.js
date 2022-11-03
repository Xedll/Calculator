/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      maxWidth: {
         '140': '140px'
      },
      minHeight: {
         '20': '20px',
      },
      extend: {
         colors: {
            '1a': '#fcfffe',
            '2a': '#e1ecea',
            '3a': '#cce0de',
            '4a': '#aecdcd',
            '5a': '#98b5bb',
            '6a': '#87aab4',
            '7a': '#718ca2',
            '8a': '#5d718f',
            '9a': '#505983',
            '10a': '#3e3b6a',
            '11a': '#322a51',
            '12a': '#c3ece5',
            '13a': '#8ba8a6',
            '14a': '#718a8f',
            '15a': '#7691a8',
         },
         margin: {
            'a0': 'auto 0',
         }
      },
   },
   plugins: [],
}
