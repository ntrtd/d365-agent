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
import type { RAssetJournalHeadersApi } from './RAssetJournalHeadersApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { NoYes } from './NoYes';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "RAssetJournalHeaders" of service "d365_metadata".
 */
export class RAssetJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RAssetJournalHeadersType<T>
{
  /**
   * Technical entity name for RAssetJournalHeaders.
   */
  static override _entityName = 'RAssetJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetJournalHeaders entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;

  constructor(_entityApi: RAssetJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  isPosted?: NoYes | null;
  legalEntity?: LegalEntitiesType<T> | null;
}
