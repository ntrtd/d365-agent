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
import type { AccountingDistributionBiEntitiesApi } from './AccountingDistributionBiEntitiesApi';
import { DistributionAmountSource } from './DistributionAmountSource';
import { AccountingDistributionReferenceRole } from './AccountingDistributionReferenceRole';
import { AccountRole } from './AccountRole';
import { MonetaryAmount } from './MonetaryAmount';

/**
 * This class represents the entity "AccountingDistributionBiEntities" of service "d365_metadata".
 */
export class AccountingDistributionBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccountingDistributionBiEntitiesType<T>
{
  /**
   * Technical entity name for AccountingDistributionBiEntities.
   */
  static override _entityName = 'AccountingDistributionBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccountingDistributionBiEntities entity.
   */
  static _keys = ['SourceDocumentLine', 'Number'];
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Number.
   */
  declare number: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reference Distribution.
   */
  declare referenceDistribution: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Document Header.
   */
  declare sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Transaction Currency.
   * @nullable
   */
  declare transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Finalize Accounting Event.
   */
  declare finalizeAccountingEvent: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Legal Entity.
   */
  declare accountingLegalEntity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Event.
   */
  declare accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Allocation Factor.
   */
  declare allocationFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Date.
   */
  declare accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Accounting Currency.
   * @nullable
   */
  declare accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Source.
   * @nullable
   */
  declare amountSource?: DistributionAmountSource | null;
  /**
   * Reference Role.
   * @nullable
   */
  declare referenceRole?: AccountingDistributionReferenceRole | null;
  /**
   * Parent Distribution.
   */
  declare parentDistribution: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: AccountRole | null;
  /**
   * Monetary Amount.
   * @nullable
   */
  declare monetaryAmount?: MonetaryAmount | null;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AccountingDistributionBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface AccountingDistributionBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  number: DeserializedType<T, 'Edm.Int64'>;
  referenceDistribution: DeserializedType<T, 'Edm.Int64'>;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourceDocumentHeader: DeserializedType<T, 'Edm.Int64'>;
  transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  finalizeAccountingEvent: DeserializedType<T, 'Edm.Int64'>;
  accountingLegalEntity: DeserializedType<T, 'Edm.Int64'>;
  accountingEvent: DeserializedType<T, 'Edm.Int64'>;
  allocationFactor: DeserializedType<T, 'Edm.Decimal'>;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  accountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  amountSource?: DistributionAmountSource | null;
  referenceRole?: AccountingDistributionReferenceRole | null;
  parentDistribution: DeserializedType<T, 'Edm.Int64'>;
  type?: AccountRole | null;
  monetaryAmount?: MonetaryAmount | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
}
