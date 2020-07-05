### Styling

I have thought a lot between css modules vs styled components.

I did some personal experiments as well. 

But in the current case its best we use css modules.

Styled components have lot of advantages over css modules, but in our specific case

- we already are using css modules
- we have sass setup
- we are using external libraries like bootstrap
- we are using 3rd party css as well
- our developers know css/sass so nothing new to learn

if we were to start a new project, i would prefer styled components over css modules but in current case lets stick to css modules


**Rule 1**

all components will have their own css with the file format 
```
componentname.module.sass
```

we will be using sass.


**Rule 2**

Colors/fonts will be global 

```
@import '../../variables.scss';

.header-text {
    color: $secondary-color;
    font-size: .9rem;
}
```

As an example we have a global sass file with color defined and global reusable css which we can reuse in our component css.


**Rule 3**

for font-size lets stick to rem only


**Rule 4**

fonts i.e font name will be global
color will be global

but we should keep minimum global css.

all css should be specific to components


example of component with css

```
import React from "react"
import logo from './../../logo.svg';

import styles from "./header.module.scss"

const Header = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="100" height="auto" alt="" loading="lazy" />
                    <span className={styles["header-text"]}>Style Guide React</span>
                </a>
            </div>
        </nav>
    )
}

export default Header
```

Here we have added our custom css using
```
<span className={styles["header-text"]}>Style Guide React</span>
```

