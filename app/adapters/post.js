import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class PostAdapter extends JSONAPIAdapter {

    pathForType() {
        return `posts`;
    }
    namespace = 'api'
}
