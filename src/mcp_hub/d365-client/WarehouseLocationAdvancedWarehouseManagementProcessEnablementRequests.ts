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
import type { WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsApi } from './WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsApi';
import { WmsLocationType } from './WmsLocationType';

/**
 * This class represents the entity "WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests" of service "d365_metadata".
 */
export class WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsType<T>
{
  /**
   * Technical entity name for WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests.
   */
  static override _entityName =
    'WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequests entity.
   */
  static _keys = ['dataAreaId', 'WarehouseId', 'WarehouseLocationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Id.
   */
  declare warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Location Profile Id.
   * @nullable
   */
  declare warehouseLocationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Location Type.
   * @nullable
   */
  declare warehouseLocationType?: WmsLocationType | null;

  constructor(
    _entityApi: WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface WarehouseLocationAdvancedWarehouseManagementProcessEnablementRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
  warehouseLocationId: DeserializedType<T, 'Edm.String'>;
  warehouseLocationProfileId?: DeserializedType<T, 'Edm.String'> | null;
  warehouseLocationType?: WmsLocationType | null;
}
