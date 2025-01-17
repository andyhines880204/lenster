import {
  ExternalLinkIcon,
  PuzzleIcon,
  ShoppingBagIcon,
  UsersIcon
} from '@heroicons/react/outline';
import humanize from '@lenster/lib/humanize';
import type { ZoraNft } from '@lenster/types/zora-nft';
import { Trans } from '@lingui/macro';
import Link from 'next/link';
import { type FC } from 'react';

interface MetadataProps {
  nft: ZoraNft;
  zoraLink: string;
}

const Metadata: FC<MetadataProps> = ({ nft, zoraLink }) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center space-x-2">
        <PuzzleIcon className="lt-text-gray-500 h-4 w-4" />
        <div className="space-x-1.5">
          <span>
            <Trans>Type:</Trans>
          </span>
          <b>{nft.contractStandard === 'ERC721' ? 'ERC-721' : 'ERC-1155'}</b>
        </div>
      </div>
      {nft.totalMinted > 0 ? (
        <div className="flex items-center space-x-2">
          <UsersIcon className="lt-text-gray-500 h-4 w-4" />
          <b>
            <Trans>{humanize(nft.totalMinted)} minted</Trans>
          </b>
        </div>
      ) : null}
      {!nft.isOpenEdition ? (
        <div className="flex items-center space-x-2">
          <ShoppingBagIcon className="lt-text-gray-500 h-4 w-4" />
          <b>
            <Trans>{humanize(nft.remainingSupply)} remaining</Trans>
          </b>
        </div>
      ) : null}
      <Link
        href={zoraLink}
        className="flex items-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLinkIcon className="lt-text-gray-500 h-4 w-4" />
        <b>
          <Trans>Open in Zora</Trans>
        </b>
      </Link>
    </div>
  );
};

export default Metadata;
