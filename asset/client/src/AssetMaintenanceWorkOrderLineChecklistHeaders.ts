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
import type { AssetMaintenanceWorkOrderLineChecklistHeadersApi } from './AssetMaintenanceWorkOrderLineChecklistHeadersApi';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLineChecklistHeaders" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLineChecklistHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLineChecklistHeadersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLineChecklistHeaders.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLineChecklistHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLineChecklistHeaders entity.
   */
  static _keys = ['dataAreaId', 'WorkOrderId', 'WorkOrderLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Line Number.
   */
  declare workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: EntAssetChecklistLineStatus | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderLineChecklistHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLineChecklistHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  status?: EntAssetChecklistLineStatus | null;
}
