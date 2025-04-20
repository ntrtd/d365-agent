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
import type { LedgerEntryBiEntitiesApi } from './LedgerEntryBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "LedgerEntryBiEntities" of service "d365_metadata".
 */
export class LedgerEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for LedgerEntryBiEntities.
   */
  static override _entityName = 'LedgerEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerEntryBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Payment Mode.
   * @nullable
   */
  declare paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Bridging Posting.
   * @nullable
   */
  declare isBridgingPosting?: NoYes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Exchange Adjustment.
   * @nullable
   */
  declare isExchangeAdjustment?: NoYes | null;
  /**
   * Consolidated Company.
   * @nullable
   */
  declare consolidatedCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Data Area Id.
   * @nullable
   */
  declare bankDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Journal Account Entry.
   */
  declare generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Company Bank Account.
   * @nullable
   */
  declare companyBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Party Bank Account.
   * @nullable
   */
  declare thirdPartyBankAccount?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LedgerEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  paymentMode?: DeserializedType<T, 'Edm.String'> | null;
  isBridgingPosting?: NoYes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  isExchangeAdjustment?: NoYes | null;
  consolidatedCompany?: DeserializedType<T, 'Edm.String'> | null;
  bankDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  companyBankAccount?: DeserializedType<T, 'Edm.String'> | null;
  thirdPartyBankAccount?: DeserializedType<T, 'Edm.String'> | null;
}
