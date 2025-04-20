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
import type { SadDocumentLedgerJournalsApi } from './SadDocumentLedgerJournalsApi';
import {
  SadDocumentLineLedgerJournals,
  SadDocumentLineLedgerJournalsType
} from './SadDocumentLineLedgerJournals';
import {
  SadDocumentInvoiceLedgerJournals,
  SadDocumentInvoiceLedgerJournalsType
} from './SadDocumentInvoiceLedgerJournals';

/**
 * This class represents the entity "SADDocumentLedgerJournals" of service "d365_metadata".
 */
export class SadDocumentLedgerJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SadDocumentLedgerJournalsType<T>
{
  /**
   * Technical entity name for SadDocumentLedgerJournals.
   */
  static override _entityName = 'SADDocumentLedgerJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadDocumentLedgerJournals entity.
   */
  static _keys = ['dataAreaId', 'SADNumber', 'SADDate'];
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
   * Date Of Vat Register.
   */
  declare dateOfVatRegister: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Duty Government.
   * @nullable
   */
  declare dutyGovernment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Misc Payments.
   */
  declare miscPayments: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Carrier.
   * @nullable
   */
  declare carrier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transport.
   */
  declare transport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link SadDocumentLineLedgerJournals} entity.
   */
  declare sadDocumentLineLedgerJournal: SadDocumentLineLedgerJournals<T>[];
  /**
   * One-to-many navigation property to the {@link SadDocumentInvoiceLedgerJournals} entity.
   */
  declare sadDocumentInvoiceLedgerJournal: SadDocumentInvoiceLedgerJournals<T>[];

  constructor(_entityApi: SadDocumentLedgerJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface SadDocumentLedgerJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sadNumber: DeserializedType<T, 'Edm.String'>;
  sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateOfVatRegister: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dutyGovernment?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  miscPayments: DeserializedType<T, 'Edm.Decimal'>;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  carrier?: DeserializedType<T, 'Edm.String'> | null;
  transport: DeserializedType<T, 'Edm.Decimal'>;
  sadDocumentLineLedgerJournal: SadDocumentLineLedgerJournalsType<T>[];
  sadDocumentInvoiceLedgerJournal: SadDocumentInvoiceLedgerJournalsType<T>[];
}
