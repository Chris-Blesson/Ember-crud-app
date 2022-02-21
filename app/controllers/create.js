import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class CreateController extends Controller {

    @service router;

    @action
    createPost(event) {
        event.preventDefault();
        let post = this.store.createRecord('post', {
            title: this.title,
            body: this.body
        })

        post.save().then(()=>{
            this.router.transitionTo('index');
        });
    }
}
