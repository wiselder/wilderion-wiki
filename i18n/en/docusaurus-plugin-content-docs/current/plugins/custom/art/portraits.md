---
sidebar_position: 1
title: Portraits
description: Creating player portraits on skeleton skulls
---

# Portraits

:::tip Available on servers
**Overnight** · **Twilight**
:::

The **Art** plugin allows you to turn skeleton skulls into heads with player portraits or custom textures. Perfect for decorating bases, creating galleries and monuments!

---

## 🎨 How it Works

### What You Need

1. **Palette Brush** — special tool ([how to craft](../../../datapacks/extended-crafts))
2. **Name Tag** — with texture source set
3. **Skeleton Skull** — regular or wither (placed in world)

### Drawing Process

1. Take **name tag** in hand
2. Use command `/art source <nickname> <name>` to "charge" the name tag
3. Place **skeleton skull** in world
4. Take **brush** in main hand, **charged name tag** in offhand
5. Press **RMB** on skull

:::tip Result
Skeleton skull will transform into a head with portrait of specified player! Name tag is consumed, brush loses durability.
:::

---

## 📋 Commands

| Command | Description |
|---------|----------|
| `/art source <source> <name>` | Set texture source on name tag in hand |

### Usage Examples

```
/art source Notch Notch
/art source Steve My friend Steve
```

:::info Name Formatting
Name supports [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting: `<gold>`, `<bold>`, `<gradient:red:blue>`, etc.
:::

---

## 🖼️ Texture Sources

### By Player Nickname

Simply specify player nickname (up to 16 characters):

```
/art source Notch Legend
/art source Dream Speedrunner
```

### Custom Textures

For decorative heads you can use textures from websites:
- [minecraft-heads.com](https://minecraft-heads.com/)
- [mcheads.ru](https://mcheads.ru/)

**How to use:**

1. Find the needed head on the website
2. Copy **MinecraftURL** (link like `http://textures.minecraft.net/texture/...`)
3. Take the **last part** from URL (after the last `/`)
4. Use as source:

**Example:**
```
MinecraftURL: http://textures.minecraft.net/texture/e143d7008fd6325fd924470995eaa512659b70ec5fa96a3edd366c2537c34b18
Use: e143d7008fd6325fd924470995eaa512659b70ec5fa96a3edd366c2537c34b18

/art source e143d7008fd6325fd924470995eaa512659b70ec5fa96a3edd366c2537c34b18 Decorative head
```

---

## 🔄 Copying Heads

The plugin also allows copying existing player heads!

### How to Copy

1. Take **brush** in main hand
2. Take **skeleton skull** (item) in offhand
3. Press **RMB** on player head in world

:::tip Result
You'll receive a copy of this head in inventory. Skeleton skull is consumed, brush loses durability.
:::

---

## ❓ FAQ

<details>
<summary>**Can I use wither skeleton skull?**</summary>

Yes! Both types work: regular skeleton skull and wither skeleton skull.

</details>

<details>
<summary>**Is skull orientation preserved?**</summary>

Yes, the head maintains the direction and rotation of the original skull.

</details>

<details>
<summary>**What if player doesn't exist?**</summary>

If specified nickname is not found in Mojang database, the head will become a regular Minecraft head. Name tag is still consumed.

</details>

<details>
<summary>**Can I remove the head back?**</summary>

Yes, simply break the block — head will drop as item with preserved texture.

</details>
