# Shams Academy — Logo (React)

`Shams Academy` logotipining to'liq vektor (SVG) qayta yaratilgan versiyasi.
React 18 + Vite + TailwindCSS + Framer Motion asosida qurilgan.

## Ishga tushirish

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Struktura

```
src/
  components/
    Logo.jsx      — barcha qismlarni birlashtiruvchi asosiy komponent
    Sun.jsx        — 360° ingichka nurlar + pastki barg-shakldagi nurlar
    Circle.jsx     — oq aylana + uzilgan ko'k halqa + 3 ta chiziq
    Rocket.jsx     — qanot, buruni, oynasi, motori bilan raketa
    Text.jsx       — "SHAMS / ACADEMY" wordmark
    Glow.jsx       — orqa fondagi yumshoq porlash effekti
  styles/
    logo.css       — wordmark tipografiyasi va responsiv qoidalar
  App.jsx
  main.jsx
```

## Xususiyatlar

- Barcha shakllar SVG `<path>`/`<line>` orqali qo'lda chizilgan — PNG ishlatilmagan.
- Nurlar, halqa chiziqlari va barglar `map()` orqali generatsiya qilinadi (hardcode yo'q).
- Sariq elementlarda `#FFD54A → #FFB300 → #F59E0B` gradient.
- Ko'k elementlarda `#0A53D9 → #0037B8` gradient.
- Oq halqada `#FFFFFF → #ECECEC` gradient.
- Mount animatsiyasi: nurlar 0.5° buriladi, raketa pastdan chiqib scale 0.8→1 bilan paydo bo'ladi, glow kuchayadi.
- Hover: quyosh sekin aylanadi, raketa biroz ko'tariladi, glow yanada kuchayadi.
- `aria-label` va semantik struktura orqali accessibility ta'minlangan.
- 640×640 asosiy canvas — istalgan o'lchamda sifat yo'qolmaydi (SVG vektor).
"# shams-academy" 
