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
import type { WmsOrderBiEntitiesApi } from './WmsOrderBiEntitiesApi';
import { WmsOrderType } from './WmsOrderType';
import { NoYes } from './NoYes';
import { WmsOrderStatus } from './WmsOrderStatus';
import { InventTransType } from './InventTransType';
import { FreightSlipType } from './FreightSlipType';

/**
 * This class represents the entity "WMSOrderBiEntities" of service "d365_metadata".
 */
export class WmsOrderBiEntities<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WmsOrderBiEntitiesType<T>
{
  /**
   * Technical entity name for WmsOrderBiEntities.
   */
  static override _entityName = 'WMSOrderBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WmsOrderBiEntities entity.
   */
  static _keys = ['dataAreaId', 'orderId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Order Id.
   */
  declare orderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pds Cw Qty No Shipment.
   */
  declare pdsCwQtyNoShipment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: WmsOrderType | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Post Transfer.
   * @nullable
   */
  declare postTransfer?: NoYes | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dlv Date.
   */
  declare dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Term.
   * @nullable
   */
  declare dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer.
   * @nullable
   */
  declare customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: WmsOrderStatus | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dlv Mode.
   * @nullable
   */
  declare dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty Requested.
   */
  declare qtyRequested: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Invent Dim Id.
   * @nullable
   */
  declare toInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Freight Zone.
   * @nullable
   */
  declare freightZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty Requested.
   */
  declare pdsCwQtyRequested: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Shipment Grouping Ref Id.
   * @nullable
   */
  declare shipmentGroupingRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Ref Id.
   * @nullable
   */
  declare inventTransRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty No Shipment.
   */
  declare qtyNoShipment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Type.
   * @nullable
   */
  declare inventTransType?: InventTransType | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Freight Slip Type.
   * @nullable
   */
  declare freightSlipType?: FreightSlipType | null;
  /**
   * Shipment Grouping Trans Type.
   * @nullable
   */
  declare shipmentGroupingTransType?: InventTransType | null;

  constructor(_entityApi: WmsOrderBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface WmsOrderBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  orderId: DeserializedType<T, 'Edm.String'>;
  pdsCwQtyNoShipment: DeserializedType<T, 'Edm.Decimal'>;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  type?: WmsOrderType | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  postTransfer?: NoYes | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvTerm?: DeserializedType<T, 'Edm.String'> | null;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  status?: WmsOrderStatus | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  dlvMode?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  qtyRequested: DeserializedType<T, 'Edm.Decimal'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  toInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  freightZone?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQtyRequested: DeserializedType<T, 'Edm.Decimal'>;
  shipmentGroupingRefId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransRefId?: DeserializedType<T, 'Edm.String'> | null;
  qtyNoShipment: DeserializedType<T, 'Edm.Decimal'>;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  inventTransType?: InventTransType | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  freightSlipType?: FreightSlipType | null;
  shipmentGroupingTransType?: InventTransType | null;
}
