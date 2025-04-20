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
import type { GeneralJournalAccountEntryWBiEntitiesApi } from './GeneralJournalAccountEntryWBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "GeneralJournalAccountEntryWBiEntities" of service "d365_metadata".
 */
export class GeneralJournalAccountEntryWBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GeneralJournalAccountEntryWBiEntitiesType<T>
{
  /**
   * Technical entity name for GeneralJournalAccountEntryWBiEntities.
   */
  static override _entityName = 'GeneralJournalAccountEntryWBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GeneralJournalAccountEntryWBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consolidated Ref Rec Id Br.
   */
  declare consolidatedRefRecIdBr: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * General Journal Entry.
   */
  declare generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * General Journal Account Entry.
   */
  declare generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consolidated Voucher Br.
   * @nullable
   */
  declare consolidatedVoucherBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bond Batch Trans Ru.
   */
  declare bondBatchTransRu: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Accounting Closing Br.
   * @nullable
   */
  declare isAccountingClosingBr?: NoYes | null;

  constructor(_entityApi: GeneralJournalAccountEntryWBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface GeneralJournalAccountEntryWBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  consolidatedRefRecIdBr: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  consolidatedVoucherBr?: DeserializedType<T, 'Edm.String'> | null;
  bondBatchTransRu: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  isAccountingClosingBr?: NoYes | null;
}
