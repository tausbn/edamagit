import { View } from '../general/view';
import { MagitState } from '../../models/magitState';
import { BranchHeaderView } from './branchHeaderView';
import { RemoteBranchHeaderView } from './remoteBranchHeaderView';
import { TextView } from '../general/textView';
import { MagitBranch } from '../../models/magitBranch';

export class BranchSectionView extends View {
  isFoldable = true;

  constructor(HEAD?: MagitBranch) {
    super();
    if (HEAD?.commit) {
      this.addSubview(new BranchHeaderView('Head', HEAD));

      if (HEAD.upstream) {
        this.addSubview(new RemoteBranchHeaderView('Merge', HEAD.upstream));
      }

      if (HEAD.pushRemote) {
        this.addSubview(new RemoteBranchHeaderView('Push', HEAD.pushRemote));
      }

      // TODO: tag
      // if (HEAD.tag) {
      //   this.addSubview(new RemoteBranchHeaderView('Tag', HEAD.tag));
      // }
    } else {
      this.addSubview(new TextView('In the beginning there was darkness'));
    }
  }
}