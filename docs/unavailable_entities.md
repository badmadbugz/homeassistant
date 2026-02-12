# Недоступные сущности (unavailable)

Список сущностей в HA со состоянием **unavailable** — устройство/интеграция не отдают данные. Сгенерировано по данным из HA.

Можно отключить (Disable) в реестре сущностей или удалить/переконфигурировать устройство в Настройки → Устройства и службы.

---

## По устройству / источнику

### DESKTOP-BMB (медиаплеер + сенсоры)

Вероятно, второй экземпляр ПК или дубликат интеграции; ПК выключен или не в сети.

| entity_id | friendly_name |
|-----------|----------------|
| `media_player.desktop_bmb` | DESKTOP-BMB |
| `media_player.desktop_bmb_2` | DESKTOP-BMB |
| `sensor.desktop_desktop_cpuload_2` | DESKTOP DESKTOP_cpuload |
| `sensor.desktop_desktop_gpuload_2` | DESKTOP DESKTOP_gpuload |
| `sensor.desktop_desktop_gputemperature_2` | DESKTOP DESKTOP_gputemperature |
| `sensor.desktop_desktop_audio_default_device_2` | DESKTOP DESKTOP_audio Default Device |
| `sensor.desktop_desktop_audio_default_device_state_2` | DESKTOP DESKTOP_audio Default Device State |
| `sensor.desktop_desktop_audio_default_device_volume_2` | DESKTOP DESKTOP_audio Default Device Volume |
| `sensor.desktop_desktop_audio_default_device_muted_2` | DESKTOP DESKTOP_audio Default Device Muted |
| `sensor.desktop_desktop_audio_peak_volume_2` | DESKTOP DESKTOP_audio Peak Volume |
| `sensor.desktop_desktop_audio_audio_sessions_2` | DESKTOP DESKTOP_audio Audio Sessions |
| `sensor.desktop_desktop_audio_default_input_device_2` | DESKTOP DESKTOP_audio Default Input Device |
| `sensor.desktop_desktop_audio_default_input_device_state_2` | DESKTOP DESKTOP_audio Default Input Device State |
| `sensor.desktop_desktop_audio_default_input_device_muted_2` | DESKTOP DESKTOP_audio Default Input Device Muted |
| `sensor.desktop_desktop_audio_default_input_device_volume_2` | DESKTOP DESKTOP_audio Default Input Device Volume |

### Ble-Gateway (ESPHome)

Сгорел БП, ждёшь новый. Не критично: на BLE только датчик кота, кот до весны дома.

| entity_id | friendly_name |
|-----------|----------------|
| `sensor.ble_gateway_ble_gateway_wifi_signal` | Ble-Gateway BLE Gateway WiFi Signal |
| `sensor.ble_gateway_ble_gateway_uptime` | Ble-Gateway BLE Gateway Uptime |
| `sensor.ble_gateway_cat_cage` | Ble-Gateway Cat cage |

### Лампы — переключатели «Не беспокоить»

Сущности `switch.*_do_not_disturb` по лампочкам; возможно, неподдерживаемая фича прошивки или отключённая опция.

| entity_id | friendly_name |
|-----------|----------------|
| `switch.rgbcw_lightbulb_koridor_1_do_not_disturb` | RGBCW Lightbulb коридор 1 Не беспокоить |
| `switch.rgbcw_lightbulb_koridor_2_do_not_disturb` | RGBCW Lightbulb коридор 2 Не беспокоить |
| `switch.rgbcw_lightbulb_koridor_3_do_not_disturb` | RGBCW Lightbulb коридор 3 Не беспокоить |
| `switch.unknown_do_not_disturb` | Лампочка у Егора Не беспокоить |

### Разное (сеть)

| entity_id | friendly_name |
|-----------|----------------|
| `sensor.dir_320_external_ip` | Внешний IP |

---

## По домену (для фильтра в UI)

| Домен | Количество |
|-------|------------|
| sensor | 14 |
| switch | 4 |
| media_player | 2 |
| **Всего** | **21** |

---

*Обновить список: в HA получить все сущности, отфильтровать по `state: unavailable`, сгруппировать и перезаписать этот файл.*
