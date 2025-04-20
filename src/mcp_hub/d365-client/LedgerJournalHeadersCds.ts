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
import type { LedgerJournalHeadersCdsApi } from './LedgerJournalHeadersCdsApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { NoYes } from './NoYes';
import {
  LedgerJournalCdsLines,
  LedgerJournalCdsLinesType
} from './LedgerJournalCdsLines';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';

/**
 * This class represents the entity "LedgerJournalHeadersCDS" of service "d365_metadata".
 */
export class LedgerJournalHeadersCds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerJournalHeadersCdsType<T>
{
  /**
   * Technical entity name for LedgerJournalHeadersCds.
   */
  static override _entityName = 'LedgerJournalHeadersCDS';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerJournalHeadersCds entity.
   */
  static _keys = ['dataAreaId', 'IntegrationComputedKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Integration Computed Key.
   */
  declare integrationComputedKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   * @nullable
   */
  declare journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link LedgerJournalCdsLines} entity.
   */
  declare ledgerJournalCdsLine: LedgerJournalCdsLines<T>[];
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;

  constructor(_entityApi: LedgerJournalHeadersCdsApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerJournalHeadersCdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  integrationComputedKey: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  integrationKey?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postingLayer?: CurrentOperationsTax | null;
  isPosted?: NoYes | null;
  journalTotalCredit: DeserializedType<T, 'Edm.Decimal'>;
  journalTotalDebit: DeserializedType<T, 'Edm.Decimal'>;
  ledgerJournalCdsLine: LedgerJournalCdsLinesType<T>[];
  legalEntity?: LegalEntitiesType<T> | null;
}
