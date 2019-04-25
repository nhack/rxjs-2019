import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

const currentTime$: Observable<Date> = new Observable(subscriber => {
  setInterval(() => subscriber.next(new Date()), 1000);
});

const toTime = (date: Date) => date.getTime()
const toTimeMap = map(toTime);

toTimeMap(currentTime$).subscribe(time => console.log('Manual:' + time));
currentTime$.map(toTime).subscribe(time => console.log('Chain:' + time));
currentTime$.pipe(toTimeMap).subscribe(time => console.log('Pipe:' + time));





