---
sidebar_position: 6
title: Portraits (Art)
description: Creating player portraits on skeleton skulls
---

# Portraits (Art)

:::tip Available on servers
**Overnight** · **Twilight**
:::

The **Art** plugin allows you to transform skeleton skulls into heads with player portraits or custom textures. Perfect for decorating bases, creating galleries and monuments!

---

## 🎨 How It Works

### What You'll Need

1. **Palette Brush** — a special tool ([how to craft](../datapacks/extended-crafts))
2. **Name Tag** — with a texture source set
3. **Skeleton Skull** — regular or wither (placed in the world)

### Painting Process

1. Hold a **name tag** in your hand
2. Use the command `/art source <nickname> <name>` to "charge" the tag
3. Place a **skeleton skull** in the world
4. Hold the **brush** in your main hand, **charged name tag** in your off-hand
5. **Right-click** on the skull

:::tip Result
The skeleton skull will transform into a head with the specified player's portrait! The name tag is consumed, the brush loses durability.
:::

---

## 📋 Commands

| Command | Description |
|---------|-------------|
| `/art source <source> <name>` | Set the texture source on the name tag in your hand |

### Usage Examples

```
/art source Notch <gold>Notch
/art source Steve <green>My friend Steve
```

:::info Name Formatting
The name supports [MiniMessage](https://docs.advntr.dev/minimessage/format.html) formatting: `<gold>`, `<bold>`, `<gradient:red:blue>` etc.
:::

---

## 🖼️ Texture Sources

### By Player Nickname

Simply specify the player's nickname (up to 16 characters):

```
/art source Notch <yellow>Legend
/art source Dream <green>Speedrunner
```

### Custom Textures

For decorative heads, you can use texture IDs from [minecraft-heads.com](https://minecraft-heads.com/):

1. Find the desired head on the website
2. Copy the **Texture ID** (long string)
3. Use it as the source:

```
/art source abc123...xyz <red>Decorative head
```

---

## 🔄 Copying Heads

The plugin also allows you to copy existing player heads!

### How to Copy

1. Hold the **brush** in your main hand
2. Hold a **skeleton skull** (item) in your off-hand
3. **Right-click** on a player head in the world

:::tip Result
You'll receive a copy of that head in your inventory. The skeleton skull is consumed, the brush loses durability.
:::

---

## ❓ FAQ

<details>
<summary>**Can I use a wither skeleton skull?**</summary>

Yes! Both types work: regular skeleton skull and wither skeleton skull.

</details>

<details>
<summary>**Is the skull orientation preserved?**</summary>

Yes, the head preserves the direction and rotation of the original skull.

</details>

<details>
<summary>**What if the player doesn't exist?**</summary>

If the specified nickname is not found in Mojang's database, nothing will happen — the name tag won't be consumed.

</details>

<details>
<summary>**Can I remove the head?**</summary>

Yes, simply break the block — the head will drop as an item with the preserved texture.

</details>
