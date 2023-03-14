const pokemon = require('pokemon');//남이 만들걸 가져 왔다 요청 하는 require로 가져올수 있다 모듈화를 끝냈다라고 알 수 있다.
console.dir(pokemon);
console.log(pokemon.all("ko"));
console.log(pokemon.random());


// pokemon.all();
// //=> ['Bulbasaur', …]

// pokemon.random();
// //=> 'Snorlax'

// pokemon.getName(147);
// //=> 'Dratini'

// pokemon.getId('Dratini');
// //=> 147