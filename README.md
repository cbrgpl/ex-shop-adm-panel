# Тестовое задание 'ex-shop-adm-panel'

## О приложении

Приложение разрабатывалось как тестовое задание, в соответствии с [данными требованиями](https://idaproject.notion.site/Frontend-developer-test-9b834d020d8f406f851479791209beef).

В процессе выполнения задания перед мной стояла задача в демонстрации собственных навыков в работе с окружением для разработки(Wepback, Stylelint, Eslint); анализе поставленной задачи; декомпозиции макета на отдельные логические элементы, а так их группировке; верстать.

Компоненты были разделены на общие, и относящиеся к конкретной подсистеме(модулю). В идеале я бы использовал [modular architecture](https://www.youtube.com/watch?v=iuyzO2QkY7A) для организации проекта.


[Ссылка на сайт](https://cbrgpl.github.io/ex-shop-adm-panel/)

**МИНИМАЛЬНОЕ ПОДДЕРЖИВАЕМОЕ РАЗРЕШЕНИЕ 340px**

<br><br><br>

## Инициализация проекта

Для запуска проекта необходима версия NodeJS >= 16.13

```
npm install
```

### Запуск сервера для разработки
```
npm run serve
```

### Сборка под продакшн
```
npm run build
```

### Линт проекта
```
npm run lint
```

### Для VSC

settings.json конфиг для проекта

```json
{
    "stylelint.snippet": ["css", "scss", "vue"],
    "stylelint.validate": [ "css", "scss", "vue" ],
    "eslint.options": {
        "extensions": [
            ".html",
            ".js",
            ".ts",
            ".vue"
        ]
    },
    "files.exclude": {
        "**/*.log": true,
        "**/*.log*": true,
        "**/dist": true,
    },
    "files.associations": {
        ".babelrc": "jsonc",
        ".eslintrc": "jsonc",
        ".markdownlintrc": "jsonc",
        "*.config.js": "javascript",
        "*.spec.js": "javascript",
        "*.vue": "vue"
    },
    "files.eol": "\n",
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "files.trimTrailingWhitespace": true,
}
```

<br><br><br>

## Структура дирректорий

- src/
    - assets/
        - images/
        - scss/
            - utils/ - дирректория для scss функционала
            _global.scss
            _null.scss
            _predefined.scss - импортируется в main.js
    - components/
        admin/ - дирректория для подсистемы админ-панели
        general/ - общие компоненты проекта
    - enums/ - дирректория для статичным структур данных
    - router/
    - store/
        - modules/
    - utils/
        - functions/
        - js_utils/ - набор утилит для разных типов данных
        - mixins/
        - modules/ - самописные модули, используемые на проекте
        - validators/ - прокси-файл для указания перевода валидаторам
    - views/

<br><br><br>

## Компоненты

### Именование

Для именования компонентов используются следующие префиксы:

- The - компонент встречается на странице один раз
- Отсутствие префикса - компонент является часть другого компонента и не используется на клиенте
- Z - префикс для компонентов, которые используются на клиенте(не является внутренней частью какого-либо другого)

В случае, если компонент состоит из других компонентов(являющихся только его частью), необходимо оборачивать его в следующую структуру:

- ComponentName/
    - partials/
        - PartialComponent.vue
    - ComponentName.vue

В случае, если для компонента дополнительно необходим другой компонент, то они оборачиваются в следующую структуру:

- ComponentName/
    - ComponentName.vue
    - ComponentPartial.vue - отличие от первого случая в том, что ComponetnPartial не сокрывается внутри основного компонента

<br><br><br>

## Имитация бекенда

Для имитации бекенда был написан модуль с названием ProductService, находит на пути `./src/utils/modules/productService/`

Он предоставляет некоторые методы, производящие действия для работы с данными в localStorage (сохранение, удаление, получение выборки). Для имитации ответа от сервера используются Promise и setTimeout.
