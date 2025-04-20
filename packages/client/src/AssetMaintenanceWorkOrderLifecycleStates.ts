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
import type { AssetMaintenanceWorkOrderLifecycleStatesApi } from './AssetMaintenanceWorkOrderLifecycleStatesApi';
import { NoYes } from './NoYes';
import { EntAssetInfoType } from './EntAssetInfoType';
import { EntAssetWorkOrderSetActualStartDefault } from './EntAssetWorkOrderSetActualStartDefault';
import { ProjStatus } from './ProjStatus';
import { EntAssetWorkOrderSetActualEndDefault } from './EntAssetWorkOrderSetActualEndDefault';
import {
  AssetMaintenanceWorkOrderUserReferences,
  AssetMaintenanceWorkOrderUserReferencesType
} from './AssetMaintenanceWorkOrderUserReferences';
import {
  AssetMaintenanceAssetLifecycleStates,
  AssetMaintenanceAssetLifecycleStatesType
} from './AssetMaintenanceAssetLifecycleStates';
import {
  AssetMaintenanceWorkOrderLifecycleModelStates,
  AssetMaintenanceWorkOrderLifecycleModelStatesType
} from './AssetMaintenanceWorkOrderLifecycleModelStates';
import {
  AssetMaintenanceWorkOrderTablesV2,
  AssetMaintenanceWorkOrderTablesV2Type
} from './AssetMaintenanceWorkOrderTablesV2';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLifecycleStates" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLifecycleStates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLifecycleStatesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLifecycleStates.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLifecycleStates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLifecycleStates entity.
   */
  static _keys = ['dataAreaId', 'LifecycleStateId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Lifecycle State Id.
   */
  declare lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Copy Forecast Expense.
   * @nullable
   */
  declare copyForecastExpense?: NoYes | null;
  /**
   * Maintenance Plan Counter Reset.
   * @nullable
   */
  declare maintenancePlanCounterReset?: NoYes | null;
  /**
   * Schedule End.
   * @nullable
   */
  declare scheduleEnd?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Create Job.
   * @nullable
   */
  declare workOrderCreateJob?: NoYes | null;
  /**
   * Work Order Line Schedule Delete.
   * @nullable
   */
  declare workOrderLineScheduleDelete?: NoYes | null;
  /**
   * Update Maintenance Asset Bom.
   * @nullable
   */
  declare updateMaintenanceAssetBom?: NoYes | null;
  /**
   * Validate Commited Cost.
   * @nullable
   */
  declare validateCommitedCost?: NoYes | null;
  /**
   * Work Order Allow Scheduling.
   * @nullable
   */
  declare workOrderAllowScheduling?: NoYes | null;
  /**
   * Validate Fault Symptom.
   * @nullable
   */
  declare validateFaultSymptom?: NoYes | null;
  /**
   * Validate Fault Cause Info Type.
   * @nullable
   */
  declare validateFaultCauseInfoType?: EntAssetInfoType | null;
  /**
   * Validate Fault Cause.
   * @nullable
   */
  declare validateFaultCause?: NoYes | null;
  /**
   * Work Order Set Actual Start.
   * @nullable
   */
  declare workOrderSetActualStart?: NoYes | null;
  /**
   * Work Order Validate Checklist.
   * @nullable
   */
  declare workOrderValidateChecklist?: NoYes | null;
  /**
   * Work Order Set Actual Start Default.
   * @nullable
   */
  declare workOrderSetActualStartDefault?: EntAssetWorkOrderSetActualStartDefault | null;
  /**
   * Validate Production Stop.
   * @nullable
   */
  declare validateProductionStop?: NoYes | null;
  /**
   * Post Work Order Journals.
   * @nullable
   */
  declare postWorkOrderJournals?: NoYes | null;
  /**
   * Schedule Ready.
   * @nullable
   */
  declare scheduleReady?: NoYes | null;
  /**
   * Work Order Allow Delete.
   * @nullable
   */
  declare workOrderAllowDelete?: NoYes | null;
  /**
   * Project Status.
   * @nullable
   */
  declare projectStatus?: ProjStatus | null;
  /**
   * Validate Fault Symptom Info Type.
   * @nullable
   */
  declare validateFaultSymptomInfoType?: EntAssetInfoType | null;
  /**
   * Work Order Set Actual End.
   * @nullable
   */
  declare workOrderSetActualEnd?: NoYes | null;
  /**
   * Validate Commited Cost Info Type.
   * @nullable
   */
  declare validateCommitedCostInfoType?: EntAssetInfoType | null;
  /**
   * Validate Fault Remedy Info Type.
   * @nullable
   */
  declare validateFaultRemedyInfoType?: EntAssetInfoType | null;
  /**
   * Work Order Set Actual End Default.
   * @nullable
   */
  declare workOrderSetActualEndDefault?: EntAssetWorkOrderSetActualEndDefault | null;
  /**
   * Work Order Allow Line Delete.
   * @nullable
   */
  declare workOrderAllowLineDelete?: NoYes | null;
  /**
   * Work Order Active.
   * @nullable
   */
  declare workOrderActive?: NoYes | null;
  /**
   * Copy Forecast Item.
   * @nullable
   */
  declare copyForecastItem?: NoYes | null;
  /**
   * Validate Production Stop Info Type.
   * @nullable
   */
  declare validateProductionStopInfoType?: EntAssetInfoType | null;
  /**
   * Validate Fault Remedy.
   * @nullable
   */
  declare validateFaultRemedy?: NoYes | null;
  /**
   * Work Order Pool Delete.
   * @nullable
   */
  declare workOrderPoolDelete?: NoYes | null;
  /**
   * Schedule Start.
   * @nullable
   */
  declare scheduleStart?: NoYes | null;
  /**
   * Copy Forecast Hour.
   * @nullable
   */
  declare copyForecastHour?: NoYes | null;
  /**
   * Request Lifecycle State Id.
   * @nullable
   */
  declare requestLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Close Activities.
   * @nullable
   */
  declare closeActivities?: NoYes | null;
  /**
   * Maintenance Asset Lifecycle State Id.
   * @nullable
   */
  declare maintenanceAssetLifecycleStateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Work Order Validate Checklist Info Type.
   * @nullable
   */
  declare workOrderValidateChecklistInfoType?: EntAssetInfoType | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderUserReferences} entity.
   */
  declare maintenanceWorkOrderUserReferencesMaintenanceWorkOrderLifecycleState: AssetMaintenanceWorkOrderUserReferences<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetLifecycleStates} entity.
   */
  declare assetMaintenanceAssetLifecycleState?: AssetMaintenanceAssetLifecycleStates<T> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLifecycleModelStates} entity.
   */
  declare assetMaintenanceWorkOrderLifecycleModelState: AssetMaintenanceWorkOrderLifecycleModelStates<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderTablesV2} entity.
   */
  declare lifecycleStateMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2<T>[];

  constructor(_entityApi: AssetMaintenanceWorkOrderLifecycleStatesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLifecycleStatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lifecycleStateId: DeserializedType<T, 'Edm.String'>;
  copyForecastExpense?: NoYes | null;
  maintenancePlanCounterReset?: NoYes | null;
  scheduleEnd?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  workOrderCreateJob?: NoYes | null;
  workOrderLineScheduleDelete?: NoYes | null;
  updateMaintenanceAssetBom?: NoYes | null;
  validateCommitedCost?: NoYes | null;
  workOrderAllowScheduling?: NoYes | null;
  validateFaultSymptom?: NoYes | null;
  validateFaultCauseInfoType?: EntAssetInfoType | null;
  validateFaultCause?: NoYes | null;
  workOrderSetActualStart?: NoYes | null;
  workOrderValidateChecklist?: NoYes | null;
  workOrderSetActualStartDefault?: EntAssetWorkOrderSetActualStartDefault | null;
  validateProductionStop?: NoYes | null;
  postWorkOrderJournals?: NoYes | null;
  scheduleReady?: NoYes | null;
  workOrderAllowDelete?: NoYes | null;
  projectStatus?: ProjStatus | null;
  validateFaultSymptomInfoType?: EntAssetInfoType | null;
  workOrderSetActualEnd?: NoYes | null;
  validateCommitedCostInfoType?: EntAssetInfoType | null;
  validateFaultRemedyInfoType?: EntAssetInfoType | null;
  workOrderSetActualEndDefault?: EntAssetWorkOrderSetActualEndDefault | null;
  workOrderAllowLineDelete?: NoYes | null;
  workOrderActive?: NoYes | null;
  copyForecastItem?: NoYes | null;
  validateProductionStopInfoType?: EntAssetInfoType | null;
  validateFaultRemedy?: NoYes | null;
  workOrderPoolDelete?: NoYes | null;
  scheduleStart?: NoYes | null;
  copyForecastHour?: NoYes | null;
  requestLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  closeActivities?: NoYes | null;
  maintenanceAssetLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderValidateChecklistInfoType?: EntAssetInfoType | null;
  maintenanceWorkOrderUserReferencesMaintenanceWorkOrderLifecycleState: AssetMaintenanceWorkOrderUserReferencesType<T>[];
  assetMaintenanceAssetLifecycleState?: AssetMaintenanceAssetLifecycleStatesType<T> | null;
  assetMaintenanceWorkOrderLifecycleModelState: AssetMaintenanceWorkOrderLifecycleModelStatesType<T>[];
  lifecycleStateMaintenanceWorkOrderHeaders: AssetMaintenanceWorkOrderTablesV2Type<T>[];
}
