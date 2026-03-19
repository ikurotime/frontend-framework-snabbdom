import { User } from './src/User';
import { init } from './framework';

const firstName = 'Kuro';
const lastName = 'Time';

init('#app', User({ firstName, lastName }));
