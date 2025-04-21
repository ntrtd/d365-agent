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
import type { InventTransferLineBiEntitiesApi } from './InventTransferLineBiEntitiesApi';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { InventTransferRemainStatus } from './InventTransferRemainStatus';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventTransferLineBiEntities" of service "d365_metadata".
 */
export class InventTransferLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventTransferLineBiEntitiesType<T>
{
  /**
   * Technical entity name for InventTransferLineBiEntities.
   */
  static override _entityName = 'InventTransferLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventTransferLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'TransferId', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Id.
   */
  declare transferId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Atp Incl Planned Orders.
   */
  declare atpInclPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Qty Transfer.
   */
  declare qtyTransfer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty Ship Now.
   */
  declare qtyShipNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount Ru.
   */
  declare lineAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Orig State Id.
   * @nullable
   */
  declare origStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Replenish Ref Rec Id.
   */
  declare retailReplenishRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Item Group Shipment.
   * @nullable
   */
  declare taxItemGroupShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Atp Apply Demand Time Fence.
   */
  declare atpApplyDemandTimeFence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Atp Time Fence.
   */
  declare atpTimeFence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pds Cw Qty Receive Now.
   */
  declare pdsCwQtyReceiveNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Qty Remain Receive.
   */
  declare qtyRemainReceive: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Intrastat Commodity.
   */
  declare intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Hht Trans Date.
   */
  declare hhtTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Atp Apply Supply Time Fence.
   */
  declare atpApplySupplyTimeFence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Group Receipt.
   * @nullable
   */
  declare taxGroupReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date Control Type.
   * @nullable
   */
  declare deliveryDateControlType?: SalesDeliveryDateControlType | null;
  /**
   * Itm Status Id.
   * @nullable
   */
  declare itmStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty Received.
   */
  declare pdsCwQtyReceived: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty Scrapped.
   */
  declare qtyScrapped: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remain Status.
   * @nullable
   */
  declare remainStatus?: InventTransferRemainStatus | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Port.
   * @nullable
   */
  declare port?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Code.
   * @nullable
   */
  declare transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty Scrapped.
   */
  declare pdsCwQtyScrapped: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty Remain Ship.
   */
  declare qtyRemainShip: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Combined Transfer Order Line Delivery.
   */
  declare combinedTransferOrderLineDelivery: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Amount Value.
   */
  declare amountValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Transport.
   * @nullable
   */
  declare transport?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id Transit To.
   * @nullable
   */
  declare inventTransIdTransitTo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit Ru.
   */
  declare priceUnitRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hht Handheld User Id.
   * @nullable
   */
  declare hhtHandheldUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty Receive Now.
   */
  declare qtyReceiveNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Override Sales Tax Shipment.
   * @nullable
   */
  declare overrideSalesTaxShipment?: NoYes | null;
  /**
   * Atp Backward Supply Time Fence.
   */
  declare atpBackwardSupplyTimeFence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Over Delivery Pct.
   */
  declare overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id Transit From.
   * @nullable
   */
  declare inventTransIdTransitFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Area Id.
   * @nullable
   */
  declare retailAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Information Subcode Id Ex 2.
   * @nullable
   */
  declare retailInformationSubcodeIdEx2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pds Cw Qty Shipped.
   */
  declare pdsCwQtyShipped: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Auto Reservation.
   * @nullable
   */
  declare autoReservation?: NoYes | null;
  /**
   * Qty Received.
   */
  declare qtyReceived: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Service Reservation Id.
   * @nullable
   */
  declare inventoryServiceReservationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Itm Id.
   * @nullable
   */
  declare itmId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Atp Backward Demand Time Fence.
   */
  declare atpBackwardDemandTimeFence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hht Trans Time.
   */
  declare hhtTransTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Price Ru.
   */
  declare priceRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Cw Qty Remain Receive.
   */
  declare pdsCwQtyRemainReceive: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Id Scrap.
   * @nullable
   */
  declare inventTransIdScrap?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax Receipt.
   * @nullable
   */
  declare overrideSalesTaxReceipt?: NoYes | null;
  /**
   * Stat Proc Id.
   * @nullable
   */
  declare statProcId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Orig Country Region Id.
   * @nullable
   */
  declare origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Itm Arrival Group Id.
   * @nullable
   */
  declare itmArrivalGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statistical Value.
   */
  declare statisticalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Packed Extensions.
   * @nullable
   */
  declare packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Tax Item Group Receipt.
   * @nullable
   */
  declare taxItemGroupReceipt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Retail Replenish Ref Table Id.
   */
  declare retailReplenishRefTableId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invent Trans Id Receive.
   * @nullable
   */
  declare inventTransIdReceive?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Infocode Id Ex 2.
   * @nullable
   */
  declare retailInfocodeIdEx2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Fulfillment Date Hu.
   */
  declare intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Qty Shipped.
   */
  declare qtyShipped: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intrastat Spec Move Cz.
   * @nullable
   */
  declare intrastatSpecMoveCz?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Under Delivery Pct.
   */
  declare underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ship Date.
   */
  declare shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pds Cw Qty Transfer.
   */
  declare pdsCwQtyTransfer: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Service Auto Offset.
   * @nullable
   */
  declare inventoryServiceAutoOffset?: NoYes | null;
  /**
   * Tax Group Shipment.
   * @nullable
   */
  declare taxGroupShipment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty Ship Now.
   */
  declare pdsCwQtyShipNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pds Override Fefo.
   * @nullable
   */
  declare pdsOverrideFefo?: NoYes | null;
  /**
   * Orig County Id.
   * @nullable
   */
  declare origCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty Remain Ship.
   */
  declare pdsCwQtyRemainShip: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dim Id To Ru.
   * @nullable
   */
  declare inventDimIdToRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receive Date.
   */
  declare receiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: InventTransferLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventTransferLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transferId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  atpInclPlannedOrders: DeserializedType<T, 'Edm.Boolean'>;
  qtyTransfer: DeserializedType<T, 'Edm.Decimal'>;
  qtyShipNow: DeserializedType<T, 'Edm.Decimal'>;
  lineAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  origStateId?: DeserializedType<T, 'Edm.String'> | null;
  retailReplenishRefRecId: DeserializedType<T, 'Edm.Int64'>;
  taxItemGroupShipment?: DeserializedType<T, 'Edm.String'> | null;
  atpApplyDemandTimeFence: DeserializedType<T, 'Edm.Int32'>;
  atpTimeFence: DeserializedType<T, 'Edm.Int32'>;
  pdsCwQtyReceiveNow: DeserializedType<T, 'Edm.Decimal'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  qtyRemainReceive: DeserializedType<T, 'Edm.Decimal'>;
  intrastatCommodity: DeserializedType<T, 'Edm.Int64'>;
  hhtTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  atpApplySupplyTimeFence: DeserializedType<T, 'Edm.Int32'>;
  taxGroupReceipt?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDateControlType?: SalesDeliveryDateControlType | null;
  itmStatusId?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyReceived: DeserializedType<T, 'Edm.Decimal'>;
  qtyScrapped: DeserializedType<T, 'Edm.Decimal'>;
  remainStatus?: InventTransferRemainStatus | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  port?: DeserializedType<T, 'Edm.String'> | null;
  transactionCode?: DeserializedType<T, 'Edm.String'> | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyScrapped: DeserializedType<T, 'Edm.Decimal'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  qtyRemainShip: DeserializedType<T, 'Edm.Decimal'>;
  combinedTransferOrderLineDelivery: DeserializedType<T, 'Edm.Int64'>;
  amountValue: DeserializedType<T, 'Edm.Decimal'>;
  transport?: DeserializedType<T, 'Edm.String'> | null;
  inventTransIdTransitTo?: DeserializedType<T, 'Edm.String'> | null;
  priceUnitRu: DeserializedType<T, 'Edm.Decimal'>;
  hhtHandheldUserId?: DeserializedType<T, 'Edm.String'> | null;
  qtyReceiveNow: DeserializedType<T, 'Edm.Decimal'>;
  overrideSalesTaxShipment?: NoYes | null;
  atpBackwardSupplyTimeFence: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  overDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  inventTransIdTransitFrom?: DeserializedType<T, 'Edm.String'> | null;
  retailAreaId?: DeserializedType<T, 'Edm.String'> | null;
  retailInformationSubcodeIdEx2?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyShipped: DeserializedType<T, 'Edm.Decimal'>;
  autoReservation?: NoYes | null;
  qtyReceived: DeserializedType<T, 'Edm.Decimal'>;
  inventoryServiceReservationId?: DeserializedType<T, 'Edm.String'> | null;
  itmId?: DeserializedType<T, 'Edm.String'> | null;
  atpBackwardDemandTimeFence: DeserializedType<T, 'Edm.Int32'>;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  hhtTransTime: DeserializedType<T, 'Edm.Int32'>;
  priceRu: DeserializedType<T, 'Edm.Decimal'>;
  pdsCwQtyRemainReceive: DeserializedType<T, 'Edm.Decimal'>;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransIdScrap?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTaxReceipt?: NoYes | null;
  statProcId?: DeserializedType<T, 'Edm.String'> | null;
  origCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  itmArrivalGroupId?: DeserializedType<T, 'Edm.String'> | null;
  statisticalValue: DeserializedType<T, 'Edm.Decimal'>;
  packedExtensions?: DeserializedType<T, 'Edm.Binary'> | null;
  taxItemGroupReceipt?: DeserializedType<T, 'Edm.String'> | null;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  retailReplenishRefTableId: DeserializedType<T, 'Edm.Int32'>;
  inventTransIdReceive?: DeserializedType<T, 'Edm.String'> | null;
  retailInfocodeIdEx2?: DeserializedType<T, 'Edm.String'> | null;
  intrastatFulfillmentDateHu: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qtyShipped: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  intrastatSpecMoveCz?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  underDeliveryPct: DeserializedType<T, 'Edm.Decimal'>;
  shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  pdsCwQtyTransfer: DeserializedType<T, 'Edm.Decimal'>;
  inventoryServiceAutoOffset?: NoYes | null;
  taxGroupShipment?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyShipNow: DeserializedType<T, 'Edm.Decimal'>;
  pdsOverrideFefo?: NoYes | null;
  origCountyId?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyRemainShip: DeserializedType<T, 'Edm.Decimal'>;
  inventDimIdToRu?: DeserializedType<T, 'Edm.String'> | null;
  receiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
