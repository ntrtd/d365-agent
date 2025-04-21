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
import type { D365SalesOrderLinesApi } from './D365SalesOrderLinesApi';
import { SalesStatus } from './SalesStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { NoYes } from './NoYes';
import { SalesOrderIntegrationCreationType } from './SalesOrderIntegrationCreationType';
import { Timezone } from './Timezone';
import {
  D365SalesOrderHeaders,
  D365SalesOrderHeadersType
} from './D365SalesOrderHeaders';

/**
 * This class represents the entity "D365SalesOrderLines" of service "d365_metadata".
 */
export class D365SalesOrderLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements D365SalesOrderLinesType<T>
{
  /**
   * Technical entity name for D365SalesOrderLines.
   */
  static override _entityName = 'D365SalesOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the D365SalesOrderLines entity.
   */
  static _keys = [
    'dataAreaId',
    'SalesOrderNumber',
    'LineCreationSequenceNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Order Number.
   */
  declare salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Creation Sequence Number.
   */
  declare lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Order Line Status.
   * @nullable
   */
  declare salesOrderLineStatus?: SalesStatus | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Multiline Discount Percentage.
   */
  declare multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Product Category Hierarchy Name.
   * @nullable
   */
  declare salesProductCategoryHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Multiline Discount Amount.
   */
  declare multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Product Category Name.
   * @nullable
   */
  declare salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Promising Method.
   * @nullable
   */
  declare salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Unit Symbol.
   * @nullable
   */
  declare salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Deliver Now.
   */
  declare salesDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Confirmed Receipt Date.
   */
  declare confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Fixed Price Charges.
   */
  declare fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms Id.
   * @nullable
   */
  declare deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Name.
   * @nullable
   */
  declare deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ordered Sales Quantity.
   */
  declare orderedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Are Totals Calculated.
   * @nullable
   */
  declare areTotalsCalculated?: NoYes | null;
  /**
   * Total Discount Amount.
   */
  declare totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Service Reservation Id.
   * @nullable
   */
  declare inventoryServiceReservationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Order Integration Creation Type.
   * @nullable
   */
  declare salesOrderIntegrationCreationType?: SalesOrderIntegrationCreationType | null;
  /**
   * Total Tax Amount.
   */
  declare totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Description.
   * @nullable
   */
  declare lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmed Shipping Date.
   */
  declare confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Total Charges Amount.
   */
  declare totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Underdelivery Percentage.
   */
  declare allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Overdelivery Percentage.
   */
  declare allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price Quantity.
   */
  declare salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Skip Create Auto Charges.
   * @nullable
   */
  declare skipCreateAutoCharges?: NoYes | null;
  /**
   * External Item Number.
   * @nullable
   */
  declare externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delivery Address.
   * @nullable
   */
  declare formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Line Stopped.
   * @nullable
   */
  declare isLineStopped?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link D365SalesOrderHeaders} entity.
   */
  declare d365SalesOrderHeader?: D365SalesOrderHeaders<T> | null;

  constructor(_entityApi: D365SalesOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface D365SalesOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesOrderLineStatus?: SalesStatus | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  multilineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  salesProductCategoryHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  multilineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  salesUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  salesDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  confirmedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fixedPriceCharges: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressName?: DeserializedType<T, 'Edm.String'> | null;
  orderedSalesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  areTotalsCalculated?: NoYes | null;
  totalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventoryServiceReservationId?: DeserializedType<T, 'Edm.String'> | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  salesOrderIntegrationCreationType?: SalesOrderIntegrationCreationType | null;
  totalTaxAmount: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  lineDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  confirmedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  totalChargesAmount: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressTimeZone?: Timezone | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesPriceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  skipCreateAutoCharges?: NoYes | null;
  externalItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  formattedDeliveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  isLineStopped?: NoYes | null;
  d365SalesOrderHeader?: D365SalesOrderHeadersType<T> | null;
}
