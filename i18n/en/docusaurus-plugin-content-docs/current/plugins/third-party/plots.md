---
sidebar_position: 4
sidebar_label: Plots (PlotSquared)
title: Plots (PlotSquared)
description: Plot system for creative mode
---

# PlotSquared

**PlotSquared** is a plugin for managing personal plots on the creative server.

---

## 🏗️ What Is It?

Plots are personal areas approximately 100×100 blocks where you can build anything in creative mode.

**Features:**
- 📐 Up to **20 personal plots** per player
- 🔗 Ability to merge adjacent plots
- 🔒 Full access control
- 🌦️ Weather and time customization
- 🌿 Biome changing

---

## 📋 Basic Commands

### Getting a Plot

| Command | Description |
|---------|-------------|
| `/p auto` | Automatically get a free plot |
| `/p claim` | Claim the plot you're standing on |

### Navigation

| Command | Description |
|---------|-------------|
| `/p home` | Teleport to your plot |
| `/p home <number>` | Teleport to a specific plot |
| `/p visit <player>` | Visit another player's plot |

---

## 🔗 Merging Plots

Create large-scale projects by merging multiple plots into one!

| Command | Description |
|---------|-------------|
| `/p merge` | Merge adjacent plots (look toward the neighbor) |
| `/p unlink` | Unlink plots |

:::tip Tip
To merge plots, stand on your plot and look toward an adjacent one that also belongs to you, then type `/p merge`.
:::

---

## 🌦️ Environment Settings

Fully control the atmosphere on your plot:

| Command | Description |
|---------|-------------|
| `/p set biome <biome>` | Change biome on plot |
| `/p set time <time>` | Set time of day |
| `/p set weather <weather>` | Set weather |

**Examples:**
```
/p set biome cherry_grove
/p set time day
/p set weather clear
```

---

## 👥 Access Management

### Adding Players

| Command | Description |
|---------|-------------|
| `/p trust <player>` | Give player full permissions on plot |
| `/p add <player>` | Give player build rights (when you're online) |
| `/p deny <player>` | Deny player from entering plot |

### Removing Permissions

| Command | Description |
|---------|-------------|
| `/p remove <player>` | Remove all permissions from player |
| `/p untrust <player>` | Remove full permissions |
| `/p undeny <player>` | Allow blocked player to enter |

---

## ⚙️ Plot Flags

Fine-tune plot behavior:

| Command | Description |
|---------|-------------|
| `/p flag set <flag> <value>` | Set a flag |
| `/p flag remove <flag>` | Remove a flag |
| `/p flag list` | View all available flags |

### Popular Flags

| Flag | Description |
|------|-------------|
| `pvp` | Enable/disable PVP |
| `mob-spawning` | Mob spawning |
| `explosion` | Explosions |
| `fly` | Flight on plot |
| `greeting` | Message when entering plot |
| `farewell` | Message when leaving plot |

**Examples:**
```
/p flag set pvp false
/p flag set greeting Welcome to my plot!
```

---

## 🗑️ Plot Management

| Command | Description |
|---------|-------------|
| `/p clear` | Clear plot (delete all builds) |
| `/p delete` | Delete plot (release the area) |
| `/p info` | Plot information |

:::warning Warning
Commands `/p clear` and `/p delete` are irreversible! All builds will be deleted.
:::

---

## 🌐 Where It Works

:::info
Plots are only available on the **Sunrise** server (Creative).
:::

Survival servers use different territory protection systems.
