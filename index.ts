import { Observable, Subscriber } from 'rxjs';

import { IPizza } from './pizza/pizza.model';
import { PIZZAS } from './pizza/pizza.data';

// this method is called whit the first subscription
const subscribe = (subscriber: Subscriber<IPizza>) => {
  for (let pizza of PIZZAS) {
    subscriber.next(pizza);
  }
  subscriber.complete();
}

const pizzas$ = new Observable(subscribe);

// register the subscriber on the observable
pizzas$.subscribe({
  next: pizza => console.log(pizza.name),
  complete: () => console.log('subscrption is completed')
});