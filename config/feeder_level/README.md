# Конфиг: уровень кормушки по статистике (Aqara C1)

Файлы для копирования в Home Assistant. Полное описание — в [docs/howto/Кормушка_уровень_по_статистике.md](../../docs/howto/Кормушка_уровень_по_статистике.md).

## Вариант «всё сразу» — пакет

| Файл | Действие |
|------|----------|
| `feeder_level_package.yaml` | Скопировать в **config/packages/feeder_level.yaml** в HA. В `configuration.yaml`: `homeassistant:` → `packages: !include_dir_named packages`. Перезагрузка HA. |

Поднимает хелперы, сенсор остатка, три автоматизации и сценарий «Подсыпал». Карточку графика добавить вручную из `dashboard_card.yaml`.

## Пошагово (фрагменты)

| Файл | Куда в HA |
|------|-----------|
| `input_number.yaml` | `configuration.yaml` → секция `input_number:` |
| `template_sensor.yaml` | `configuration.yaml` → секция `template:` → `sensor:` |
| `automations.yaml` | `automations.yaml` или Автоматизации → Редактировать в YAML |
| `script.yaml` | `scripts.yaml` или Сценарии → Редактировать в YAML |
| `dashboard_card.yaml` | Дашборд → Редактировать → Добавить карточку (вставить YAML) |

После добавления template и input_number — перезагрузка (Шаблоны или полная). Проверить entity_id сенсора остатка и при необходимости подставить в automations и в карточку.

## Blueprints (форма в UI)

| Папка | Куда в HA |
|-------|-----------|
| `blueprints/automation/` | **config/blueprints/automation/feeder_level/** (три файла) |
| `blueprints/script/` | **config/blueprints/script/feeder_level/** (один файл) |

Хелперы и template-сенсор создать вручную (или из пакета/фрагментов выше). Затем: **Автоматизации → Создать → Использовать blueprint** и **Сценарии → Создать → Использовать blueprint** — выбрать «Кормушка: …» и в форме указать свои entity_id.
