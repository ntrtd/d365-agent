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
import type { AssetMaintenanceWorkOrderLineChecklistsApi } from './AssetMaintenanceWorkOrderLineChecklistsApi';
import { EntAssetChecklistCounterUpdate } from './EntAssetChecklistCounterUpdate';
import { NoYes } from './NoYes';
import { EntAssetChecklistActionType } from './EntAssetChecklistActionType';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';
import { EntAssetChecklistRefType } from './EntAssetChecklistRefType';
import {
  AssetMaintenanceAssetCounters,
  AssetMaintenanceAssetCountersType
} from './AssetMaintenanceAssetCounters';
import {
  AssetMaintenanceWorkers,
  AssetMaintenanceWorkersType
} from './AssetMaintenanceWorkers';
import {
  AssetMaintenanceChecklistVariables,
  AssetMaintenanceChecklistVariablesType
} from './AssetMaintenanceChecklistVariables';
import {
  AssetMaintenanceWorkOrderJobChecklistHeadersV2,
  AssetMaintenanceWorkOrderJobChecklistHeadersV2Type
} from './AssetMaintenanceWorkOrderJobChecklistHeadersV2';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLineChecklists" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLineChecklists<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLineChecklistsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLineChecklists.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLineChecklists';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLineChecklists entity.
   */
  static _keys = [
    'dataAreaId',
    'ExternalLineNum',
    'WorkOrderId',
    'WorkOrderLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Line Num.
   */
  declare externalLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Line Number.
   */
  declare workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
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
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
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
   * Checked Counter Replaced.
   * @nullable
   */
  declare checkedCounterReplaced?: NoYes | null;
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
   * Checked By Personnel Number.
   * @nullable
   */
  declare checkedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Measure Unit Id.
   * @nullable
   */
  declare measureUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checked Counter Date Time.
   */
  declare checkedCounterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Measure Min Value.
   */
  declare measureMinValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Group Number.
   */
  declare groupNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Checked Counter Type Id.
   * @nullable
   */
  declare checkedCounterTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mandatory.
   * @nullable
   */
  declare mandatory?: NoYes | null;
  /**
   * Not Applicable.
   * @nullable
   */
  declare notApplicable?: NoYes | null;
  /**
   * Line Status.
   * @nullable
   */
  declare lineStatus?: EntAssetChecklistLineStatus | null;
  /**
   * Checked.
   * @nullable
   */
  declare checked?: NoYes | null;
  /**
   * Checked Maintenance Asset Id.
   * @nullable
   */
  declare checkedMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Variable Value Id.
   * @nullable
   */
  declare variableValueId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Notes.
   * @nullable
   */
  declare notes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checklist Ref Type.
   * @nullable
   */
  declare checklistRefType?: EntAssetChecklistRefType | null;
  /**
   * Checked Maintenance Asset Counter Id.
   * @nullable
   */
  declare checkedMaintenanceAssetCounterId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Measure Value.
   */
  declare measureValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Checked.
   */
  declare dateChecked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetCounters} entity.
   */
  declare measurementCounterType?: AssetMaintenanceAssetCounters<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare maintenanceAssetWorker?: AssetMaintenanceWorkers<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetCounters} entity.
   */
  declare measurementCounter?: AssetMaintenanceAssetCounters<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceChecklistVariables} entity.
   */
  declare jobChecklistVariable?: AssetMaintenanceChecklistVariables<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderJobChecklistHeadersV2} entity.
   */
  declare jobChecklistHeader?: AssetMaintenanceWorkOrderJobChecklistHeadersV2<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderLineChecklistsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLineChecklistsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  externalLineNum: DeserializedType<T, 'Edm.Decimal'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  workOrderLineNumber: DeserializedType<T, 'Edm.Int64'>;
  measureUpdate?: EntAssetChecklistCounterUpdate | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  measureMaxValue: DeserializedType<T, 'Edm.Decimal'>;
  instructions?: DeserializedType<T, 'Edm.String'> | null;
  checkedCounterReplaced?: NoYes | null;
  checklistVariableId?: DeserializedType<T, 'Edm.String'> | null;
  type?: EntAssetChecklistActionType | null;
  checkedByPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  measureUnitId?: DeserializedType<T, 'Edm.String'> | null;
  checkedCounterDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  measureMinValue: DeserializedType<T, 'Edm.Decimal'>;
  groupNumber: DeserializedType<T, 'Edm.Decimal'>;
  checkedCounterTypeId?: DeserializedType<T, 'Edm.String'> | null;
  mandatory?: NoYes | null;
  notApplicable?: NoYes | null;
  lineStatus?: EntAssetChecklistLineStatus | null;
  checked?: NoYes | null;
  checkedMaintenanceAssetId?: DeserializedType<T, 'Edm.String'> | null;
  variableValueId?: DeserializedType<T, 'Edm.String'> | null;
  notes?: DeserializedType<T, 'Edm.String'> | null;
  checklistRefType?: EntAssetChecklistRefType | null;
  checkedMaintenanceAssetCounterId?: DeserializedType<T, 'Edm.String'> | null;
  measureValue: DeserializedType<T, 'Edm.Decimal'>;
  dateChecked: DeserializedType<T, 'Edm.DateTimeOffset'>;
  measurementCounterType?: AssetMaintenanceAssetCountersType<T> | null;
  maintenanceAssetWorker?: AssetMaintenanceWorkersType<T> | null;
  measurementCounter?: AssetMaintenanceAssetCountersType<T> | null;
  jobChecklistVariable?: AssetMaintenanceChecklistVariablesType<T> | null;
  jobChecklistHeader?: AssetMaintenanceWorkOrderJobChecklistHeadersV2Type<T> | null;
}
