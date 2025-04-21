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
import type { TransferOrderHeadersApi } from './TransferOrderHeadersApi';
import { NoYes } from './NoYes';
import { InventTransferStatus } from './InventTransferStatus';
import { Timezone } from './Timezone';
import { FreightSlipType } from './FreightSlipType';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { PriceTypeIn } from './PriceTypeIn';
import {
  TransferOrderLinesV2,
  TransferOrderLinesV2Type
} from './TransferOrderLinesV2';
import {
  TransferOrderLines,
  TransferOrderLinesType
} from './TransferOrderLines';
import { PlannedOrders, PlannedOrdersType } from './PlannedOrders';

/**
 * This class represents the entity "TransferOrderHeaders" of service "d365_metadata".
 */
export class TransferOrderHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransferOrderHeadersType<T>
{
  /**
   * Technical entity name for TransferOrderHeaders.
   */
  static override _entityName = 'TransferOrderHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransferOrderHeaders entity.
   */
  static _keys = ['dataAreaId', 'TransferOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Order Number.
   */
  declare transferOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Intrastat Special Movement Code.
   * @nullable
   */
  declare intrastatSpecialMovementCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Atp Time Fence Days.
   */
  declare atpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address Location Id.
   * @nullable
   */
  declare receivingAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address Location Id.
   * @nullable
   */
  declare shippingAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Freight Zone.
   * @nullable
   */
  declare shippingFreightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address County Id.
   * @nullable
   */
  declare receivingAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address State Id.
   * @nullable
   */
  declare receivingAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address Street.
   * @nullable
   */
  declare receivingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Contact Personnel Number.
   * @nullable
   */
  declare receivingContactPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Shipping Address Private.
   * @nullable
   */
  declare isShippingAddressPrivate?: NoYes | null;
  /**
   * Receiving Address Country Region Id.
   * @nullable
   */
  declare receivingAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Address Post Box.
   * @nullable
   */
  declare shippingAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Lines Automatically Reserved By Default.
   * @nullable
   */
  declare areLinesAutomaticallyReservedByDefault?: NoYes | null;
  /**
   * Shipping Carrier Service Id.
   * @nullable
   */
  declare shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address Latitude.
   */
  declare shippingAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Address Duns Number.
   * @nullable
   */
  declare receivingAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Order Status.
   * @nullable
   */
  declare transferOrderStatus?: InventTransferStatus | null;
  /**
   * Shipping Building Compliment.
   * @nullable
   */
  declare shippingBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Atp Backward Demand Time Fence Days.
   */
  declare atpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Requested Receipt Date.
   */
  declare requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shipping Carrier Id.
   * @nullable
   */
  declare shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Receiving Address.
   * @nullable
   */
  declare formattedReceivingAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Building Compliment.
   * @nullable
   */
  declare receivingBuildingCompliment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Address Longitude.
   */
  declare receivingAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipping Address Street In Kana.
   * @nullable
   */
  declare shippingAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Address Duns Number.
   * @nullable
   */
  declare shippingAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address City In Kana.
   * @nullable
   */
  declare receivingAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Receiving Address Private.
   * @nullable
   */
  declare isReceivingAddressPrivate?: NoYes | null;
  /**
   * Receiving Address Street In Kana.
   * @nullable
   */
  declare receivingAddressStreetInKana?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Address Country Region Id.
   * @nullable
   */
  declare shippingAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Override Fefo Date Control.
   * @nullable
   */
  declare overrideFefoDateControl?: NoYes | null;
  /**
   * Intrastat Transaction Code.
   * @nullable
   */
  declare intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Shipping Address.
   * @nullable
   */
  declare formattedShippingAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Atp Delayed Supply Offset Days.
   */
  declare atpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receiving Address Country Region Iso Code.
   * @nullable
   */
  declare receivingAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Address City.
   * @nullable
   */
  declare shippingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address Latitude.
   */
  declare receivingAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address Time Zone.
   * @nullable
   */
  declare shippingAddressTimeZone?: Timezone | null;
  /**
   * Shipping Address Street.
   * @nullable
   */
  declare shippingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Create Cfdi Packing Slip.
   * @nullable
   */
  declare createCfdiPackingSlip?: NoYes | null;
  /**
   * Shipping Address Street Number.
   * @nullable
   */
  declare shippingAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Terms Code.
   * @nullable
   */
  declare deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transportation Mode Id.
   * @nullable
   */
  declare transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address Post Box.
   * @nullable
   */
  declare receivingAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address Name.
   * @nullable
   */
  declare shippingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shipping Freight Company.
   * @nullable
   */
  declare shippingFreightCompany?: FreightSlipType | null;
  /**
   * Shipping Address State Id.
   * @nullable
   */
  declare shippingAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Contact Personnel Number.
   * @nullable
   */
  declare shippingContactPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Address District Name.
   * @nullable
   */
  declare receivingAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Address Longitude.
   */
  declare shippingAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Address Street Number.
   * @nullable
   */
  declare receivingAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transfer Order Promising Method.
   * @nullable
   */
  declare transferOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Shipping Address District Name.
   * @nullable
   */
  declare shippingAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Address Description.
   * @nullable
   */
  declare receivingAddressDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Atp Backward Supply Time Fence Days.
   */
  declare atpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address Zip Code.
   * @nullable
   */
  declare receivingAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address Description.
   * @nullable
   */
  declare shippingAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address City In Kana.
   * @nullable
   */
  declare shippingAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address City.
   * @nullable
   */
  declare receivingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Carrier Service Group Id.
   * @nullable
   */
  declare shippingCarrierServiceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Receiving Address Time Zone.
   * @nullable
   */
  declare receivingAddressTimeZone?: Timezone | null;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transit Warehouse Id.
   * @nullable
   */
  declare transitWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Atp Including Planned Orders.
   */
  declare isAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Shipping Address Zip Code.
   * @nullable
   */
  declare shippingAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Atp Delayed Demand Offset Days.
   */
  declare atpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Shipping Address County Id.
   * @nullable
   */
  declare shippingAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Address Name.
   * @nullable
   */
  declare receivingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Address Country Region Iso Code.
   * @nullable
   */
  declare shippingAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transfer Order Is Enhanced Stock Transfer.
   * @nullable
   */
  declare transferOrderIsEnhancedStockTransfer?: NoYes | null;
  /**
   * Transfer Order Stock Transfer Price Type.
   * @nullable
   */
  declare transferOrderStockTransferPriceType?: PriceTypeIn | null;
  /**
   * One-to-many navigation property to the {@link TransferOrderLinesV2} entity.
   */
  declare transferOrderLineV2: TransferOrderLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link TransferOrderLines} entity.
   */
  declare transferOrderLine: TransferOrderLines<T>[];
  /**
   * One-to-many navigation property to the {@link PlannedOrders} entity.
   */
  declare plannedOrders: PlannedOrders<T>[];

  constructor(_entityApi: TransferOrderHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface TransferOrderHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transferOrderNumber: DeserializedType<T, 'Edm.String'>;
  intrastatSpecialMovementCode?: DeserializedType<T, 'Edm.String'> | null;
  atpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  shippingFreightZone?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  receivingContactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  isShippingAddressPrivate?: NoYes | null;
  receivingAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  areLinesAutomaticallyReservedByDefault?: NoYes | null;
  shippingCarrierServiceId?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  receivingAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  transferOrderStatus?: InventTransferStatus | null;
  shippingBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  atpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shippingCarrierId?: DeserializedType<T, 'Edm.String'> | null;
  formattedReceivingAddress?: DeserializedType<T, 'Edm.String'> | null;
  receivingBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  shippingAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  isReceivingAddressPrivate?: NoYes | null;
  receivingAddressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  overrideFefoDateControl?: NoYes | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  formattedShippingAddress?: DeserializedType<T, 'Edm.String'> | null;
  atpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  receivingAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  shippingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressTimeZone?: Timezone | null;
  shippingAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  createCfdiPackingSlip?: NoYes | null;
  shippingAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTermsCode?: DeserializedType<T, 'Edm.String'> | null;
  transportationModeId?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shippingFreightCompany?: FreightSlipType | null;
  shippingAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  shippingContactPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  receivingAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  transferOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  shippingAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  atpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  shippingCarrierServiceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressTimeZone?: Timezone | null;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  transitWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  isAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  shippingAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  atpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  shippingAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  receivingAddressName?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  shippingAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  transferOrderIsEnhancedStockTransfer?: NoYes | null;
  transferOrderStockTransferPriceType?: PriceTypeIn | null;
  transferOrderLineV2: TransferOrderLinesV2Type<T>[];
  transferOrderLine: TransferOrderLinesType<T>[];
  plannedOrders: PlannedOrdersType<T>[];
}
