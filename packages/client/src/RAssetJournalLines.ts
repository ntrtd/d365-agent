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
import type { RAssetJournalLinesApi } from './RAssetJournalLinesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { RAssetTransType } from './RAssetTransType';
import {
  AssetJournalHeaders,
  AssetJournalHeadersType
} from './AssetJournalHeaders';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { Currencies, CurrenciesType } from './Currencies';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "RAssetJournalLines" of service "d365_metadata".
 */
export class RAssetJournalLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetJournalLinesType<T>
{
  /**
   * Technical entity name for RAssetJournalLines.
   */
  static override _entityName = 'RAssetJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetJournalLines entity.
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
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Credit Amount.
   */
  declare creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Depreciation Bonus.
   * @nullable
   */
  declare depreciationBonus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value Model.
   * @nullable
   */
  declare valueModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: RAssetTransType | null;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * One-to-one navigation property to the {@link AssetJournalHeaders} entity.
   */
  declare assetJournalHeader?: AssetJournalHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare rAssetJournalLineOffsetLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare rAssetJournalLineCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare rAssetJournalLineLedgerDimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: RAssetJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  depreciationBonus?: DeserializedType<T, 'Edm.String'> | null;
  valueModel?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  accountType?: LedgerJournalAcType | null;
  transactionType?: RAssetTransType | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountType?: LedgerJournalAcType | null;
  assetJournalHeader?: AssetJournalHeadersType<T> | null;
  rAssetJournalLineOffsetLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  rAssetJournalLineCurrency?: CurrenciesType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  rAssetJournalLineLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
}
