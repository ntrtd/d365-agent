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
import type { WmsPickingRouteBiEntitiesApi } from './WmsPickingRouteBiEntitiesApi';
import { InventTransType } from './InventTransType';
import { WmsExpeditionStatus } from './WmsExpeditionStatus';
import { WmsShipmentType } from './WmsShipmentType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WMSPickingRouteBiEntities" of service "d365_metadata".
 */
export class WmsPickingRouteBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WmsPickingRouteBiEntitiesType<T>
{
  /**
   * Technical entity name for WmsPickingRouteBiEntities.
   */
  static override _entityName = 'WMSPickingRouteBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WmsPickingRouteBiEntities entity.
   */
  static _keys = ['dataAreaId', 'pickingRouteID', 'shipmentId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Picking Route Id.
   */
  declare pickingRouteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Id.
   */
  declare shipmentId: DeserializedType<T, 'Edm.String'>;
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
   * Dlv Date.
   */
  declare dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Postal Address.
   */
  declare deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Trans Ref Id.
   * @nullable
   */
  declare transRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Type.
   * @nullable
   */
  declare transType?: InventTransType | null;
  /**
   * Dlv Term Id.
   * @nullable
   */
  declare dlvTermId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipment Type.
   * @nullable
   */
  declare shipmentType?: WmsShipmentType | null;
  /**
   * Activation Date Time.
   */
  declare activationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Operator Worker.
   */
  declare operatorWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Print Mgmt Site Id.
   * @nullable
   */
  declare printMgmtSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expected Expedition Time.
   */
  declare expectedExpeditionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Mcr Picking Wave Ref.
   * @nullable
   */
  declare mcrPickingWaveRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mcr Packing Box Name.
   * @nullable
   */
  declare mcrPackingBoxName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parm Id.
   * @nullable
   */
  declare parmId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Dlv Mode Id.
   * @nullable
   */
  declare dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Location Id.
   * @nullable
   */
  declare inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Transaction Id.
   */
  declare sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Customer.
   * @nullable
   */
  declare customer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Decrease Qty.
   * @nullable
   */
  declare autoDecreaseQty?: NoYes | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Inter Company Posted.
   * @nullable
   */
  declare interCompanyPosted?: NoYes | null;

  constructor(_entityApi: WmsPickingRouteBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface WmsPickingRouteBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  pickingRouteId: DeserializedType<T, 'Edm.String'>;
  shipmentId: DeserializedType<T, 'Edm.String'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  dlvDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryPostalAddress: DeserializedType<T, 'Edm.Int64'>;
  transRefId?: DeserializedType<T, 'Edm.String'> | null;
  transType?: InventTransType | null;
  dlvTermId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  expeditionStatus?: WmsExpeditionStatus | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  shipmentType?: WmsShipmentType | null;
  activationDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  operatorWorker: DeserializedType<T, 'Edm.Int64'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  printMgmtSiteId?: DeserializedType<T, 'Edm.String'> | null;
  expectedExpeditionTime: DeserializedType<T, 'Edm.Int32'>;
  mcrPickingWaveRef?: DeserializedType<T, 'Edm.String'> | null;
  mcrPackingBoxName?: DeserializedType<T, 'Edm.String'> | null;
  parmId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dlvModeId?: DeserializedType<T, 'Edm.String'> | null;
  inventLocationId?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedTransactionId: DeserializedType<T, 'Edm.Int64'>;
  customer?: DeserializedType<T, 'Edm.String'> | null;
  autoDecreaseQty?: NoYes | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  interCompanyPosted?: NoYes | null;
}
