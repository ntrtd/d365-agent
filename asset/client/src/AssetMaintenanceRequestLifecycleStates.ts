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
import type { AssetMaintenanceRequestLifecycleStatesApi } from './AssetMaintenanceRequestLifecycleStatesApi';
import { NoYes } from './NoYes';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceRequestLifecycleModels,
  AssetMaintenanceRequestLifecycleModelsType
} from './AssetMaintenanceRequestLifecycleModels';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';
import {
  AssetMaintenanceRequestLifecycleModelStates,
  AssetMaintenanceRequestLifecycleModelStatesType
} from './AssetMaintenanceRequestLifecycleModelStates';

/**
 * This class represents the entity "AssetMaintenanceRequestLifecycleStates" of service "d365_metadata".
 */
export class AssetMaintenanceRequestLifecycleStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceRequestLifecycleStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceRequestLifecycleStates.
   */
  static override _entityName = 'AssetMaintenanceRequestLifecycleStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceRequestLifecycleStates entity.
   */
  static _keys = ['dataAreaId', 'RequestLifecycleStateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Lifecycle State Id.
   */
  declare requestLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Set Actual End.
   * @nullable
   */
  declare requestSetActualEnd?: NoYes | null;
  /**
   * Delete Open Maintenance Asset Calendar.
   * @nullable
   */
  declare deleteOpenMaintenanceAssetCalendar?: NoYes | null;
  /**
   * Request Active.
   * @nullable
   */
  declare requestActive?: NoYes | null;
  /**
   * Set Inbound Maintenance Asset Lifecycle State.
   * @nullable
   */
  declare setInboundMaintenanceAssetLifecycleState?: NoYes | null;
  /**
   * Allow Delete.
   * @nullable
   */
  declare allowDelete?: NoYes | null;
  /**
   * Set Outbound Maintenance Asset Lifecycle State.
   * @nullable
   */
  declare setOutboundMaintenanceAssetLifecycleState?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Create Work Order.
   * @nullable
   */
  declare allowCreateWorkOrder?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare maintenanceRequests: AssetMaintenanceRequests<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestLifecycleModels} entity.
   */
  declare deliveredAssetMaintenanceRequestLifecycleModels: AssetMaintenanceRequestLifecycleModels<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestLifecycleModels} entity.
   */
  declare receivedAssetReceivedAssetMaintenanceRequestLifecycleModels: AssetMaintenanceRequestLifecycleModels<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequestsLifecycleState: AssetMaintenanceRequestsV2<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceRequestLifecycleModelStates} entity.
   */
  declare assetMaintenanceRequestLifecycleModelState: AssetMaintenanceRequestLifecycleModelStates<T>[];

  constructor(_entityApi: AssetMaintenanceRequestLifecycleStatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceRequestLifecycleStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  requestSetActualEnd?: NoYes | null;
  deleteOpenMaintenanceAssetCalendar?: NoYes | null;
  requestActive?: NoYes | null;
  setInboundMaintenanceAssetLifecycleState?: NoYes | null;
  allowDelete?: NoYes | null;
  setOutboundMaintenanceAssetLifecycleState?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  allowCreateWorkOrder?: NoYes | null;
  maintenanceRequests: AssetMaintenanceRequestsType<T>[];
  deliveredAssetMaintenanceRequestLifecycleModels: AssetMaintenanceRequestLifecycleModelsType<T>[];
  receivedAssetReceivedAssetMaintenanceRequestLifecycleModels: AssetMaintenanceRequestLifecycleModelsType<T>[];
  maintenanceRequestsLifecycleState: AssetMaintenanceRequestsV2Type<T>[];
  assetMaintenanceRequestLifecycleModelState: AssetMaintenanceRequestLifecycleModelStatesType<T>[];
}
