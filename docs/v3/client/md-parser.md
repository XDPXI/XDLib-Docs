# Markdown Parser

```java
import dev.xdpxi.xdlib.api.v3.markdown;
import net.minecraft.text.Text;
```

## Parsing the MD

To convert markdown to Minecraft text you can run

```java
Text parsedText = markdown.parse("This is **bold** and *italic*");
```