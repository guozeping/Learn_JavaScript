const wm = new WeakMap();

const key1 = {id:1},
      key2 = {id:2}

wm.set(key1)
wm.set(key2)

console.log(wm)

