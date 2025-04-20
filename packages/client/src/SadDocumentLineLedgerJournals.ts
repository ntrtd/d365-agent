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
import type { SadDocumentLineLedgerJournalsApi } from './SadDocumentLineLedgerJournalsApi';
import {
  SadDocumentLedgerJournals,
  SadDocumentLedgerJournalsType
} from './SadDocumentLedgerJournals';
import {
  SadDocumentInvoiceLineLedgerJournals,
  SadDocumentInvoiceLineLedgerJournalsType
} from './SadDocumentInvoiceLineLedgerJournals';

/**
 * This class represents the entity "SADDocumentLineLedgerJournals" of service "d365_metadata".
 */
export class SadDocumentLineLedgerJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SadDocumentLineLedgerJournalsType<T>
{
  /**
   * Technical entity name for SadDocumentLineLedgerJournals.
   */
  static override _entityName = 'SADDocumentLineLedgerJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadDocumentLineLedgerJournals entity.
   */
  static _keys = ['dataAreaId', 'SADDate', 'SADNumber', 'Position'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sad Date.
   */
  declare sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sad Number.
   */
  declare sadNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sales Tax Amount.
   */
  declare salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duty.
   */
  declare duty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Excise.
   */
  declare excise: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base For Sad.
   */
  declare baseForSad: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link SadDocumentLedgerJournals} entity.
   */
  declare sadDocumentLedgerJournal?: SadDocumentLedgerJournals<T> | null;
  /**
   * One-to-many navigation property to the {@link SadDocumentInvoiceLineLedgerJournals} entity.
   */
  declare sadDocumentInvoiceLineLedgerJournal: SadDocumentInvoiceLineLedgerJournals<T>[];

  constructor(_entityApi: SadDocumentLineLedgerJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface SadDocumentLineLedgerJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sadNumber: DeserializedType<T, 'Edm.String'>;
  position: DeserializedType<T, 'Edm.Int32'>;
  salesTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  duty: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  excise: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  baseForSad: DeserializedType<T, 'Edm.Decimal'>;
  sadDocumentLedgerJournal?: SadDocumentLedgerJournalsType<T> | null;
  sadDocumentInvoiceLineLedgerJournal: SadDocumentInvoiceLineLedgerJournalsType<T>[];
}
