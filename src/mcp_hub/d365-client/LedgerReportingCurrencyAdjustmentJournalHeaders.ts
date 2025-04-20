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
import type { LedgerReportingCurrencyAdjustmentJournalHeadersApi } from './LedgerReportingCurrencyAdjustmentJournalHeadersApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { NoYes } from './NoYes';
import {
  LedgerReportingCurrencyAdjustmentJournalLines,
  LedgerReportingCurrencyAdjustmentJournalLinesType
} from './LedgerReportingCurrencyAdjustmentJournalLines';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "LedgerReportingCurrencyAdjustmentJournalHeaders" of service "d365_metadata".
 */
export class LedgerReportingCurrencyAdjustmentJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerReportingCurrencyAdjustmentJournalHeadersType<T>
{
  /**
   * Technical entity name for LedgerReportingCurrencyAdjustmentJournalHeaders.
   */
  static override _entityName =
    'LedgerReportingCurrencyAdjustmentJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerReportingCurrencyAdjustmentJournalHeaders entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Reporting Currency.
   * @nullable
   */
  declare reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Total Debit Reporting Currency.
   */
  declare journalTotalDebitReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Journal Total Credit Reporting Currency.
   */
  declare journalTotalCreditReportingCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * One-to-many navigation property to the {@link LedgerReportingCurrencyAdjustmentJournalLines} entity.
   */
  declare ledgerReportingCurrencyAdjustmentJournalLine: LedgerReportingCurrencyAdjustmentJournalLines<T>[];
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;

  constructor(
    _entityApi: LedgerReportingCurrencyAdjustmentJournalHeadersApi<T>
  ) {
    super(_entityApi);
  }
}

export interface LedgerReportingCurrencyAdjustmentJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  reportingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  journalTotalDebitReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  isPosted?: NoYes | null;
  journalTotalCreditReportingCurrency: DeserializedType<T, 'Edm.Decimal'>;
  ledgerReportingCurrencyAdjustmentJournalLine: LedgerReportingCurrencyAdjustmentJournalLinesType<T>[];
  legalEntity?: LegalEntitiesType<T> | null;
}
