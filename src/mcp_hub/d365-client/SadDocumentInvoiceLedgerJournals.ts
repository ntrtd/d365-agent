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
import type { SadDocumentInvoiceLedgerJournalsApi } from './SadDocumentInvoiceLedgerJournalsApi';
import {
  SadDocumentLedgerJournals,
  SadDocumentLedgerJournalsType
} from './SadDocumentLedgerJournals';
import {
  SadDocumentInvoiceLineLedgerJournals,
  SadDocumentInvoiceLineLedgerJournalsType
} from './SadDocumentInvoiceLineLedgerJournals';

/**
 * This class represents the entity "SADDocumentInvoiceLedgerJournals" of service "d365_metadata".
 */
export class SadDocumentInvoiceLedgerJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SadDocumentInvoiceLedgerJournalsType<T>
{
  /**
   * Technical entity name for SadDocumentInvoiceLedgerJournals.
   */
  static override _entityName = 'SADDocumentInvoiceLedgerJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadDocumentInvoiceLedgerJournals entity.
   */
  static _keys = ['dataAreaId', 'SADNumber', 'SADDate', 'Invoice'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sad Number.
   */
  declare sadNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Sad Date.
   */
  declare sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice.
   */
  declare invoice: DeserializedType<T, 'Edm.String'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SadDocumentLedgerJournals} entity.
   */
  declare sadDocumentLedgerJournal?: SadDocumentLedgerJournals<T> | null;
  /**
   * One-to-many navigation property to the {@link SadDocumentInvoiceLineLedgerJournals} entity.
   */
  declare sadDocumentInvoiceLineLedgerJournal: SadDocumentInvoiceLineLedgerJournals<T>[];

  constructor(_entityApi: SadDocumentInvoiceLedgerJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface SadDocumentInvoiceLedgerJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sadNumber: DeserializedType<T, 'Edm.String'>;
  sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoice: DeserializedType<T, 'Edm.String'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  sadDocumentLedgerJournal?: SadDocumentLedgerJournalsType<T> | null;
  sadDocumentInvoiceLineLedgerJournal: SadDocumentInvoiceLineLedgerJournalsType<T>[];
}
