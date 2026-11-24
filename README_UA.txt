JARVIS — пакет для Netlify з AI-чатом

ЩО Є В ЦЬОМУ ПАКЕТІ
- public/index.html — ваш інтерфейс JARVIS із підключеним запитом до AI.
- netlify/functions/chat.mjs — серверна функція, яка звертається до OpenAI Responses API.
- netlify.toml — налаштування папки сайту та Netlify Functions.

ВАЖЛИВО
1. Не вставляйте API-ключ у index.html або будь-який файл цього ZIP.
2. OPENAI_API_KEY має бути збережений у Netlify як secret environment variable.
3. Цей пакет додає AI-чат. Supabase-синхронізація та push-сповіщення ще не підключені.
4. Для API потрібен активний білінг OpenAI API; підписка ChatGPT не оплачує API-запити.

ЯК РОЗГОРНУТИ
- Розпакуйте ZIP на комп'ютері.
- У Netlify відкрийте сайт JARVIS і перейдіть у Deploys.
- Для Netlify Functions рекомендовано розгорнути цей пакет через GitHub або Netlify CLI. Просте завантаження лише папки зі статичними файлами може не опублікувати функцію. Не замінюйте поточний Production deploy, доки не буде створено та перевірено Deploy Preview.
- Дочекайтеся успішного deploy.
- Відкрийте сайт, перейдіть у розділ AI-помічник і надішліть тестове повідомлення.

Netlify має зібрати функцію з папки netlify/functions; сама наявність файлу на диску ще не означає, що функція вже розгорнута.

МОДЕЛЬ
За замовчуванням функція використовує gpt-6-astra. За потреби можна задати OPENAI_MODEL у Netlify Environment variables.
