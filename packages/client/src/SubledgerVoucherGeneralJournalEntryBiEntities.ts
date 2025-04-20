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
import type { SubledgerVoucherGeneralJournalEntryBiEntitiesApi } from './SubledgerVoucherGeneralJournalEntryBiEntitiesApi';

/**
 * This class represents the entity "SubledgerVoucherGeneralJournalEntryBiEntities" of service "d365_metadata".
 */
export class SubledgerVoucherGeneralJournalEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubledgerVoucherGeneralJournalEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for SubledgerVoucherGeneralJournalEntryBiEntities.
   */
  static override _entityName = 'SubledgerVoucherGeneralJournalEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubledgerVoucherGeneralJournalEntryBiEntities entity.
   */
  static _keys = ['RecordId'];
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Record Version.
   */
  declare recordVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Subledger Journal Entry.
   */
  declare subledgerJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Voucher Data Area Id.
   * @nullable
   */
  declare voucherDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * General Journal Entry.
   */
  declare generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transfer Id.
   */
  declare transferId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Partition Id.
   */
  declare partitionId: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: SubledgerVoucherGeneralJournalEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SubledgerVoucherGeneralJournalEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  recordId: DeserializedType<T, 'Edm.Int64'>;
  recordVersion: DeserializedType<T, 'Edm.Int32'>;
  subledgerJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  voucherDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transferId: DeserializedType<T, 'Edm.Int64'>;
  partitionId: DeserializedType<T, 'Edm.Int64'>;
}
