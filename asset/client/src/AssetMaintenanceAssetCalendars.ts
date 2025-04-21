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
import type { AssetMaintenanceAssetCalendarsApi } from './AssetMaintenanceAssetCalendarsApi';
import { EntAssetObjectCalendarStatus } from './EntAssetObjectCalendarStatus';
import {
  AssetMaintenanceRequests,
  AssetMaintenanceRequestsType
} from './AssetMaintenanceRequests';
import {
  AssetMaintenanceRounds,
  AssetMaintenanceRoundsType
} from './AssetMaintenanceRounds';
import {
  AssetMaintenanceJobTypes,
  AssetMaintenanceJobTypesType
} from './AssetMaintenanceJobTypes';
import {
  AssetMaintenanceAssetsV3,
  AssetMaintenanceAssetsV3Type
} from './AssetMaintenanceAssetsV3';
import {
  AssetMaintenanceJobTrades,
  AssetMaintenanceJobTradesType
} from './AssetMaintenanceJobTrades';
import {
  AssetMaintenanceRequestsV2,
  AssetMaintenanceRequestsV2Type
} from './AssetMaintenanceRequestsV2';
import {
  AssetMaintenanceJobVariants,
  AssetMaintenanceJobVariantsType
} from './AssetMaintenanceJobVariants';
import {
  AssetMaintenanceAssets,
  AssetMaintenanceAssetsType
} from './AssetMaintenanceAssets';
import {
  AssetMaintenancePlans,
  AssetMaintenancePlansType
} from './AssetMaintenancePlans';
import {
  AssetMaintenanceWorkers,
  AssetMaintenanceWorkersType
} from './AssetMaintenanceWorkers';

/**
 * This class represents the entity "AssetMaintenanceAssetCalendars" of service "d365_metadata".
 */
export class AssetMaintenanceAssetCalendars<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetCalendarsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetCalendars.
   */
  static override _entityName = 'AssetMaintenanceAssetCalendars';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetCalendars entity.
   */
  static _keys = [
    'dataAreaId',
    'InternalId',
    'ExpectedStartOriginal',
    'MaintenanceAssetId',
    'CriticalityId',
    'CriticalityName',
    'ResponsibleWorkerPersonnelNumber',
    'JobTradeId',
    'JobTypeId',
    'JobVariantId',
    'ResponsibleWorkerGroupId',
    'MaintenancePlanId',
    'MaintenancePlanLineNumber',
    'RequestId',
    'MaintenanceAssetRoundLineNumber',
    'RoundId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Internal Id.
   */
  declare internalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expected Start Original.
   */
  declare expectedStartOriginal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Maintenance Asset Id.
   */
  declare maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Criticality Id.
   */
  declare criticalityId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Criticality Name.
   */
  declare criticalityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Responsible Worker Personnel Number.
   */
  declare responsibleWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Trade Id.
   */
  declare jobTradeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Type Id.
   */
  declare jobTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Job Variant Id.
   */
  declare jobVariantId: DeserializedType<T, 'Edm.String'>;
  /**
   * Responsible Worker Group Id.
   */
  declare responsibleWorkerGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Id.
   */
  declare maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Plan Line Number.
   */
  declare maintenancePlanLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Asset Round Line Number.
   */
  declare maintenanceAssetRoundLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Round Id.
   */
  declare roundId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Value.
   */
  declare counterValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expected Start.
   */
  declare expectedStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: EntAssetObjectCalendarStatus | null;
  /**
   * Service Level.
   */
  declare serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Expected End.
   */
  declare expectedEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequests} entity.
   */
  declare assetMaintenanceRequest?: AssetMaintenanceRequests<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRounds} entity.
   */
  declare assetMaintenanceRound?: AssetMaintenanceRounds<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTypes} entity.
   */
  declare assetMaintenanceJobType?: AssetMaintenanceJobTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssetsV3} entity.
   */
  declare maintenanceAssetV3?: AssetMaintenanceAssetsV3<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobTrades} entity.
   */
  declare assetMaintenanceJobTrade?: AssetMaintenanceJobTrades<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestsV2} entity.
   */
  declare maintenanceRequest?: AssetMaintenanceRequestsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceJobVariants} entity.
   */
  declare assetMaintenanceJobVariant?: AssetMaintenanceJobVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceAssets} entity.
   */
  declare assetMaintenanceAsset?: AssetMaintenanceAssets<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenancePlans} entity.
   */
  declare assetMaintenancePlan?: AssetMaintenancePlans<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkers} entity.
   */
  declare assetMaintenanceWorker?: AssetMaintenanceWorkers<T> | null;

  constructor(_entityApi: AssetMaintenanceAssetCalendarsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetCalendarsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  internalId: DeserializedType<T, 'Edm.String'>;
  expectedStartOriginal: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maintenanceAssetId: DeserializedType<T, 'Edm.String'>;
  criticalityId: DeserializedType<T, 'Edm.Int32'>;
  criticalityName: DeserializedType<T, 'Edm.String'>;
  responsibleWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  jobTradeId: DeserializedType<T, 'Edm.String'>;
  jobTypeId: DeserializedType<T, 'Edm.String'>;
  jobVariantId: DeserializedType<T, 'Edm.String'>;
  responsibleWorkerGroupId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanId: DeserializedType<T, 'Edm.String'>;
  maintenancePlanLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  maintenanceAssetRoundLineNumber: DeserializedType<T, 'Edm.Int64'>;
  roundId: DeserializedType<T, 'Edm.String'>;
  counterValue: DeserializedType<T, 'Edm.Decimal'>;
  expectedStart: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  status?: EntAssetObjectCalendarStatus | null;
  serviceLevel: DeserializedType<T, 'Edm.Int32'>;
  expectedEnd: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceRequest?: AssetMaintenanceRequestsType<T> | null;
  assetMaintenanceRound?: AssetMaintenanceRoundsType<T> | null;
  assetMaintenanceJobType?: AssetMaintenanceJobTypesType<T> | null;
  maintenanceAssetV3?: AssetMaintenanceAssetsV3Type<T> | null;
  assetMaintenanceJobTrade?: AssetMaintenanceJobTradesType<T> | null;
  maintenanceRequest?: AssetMaintenanceRequestsV2Type<T> | null;
  assetMaintenanceJobVariant?: AssetMaintenanceJobVariantsType<T> | null;
  assetMaintenanceAsset?: AssetMaintenanceAssetsType<T> | null;
  assetMaintenancePlan?: AssetMaintenancePlansType<T> | null;
  assetMaintenanceWorker?: AssetMaintenanceWorkersType<T> | null;
}
