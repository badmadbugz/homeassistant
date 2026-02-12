# Passive BLE Monitor: только свои устройства

> **Если речь про встроенную интеграцию iBeacon** (а не Passive BLE Monitor) — там другой баг: опция «Enable Newly added entities» не работает. См. [iBeacon_не_добавлять_лишнее.md](iBeacon_не_добавлять_лишнее.md).

**Проблема:** Passive BLE Monitor по умолчанию (`discovery: True`) добавляет **всё**, что видит Bluetooth: машины соседей, телефоны прохожих, кошельки, наушники и т.д. Реестр забивается мусором.

**Фикс:** отключить авто-добавление и указать whitelist устройств.

---

## Вариант 1: через UI (рекомендуется)

1. **Настройки** → **Устройства и службы** → интеграция **Passive BLE monitor** → **Опции** (или три точки → «Настроить»).
2. Найдите параметр **Discover devices and sensors automatically** → выключите (False).
3. В блоке **Devices** добавьте устройство:
   - Нажмите **Add Device** (или выберите из списка).
   - Для iBeacon: введите **Beacon UUID**: `e2c56db5-dffb-48d2-b060-d0f5a71096e0` (для маячка !Маячок Дымка).
   - При необходимости включите **Track device** для device_tracker.
4. **Сохранить** (Submit).

После этого интеграция будет учитывать только устройства из списка. Остальное — игнорировать.

---

## Вариант 2: через YAML

Если интеграция настроена через `configuration.yaml`:

```yaml
ble_monitor:
  discovery: False
  devices:
    - uuid: 'e2c56db5-dffb-48d2-b060-d0f5a71096e0'  # !Маячок Дымка
      track_device: True
      tracker_scan_interval: 20
      consider_home: 180
```

- `discovery: False` — не создавать сущности для новых устройств.
- `uuid` — iBeacon идентифицируется по UUID (не по MAC).
- `track_device`, `tracker_scan_interval`, `consider_home` — для device_tracker (дома/уехал).

---

## UUID своего маячка

UUID для **!Маячок Дымка**: `e2c56db5-dffb-48d2-b060-d0f5a71096e0`

UUID можно посмотреть в **Инструменты разработчика** → **Состояния** → entity маячка → атрибут `uuid`.

---

## Что сделать со старым мусором

Уже созданные устройства в реестре можно отключить или удалить вручную:

1. **Настройки** → **Устройства и службы** → **Устройства**.
2. Найдите ненужные BLE-устройства → шестерёнка → **Отключить** или **Удалить**.

После включения whitelist новые «соседи» добавляться не будут.

---

*Источник: [Passive BLE Monitor — Configuration parameters](https://custom-components.github.io/ble_monitor/configuration_params).*
