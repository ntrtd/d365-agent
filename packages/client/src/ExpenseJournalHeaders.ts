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
import type { ExpenseJournalHeadersApi } from './ExpenseJournalHeadersApi';
import { NoYes } from './NoYes';
import { TaxObligationCompany } from './TaxObligationCompany';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import {
  ExpenseJournalLines,
  ExpenseJournalLinesType
} from './ExpenseJournalLines';

/**
 * This class represents the entity "ExpenseJournalHeaders" of service "d365_metadata".
 */
export class ExpenseJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExpenseJournalHeadersType<T>
{
  /**
   * Technical entity name for ExpenseJournalHeaders.
   */
  static override _entityName = 'ExpenseJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExpenseJournalHeaders entity.
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
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity For Intercompany Tax.
   * @nullable
   */
  declare legalEntityForIntercompanyTax?: TaxObligationCompany | null;
  /**
   * Rejected By.
   * @nullable
   */
  declare rejectedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reported As Ready By.
   * @nullable
   */
  declare reportedAsReadyBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name Id.
   * @nullable
   */
  declare journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversing Date.
   */
  declare reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Approved By.
   * @nullable
   */
  declare approvedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reversing Entry.
   * @nullable
   */
  declare isReversingEntry?: NoYes | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * One-to-many navigation property to the {@link ExpenseJournalLines} entity.
   */
  declare expenseJournalLine: ExpenseJournalLines<T>[];

  constructor(_entityApi: ExpenseJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ExpenseJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  isPosted?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityForIntercompanyTax?: TaxObligationCompany | null;
  rejectedBy?: DeserializedType<T, 'Edm.String'> | null;
  reportedAsReadyBy?: DeserializedType<T, 'Edm.String'> | null;
  journalNameId?: DeserializedType<T, 'Edm.String'> | null;
  reversingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvedBy?: DeserializedType<T, 'Edm.String'> | null;
  isReversingEntry?: NoYes | null;
  postingLayer?: CurrentOperationsTax | null;
  expenseJournalLine: ExpenseJournalLinesType<T>[];
}
