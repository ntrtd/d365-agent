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
import type { TaxTransGeneralJournalAccountEntryBiEntitiesApi } from './TaxTransGeneralJournalAccountEntryBiEntitiesApi';
import { TaxTransRelationshipType } from './TaxTransRelationshipType';
import { MonetaryAmount } from './MonetaryAmount';

/**
 * This class represents the entity "TaxTransGeneralJournalAccountEntryBiEntities" of service "d365_metadata".
 */
export class TaxTransGeneralJournalAccountEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransGeneralJournalAccountEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransGeneralJournalAccountEntryBiEntities.
   */
  static override _entityName = 'TaxTransGeneralJournalAccountEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransGeneralJournalAccountEntryBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Trans Relationship.
   * @nullable
   */
  declare taxTransRelationship?: TaxTransRelationshipType | null;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Subledger Journal Account Entry.
   */
  declare subledgerJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * General Journal Account Entry.
   */
  declare generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Uncommitted.
   */
  declare taxUncommitted: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Monetary Amount Type.
   * @nullable
   */
  declare monetaryAmountType?: MonetaryAmount | null;
  /**
   * Allocation Factor.
   */
  declare allocationFactor: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: TaxTransGeneralJournalAccountEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransGeneralJournalAccountEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxTransRelationship?: TaxTransRelationshipType | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  subledgerJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  generalJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  taxUncommitted: DeserializedType<T, 'Edm.Int64'>;
  monetaryAmountType?: MonetaryAmount | null;
  allocationFactor: DeserializedType<T, 'Edm.Decimal'>;
}
