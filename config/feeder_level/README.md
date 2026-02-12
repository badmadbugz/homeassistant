# Конфиг: уровень кормушки по статистике (Aqara C1)

Файлы для копирования в Home Assistant. Полное описание — в [docs/howto/Кормушка_уровень_по_статистике.md](../../docs/howto/Кормушка_уровень_по_статистике.md).

| Файл | Куда в HA |
|------|-----------|
| `input_number.yaml` | `configuration.yaml` → секция `input_number:` |
| `template_sensor.yaml` | `configuration.yaml` → секция `template:` → `sensor:` |
| `automations.yaml` | `automations.yaml` или Автоматизации → Редактировать в YAML |
| `script.yaml` | `scripts.yaml` или Сценарии → Редактировать в YAML |
| `dashboard_card.yaml` | Дашборд → Редактировать → Добавить карточку (вставить YAML) |

Дополнительно: хелперы `kormushka_total_month` и `kormushka_total_year` — статистика «съедено за месяц/год». Добавить в `input_number.yaml`, авто сброса — в `automations.yaml`.

После добавления template и input_number — перезагрузка (Шаблоны или полная). Проверить entity_id сенсора остатка и при необходимости подставить в automations и в карточку.
