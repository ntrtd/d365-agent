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
import type { FreightInvoiceHeadersApi } from './FreightInvoiceHeadersApi';
import { TmsInvoiceStatus } from './TmsInvoiceStatus';
import { NoYes } from './NoYes';
import {
  FreightInvoiceLines,
  FreightInvoiceLinesType
} from './FreightInvoiceLines';

/**
 * This class represents the entity "FreightInvoiceHeaders" of service "d365_metadata".
 */
export class FreightInvoiceHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FreightInvoiceHeadersType<T>
{
  /**
   * Technical entity name for FreightInvoiceHeaders.
   */
  static override _entityName = 'FreightInvoiceHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FreightInvoiceHeaders entity.
   */
  static _keys = ['dataAreaId', 'InternalInvoiceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Invoice Number.
   */
  declare internalInvoiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transportation Distance Unit Id.
   * @nullable
   */
  declare transportationDistanceUnitId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Status.
   * @nullable
   */
  declare invoiceStatus?: TmsInvoiceStatus | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Trailer Number.
   * @nullable
   */
  declare defaultTrailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipping Carrier Service Id.
   * @nullable
   */
  declare defaultShippingCarrierServiceId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Related Account Number.
   * @nullable
   */
  declare defaultRelatedAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pro Number Code.
   * @nullable
   */
  declare proNumberCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Freight Held Until Date Time.
   */
  declare defaultFreightHeldUntilDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Cash Discount Amount.
   */
  declare cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Freight Weight Unit Id.
   * @nullable
   */
  declare freightWeightUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Voyage Number.
   * @nullable
   */
  declare defaultVoyageNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Last Cycle Counting Date Time.
   */
  declare defaultLastCycleCountingDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Cash Discount Code.
   * @nullable
   */
  declare cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Vessel Name.
   * @nullable
   */
  declare defaultVesselName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Freight Weight.
   */
  declare totalFreightWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Quote Id.
   * @nullable
   */
  declare originalQuoteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Reference.
   * @nullable
   */
  declare vendorReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Country Region Iso Code.
   * @nullable
   */
  declare destinationCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scac Code.
   * @nullable
   */
  declare scacCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate.
   */
  declare exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Destination Country Region Id.
   * @nullable
   */
  declare destinationCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipment Id.
   * @nullable
   */
  declare defaultShipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payee Vendor Account Number.
   * @nullable
   */
  declare payeeVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Invoice Automatically Matched.
   * @nullable
   */
  declare isInvoiceAutomaticallyMatched?: NoYes | null;
  /**
   * Default Related Order Number.
   * @nullable
   */
  declare defaultRelatedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due Date Time.
   */
  declare dueDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Id.
   * @nullable
   */
  declare paymentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Cosignee Name.
   * @nullable
   */
  declare defaultCosigneeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Booking Number.
   * @nullable
   */
  declare defaultBookingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Freight Quantity.
   */
  declare totalFreightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Number.
   * @nullable
   */
  declare invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Route Code.
   * @nullable
   */
  declare transportationRouteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Shipping Carrier Id.
   * @nullable
   */
  declare defaultShippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Number.
   * @nullable
   */
  declare referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Distance.
   */
  declare transportationDistance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Bill Of Lading Id.
   * @nullable
   */
  declare defaultBillOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Amount.
   */
  declare invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link FreightInvoiceLines} entity.
   */
  declare freightInvoiceLine: FreightInvoiceLines<T>[];

  constructor(_entityApi: FreightInvoiceHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface FreightInvoiceHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  internalInvoiceNumber: DeserializedType<T, 'Edm.String'>;
  transportationDistanceUnitId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceStatus?: TmsInvoiceStatus | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultTrailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  defaultRelatedAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  proNumberCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultFreightHeldUntilDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  freightWeightUnitId?: DeserializedType<T, 'Edm.String'> | null;
  defaultVoyageNumber?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  defaultLastCycleCountingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  cashDiscountCode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultVesselName?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  totalFreightWeight: DeserializedType<T, 'Edm.Decimal'>;
  originalQuoteId?: DeserializedType<T, 'Edm.String'> | null;
  vendorReference?: DeserializedType<T, 'Edm.String'> | null;
  destinationCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  scacCode?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRate: DeserializedType<T, 'Edm.Decimal'>;
  destinationCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  defaultShipmentId?: DeserializedType<T, 'Edm.String'> | null;
  payeeVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isInvoiceAutomaticallyMatched?: NoYes | null;
  defaultRelatedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  dueDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentId?: DeserializedType<T, 'Edm.String'> | null;
  defaultCosigneeName?: DeserializedType<T, 'Edm.String'> | null;
  defaultBookingNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalFreightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  invoiceNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportationRouteCode?: DeserializedType<T, 'Edm.String'> | null;
  defaultShippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  transportationDistance: DeserializedType<T, 'Edm.Decimal'>;
  defaultBillOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceAmount: DeserializedType<T, 'Edm.Decimal'>;
  freightInvoiceLine: FreightInvoiceLinesType<T>[];
}
