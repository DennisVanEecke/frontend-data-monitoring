import Helper from '@ember/component/helper';
import { assert } from '@ember/debug';
import { service } from '@ember/service';
import FeaturesService from 'frontend-data-monitoring/services/features';

export default class IsFeatureEnabled extends Helper<string[]> {
  @service declare features: FeaturesService;

  compute(positional: [string | undefined]) {
    assert(
      'is-feature-enabled expects exactly one argument',
      positional.length === 1
    );

    return this.features.isEnabled(positional[0] ?? '');
  }
}
