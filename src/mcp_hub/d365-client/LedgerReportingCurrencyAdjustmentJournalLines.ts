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
import type { LedgerReportingCurrencyAdjustmentJournalLinesApi } from './LedgerReportingCurrencyAdjustmentJournalLinesApi';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import { Currencies, CurrenciesType } from './Currencies';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  LedgerReportingCurrencyAdjustmentJournalHeaders,
  LedgerReportingCurrencyAdjustmentJournalHeadersType
} from './LedgerReportingCurrencyAdjustmentJournalHeaders';

/**
 * This class represents the entity "LedgerReportingCurrencyAdjustmentJournalLines" of service "d365_metadata".
 */
export class LedgerReportingCurrencyAdjustmentJournalLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerReportingCurrencyAdjustmentJournalLinesType<T>
{
  /**
   * Technical entity name for LedgerReportingCurrencyAdjustmentJournalLines.
   */
  static override _entityName = 'LedgerReportingCurrencyAdjustmentJournalLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerReportingCurrencyAdjustmentJournalLines entity.
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
   * Debit Amount.
   */
  declare debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
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
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLineCompany?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLineCurrency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLineLedgerDimension?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link LedgerReportingCurrencyAdjustmentJournalHeaders} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalHeader?: LedgerReportingCurrencyAdjustmentJournalHeaders<T> | null;

  constructor(_entityApi: LedgerReportingCurrencyAdjustmentJournalLinesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerReportingCurrencyAdjustmentJournalLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  creditAmount: DeserializedType<T, 'Edm.Decimal'>;
  debitAmount: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ledgerReportingCurrencyAdjustmentJournalLineCompany?: LegalEntitiesType<T> | null;
  ledgerReportingCurrencyAdjustmentJournalLineCurrency?: CurrenciesType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  ledgerReportingCurrencyAdjustmentJournalLineLedgerDimension?: DimensionCombinationsType<T> | null;
  ledgerReportingCurrencyAdjustmentJournalHeader?: LedgerReportingCurrencyAdjustmentJournalHeadersType<T> | null;
}
