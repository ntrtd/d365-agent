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
import type { ProcessAdvisorWarehouseMaterialFlowsApi } from './ProcessAdvisorWarehouseMaterialFlowsApi';
import { WhsWorkType } from './WhsWorkType';
import { WhsWorkTransType } from './WhsWorkTransType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ProcessAdvisorWarehouseMaterialFlows" of service "d365_metadata".
 */
export class ProcessAdvisorWarehouseMaterialFlows<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProcessAdvisorWarehouseMaterialFlowsType<T>
{
  /**
   * Technical entity name for ProcessAdvisorWarehouseMaterialFlows.
   */
  static override _entityName = 'ProcessAdvisorWarehouseMaterialFlows';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProcessAdvisorWarehouseMaterialFlows entity.
   */
  static _keys = [
    'dataAreaId',
    'ProcessAdvisorProcessId',
    'WarehouseWorkId',
    'WorkLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Advisor Process Id.
   */
  declare processAdvisorProcessId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Warehouse Work Id.
   */
  declare warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Line Number.
   */
  declare workLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Warehouse Work Type.
   * @nullable
   */
  declare warehouseWorkType?: WhsWorkType | null;
  /**
   * Warehouse Work Order Type.
   * @nullable
   */
  declare warehouseWorkOrderType?: WhsWorkTransType | null;
  /**
   * Source Order Number.
   * @nullable
   */
  declare sourceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Id.
   * @nullable
   */
  declare warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Quantity.
   */
  declare workQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Date Time.
   */
  declare startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Completed By User Id.
   * @nullable
   */
  declare completedByUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Work Line Short Picked.
   * @nullable
   */
  declare isWorkLineShortPicked?: NoYes | null;
  /**
   * End Date Time.
   */
  declare endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity.
   * @nullable
   */
  declare activity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Profile Id.
   * @nullable
   */
  declare locationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Work Line Replenished.
   * @nullable
   */
  declare isWorkLineReplenished?: NoYes | null;
  /**
   * Warehouse Location Id.
   * @nullable
   */
  declare warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Zone Id.
   * @nullable
   */
  declare warehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Work Closed Date Time.
   */
  declare warehouseWorkClosedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Item Group Id.
   * @nullable
   */
  declare itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Quantity Unit Symbol.
   * @nullable
   */
  declare workQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProcessAdvisorWarehouseMaterialFlowsApi<T>) {
    super(_entityApi);
  }
}

export interface ProcessAdvisorWarehouseMaterialFlowsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  processAdvisorProcessId: DeserializedType<T, 'Edm.Int64'>;
  warehouseWorkId: DeserializedType<T, 'Edm.String'>;
  workLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  warehouseWorkType?: WhsWorkType | null;
  warehouseWorkOrderType?: WhsWorkTransType | null;
  sourceOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  warehouseId?: DeserializedType<T, 'Edm.String'> | null;
  workQuantity: DeserializedType<T, 'Edm.Decimal'>;
  startDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  completedByUserId?: DeserializedType<T, 'Edm.String'> | null;
  isWorkLineShortPicked?: NoYes | null;
  endDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activity?: DeserializedType<T, 'Edm.String'> | null;
  locationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  isWorkLineReplenished?: NoYes | null;
  warehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseZoneId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseWorkClosedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  workQuantityUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
}
