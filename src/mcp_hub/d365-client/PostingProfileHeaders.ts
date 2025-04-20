/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { PostingProfileHeadersApi } from './PostingProfileHeadersApi';
import { NoYes } from './NoYes';
import { DimSettlementCtrlTypeRu } from './DimSettlementCtrlTypeRu';

/**
 * This class represents the entity "PostingProfileHeaders" of service "d365_metadata".
 */
export class PostingProfileHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PostingProfileHeadersType<T>
{
  /**
   * Technical entity name for PostingProfileHeaders.
   */
  static override _entityName = 'PostingProfileHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostingProfileHeaders entity.
   */
  static _keys = ['dataAreaId', 'PostingProfile'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Transaction Cancel Enabled.
   * @nullable
   */
  declare isTransactionCancelEnabled?: NoYes | null;
  /**
   * Posting Profile To Close Settlement.
   * @nullable
   */
  declare postingProfileToCloseSettlement?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Transaction Included In Auto Settlement.
   * @nullable
   */
  declare isTransactionIncludedInAutoSettlement?: NoYes | null;
  /**
   * Allow Empty Dimension Value.
   * @nullable
   */
  declare allowEmptyDimensionValue?: DimSettlementCtrlTypeRu | null;

  constructor(_entityApi: PostingProfileHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PostingProfileHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  isTransactionCancelEnabled?: NoYes | null;
  postingProfileToCloseSettlement?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isTransactionIncludedInAutoSettlement?: NoYes | null;
  allowEmptyDimensionValue?: DimSettlementCtrlTypeRu | null;
}
