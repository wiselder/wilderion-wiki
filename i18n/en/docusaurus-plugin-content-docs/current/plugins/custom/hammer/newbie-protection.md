---
sidebar_position: 1
title: Protection from Newbie Griefing
description: Protection system from newbie griefing with trial period
---

# Protection from Newbie Griefing System

:::tip Available on servers
**Overnight** · **Twilight**
:::

The server has a **three-level status system** with a trial period for new players. This allows gradual integration of newcomers into the gaming community while protecting old players from griefing.

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

**When received:** After `/newbie accept <nickname>` command from administrator

**What changes:**
- ✅ Game mode switches to **Survival** — can break and place blocks

**Remaining restrictions:**
- ⚠️ Cannot open other players' containers
- ⚠️ Cannot damage villagers and pets
- ⚠️ Cannot use dangerous items

:::tip Message
"Survival mode is now enabled — enjoy the game!"
:::

---

### 3️⃣ TRUSTED

**Game mode:** Survival

**When received:**
- ⏰ Automatically after **12 hours** of playtime
- 👤 Or manually via `/newbie trust <nickname>` command

**What changes:**
- ✅ Receives `hammer.trusted` permission
- ✅ **All protection restrictions are removed**

:::success Message
"You have received full rights on the server!"
:::

---

## 🚫 Protection Restrictions

During the trial period (until player has TRUSTED status), the following rules apply in the protected zone (100 chunk radius from spawn), protecting old players:

### Containers
❌ Prohibited to open other players' containers:
- Chests
- Barrels
- Shulker boxes
- And others

:::tip Exception
Can use containers marked as "public".
:::

### Entities
❌ Prohibited to damage:
- Villagers (villagers, traders)
- Other players' tamed animals (cats, wolves, horses, etc.)

### Dangerous Items
❌ Prohibited to use:
- TNT
- Lava
- Flint and steel
- Dispensers
- End crystals

### Dangerous Blocks
❌ Prohibited to place:
- TNT
- Fire
- Lava
- Hoppers
- Dispensers
- Beds and respawn anchors (depending on world)

---

## 📦 Public Containers

Players with restrictions can use containers that owners marked as "public".

**This is useful for:**
- Resource giveaways at spawn
- Community warehouses
- Shops

### How to Make Container Public

Administrators can use command:
```
/newbie container trusted true
```
(while looking at container)

---

## 💻 Administration Commands

| Command | Description | Permission |
|---------|----------|-------|
| `/newbie accept <nickname>` | Grant NEWBIE status | `hammer.newbie.accept` |
| `/newbie trust <nickname>` | Grant TRUSTED status | `hammer.newbie.trust` |
| `/newbie list` | List online newcomers | `hammer.newbie.list` |
| `/newbie container trusted <true/false>` | Toggle container publicity | `hammer.newbie.freechest` |
| `/newbie container trusted` | Show container status | `hammer.newbie.freechest` |

---

## ❓ FAQ

<details>
<summary>**How to get full rights faster?**</summary>

1. Write in Discord or Telegram server chat
2. Ask administrator to grant you status
3. Be on the server at the moment of request

</details>

<details>
<summary>**Why can't I open a chest?**</summary>

This is protection from newbie griefing that protects old players. You can:
- Use public containers
- Place your own containers
- Wait 12 hours of playtime (trial period)

</details>

<details>
<summary>**How to light Nether portal?**</summary>

Ask another player with full rights to light the portal for you.

</details>
