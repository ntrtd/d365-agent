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
import type { AdvancedWarehouseManagementProcessEnablementRequestsApi } from './AdvancedWarehouseManagementProcessEnablementRequestsApi';

/**
 * This class represents the entity "AdvancedWarehouseManagementProcessEnablementRequests" of service "d365_metadata".
 */
export class AdvancedWarehouseManagementProcessEnablementRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AdvancedWarehouseManagementProcessEnablementRequestsType<T>
{
  /**
   * Technical entity name for AdvancedWarehouseManagementProcessEnablementRequests.
   */
  static override _entityName =
    'AdvancedWarehouseManagementProcessEnablementRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AdvancedWarehouseManagementProcessEnablementRequests entity.
   */
  static _keys = ['dataAreaId', 'WarehouseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warehouse Id.
   */
  declare warehouseId: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: AdvancedWarehouseManagementProcessEnablementRequestsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface AdvancedWarehouseManagementProcessEnablementRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warehouseId: DeserializedType<T, 'Edm.String'>;
}
