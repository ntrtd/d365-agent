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
import type { AssetMaintenanceChecklistVariableValuesApi } from './AssetMaintenanceChecklistVariableValuesApi';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';

/**
 * This class represents the entity "AssetMaintenanceChecklistVariableValues" of service "d365_metadata".
 */
export class AssetMaintenanceChecklistVariableValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceChecklistVariableValuesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceChecklistVariableValues.
   */
  static override _entityName = 'AssetMaintenanceChecklistVariableValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceChecklistVariableValues entity.
   */
  static _keys = ['dataAreaId', 'ChecklistVariableId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Checklist Variable Id.
   */
  declare checklistVariableId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value.
   * @nullable
   */
  declare value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Check Status.
   * @nullable
   */
  declare checkStatus?: EntAssetChecklistLineStatus | null;

  constructor(_entityApi: AssetMaintenanceChecklistVariableValuesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceChecklistVariableValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  checklistVariableId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  checkStatus?: EntAssetChecklistLineStatus | null;
}
