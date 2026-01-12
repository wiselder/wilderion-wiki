---
sidebar_position: 5
title: Bridges
description: Minecraft chat integration with Discord and Telegram
---

# Bridges

:::tip Available on servers
**Overnight** · **Sunrise** · **Twilight**
:::

**Bridges** is a custom plugin developed by the Wilderion team that creates "bridges" between chat platforms: Minecraft, Discord, and Telegram.

---

## 🌉 What is it?

Bridges connects communities on different platforms into a unified space for communication.

**Features:**
- 💬 **Chat sync** — messages from Minecraft appear in Discord and Telegram
- 📱 **Feedback** — messages from Discord and Telegram are visible in-game
- 📊 **Online status** — automatic updates of player count
- 🔔 **Notifications** — alerts about server start/stop

---

## 💬 How it works

### From Minecraft to Discord/Telegram

When you write in Minecraft chat:
1. Message is sent to the game chat
2. Automatically duplicated to Discord channel
3. Automatically duplicated to Telegram chat

**Message format:**
```
[Player] Hello everyone!
```

### From Discord/Telegram to Minecraft

When someone writes in Discord or Telegram:
1. Message appears in Minecraft chat
2. Players see where the message came from

**In-game message format:**
```
[Discord] User: Hello!
[Telegram] User: How are you?
```

---

## 📊 Online Status

Bridges automatically updates information about online players:

### In Discord
- Channel topic updates with player count
- Bot status shows activity

### In Telegram
- Pinned message updates
- Online player list display

---

## 🔔 System Notifications

The plugin automatically sends notifications:

| Event | Message |
|-------|---------|
| 🟢 Server start | "Server started" |
| 🔴 Server stop | "Server stopped" |
| 👋 Player joined | "Player joined the game" |
| 👋 Player left | "Player left the game" |

---

## 🎯 Advantages

### For Players
- 📱 Chat with friends without entering the game
- 🔔 Get notifications about server events
- 💬 Don't miss important messages

### For Community
- 🌐 Unified space for communication
- 📈 More player engagement
- 🤝 Stronger bonds between players

---

## ❓ FAQ

<details>
<summary>**Do players see messages from Discord/Telegram?**</summary>

Yes! All messages from Discord and Telegram are displayed in the game chat with source indication.

</details>

<details>
<summary>**Can I disable synchronization?**</summary>

Synchronization is configured at the server level. Players cannot disable it individually.

</details>

<details>
<summary>**Are commands supported?**</summary>

No, you cannot execute game commands from Discord/Telegram. Only text messages.

</details>

<details>
<summary>**Is there sync delay?**</summary>

Synchronization happens almost instantly (usually less than 1 second).

</details>

<details>
<summary>**Does it work with private messages?**</summary>

No, Bridges only syncs public chat channels.

</details>
