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
import type { AssetMaintenanceChecklistTemplateLinesApi } from './AssetMaintenanceChecklistTemplateLinesApi';
import { EntAssetChecklistCounterUpdate } from './EntAssetChecklistCounterUpdate';
import { EntAssetChecklistActionType } from './EntAssetChecklistActionType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "AssetMaintenanceChecklistTemplateLines" of service "d365_metadata".
 */
export class AssetMaintenanceChecklistTemplateLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceChecklistTemplateLinesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceChecklistTemplateLines.
   */
  static override _entityName = 'AssetMaintenanceChecklistTemplateLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceChecklistTemplateLines entity.
   */
  static _keys = ['dataAreaId', 'ChecklistTemplateId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Checklist Template Id.
   */
  declare checklistTemplateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Measure Update.
   * @nullable
   */
  declare measureUpdate?: EntAssetChecklistCounterUpdate | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Linked Checklist Template Id.
   * @nullable
   */
  declare linkedChecklistTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Measure Max Value.
   */
  declare measureMaxValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Instructions.
   * @nullable
   */
  declare instructions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checklist Variable Id.
   * @nullable
   */
  declare checklistVariableId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: EntAssetChecklistActionType | null;
  /**
   * Measure Unit Id.
   * @nullable
   */
  declare measureUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Measure Min Value.
   */
  declare measureMinValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mandatory.
   * @nullable
   */
  declare mandatory?: NoYes | null;
  /**
   * Counter Id.
   * @nullable
   */
  declare counterId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetMaintenanceChecklistTemplateLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceChecklistTemplateLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  checklistTemplateId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  measureUpdate?: EntAssetChecklistCounterUpdate | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  linkedChecklistTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  measureMaxValue: DeserializedType<T, 'Edm.Decimal'>;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  checklistVariableId?: DeserializedType<T, 'Edm.String'> | null;
  type?: EntAssetChecklistActionType | null;
  measureUnitId?: DeserializedType<T, 'Edm.String'> | null;
  measureMinValue: DeserializedType<T, 'Edm.Decimal'>;
  mandatory?: NoYes | null;
  counterId?: DeserializedType<T, 'Edm.String'> | null;
}
