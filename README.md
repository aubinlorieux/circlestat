# circlestat
A simple circle chart library based on Raphael.JS

![Preview](/previews/screenshot.png "Preview")

## Initialization

```html
<script type="text/javascript" src="js/vendors/raphael.min.js"></script>
<script type="text/javascript" src="js/lib/circlestat.min.js"></script>
```

## Html

```html
<div id="circleStat-views" class="circleStat">
    <span class="circleStat-title">Views</span>
    <span class="circleStat-pourcent">54</span>
</div>
```

## Javascript

```js
<script>
    window.onload = (function() {
        
        var params = {
            container: 'circleStat-views'
            strokeWidth: '10',
            strokeColor: '#1E8548'
        };

        var myStat = new CircleStat(params);

    })();
</script>
```

## Parameters

- `container`: 
- `strokeWidth`: 
- `strokeColor`:
- `bgColor`: 
- `containerColor`:
- `width`: 
- `height`:
- `speed`: 
- `pourcent`: