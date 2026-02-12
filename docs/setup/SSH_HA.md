# SSH к Home Assistant — шпаргалка

> **Текущий корень проекта (workspace):** `Z:\Work\Cursor\Home`. При переносе в другое место замени этот путь в примерах SCP на актуальный.

## Параметры

| Параметр | Значение |
|----------|----------|
| Хост | 192.168.1.152 |
| Порт | 22 |
| Пользователь | root |
| Приватный ключ | `C:\Users\badmadbug\.ssh\id_ha` |
| .ppk для PuTTY | `C:\Users\badmadbug\.ssh\id_ha.ppk` |
| Путь к automations.yaml в HA | `/config/automations.yaml` |

---

## Команды (PowerShell / cmd)

### Читать automations.yaml
```bash
ssh -i C:\Users\badmadbug\.ssh\id_ha root@192.168.1.152 "cat /config/automations.yaml"
```

### Сохранить automations.yaml в локальный файл
```bash
scp -i C:\Users\badmadbug\.ssh\id_ha root@192.168.1.152:/config/automations.yaml Z:\Work\Cursor\Home\automations\automations.yaml
```

### Записать локальный файл в HA
```bash
scp -i C:\Users\badmadbug\.ssh\id_ha Z:\Work\Cursor\Home\automations\automations.yaml root@192.168.1.152:/config/automations.yaml
```

### Перезагрузить автоматизации в HA
```bash
ssh -i C:\Users\badmadbug\.ssh\id_ha root@192.168.1.152 "ha core reload automations"
```
(или через MCP: `ha_reload_config` → automations)

### Открыть интерактивную сессию
```bash
ssh -i C:\Users\badmadbug\.ssh\id_ha root@192.168.1.152
```

---

## PuTTY

- Host: `192.168.1.152`
- Port: `22`
- Connection → Data → Auto-login username: `root`
- Connection → SSH → Auth → Private key: `C:\Users\badmadbug\.ssh\id_ha.ppk`

---

## Если «Host key has changed»

```bash
ssh-keygen -R 192.168.1.152
```
Потом подключиться заново и ответить `yes` на вопрос про новый ключ.

---

## Если Windows ssh ругается (Corrupted MAC)

Использовать **PuTTY / plink** — с ними всё работает.
