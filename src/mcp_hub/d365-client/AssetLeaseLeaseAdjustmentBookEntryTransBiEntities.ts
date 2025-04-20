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
import type { AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesApi } from './AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesApi';
import { AssetLeasePostingTypes } from './AssetLeasePostingTypes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { LedgerTransType } from './LedgerTransType';

/**
 * This class represents the entity "AssetLeaseLeaseAdjustmentBookEntryTransBiEntities" of service "d365_metadata".
 */
export class AssetLeaseLeaseAdjustmentBookEntryTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesType<T>
{
  /**
   * Technical entity name for AssetLeaseLeaseAdjustmentBookEntryTransBiEntities.
   */
  static override _entityName =
    'AssetLeaseLeaseAdjustmentBookEntryTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetLeaseLeaseAdjustmentBookEntryTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'LeaseAdjustment', 'LeaseBookId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lease Adjustment.
   */
  declare leaseAdjustment: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Lease Book Id.
   */
  declare leaseBookId: DeserializedType<T, 'Edm.String'>;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Amount Credit.
   */
  declare accountingAmountCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Types.
   * @nullable
   */
  declare postingTypes?: AssetLeasePostingTypes | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Debit.
   */
  declare amountDebit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Amount Credit.
   */
  declare reportingAmountCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Credit.
   */
  declare amountCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Amount Debit.
   */
  declare reportingAmountDebit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: LedgerTransType | null;
  /**
   * Transaction Date.
   */
  declare transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Dimension.
   */
  declare ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Accounting Amount Debit.
   */
  declare accountingAmountDebit: DeserializedType<T, 'Edm.Decimal'>;

  constructor(
    _entityApi: AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetLeaseLeaseAdjustmentBookEntryTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  leaseAdjustment: DeserializedType<T, 'Edm.Int64'>;
  leaseBookId: DeserializedType<T, 'Edm.String'>;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  accountingAmountCredit: DeserializedType<T, 'Edm.Decimal'>;
  postingTypes?: AssetLeasePostingTypes | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  amountDebit: DeserializedType<T, 'Edm.Decimal'>;
  reportingAmountCredit: DeserializedType<T, 'Edm.Decimal'>;
  amountCredit: DeserializedType<T, 'Edm.Decimal'>;
  reportingAmountDebit: DeserializedType<T, 'Edm.Decimal'>;
  accountType?: LedgerJournalAcType | null;
  transactionType?: LedgerTransType | null;
  transactionDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerDimension: DeserializedType<T, 'Edm.Int64'>;
  accountingAmountDebit: DeserializedType<T, 'Edm.Decimal'>;
}
