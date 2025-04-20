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
import type { VendorPaymentJournalHeadersApi } from './VendorPaymentJournalHeadersApi';
import { NoYes } from './NoYes';
import {
  VendorPaymentJournalLines,
  VendorPaymentJournalLinesType
} from './VendorPaymentJournalLines';
import {
  VendorPaymentJournalLineSettledInvoices,
  VendorPaymentJournalLineSettledInvoicesType
} from './VendorPaymentJournalLineSettledInvoices';

/**
 * This class represents the entity "VendorPaymentJournalHeaders" of service "d365_metadata".
 */
export class VendorPaymentJournalHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorPaymentJournalHeadersType<T>
{
  /**
   * Technical entity name for VendorPaymentJournalHeaders.
   */
  static override _entityName = 'VendorPaymentJournalHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPaymentJournalHeaders entity.
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
   * Charge Bearer.
   */
  declare chargeBearer: DeserializedType<T, 'Edm.Int64'>;
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
   * Category Purpose.
   */
  declare categoryPurpose: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Posted.
   * @nullable
   */
  declare isPosted?: NoYes | null;
  /**
   * Local Instrument.
   */
  declare localInstrument: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLines} entity.
   */
  declare vendorPaymentJournalLine: VendorPaymentJournalLines<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentJournalLineSettledInvoices} entity.
   */
  declare vendorPaymentJournalHeaderEntityRole: VendorPaymentJournalLineSettledInvoices<T>[];

  constructor(_entityApi: VendorPaymentJournalHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPaymentJournalHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  chargeBearer: DeserializedType<T, 'Edm.Int64'>;
  overrideSalesTax?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  categoryPurpose: DeserializedType<T, 'Edm.Int64'>;
  isPosted?: NoYes | null;
  localInstrument: DeserializedType<T, 'Edm.Int64'>;
  serviceLevel: DeserializedType<T, 'Edm.Int64'>;
  vendorPaymentJournalLine: VendorPaymentJournalLinesType<T>[];
  vendorPaymentJournalHeaderEntityRole: VendorPaymentJournalLineSettledInvoicesType<T>[];
}
