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
import type { FreightInvoiceLinesApi } from './FreightInvoiceLinesApi';
import { TmsInvoiceLineStatus } from './TmsInvoiceLineStatus';
import { NoYes } from './NoYes';
import { TmsLineType } from './TmsLineType';
import { TmsDirection } from './TmsDirection';
import {
  FreightInvoiceHeaders,
  FreightInvoiceHeadersType
} from './FreightInvoiceHeaders';

/**
 * This class represents the entity "FreightInvoiceLines" of service "d365_metadata".
 */
export class FreightInvoiceLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FreightInvoiceLinesType<T>
{
  /**
   * Technical entity name for FreightInvoiceLines.
   */
  static override _entityName = 'FreightInvoiceLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FreightInvoiceLines entity.
   */
  static _keys = ['dataAreaId', 'InternalInvoiceNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Invoice Number.
   */
  declare internalInvoiceNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: TmsInvoiceLineStatus | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Line Header Charge.
   * @nullable
   */
  declare isLineHeaderCharge?: NoYes | null;
  /**
   * Freight Quantity.
   */
  declare freightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tracking Number.
   * @nullable
   */
  declare trackingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Bill Type Id.
   * @nullable
   */
  declare freightBillTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pro Number Code.
   * @nullable
   */
  declare proNumberCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Weight Unit Id.
   * @nullable
   */
  declare freightWeightUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Held Until Date Time.
   */
  declare freightHeldUntilDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invoice Date.
   */
  declare invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Transportation Billing Group Id.
   * @nullable
   */
  declare transportationBillingGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Load Id.
   * @nullable
   */
  declare loadId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trailer Number.
   * @nullable
   */
  declare trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Booking Number.
   * @nullable
   */
  declare bookingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Destination Country Region Iso Code.
   * @nullable
   */
  declare destinationCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: TmsLineType | null;
  /**
   * Last Cycle Counting Date Time.
   */
  declare lastCycleCountingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Voyage Number.
   * @nullable
   */
  declare voyageNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Weight.
   */
  declare freightWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: TmsDirection | null;
  /**
   * Inventory Site Id.
   * @nullable
   */
  declare inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Country Region Id.
   * @nullable
   */
  declare destinationCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cosignee Name.
   * @nullable
   */
  declare cosigneeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Related Account Number.
   * @nullable
   */
  declare relatedAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vessel Name.
   * @nullable
   */
  declare vesselName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description Line 2.
   * @nullable
   */
  declare descriptionLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Route Code.
   * @nullable
   */
  declare transportationRouteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Distance.
   */
  declare transportationDistance: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Code.
   * @nullable
   */
  declare externalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description Line 1.
   * @nullable
   */
  declare descriptionLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Of Lading Id.
   * @nullable
   */
  declare billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Vendor Account Number.
   * @nullable
   */
  declare shippingCarrierVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Related Order Number.
   * @nullable
   */
  declare relatedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link FreightInvoiceHeaders} entity.
   */
  declare freightInvoiceHeader?: FreightInvoiceHeaders<T> | null;

  constructor(_entityApi: FreightInvoiceLinesApi<T>) {
    super(_entityApi);
  }
}

export interface FreightInvoiceLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  internalInvoiceNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  lineStatus?: TmsInvoiceLineStatus | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  isLineHeaderCharge?: NoYes | null;
  freightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  trackingNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  freightBillTypeId?: DeserializedType<T, 'Edm.String'> | null;
  proNumberCode?: DeserializedType<T, 'Edm.String'> | null;
  freightWeightUnitId?: DeserializedType<T, 'Edm.String'> | null;
  freightHeldUntilDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  invoiceDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  transportationBillingGroupId?: DeserializedType<T, 'Edm.String'> | null;
  loadId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  trailerNumber?: DeserializedType<T, 'Edm.String'> | null;
  bookingNumber?: DeserializedType<T, 'Edm.String'> | null;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  destinationCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: TmsLineType | null;
  lastCycleCountingDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  voyageNumber?: DeserializedType<T, 'Edm.String'> | null;
  freightWeight: DeserializedType<T, 'Edm.Decimal'>;
  direction?: TmsDirection | null;
  inventorySiteId?: DeserializedType<T, 'Edm.String'> | null;
  destinationCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  cosigneeName?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  relatedAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  vesselName?: DeserializedType<T, 'Edm.String'> | null;
  descriptionLine2?: DeserializedType<T, 'Edm.String'> | null;
  transportationRouteCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationDistance: DeserializedType<T, 'Edm.Decimal'>;
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  descriptionLine1?: DeserializedType<T, 'Edm.String'> | null;
  billOfLadingId?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  relatedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  freightInvoiceHeader?: FreightInvoiceHeadersType<T> | null;
}
