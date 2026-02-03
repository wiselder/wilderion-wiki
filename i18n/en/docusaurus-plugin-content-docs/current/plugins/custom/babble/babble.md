---
sidebar_position: 1
title: Babble
description: Chat system on Wilderion servers
---

# Chat System (Babble)

:::tip Available on servers
**Overnight** · **Sunrise** · **Twilight**
:::

Wilderion servers use the custom **Babble** plugin — a chat system with channels, formatting, direct messages, and additional features.

---

## 💬 Main Features

### Chat Channels

The server has chat channels (local, global, and others — exact list depends on server settings). Switch default channel and send to a specific channel via commands and prefixes (e.g. `.` for local, `!` for global).

```
/channel <channel>   — switch default channel
```

:::tip Tip
Use local chat to talk with neighbors to avoid cluttering the global chat!
:::

### Show Item in Chat

Share an item from your hand:

1. Take an item in your hand
2. Write in chat: `<item>`
3. Other players will see the item with ability to hover and view characteristics

### Formatting

Chat supports formatting (MiniMessage and Markdown) if you have the right permissions:

- **Bold**, *italic*, ~~strikethrough~~, underline
- Colors and styles
- Dice rolls: `<d:20>`, `<d:6:2>`, `<coin>`

Exact capabilities depend on your server permissions.

### Mentions

You can mention players by nickname — they will get a notification. Just type the nickname in your message.

### Direct Messages

- `/m <player> <message>` — send a direct message
- `/r <message>` — reply to the last direct message

### Ignore

- `/ignore add <player>` — add to ignore list
- `/ignore remove <player>` — remove from ignore list
- `/ignore list` — list ignored players

---

## 📋 Main Commands

| Command | Description |
|---------|----------|
| `/channel <channel>` | Switch chat channel |
| `/m <player> <message>` | Direct message |
| `/r <message>` | Reply in DMs |
| `/ignore add/remove/list` | Ignore players |
| `<item>` in message | Show item from hand |
| `/babble help` | Chat help |

---

## 🔗 Links and Formatting

Links work in chat: whitelisted domains (e.g. youtube.com, discord.gg) become clickable automatically. The list of allowed domains is configured by admins.

Text formatting (**bold**, *italic*, etc.) and item insertion are available with the right permissions.

---

## 📸 Screenshots

![Chat](/img/overnight/chat.png)
