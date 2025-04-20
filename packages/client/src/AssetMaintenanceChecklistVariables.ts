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
import type { AssetMaintenanceChecklistVariablesApi } from './AssetMaintenanceChecklistVariablesApi';
import {
  AssetMaintenanceWorkOrderLineChecklists,
  AssetMaintenanceWorkOrderLineChecklistsType
} from './AssetMaintenanceWorkOrderLineChecklists';

/**
 * This class represents the entity "AssetMaintenanceChecklistVariables" of service "d365_metadata".
 */
export class AssetMaintenanceChecklistVariables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceChecklistVariablesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceChecklistVariables.
   */
  static override _entityName = 'AssetMaintenanceChecklistVariables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceChecklistVariables entity.
   */
  static _keys = ['dataAreaId', 'ChecklistVariableId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Checklist Variable Id.
   */
  declare checklistVariableId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineChecklists} entity.
   */
  declare jobChecklistLinesJobChecklistVariable: AssetMaintenanceWorkOrderLineChecklists<T>[];

  constructor(_entityApi: AssetMaintenanceChecklistVariablesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceChecklistVariablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  checklistVariableId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  jobChecklistLinesJobChecklistVariable: AssetMaintenanceWorkOrderLineChecklistsType<T>[];
}
