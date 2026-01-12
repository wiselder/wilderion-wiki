---
sidebar_position: 1
title: Chat (Carbon)
description: Chat system on Wilderion servers
---

# Chat System

Wilderion servers use **Carbon Chat** plugin for formatting and extending chat capabilities.

---

## 💬 Main Features

### Change Nickname in Chat

Change your display name in chat:

```
/nick <desired_nickname>
```

:::info
- This doesn't affect your nickname in the TAB list
- Original nickname can be seen by hovering over the message in chat
:::

### Show Item in Chat

Share an item from your hand:

1. Take an item in your hand
2. Write in chat: `<item>`
3. Other players will see the item with ability to hover and view characteristics

---

## 📢 Chat Channels

The server has two chat channels:

| Channel | Radius | Prefix |
|-------|--------|---------|
| **Local** | 100 blocks | `.` |
| **Global** | Entire server | `!` |

### Quick Switching

- `.message` — send to local chat
- `!message` — send to global chat

### Change Default Channel

```
/channel local   — local chat by default
/channel global  — global chat by default
```

:::tip Tip
Use local chat to talk with neighbors to avoid cluttering the global chat!
:::

---

## 🎨 Formatting

Chat supports beautiful formatting with colors and styles. Exact capabilities depend on your server permissions.

---

## 📋 All Commands

| Command | Description |
|---------|----------|
| `/nick <name>` | Change display name |
| `/channel local` | Switch to local chat |
| `/channel global` | Switch to global chat |
| `<item>` in message | Show item from hand |

---

## 📸 Screenshots

![Carbon Chat](/img/overnight/chat.png)
