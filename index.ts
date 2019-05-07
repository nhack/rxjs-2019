import {queueScheduler, asapScheduler, asyncScheduler, of, merge, from} from 'rxjs';

import {tap, observeOn} from 'rxjs/operators';

console.log('Start script.');

let queue$ = of('QueueScheduler (sync task)', queueScheduler);
let asap$ = of('AsapScheduler (async micro task)', asapScheduler);
let async$ = of('AsyncScheduler (async task)', asyncScheduler);

merge(queue$, asap$, async$)
  .subscribe(
    value => console.log(value)
  );

from([1,2,3,4], queueScheduler).pipe(
  tap(value => console.log(`Value: ${value}`)),
  tap(value => console.log(`Doubled value: ${value * 2}`))
)
.subscribe();

console.log('End script.');