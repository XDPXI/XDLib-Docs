# Items

```java
import dev.xdpxi.xdlib.api.v3.Register;
import net.minecraft.item.Item;
```

## Creating Custom Items

To make a custom item you add `Register.registerItem()` to the Mod Initializer

```java
test_item = Register.registerItem(
                    new Item(new Item.Settings()),
                    "test_item",
                    MOD_ID
            );
```