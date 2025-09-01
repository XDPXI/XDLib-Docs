# Items

```java
import dev.xdpxi.xdlib.api.v5.Register;
import net.minecraft.item.Item;
```

## Creating Custom Items

To make a custom item you add `Register.registerItem()` to the Mod Initializer

```java
test_item = Register.registerItem(
                    Item::new,
                    new Item.Settings()
                    "test_item",
                    MOD_ID
            );
```