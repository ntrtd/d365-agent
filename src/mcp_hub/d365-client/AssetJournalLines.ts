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
import type { AssetJournalLinesApi } from './AssetJournalLinesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { AssetTransTypeJournal } from './AssetTransTypeJournal';
import { AssetDocumentTypeJp } from './AssetDocumentTypeJp';
import {
  AssetJournalHeaders,
  AssetJournalHeadersType
} from './AssetJournalHeaders';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { VoucherTypes, VoucherTypesType } from './VoucherTypes';
import { Currencies, CurrenciesType } from './Currencies';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import { ValueModelSetups, ValueModelSetupsType } from './ValueModelSetups';

/**
 * This class represents the entity "AssetJournalLines" of service "d365_metadata".
 */
export class AssetJournalLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetJournalLinesType<T>
{
  /**
   * Technical entity name for AssetJournalLines.
   */
  static override _entityName = 'AssetJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetJournalLines entity.
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
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
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
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Model.
   * @nullable
   */
  declare valueModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Document Type.
   * @nullable
   */
  declare documentType?: AssetDocumentTypeJp | null;
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
   * Offset Fin Tag Display Value.
   * @nullable
   */
  declare offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Id.
   * @nullable
   */
  declare documentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Credit Amount Reporting Currency.
   */
  declare creditAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Debit Amount Reporting Currency.
   */
  declare debitAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link AssetJournalHeaders} entity.
   */
  declare assetJournalHeader?: AssetJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare assetJournalLineOffsetLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link VoucherTypes} entity.
   */
  declare voucherType?: VoucherTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare assetJournalLineCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare assetJournalLineLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link ValueModelSetups} entity.
   */
  declare assetJournalLineValueModel?: ValueModelSetups<T> | null;

  constructor(_entityApi: AssetJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  offsetAccountType?: LedgerJournalAcType | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  consumptionUnits: DeserializedType<T, 'Edm.Decimal'>;
  transactionType?: AssetTransTypeJournal | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  valueModel?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucher?: DeserializedType<T, 'Edm.String'> | null;
  chineseVoucherType?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: AssetDocumentTypeJp | null;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  offsetFinTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  documentId?: DeserializedType<T, 'Edm.String'> | null;
  creditAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  debitAmountReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  assetJournalHeader?: AssetJournalHeadersType<T> | null;
  assetJournalLineOffsetLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  voucherType?: VoucherTypesType<T> | null;
  assetJournalLineCurrency?: CurrenciesType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  assetJournalLineLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  assetJournalLineValueModel?: ValueModelSetupsType<T> | null;
}
