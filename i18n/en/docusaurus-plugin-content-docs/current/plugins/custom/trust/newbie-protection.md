---
sidebar_position: 1
title: Protection from Newbie Griefing
description: Protection system from newbie griefing with trial period (Trust plugin)
---

# Protection from Newbie Griefing System

:::tip Available on servers
**Overnight** · **Twilight**
:::

The server has a **three-level status system** with a trial period for new players (**Trust** plugin). This allows gradual integration of newcomers into the gaming community while protecting old players from griefing.

---

## 📊 Status Levels

### 1️⃣ NEWCOMER

**Game mode:** Adventure

**When received:** Upon first joining the server

**Restrictions:**
- ❌ Cannot break and place blocks (adventure mode)
- ❌ Cannot open other players' containers
- ❌ Cannot damage villagers and pets
- ❌ Cannot use dangerous items (TNT, lava, flint and steel, etc.)

:::info
Upon joining, player receives a welcome message with instructions.
:::

---

### 2️⃣ NEWBIE (Accepted)

**Game mode:** Survival

**When received:** Administrator grants level via `/trust set <nickname> NEWBIE`

**What changes:**
- ✅ Game mode switches to **Survival** — can break and place blocks

**Remaining restrictions:**
- ⚠️ Cannot open other players' containers (except those marked "for newbies" and friends' containers)
- ⚠️ Cannot damage villagers and pets
- ⚠️ Cannot use dangerous items

:::tip Message
"Survival mode is now enabled — enjoy the game!"
:::

---

### 3️⃣ TRUSTED

**Game mode:** Survival

**When received:**
- ⏰ Automatically after configured time in current level (NEWCOMER → 60 min, NEWBIE → 300 min)
- 👤 Or manually via `/trust set <nickname> TRUSTED`

**What changes:**
- ✅ Receives `trust.trusted` permission
- ✅ **All protection restrictions are removed**

:::success Message
"You have received full rights on the server!"
:::

---

## 🚫 Protection Restrictions

During the trial period (until player has TRUSTED status), the following rules apply in the protected zone (100 chunk radius from spawn):

### Containers
❌ Prohibited to open other players' containers (chests, barrels, shulker boxes, etc.).

:::tip Exceptions
- Containers marked as "open for newbies" (`/box on`)
- Containers of players who added you to their friend list (`/friend add`)
:::

### Entities
❌ Prohibited to damage villagers and other players' tamed animals (cats, wolves, horses, etc.).

### Dangerous Items and Blocks
❌ Prohibited to use/place: TNT, lava, flint and steel, dispensers, end crystals, fire, hoppers, beds and respawn anchors (depending on world).

---

## 📦 Public Containers and Friends

### Containers for Newbies

Container owner can allow restricted players to open it. Look at the container and run:
- `/box on` — allow newbies to open this container
- `/box off` — disallow
- `/box status` — show status and owner

Requires `trust.container` permission (default: op).

### Friend List

Players with `trust.friend` can add friends; friends can open your containers even without TRUSTED status.
- `/friend add <name>` — add to friend list
- `/friend remove <name>` — remove
- `/friend list` — show friend list

---

## ⚙️ Automatic Promotion by Time

By default, new players have automatic level promotion by playtime enabled (configured in `trust.yml`). Administrator can for a specific player:
- `/trust auto <player> on` — enable auto promotion
- `/trust auto <player> off` — disable
- `/trust auto <player> status` — show status

Requires `trust.auto` permission.

---

## 💻 Commands and Permissions

| Command | Description | Permission |
|---------|-------------|------------|
| `/trust set <player> <level>` | Grant level (NEWCOMER, NEWBIE, TRUSTED) | `trust.grant` |
| `/trust auto <player> on\|off\|status` | Toggle automatic promotion | `trust.auto` |
| `/trust list` | List players with time remaining until next level | `trust.list` |
| `/friend add\|remove\|list <name>` | Friend list for container access | `trust.friend` |
| `/box on\|off\|status` | Container publicity (look at container) | `trust.container` |

---

## ❓ FAQ

<details>
<summary>**How to get full rights faster?**</summary>

1. Write in Discord or Telegram server chat
2. Ask administrator to grant TRUSTED: `/trust set <your_nick> TRUSTED`
3. Be on the server at the moment of request

</details>

<details>
<summary>**Why can't I open a chest?**</summary>

This is protection from newbie griefing (Trust plugin). You can:
- Use containers marked "for newbies" (`/box on`)
- Open containers of players who added you as friend
- Place your own containers
- Wait for automatic promotion or ask admin to grant TRUSTED

</details>

<details>
<summary>**How to light Nether portal?**</summary>

Ask another player with full rights to light the portal for you.

</details>
