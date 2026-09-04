* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

:root {
--green: #16a34a;
--green-dark: #15803d;
--green-light: #dcfce7;

```
--orange: #f97316;
--blue: #0ea5e9;
--purple: #8b5cf6;
--yellow: #facc15;

--text: #172033;
--muted: #64748b;

--white: #ffffff;
--background: #f4f8f5;
```

}

body {
font-family: "Poppins", Arial, sans-serif;
background: var(--background);
color: var(--text);
}

.page {
width: 100%;
overflow: hidden;
}

/* =========================
HERO
========================= */

.hero {
position: relative;
min-height: 310px;

```
background:
    linear-gradient(
        135deg,
        #15803d,
        #22c55e,
        #86efac
    );

color: white;

border-radius: 0 0 40px 40px;

overflow: hidden;
```

}

.hero-pattern {
position: absolute;

```
width: 500px;
height: 500px;

right: -180px;
top: -250px;

border-radius: 50%;

background: rgba(255,255,255,.12);
```

}

.hero-pattern::after {
content: "";

```
position: absolute;

width: 300px;
height: 300px;

right: 100px;
top: 220px;

border-radius: 50%;

background: rgba(255,255,255,.10);
```

}

.hero-content {
position: relative;
z-index: 2;

```
max-width: 900px;

margin: auto;

padding: 45px 20px;

text-align: center;
```

}

.logo-circle {
width: 70px;
height: 70px;

```
margin: auto auto 15px;

display: flex;

justify-content: center;
align-items: center;

background: rgba(255,255,255,.2);

border:
    2px solid
    rgba(255,255,255,.4);

border-radius: 50%;

font-size: 30px;
```

}

.badge {
display: inline-block;

```
padding: 6px 15px;

border-radius: 50px;

background: rgba(255,255,255,.2);

font-size: 10px;

font-weight: 700;

letter-spacing: 1.5px;

margin-bottom: 12px;
```

}

.hero h1 {
font-size: clamp(28px, 6vw, 46px);

```
line-height: 1.2;

font-weight: 800;

margin-bottom: 10px;
```

}

.hero p {
max-width: 650px;

```
margin: auto;

font-size: 13px;

line-height: 1.7;
```

}

/* =========================
CONTAINER
========================= */

.container {
max-width: 1050px;

```
margin: -25px auto 0;

position: relative;

z-index: 3;

padding: 0 20px 50px;
```

}

section {
margin-bottom: 30px;
}

/* =========================
DATE SELECTOR
========================= */

.date-section {

```
padding: 23px;

background: white;

border-radius: 25px;

box-shadow:
    0 10px 30px
    rgba(15,23,42,.08);
```

}

.date-title {
text-align: center;

```
margin-bottom: 17px;
```

}

.date-title small {

```
font-size: 9px;

color: var(--green);

font-weight: 800;

letter-spacing: 1.5px;
```

}

.date-title h2 {

```
font-size: 18px;

margin-top: 3px;
```

}

.date-selector {

```
display: flex;

align-items: center;

justify-content: center;

gap: 15px;
```

}

.date-arrow {

```
width: 45px;
height: 45px;

border: none;

border-radius: 14px;

background: var(--green-light);

color: var(--green-dark);

font-size: 30px;

cursor: pointer;

transition: .2s;
```

}

.date-arrow:hover {

```
background: var(--green);

color: white;

transform: scale(1.05);
```

}

.date-display {

```
min-width: 240px;

display: flex;

align-items: center;

justify-content: center;

gap: 12px;
```

}

.calendar-icon {

```
width: 48px;
height: 48px;

display: flex;

align-items: center;

justify-content: center;

background: var(--green-light);

border-radius: 15px;

font-size: 24px;
```

}

.date-display small {

```
display: block;

font-size: 10px;

color: var(--green);

font-weight: 700;
```

}

.date-display strong {

```
display: block;

font-size: 14px;
```

}

.calendar-button {

```
display: block;

margin: 15px auto 0;

border: none;

background: var(--green);

color: white;

padding: 11px 20px;

border-radius: 50px;

font-family: inherit;

font-size: 11px;

font-weight: 600;

cursor: pointer;

box-shadow:
    0 5px 15px
    rgba(22,163,74,.25);
```

}

.calendar-button:hover {

```
background: var(--green-dark);
```

}

#calendarInput {

```
position: absolute;

opacity: 0;

pointer-events: none;
```

}

/* =========================
SECTION TITLE
========================= */

.section-title {

```
margin-bottom: 17px;
```

}

.section-title > div {

```
display: flex;

align-items: center;

gap: 12px;
```

}

.section-icon {

```
width: 45px;
height: 45px;

display: flex;

justify-content: center;
align-items: center;

background: white;

border-radius: 14px;

font-size: 22px;

box-shadow:
    0 5px 20px
    rgba(0,0,0,.07);
```

}

.section-title small {

```
font-size: 9px;

color: var(--green);

font-weight: 800;

letter-spacing: 1.5px;
```

}

.section-title h2 {

```
font-size: 21px;

line-height: 1.2;
```

}

/* =========================
MENU
========================= */

.menu-grid {

```
display: grid;

grid-template-columns:
    repeat(2, 1fr);

gap: 15px;
```

}

.menu-card {

```
display: flex;

align-items: center;

gap: 15px;

padding: 18px;

background: white;

border-radius: 22px;

box-shadow:
    0 8px 25px
    rgba(15,23,42,.06);

transition: .25s;
```

}

.menu-card:hover {

```
transform:
    translateY(-4px);

box-shadow:
    0 15px 35px
    rgba(15,23,42,.12);
```

}

.menu-icon {

```
min-width: 62px;

height: 62px;

display: flex;

justify-content: center;
align-items: center;

background: var(--green-light);

border-radius: 18px;

font-size: 30px;
```

}

.menu-card span {

```
font-size: 9px;

color: var(--green);

font-weight: 700;
```

}

.menu-card h3 {

```
font-size: 16px;

margin: 2px 0;
```

}

.menu-card p {

```
font-size: 10px;

color: var(--muted);
```

}

/* =========================
NUTRITION
========================= */

.nutrition-grid {

```
display: grid;

grid-template-columns:
    repeat(5, 1fr);

gap: 12px;
```

}

.nutrition-card {

```
padding: 17px;

background: white;

border-radius: 20px;

box-shadow:
    0 8px 25px
    rgba(15,23,42,.06);

transition: .25s;
```

}

.nutrition-card:hover {

```
transform:
    translateY(-3px);
```

}

.nutrition-icon {

```
width: 42px;
height: 42px;

display: flex;

justify-content: center;
align-items: center;

background: #f1f5f9;

border-radius: 13px;

font-size: 20px;

margin-bottom: 10px;
```

}

.nutrition-card span {

```
display: block;

font-size: 9px;

color: var(--muted);

font-weight: 600;
```

}

.nutrition-card strong {

```
font-size: 24px;
```

}

.nutrition-card small {

```
font-size: 8px;

color: var(--muted);
```

}

/* =========================
TIME
========================= */

.time-card {

```
display: flex;

align-items: center;

gap: 18px;

padding: 23px;

background:
    linear-gradient(
        135deg,
        #fff7ed,
        #ffedd5
    );

border:
    1px solid
    #fed7aa;

border-radius: 24px;
```

}

.time-icon {

```
min-width: 60px;
height: 60px;

display: flex;

align-items: center;
justify-content: center;

background: #ffedd5;

border-radius: 18px;

font-size: 28px;
```

}

.time-card small {

```
color: #ea580c;

font-weight: 800;

font-size: 9px;

letter-spacing: 1px;
```

}

.time-card h2 {

```
font-size: 16px;

margin: 3px 0;
```

}

.time-card p {

```
color: #9a3412;

font-size: 10px;

line-height: 1.6;
```

}

/* =========================
MESSAGE
========================= */

.message-card {

```
display: flex;

align-items: center;

gap: 18px;

padding: 23px;

background:
    linear-gradient(
        135deg,
        #f0fdf4,
        #dcfce7
    );

border:
    1px solid
    #bbf7d0;

border-radius: 24px;
```

}

.message-icon {

```
min-width: 58px;
height: 58px;

display: flex;

justify-content: center;
align-items: center;

background: white;

border-radius: 17px;

font-size: 26px;
```

}

.message-card h2 {

```
color: var(--green-dark);

font-size: 17px;
```

}

.message-card p {

```
margin-top: 4px;

color: #166534;

font-size: 10px;

line-height: 1.7;
```

}

/* =========================
FOOTER
========================= */

footer {

```
text-align: center;

padding: 25px 10px 5px;
```

}

.footer-logo {

```
width: 45px;
height: 45px;

margin:
    auto auto 10px;

display: flex;

justify-content: center;
align-items: center;

background: var(--green-light);

border-radius: 50%;
```

}

footer strong {

```
font-size: 11px;

color: var(--green-dark);
```

}

footer p {

```
color: var(--muted);

font-size: 9px;

margin-top: 4px;
```

}

.copyright {

```
margin-top: 15px;

color: #94a3b8;

font-size: 8px;
```

}

/* =========================
MOBILE
========================= */

@media(max-width:700px) {

```
.hero {

    min-height: 330px;

    border-radius:
        0 0 30px 30px;
}

.hero-content {

    padding:
        38px 18px 40px;
}

.hero h1 {

    font-size: 29px;
}

.hero p {

    font-size: 11px;
}

.container {

    padding:
        0 14px 35px;
}

.menu-grid {

    grid-template-columns: 1fr;
}

.nutrition-grid {

    grid-template-columns:
        repeat(2, 1fr);
}

.nutrition-card:last-child {

    grid-column:
        span 2;
}

.date-selector {

    gap: 5px;
}

.date-display {

    min-width: 200px;
}

.date-arrow {

    width: 40px;
    height: 40px;
}
```

}

/* =========================
SMALL PHONE
========================= */

@media(max-width:380px) {

```
.hero h1 {

    font-size: 25px;
}

.date-display {

    min-width: 175px;
}

.date-display strong {

    font-size: 12px;
}

.nutrition-card strong {

    font-size: 21px;
}
```

}
