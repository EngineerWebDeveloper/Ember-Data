import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  name: attr(),
  publicRepos: attr('number'),
  publicGists:attr('number')
});
