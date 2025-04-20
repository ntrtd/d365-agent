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
import type { SadDocumentInvoiceLineLedgerJournalsApi } from './SadDocumentInvoiceLineLedgerJournalsApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  SadDocumentInvoiceLedgerJournals,
  SadDocumentInvoiceLedgerJournalsType
} from './SadDocumentInvoiceLedgerJournals';
import {
  SadDocumentLineLedgerJournals,
  SadDocumentLineLedgerJournalsType
} from './SadDocumentLineLedgerJournals';

/**
 * This class represents the entity "SADDocumentInvoiceLineLedgerJournals" of service "d365_metadata".
 */
export class SadDocumentInvoiceLineLedgerJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SadDocumentInvoiceLineLedgerJournalsType<T>
{
  /**
   * Technical entity name for SadDocumentInvoiceLineLedgerJournals.
   */
  static override _entityName = 'SADDocumentInvoiceLineLedgerJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SadDocumentInvoiceLineLedgerJournals entity.
   */
  static _keys = ['dataAreaId', 'RecordId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Account Display Value.
   * @nullable
   */
  declare ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Commodity Code.
   * @nullable
   */
  declare itemCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position.
   */
  declare position: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sad Date.
   */
  declare sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sad Number.
   * @nullable
   */
  declare sadNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link SadDocumentInvoiceLedgerJournals} entity.
   */
  declare sadDocumentInvoiceLedgerJournal?: SadDocumentInvoiceLedgerJournals<T> | null;
  /**
   * One-to-one navigation property to the {@link SadDocumentLineLedgerJournals} entity.
   */
  declare sadDocumentLineLedgerJournal?: SadDocumentLineLedgerJournals<T> | null;

  constructor(_entityApi: SadDocumentInvoiceLineLedgerJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface SadDocumentInvoiceLineLedgerJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  ledgerAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  itemCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  position: DeserializedType<T, 'Edm.Int32'>;
  sadDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  sadNumber?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  sadDocumentInvoiceLedgerJournal?: SadDocumentInvoiceLedgerJournalsType<T> | null;
  sadDocumentLineLedgerJournal?: SadDocumentLineLedgerJournalsType<T> | null;
}
