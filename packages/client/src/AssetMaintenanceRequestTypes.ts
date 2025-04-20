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
import type { AssetMaintenanceRequestTypesApi } from './AssetMaintenanceRequestTypesApi';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceRequestLifecycleModels,
  AssetMaintenanceRequestLifecycleModelsType
} from './AssetMaintenanceRequestLifecycleModels';
import {
  AssetMaintenanceWorkOrderTypes,
  AssetMaintenanceWorkOrderTypesType
} from './AssetMaintenanceWorkOrderTypes';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';

/**
 * This class represents the entity "AssetMaintenanceRequestTypes" of service "d365_metadata".
 */
export class AssetMaintenanceRequestTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestTypesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestTypes.
   */
  static override _entityName = 'AssetMaintenanceRequestTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestTypes entity.
   */
  static _keys = ['dataAreaId', 'RequestTypeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Type Id.
   */
  declare requestTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Lifecycle Model Id.
   * @nullable
   */
  declare requestLifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Type Id.
   * @nullable
   */
  declare workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare assetMaintenanceRequest: AssetMaintenanceRequests<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestLifecycleModels} entity.
   */
  declare assetMaintenanceRequestLifecycleModel?: AssetMaintenanceRequestLifecycleModels<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderTypes} entity.
   */
  declare assetMaintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypes<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsMaintenanceRequestType: AssetMaintenanceRequestsV2<T>[];

  constructor(_entityApi: AssetMaintenanceRequestTypesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestTypeId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  requestLifecycleModelId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceRequest: AssetMaintenanceRequestsType<T>[];
  assetMaintenanceRequestLifecycleModel?: AssetMaintenanceRequestLifecycleModelsType<T> | null;
  assetMaintenanceWorkOrderType?: AssetMaintenanceWorkOrderTypesType<T> | null;
  maintenanceRequestsMaintenanceRequestType: AssetMaintenanceRequestsV2Type<T>[];
}
