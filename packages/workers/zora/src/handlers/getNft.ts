import '@sentry/tracing';

import getZoraChainIsMainnet from '@lenster/lib/nft/getZoraChainIsMainnet';
import response from '@lenster/lib/response';

import type { WorkerRequest } from '../types';

export default async (request: WorkerRequest) => {
  const transaction = request.sentry?.startTransaction({
    name: '@lenster/zora/getNft'
  });

  const { chain, address, token } = request.query;

  if (!chain || !address) {
    return response({
      success: false,
      error: 'No chain and address provided'
    });
  }

  try {
    const network = getZoraChainIsMainnet(chain as string) ? '' : 'testnet.';
    const zoraResponse = await fetch(
      `https://${network}zora.co/api/personalize/collection/${chain}:${address}/${
        token || ''
      }`
    );
    const nft: { collection: any } = await zoraResponse.json();

    return response({ success: true, nft: nft.collection || null });
  } catch (error) {
    request.sentry?.captureException(error);
    throw error;
  } finally {
    transaction?.finish();
  }
};
