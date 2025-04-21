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
import type { AssetJournalHeadersApi } from './AssetJournalHeadersApi';
import { NoYes } from './NoYes';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import {
  RAssetJournalLines,
  RAssetJournalLinesType
} from './RAssetJournalLines';
import { AssetJournalLines, AssetJournalLinesType } from './AssetJournalLines';

/**
 * This class represents the entity "AssetJournalHeaders" of service "d365_metadata".
 */
export class AssetJournalHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetJournalHeadersType<T>
{
  /**
   * Technical entity name for AssetJournalHeaders.
   */
  static override _entityName = 'AssetJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetJournalHeaders entity.
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
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Currency.
   * @nullable
   */
  declare accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Reporting Currency.
   * @nullable
   */
  declare reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-many navigation property to the {@link RAssetJournalLines} entity.
   */
  declare rAssetJournalLine: RAssetJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link AssetJournalLines} entity.
   */
  declare assetJournalLine: AssetJournalLines<T>[];

  constructor(_entityApi: AssetJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  isPosted?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  rAssetJournalLine: RAssetJournalLinesType<T>[];
  assetJournalLine: AssetJournalLinesType<T>[];
}
