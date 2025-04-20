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
import type { VendInvoiceJournalHeadersApi } from './VendInvoiceJournalHeadersApi';
import { NoYes } from './NoYes';
import {
  VendInvoiceJournalLines,
  VendInvoiceJournalLinesType
} from './VendInvoiceJournalLines';

/**
 * This class represents the entity "VendInvoiceJournalHeaders" of service "d365_metadata".
 */
export class VendInvoiceJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendInvoiceJournalHeadersType<T>
{
  /**
   * Technical entity name for VendInvoiceJournalHeaders.
   */
  static override _entityName = 'VendInvoiceJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendInvoiceJournalHeaders entity.
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
   * Sales Tax Included.
   * @nullable
   */
  declare salesTaxIncluded?: NoYes | null;
  /**
   * Journal Total Credit.
   */
  declare journalTotalCredit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Total Debit.
   */
  declare journalTotalDebit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link VendInvoiceJournalLines} entity.
   */
  declare vendInvoiceJournalLine: VendInvoiceJournalLines<T>[];

  constructor(_entityApi: VendInvoiceJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VendInvoiceJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPosted?: NoYes | null;
  salesTaxIncluded?: NoYes | null;
  journalTotalCredit: DeserializedType<T, 'Edm.Decimal'>;
  journalTotalDebit: DeserializedType<T, 'Edm.Decimal'>;
  vendInvoiceJournalLine: VendInvoiceJournalLinesType<T>[];
}
