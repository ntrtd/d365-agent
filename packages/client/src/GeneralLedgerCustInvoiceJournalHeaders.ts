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
import type { GeneralLedgerCustInvoiceJournalHeadersApi } from './GeneralLedgerCustInvoiceJournalHeadersApi';
import { NoYes } from './NoYes';
import {
  GeneralLedgerCustInvoiceJournalLines,
  GeneralLedgerCustInvoiceJournalLinesType
} from './GeneralLedgerCustInvoiceJournalLines';

/**
 * This class represents the entity "GeneralLedgerCustInvoiceJournalHeaders" of service "d365_metadata".
 */
export class GeneralLedgerCustInvoiceJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GeneralLedgerCustInvoiceJournalHeadersType<T>
{
  /**
   * Technical entity name for GeneralLedgerCustInvoiceJournalHeaders.
   */
  static override _entityName = 'GeneralLedgerCustInvoiceJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GeneralLedgerCustInvoiceJournalHeaders entity.
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
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link GeneralLedgerCustInvoiceJournalLines} entity.
   */
  declare custInvoiceJournalLine: GeneralLedgerCustInvoiceJournalLines<T>[];

  constructor(_entityApi: GeneralLedgerCustInvoiceJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface GeneralLedgerCustInvoiceJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPosted?: NoYes | null;
  custInvoiceJournalLine: GeneralLedgerCustInvoiceJournalLinesType<T>[];
}
