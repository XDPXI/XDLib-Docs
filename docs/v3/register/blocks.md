# Blocks

```java
import dev.xdpxi.xdlib.api.v3.Register;
import net.minecraft.block.AbstractBlock;
import net.minecraft.block.Block;
import net.minecraft.sound.BlockSoundGroup;
```

## Adding a Custom Block

To make a custom item you add `Register.registerBlock()` to the Mod Initializer

```java
test_block = Register.registerBlock(
                    new Block(AbstractBlock.Settings.create().sounds(BlockSoundGroup.STONE)),
                    "test_block",
                    MOD_ID
             );
```
