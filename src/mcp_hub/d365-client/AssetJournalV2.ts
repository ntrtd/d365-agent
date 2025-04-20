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
import type { AssetJournalV2Api } from './AssetJournalV2Api';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { NoYes } from './NoYes';
import { AssetTransTypeJournal } from './AssetTransTypeJournal';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "AssetJournalV2" of service "d365_metadata".
 */
export class AssetJournalV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetJournalV2Type<T>
{
  /**
   * Technical entity name for AssetJournalV2.
   */
  static override _entityName = 'AssetJournalV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetJournalV2 entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Units.
   */
  declare consumptionUnits: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: AssetTransTypeJournal | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Currency Exch Rate.
   */
  declare reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Book Id.
   * @nullable
   */
  declare bookId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher.
   * @nullable
   */
  declare chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Chinese Voucher Type.
   * @nullable
   */
  declare chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indian Asset Group.
   * @nullable
   */
  declare indianAssetGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Exchange Rate Secondary.
   */
  declare exchangeRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reporting Currency Exch Rate Secondary.
   */
  declare reportingCurrencyExchRateSecondary: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Amount Reporting Currency.
   */
  declare creditAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Debit Amount Reporting Currency.
   */
  declare debitAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetBooks?: ValueModelSetups<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare voucherType?: VoucherTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare assetJournalV2OffsetLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare assetJournalV2LedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare assetJournalV2DefaultDimensionEntity?: DimensionSets<T> | null;

  constructor(_entityApi: AssetJournalV2Api<T>) {
    super(_entityApi);
  }
}

export interface AssetJournalV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  postingLayer?: CurrentOperationsTax | null;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  offsetAccountType?: LedgerJournalAcType | null;
  isPosted?: NoYes | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  consumptionUnits: DeserializedType<T, 'Edm.Decimal'>;
  transactionType?: AssetTransTypeJournal | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  reportingCurrencyExchRate: DeserializedType<T, 'Edm.Decimal'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bookId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  indianAssetGroup?: DeserializedType<T, 'Edm.String'> | null;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  exchangeRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  reportingCurrencyExchRateSecondary: DeserializedType<T, 'Edm.Decimal'>;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  creditAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  debitAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  assetBooks?: ValueModelSetupsType<T> | null;
  voucherType?: VoucherTypesType<T> | null;
  assetJournalV2OffsetLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  assetJournalV2LedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  assetJournalV2DefaultDimensionEntity?: DimensionSetsType<T> | null;
}
