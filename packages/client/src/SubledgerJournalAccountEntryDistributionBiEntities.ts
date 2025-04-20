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
import type { SubledgerJournalAccountEntryDistributionBiEntitiesApi } from './SubledgerJournalAccountEntryDistributionBiEntitiesApi';

/**
 * This class represents the entity "SubledgerJournalAccountEntryDistributionBiEntities" of service "d365_metadata".
 */
export class SubledgerJournalAccountEntryDistributionBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubledgerJournalAccountEntryDistributionBiEntitiesType<T>
{
  /**
   * Technical entity name for SubledgerJournalAccountEntryDistributionBiEntities.
   */
  static override _entityName =
    'SubledgerJournalAccountEntryDistributionBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubledgerJournalAccountEntryDistributionBiEntities entity.
   */
  static _keys = ['AccountingDistribution', 'SubledgerJournalAccountEntry'];
  /**
   * Accounting Distribution.
   */
  declare accountingDistribution: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Subledger Journal Account Entry.
   */
  declare subledgerJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parent Distribution.
   */
  declare parentDistribution: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: SubledgerJournalAccountEntryDistributionBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface SubledgerJournalAccountEntryDistributionBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountingDistribution: DeserializedType<T, 'Edm.Int64'>;
  subledgerJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  parentDistribution: DeserializedType<T, 'Edm.Int64'>;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
