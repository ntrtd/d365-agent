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
import type { LedgerJournalHeadersApi } from './LedgerJournalHeadersApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { NoYes } from './NoYes';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import {
  LedgerJournalLines,
  LedgerJournalLinesType
} from './LedgerJournalLines';

/**
 * This class represents the entity "LedgerJournalHeaders" of service "d365_metadata".
 */
export class LedgerJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalHeadersType<T>
{
  /**
   * Technical entity name for LedgerJournalHeaders.
   */
  static override _entityName = 'LedgerJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalHeaders entity.
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
   * Accounting Currency.
   * @nullable
   */
  declare accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Integration Key.
   * @nullable
   */
  declare integrationKey?: DeserializedType<T, 'Edm.String'> | null;
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
   * Journal Total Credit.
   */
  declare journalTotalCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Total Debit.
   */
  declare journalTotalDebit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-many navigation property to the {@link LedgerJournalLines} entity.
   */
  declare ledgerJournalLine: LedgerJournalLines<T>[];

  constructor(_entityApi: LedgerJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  accountingCurrency?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  integrationKey?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  isPosted?: NoYes | null;
  journalTotalCredit: DeserializedType<T, 'Edm.Decimal'>;
  journalTotalDebit: DeserializedType<T, 'Edm.Decimal'>;
  legalEntity?: LegalEntitiesType<T> | null;
  ledgerJournalLine: LedgerJournalLinesType<T>[];
}
