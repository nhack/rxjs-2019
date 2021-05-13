import {queueScheduler, asapScheduler, asyncScheduler, merge, from, scheduled} from 'rxjs';

import {tap} from 'rxjs/operators';

console.log('Start script.');

const queue$ = scheduled(['QueueScheduler (sync task)'], queueScheduler);
const asap$ = scheduled(['AsapScheduler (async micro task)'], asapScheduler);
const async$ = scheduled(['AsyncScheduler (async task)'], asyncScheduler);

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
