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
import type { AssetMaintenanceWorkOrderLineNotesApi } from './AssetMaintenanceWorkOrderLineNotesApi';
import {
  AssetMaintenanceWorkOrderLines,
  AssetMaintenanceWorkOrderLinesType
} from './AssetMaintenanceWorkOrderLines';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLineNotes" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLineNotes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLineNotesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLineNotes.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLineNotes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLineNotes entity.
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
   * Internal.
   * @nullable
   */
  declare internal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee.
   * @nullable
   */
  declare employee?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLines} entity.
   */
  declare assetMaintenanceWorkOrderLine?: AssetMaintenanceWorkOrderLines<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderLineNotesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLineNotesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  internal?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  employee?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceWorkOrderLine?: AssetMaintenanceWorkOrderLinesType<T> | null;
}
