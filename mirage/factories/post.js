import { Factory } from 'miragejs';
import faker from "faker";
export default Factory.extend({
    title(i) {
        return 'Post ' + (i + 1);
    },
    body() {
        return faker.random.words();
    }
});
