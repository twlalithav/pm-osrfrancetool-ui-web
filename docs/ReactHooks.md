### useEffect

With useEffect, you can handle lifecycle events directly inside function components.
Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount.
All with one function! (source : https://daveceddia.com/useeffect-hook-examples/)

The function passed to useEffect will run after the render is committed to the screen.

By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
