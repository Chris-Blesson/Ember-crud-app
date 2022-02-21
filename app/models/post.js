import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
export default class PostModel extends Model {
    @attr('string') title;
    @attr('string') body;
}
