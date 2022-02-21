import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class EditController extends Controller {

    @service router;

    @action
    editPost(post, event) {
        event.preventDefault();
        post.save().then(() => {
            this.router.transitionTo('post', post.id);
        });
    }

}
