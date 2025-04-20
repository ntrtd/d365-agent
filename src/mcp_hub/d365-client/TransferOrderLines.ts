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
import type { TransferOrderLinesApi } from './TransferOrderLinesApi';
import { NoYes } from './NoYes';
import { InventTransferRemainStatus } from './InventTransferRemainStatus';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { WhsOutboundShipmentPolicy } from './WhsOutboundShipmentPolicy';
import { PriceTypeIn } from './PriceTypeIn';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  TransferOrderHeaders,
  TransferOrderHeadersType
} from './TransferOrderHeaders';

/**
 * This class represents the entity "TransferOrderLines" of service "d365_metadata".
 */
export class TransferOrderLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TransferOrderLinesType<T>
{
  /**
   * Technical entity name for TransferOrderLines.
   */
  static override _entityName = 'TransferOrderLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransferOrderLines entity.
   */
  static _keys = ['dataAreaId', 'TransferOrderNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Order Number.
   */
  declare transferOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
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
   * Allowed Underdelivery Percentage.
   */
  declare allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Product Receiving Cross Dock Products.
   * @nullable
   */
  declare willProductReceivingCrossDockProducts?: NoYes | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Port Id.
   * @nullable
   */
  declare intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Quantity.
   */
  declare transferQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: InventTransferRemainStatus | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scrapped Catch Weight Quantity.
   */
  declare scrappedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Origin State Id.
   * @nullable
   */
  declare originStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Commodity Code.
   * @nullable
   */
  declare intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Warehouse Location Id.
   * @nullable
   */
  declare shippingWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Group Code Receipt.
   * @nullable
   */
  declare salesTaxGroupCodeReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Ledger Dimension Display Value.
   * @nullable
   */
  declare receivingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Sales Tax Item Group Code Receipt.
   * @nullable
   */
  declare salesTaxItemGroupCodeReceipt?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Sales Tax Group Code Shipment.
   * @nullable
   */
  declare salesTaxGroupCodeShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Ledger Dimension Display Value.
   * @nullable
   */
  declare shippingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scrapped Quantity.
   */
  declare scrappedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipped Catch Weight Quantity.
   */
  declare shippedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Shipped Quantity.
   */
  declare shippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Received Quantity.
   */
  declare receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Cost Amount.
   */
  declare intrastatCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Atp Delayed Supply Offset Days.
   */
  declare atpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Intrastat Statistical Value.
   */
  declare intrastatStatisticalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Inventory Lot Id.
   * @nullable
   */
  declare receivingInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Invent Profile.
   * @nullable
   */
  declare itemInventProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Inventory Lot Id.
   * @nullable
   */
  declare shippingInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Shipped Quantity.
   */
  declare remainingShippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Sales Tax Shipment.
   * @nullable
   */
  declare overrideSalesTaxShipment?: NoYes | null;
  /**
   * Remaining Received Catch Weight Quantity.
   */
  declare remainingReceivedCatchWeightQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Origin County Id.
   * @nullable
   */
  declare originCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Serial Number.
   * @nullable
   */
  declare itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scrap Inventory Lot Id.
   * @nullable
   */
  declare scrapInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Item Group Code Shipment.
   * @nullable
   */
  declare salesTaxItemGroupCodeShipment?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Received Catch Weight Quantity.
   */
  declare receivedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transfer Catch Weight Quantity.
   */
  declare transferCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Requested Shipping Date.
   */
  declare requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax Receipt.
   * @nullable
   */
  declare overrideSalesTaxReceipt?: NoYes | null;
  /**
   * Origin Country Region Id.
   * @nullable
   */
  declare originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Order Promising Method.
   * @nullable
   */
  declare transferOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  /**
   * Allowed Overdelivery Percentage.
   */
  declare allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Outbound Shipment Policy.
   * @nullable
   */
  declare outboundShipmentPolicy?: WhsOutboundShipmentPolicy | null;
  /**
   * Atp Backward Supply Time Fence Days.
   */
  declare atpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Receiving Transit Inventory Lot Id.
   * @nullable
   */
  declare receivingTransitInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remaining Shipped Catch Weight Quantity.
   */
  declare remainingShippedCatchWeightQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Statistics Procedure Code.
   * @nullable
   */
  declare intrastatStatisticsProcedureCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Automatically Reserved.
   * @nullable
   */
  declare isAutomaticallyReserved?: NoYes | null;
  /**
   * Is Atp Including Planned Orders.
   */
  declare isAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Item Invent Profile To.
   * @nullable
   */
  declare itemInventProfileTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Transit Inventory Lot Id.
   * @nullable
   */
  declare shippingTransitInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remaining Received Quantity.
   */
  declare remainingReceivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Atp Delayed Demand Offset Days.
   */
  declare atpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invent Cost Price Calculated.
   */
  declare inventCostPriceCalculated: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Retail Price.
   */
  declare maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension.
   */
  declare defaultDimension: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Type.
   * @nullable
   */
  declare priceType?: PriceTypeIn | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assessable Value Transaction Currency.
   */
  declare assessableValueTransactionCurrency: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Vat Retention Code.
   * @nullable
   */
  declare vatRetentionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invnt Cost Price.
   */
  declare invntCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retention.
   */
  declare retention: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vat Price Type.
   * @nullable
   */
  declare vatPriceType?: PriceTypeIn | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link TransferOrderHeaders} entity.
   */
  declare transferOrderHeader?: TransferOrderHeaders<T> | null;

  constructor(_entityApi: TransferOrderLinesApi<T>) {
    super(_entityApi);
  }
}

export interface TransferOrderLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transferOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  intrastatSpecialMovementCode?: DeserializedType<T, 'Edm.String'> | null;
  atpTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  allowedUnderdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  willProductReceivingCrossDockProducts?: NoYes | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatPortId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  transferQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineStatus?: InventTransferRemainStatus | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  scrappedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  originStateId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCodeReceipt?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  receivingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  atpBackwardDemandTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  requestedReceiptDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesTaxItemGroupCodeReceipt?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroupCodeShipment?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  shippingLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  scrappedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  shippedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  overrideFefoDateControl?: NoYes | null;
  intrastatTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  shippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  intrastatCostAmount: DeserializedType<T, 'Edm.Decimal'>;
  atpDelayedSupplyOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  intrastatStatisticalValue: DeserializedType<T, 'Edm.Decimal'>;
  receivingInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  itemInventProfile?: DeserializedType<T, 'Edm.String'> | null;
  shippingInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  remainingShippedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTaxShipment?: NoYes | null;
  remainingReceivedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  originCountyId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  itemSerialNumber?: DeserializedType<T, 'Edm.String'> | null;
  scrapInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxItemGroupCodeShipment?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  receivedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  transferCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  requestedShippingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTaxReceipt?: NoYes | null;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  transferOrderPromisingMethod?: SalesDeliveryDateControlType | null;
  allowedOverdeliveryPercentage: DeserializedType<T, 'Edm.Decimal'>;
  outboundShipmentPolicy?: WhsOutboundShipmentPolicy | null;
  atpBackwardSupplyTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  receivingTransitInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  remainingShippedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  intrastatStatisticsProcedureCode?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  isAutomaticallyReserved?: NoYes | null;
  isAtpIncludingPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  itemInventProfileTo?: DeserializedType<T, 'Edm.String'> | null;
  shippingTransitInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  remainingReceivedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  atpDelayedDemandOffsetDays: DeserializedType<T, 'Edm.Int32'>;
  inventCostPriceCalculated: DeserializedType<T, 'Edm.Decimal'>;
  maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimension: DeserializedType<T, 'Edm.Int64'>;
  priceType?: PriceTypeIn | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  assessableValueTransactionCurrency: DeserializedType<T, 'Edm.Decimal'>;
  vatRetentionCode?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  invntCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  retention: DeserializedType<T, 'Edm.Decimal'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  vatPriceType?: PriceTypeIn | null;
  dimensionSet?: DimensionSetsType<T> | null;
  transferOrderHeader?: TransferOrderHeadersType<T> | null;
}
