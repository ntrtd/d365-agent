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
import type { GeneralJournalAccountEntryBiEntitiesApi } from './GeneralJournalAccountEntryBiEntitiesApi';
import { LedgerPostingType } from './LedgerPostingType';
import { NoYes } from './NoYes';
import { LedgerTransType } from './LedgerTransType';
import { AssetLeasePostingTypes } from './AssetLeasePostingTypes';

/**
 * This class represents the entity "GeneralJournalAccountEntryBiEntities" of service "d365_metadata".
 */
export class GeneralJournalAccountEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GeneralJournalAccountEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for GeneralJournalAccountEntryBiEntities.
   */
  static override _entityName = 'GeneralJournalAccountEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GeneralJournalAccountEntryBiEntities entity.
   */
  static _keys = ['SourceKey'];
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Accounting Currency Amount.
   */
  declare accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Created By Transaction Id.
   */
  declare createdByTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Credit.
   * @nullable
   */
  declare isCredit?: NoYes | null;
  /**
   * Fin Tag.
   */
  declare finTag: DeserializedType<T, 'Edm.Int64'>;
  /**
   * General Journal Entry.
   */
  declare generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reason Ref.
   */
  declare reasonRef: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Asset Lease Transaction Type.
   * @nullable
   */
  declare assetLeaseTransactionType?: LedgerTransType | null;
  /**
   * Asset Lease Posting Types.
   * @nullable
   */
  declare assetLeasePostingTypes?: AssetLeasePostingTypes | null;
  /**
   * Transaction Currency Code.
   * @nullable
   */
  declare transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Account.
   * @nullable
   */
  declare ledgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Reference.
   * @nullable
   */
  declare paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Amount.
   */
  declare reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Currency Amount.
   */
  declare transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Table Data Area Id.
   * @nullable
   */
  declare projTableDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Id Sa.
   * @nullable
   */
  declare projIdSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Correction.
   * @nullable
   */
  declare isCorrection?: NoYes | null;
  /**
   * Historical Exchange Rate Date.
   */
  declare historicalExchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Allocation Level.
   */
  declare allocationLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Account Entry.
   */
  declare originalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Main Account.
   */
  declare mainAccount: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: GeneralJournalAccountEntryBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface GeneralJournalAccountEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  postingType?: LedgerPostingType | null;
  accountingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  createdByTransactionId: DeserializedType<T, 'Edm.Int64'>;
  isCredit?: NoYes | null;
  finTag: DeserializedType<T, 'Edm.Int64'>;
  generalJournalEntry: DeserializedType<T, 'Edm.Int64'>;
  reasonRef: DeserializedType<T, 'Edm.Int64'>;
  assetLeaseTransactionType?: LedgerTransType | null;
  assetLeasePostingTypes?: AssetLeasePostingTypes | null;
  transactionCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  ledgerAccount?: DeserializedType<T, 'Edm.String'> | null;
  paymentReference?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  transactionCurrencyAmount: DeserializedType<T, 'Edm.Decimal'>;
  projTableDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  projIdSa?: DeserializedType<T, 'Edm.String'> | null;
  isCorrection?: NoYes | null;
  historicalExchangeRateDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  allocationLevel: DeserializedType<T, 'Edm.Int32'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  originalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
  mainAccount: DeserializedType<T, 'Edm.Int64'>;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
}
