# Возможно неиспользуемые интеграции, аддоны и HACS

Проверка по данным из HA. **Учтены только автоматизации** — дашборды в режиме storage (UI), их конфиг через API недоступен, поэтому карточки и сущности на дашбордах в этот раз не учитывались.

---

## 1. Интеграции (платформы) без сущностей в автоматизациях

По реестру сущностей и списку авто: у этих платформ **ни один entity_id не встречается** в триггерах/условиях/действиях авто. Они могут использоваться на дашбордах или в сценариях.

| Платформа | Комментарий |
|-----------|-------------|
| **google_translate** | Одна сущность: `tts.google_translate_*` — озвучка. В авто не фигурирует. Если TTS не вызываешь — можно отключить. |
| **dlna_dmr** | Медиа-рендереры по DLNA. Обычно не вызываются по entity_id в авто. Могут быть на дашборде. |
| **upnp** | Устройства UPnP (телевизоры, плееры). В логах были предупреждения о подписках. В авто по entity_id не встречаются. |

Остальные платформы (mqtt, person, zone, light, mobile_app, androidtv, pandora_cas, hassio, hacs, automation, script, input_boolean, scene, group, keenetic_ndms2, keenetic_api и т.д.) имеют сущности, которые в автоматизациях встречаются.

---

## 2. Установленные аддоны (12 шт.)

| Аддон | Состояние | Вероятное использование |
|-------|-----------|-------------------------|
| **Get HACS** | stopped | Только для первичной установки HACS. После установки HACS можно удалить. |
| **File editor** | started | Редактирование файлов в HA. Удобно оставить. |
| **Filebrowser** | started | Просмотр/загрузка файлов. По желанию. |
| **Mosquitto broker** | started | Нужен, если есть MQTT-устройства (Zigbee2MQTT, лампы, датчики по MQTT). |
| **MQTT Explorer** | started | Отладка MQTT. Не обязателен для работы, только для настройки/отладки. |
| **Zigbee2MQTT** | started | Нужен, если управляешь Zigbee-устройствами. |
| **Studio Code Server** | started | VS Code в браузере. По желанию. |
| **Music Assistant** | started | Медиа-библиотека и стриминги. Если не пользуешься — кандидат на отключение. |
| **MPD** | started | Music Player Daemon. Если не слушаешь музыку через MPD — можно отключить. |
| **HA Vibecode Agent** | started | Агент для Cursor/IDE (MCP). Используется для управления HA из Cursor. |
| **Terminal & SSH** | started | Доступ по SSH. Нужен для правок по SSH. |
| **go2rtc** | started | Стриминг для камер/WebRTC. Нужен, если смотришь камеры или потоки через WebRTC. |

**Кандидаты «поставить на паузу или удалить», если не пользуешься:** Get HACS, MQTT Explorer (только отладка), Studio Code Server, Music Assistant, MPD.

---

## 3. Установленные репозитории HACS

Интеграции и плагины из HACS, которые установлены. Использование в дашбордах не проверялось.

### Интеграции (custom components)

| Репозиторий | Название |
|-------------|----------|
| hacs/integration | HACS |
| rodpayne/home-assistant_person_location | Person Location |
| nielsfaber/scheduler-component | Scheduler |
| akinin/ha_keenetic | Keenetic |
| malinovsku/ha-keenetic_api | Keenetic API |
| andrew-codechimp/HA-Calendar-Event | Calendar Event |
| custom-components/ble_monitor | BLE Monitor |
| dext0r/yandex_smart_home | Yandex Smart Home |
| AlexxIT/WebRTC | WebRTC |
| dougiteixeira/proxmoxve | Proxmox VE |
| petretiandrea/home-assistant-tapo-p100 | Tapo |
| egmen/moscow_transport | Moscow Transport |
| make-all/tuya-local | Tuya Local |
| alryaz/hass-pandora-cas | Pandora CAS |
| alryaz/hass-yandex-music-browser | Yandex Music Browser |

### Плагины (Lovelace / фронт)

| Репозиторий | Название |
|-------------|----------|
| hulkhaugen/hass-bha-icons | BHA Icons |
| Mariusthvdb/custom-icons | Custom Icons |
| kalkih/mini-media-player | Mini Media Player |
| Nerwyn/custom-card-features | Custom Card Features |
| Mariusthvdb/custom-icon-color | Custom Icon Color |
| custom-cards/slider-button-card | Slider Button Card |
| PRProd/HA-Firemote | Firemote |
| phischdev/lovelace-mushroom-better-sliders | Mushroom Better Sliders |
| junkfix/numberbox-card | Numberbox Card |
| elax46/custom-brand-icons | Custom Brand Icons |
| rejuvenate/lovelace-horizon-card | Horizon Card |

Если какая-то интеграция из HACS ставилась «на пробу» и не используется ни в авто, ни на дашбордах — её можно отключить или удалить в Настройки → Устройства и службы (или HACS → Интеграции).

---

## Как обновить отчёт

1. Снова выгрузить из HA: реестр сущностей, список автоматизаций (полный конфиг), при возможности — конфиг дашбордов (если переключишь на YAML-дашборд или появится доступ к storage).
2. Сопоставить: какие entity_id и сервисы встречаются в авто и в дашбордах.
3. Платформы без ни одного использования → кандидаты на отключение.
4. Аддоны и HACS — вручную по списку выше и по факту использования.
