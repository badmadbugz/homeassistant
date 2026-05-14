# Dreame Vacuum Map Card (локальный бандл)

Готовая сборка **форка** карточки Lovelace для пылесосов Dreame.

## Апстрим

Репозиторий: [noambergauz/dreame-vacuum-map-card](https://github.com/noambergauz/dreame-vacuum-map-card).

## Зачем этот файл

В оригинале по умолчанию светлая тема; ночью карточка с картой слепит. Здесь добавлено:

- **`theme: auto`** (и **по умолчанию без строки `theme`**): тёмная тема карточки, если тёмная тема в Home Assistant **или** тёмная ОС/браузер (`prefers-color-scheme`), чтобы совпадало с Windows и с режимом «следовать системе» в HA.
- Исходники и полная заметка по форку: каталог **`forks/dreame-vacuum-map-card`** в этом репозитории (`README_FORK.md`).

**Версия сборки:** `1.4.2-fork.3` (см. `forks/dreame-vacuum-map-card/package.json`).

## Важно про YAML

В Home Assistant у карточек уже есть стандартное поле **`theme`** (имя **темы интерфейса** HA). Не путать с настройкой этой кастомной карточки: значение вида `theme: auto` в YAML может давать ошибку валидации у HA. Для автоматической светлой/тёмной карточки **строку `theme` в конфиге карточки можно не указывать** — сработает встроенный `auto` форка.

## Установка в Home Assistant

1. Скопировать **`dreame-vacuum-map-card.js`** в `/config/www/dreame-vacuum-map-card/` (или другой путь под `www`).
2. В **Настройки → Панели → Ресурсы**: тип **JavaScript Module**, URL вида  
   `/local/dreame-vacuum-map-card/dreame-vacuum-map-card.js`.
3. Оставить **один** ресурс на эту карточку: если раньше стояла установка через **HACS**, убрать дубликат вида `/hacsfiles/dreame-vacuum-map-card/...`, иначе может подгружаться старая сборка.
4. При обновлении файла — жёсткое обновление страницы / сброс кэша при необходимости.

## Пересборка

Из корня репозитория см. `forks/dreame-vacuum-map-card/README_FORK.md`; после `npm run build` скопировать свежий `dist/dreame-vacuum-map-card.js` сюда же и закоммитить.
