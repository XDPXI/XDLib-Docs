# Language Utilities

```java
import dev.xdpxi.xdlib.api.v3.LangUtil;
```

## Getting the Language

To get the language that the client is using you can call

```java
LangUtil.getLang();
```

It will return a string of the language
file, e.g. `en-us`

## Changing the Language

To change the language that the client is using you can use

```java
LangUtil.setLang("en_us");
```