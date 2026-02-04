---
sidebar_position: 1
title: Babble
description: Chat, channels, private messages and formatting
---

# Chat (Babble)

:::tip Available on servers
**Overnight** · **Sunrise** · **Twilight**
:::

**Babble** is a chat plugin by Wilderion. It handles chat channels (local, per-world, global), private messages, text formatting (markdown, dice, items), links, mentions, ignore list, and moderation (word filter, broadcasts, PM spy).

---

## Chat channels

Messages are sent to your **current channel**. Channels are configured by staff; typical types:

| Type | Description |
|------|-------------|
| **Local** | Only players within radius (e.g. 100 blocks) see the message |
| **World** | Everyone in the current world sees it |
| **Global** | Everyone on the server sees it |

**Switch channel:** `/channel <id>` — e.g. `/channel local` or `/channel global`. Channel aliases are set in the server config (e.g. `/l` for local, `/g` for global).

**Send to a channel without switching:** add the message after the id: `/channel <id> <message>` or use the channel alias, e.g. `/g Hello everyone`.

---

## Private messages

- **Send a private message:** `/tell <player> <message>` (aliases: `/w`, `/msg`, `/whisper`, `/write`, `/message`).
- **Reply to last sender:** `/r <message>` (or `/reply`).
- **Message to console (player):** `/mind <message>` — your message is sent to staff in the server console.
- **Message from console to player:** in the server console: `/deep <player> <message>`.

---

## Chat nickname

You can set a **display nickname** in chat (separate from your Mojang / Microsoft account name):

- `/nick <nickname>` — set your display nickname;
- `/nick reset` — reset to your account name.

Nickname rules:

- length from **3** to **20** characters;
- only **letters**, **digits**, **spaces**, and **underscores** (`_`) are allowed;
- MiniMessage formatting support may be enabled/disabled by server staff.

If the nickname is rejected, you will see a chat message explaining the reason (empty nickname, forbidden characters, invalid format).

---

## Formatting

Formatting options depend on permissions set on the server:

- **MiniMessage styles** — standard text formatting tags.
- **Markdown in messages** — e.g. `**bold**`, `*italic*`, `~~strikethrough~~`, `__underline__`, `||obfuscated||`.
- **Dice and coin** — in text: `<d:20>` (one d20), `<d:6:2>` (two d6), `<coin>` (coin flip). The result is inserted into the message.
- **Items in chat** — item tags from config (e.g. item in a specific slot). Format and slots are set by staff.

If something does not work — you may not have the matching permission on the server.

---

## Links

Links in messages are handled automatically: allowed domains (whitelist) become clickable. The domain list is configured on the server. Players with whitelist bypass permission can post links to any domain.

---

## Mentions and sounds

If a player’s name appears in a message, they may hear a **mention sound**. Receiving a private message can also play a sound. Sound settings are configured on the server.

---

## Ignore

To hide messages from a specific player in chat and not receive their private messages:

- **Add to ignore list:** `/ignore <player>`
- **List ignored players:** `/ignore list`
- **Remove from ignore list:** `/ignore remove <player>`

---

## Private message spy

The **`/spy`** command toggles a mode where you see other players’ private messages. Available only with the matching permission (usually for staff).

---

## Broadcasts

The **`/broadcast <type> <message>`** command (aliases: `/bc`, `/announce`) sends an announcement to chat. Broadcast types (e.g. “important”, “news”) and their formatting are configured on the server. Requires permission to use the command.

---

## Filter

The plugin can filter unwanted words in messages: block or replace text, add warnings, and apply punishments per server rules. Players with filter bypass permission are not checked.
