# FloatingDockBarJS
일정 구간 이상으로 스크롤 할 시 고정시켜줍니다.

## Demo
<img width="616" alt="demo" src="https://user-images.githubusercontent.com/11539551/83985493-6be9b400-a974-11ea-817a-14ecd614b6b2.gif">

## Dependencies
1. jQuery.js
2. jQuery.throttle.js 

## How to use it?
> floatingDockBarJS를 참조합니다
```html
<script src="floatingDockBar.js"></script>
```

> dockBar를 init 해줍니다
```javascript
var floatingDockBar = new FloatingDockBar({
        dockBar: $('.block-4'),
        baseline: $('.block-5'),
        activeCss: {
            "position": "fixed",
            "top": "0",
            "width": "1280px",
            "z-index": "1",
            "background-color": "black",
            "color": "white",
            "text-align": "center"
        },
        inActiveCss: {
            "position": "relative",
            "top": "auto",
            "z-index": "0"
        },
    });
    floatingDockBar.init();
```


## Parameters
| Parameter | Description |
|-----------|-------------|
| dockBar | 움직일 객체입니다. jQeury Object 여야 합니다 |
| baseline | 기준점이 될 객체입니다. jQuery Object 여야 합니다 |
| activeCss | [optional] dockBar에 적용될 CSS 입니다 기본적으로 1280px에 맞춰져 있습니다 |
| inActiveCss | [optional] dockBar에 적용해제될 CSS 입니다 기본적으로 1280px에 맞춰져 있습니다 |
| delay | [optional] 스크롤 업데이트 간격입니다 단위는 ms이며 기본값은 250ms 입니다 |

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

