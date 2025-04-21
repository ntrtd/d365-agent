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
import type { WmsOrderTransBiEntitiesApi } from './WmsOrderTransBiEntitiesApi';
import { WmsExpeditionStatus } from './WmsExpeditionStatus';
import { NoYes } from './NoYes';
import { WmsOrderType } from './WmsOrderType';
import { InventTransType } from './InventTransType';

/**
 * This class represents the entity "WMSOrderTransBiEntities" of service "d365_metadata".
 */
export class WmsOrderTransBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WmsOrderTransBiEntitiesType<T>
{
  /**
   * Technical entity name for WmsOrderTransBiEntities.
   */
  static override _entityName = 'WMSOrderTransBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WmsOrderTransBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created Transaction Id.
   */
  declare sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Shipment Id Original.
   * @nullable
   */
  declare shipmentIdOriginal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expedition Status.
   * @nullable
   */
  declare expeditionStatus?: WmsExpeditionStatus | null;
  /**
   * Order Id.
   * @nullable
   */
  declare orderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pds Cw Zero Cw Line.
   * @nullable
   */
  declare pdsCwZeroCwLine?: NoYes | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sort Code.
   */
  declare sortCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Operator Worker.
   */
  declare operatorWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Invent Dim Fixed.
   */
  declare inventDimFixed: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Order Type.
   * @nullable
   */
  declare orderType?: WmsOrderType | null;
  /**
   * Expedition Time.
   */
  declare expeditionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expected Expedition Time.
   */
  declare expectedExpeditionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pds Cw Qty.
   */
  declare pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Id.
   * @nullable
   */
  declare routeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Id.
   * @nullable
   */
  declare shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Reserved.
   * @nullable
   */
  declare isReserved?: NoYes | null;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Trans Type.
   * @nullable
   */
  declare inventTransType?: InventTransType | null;
  /**
   * Invent Trans Ref Id.
   * @nullable
   */
  declare inventTransRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Invent Dim Id.
   * @nullable
   */
  declare toInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Dlv Date.
   */
  declare dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Customer.
   * @nullable
   */
  declare customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Volume.
   */
  declare volume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Sort Code.
   */
  declare itemSortCode: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pre Reserved.
   * @nullable
   */
  declare preReserved?: NoYes | null;
  /**
   * Post Transfer.
   * @nullable
   */
  declare postTransfer?: NoYes | null;

  constructor(_entityApi: WmsOrderTransBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface WmsOrderTransBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  shipmentIdOriginal?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  expeditionStatus?: WmsExpeditionStatus | null;
  orderId?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  pdsCwZeroCwLine?: NoYes | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  sortCode: DeserializedType<T, 'Edm.Int32'>;
  operatorWorker: DeserializedType<T, 'Edm.Int64'>;
  inventDimFixed: DeserializedType<T, 'Edm.Int32'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  orderType?: WmsOrderType | null;
  expeditionTime: DeserializedType<T, 'Edm.Int32'>;
  expectedExpeditionTime: DeserializedType<T, 'Edm.Int32'>;
  pdsCwQty: DeserializedType<T, 'Edm.Decimal'>;
  routeId?: DeserializedType<T, 'Edm.String'> | null;
  shipmentId?: DeserializedType<T, 'Edm.String'> | null;
  isReserved?: NoYes | null;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransType?: InventTransType | null;
  inventTransRefId?: DeserializedType<T, 'Edm.String'> | null;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toInventDimId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  volume: DeserializedType<T, 'Edm.Decimal'>;
  itemSortCode: DeserializedType<T, 'Edm.Int32'>;
  preReserved?: NoYes | null;
  postTransfer?: NoYes | null;
}
