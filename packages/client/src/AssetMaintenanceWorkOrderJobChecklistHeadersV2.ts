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
import type { AssetMaintenanceWorkOrderJobChecklistHeadersV2Api } from './AssetMaintenanceWorkOrderJobChecklistHeadersV2Api';
import { EntAssetChecklistLineStatus } from './EntAssetChecklistLineStatus';
import {
  AssetMaintenanceWorkOrderLineChecklists,
  AssetMaintenanceWorkOrderLineChecklistsType
} from './AssetMaintenanceWorkOrderLineChecklists';
import {
  AssetMaintenanceUnplannedWorkOrderLines,
  AssetMaintenanceUnplannedWorkOrderLinesType
} from './AssetMaintenanceUnplannedWorkOrderLines';
import {
  AssetMaintenanceWorkOrderLinesV2,
  AssetMaintenanceWorkOrderLinesV2Type
} from './AssetMaintenanceWorkOrderLinesV2';
import {
  AssetMaintenanceRequestWorkOrderLines,
  AssetMaintenanceRequestWorkOrderLinesType
} from './AssetMaintenanceRequestWorkOrderLines';
import {
  AssetMaintenancePlanWorkOrderLines,
  AssetMaintenancePlanWorkOrderLinesType
} from './AssetMaintenancePlanWorkOrderLines';
import {
  AssetMaintenanceRoundWorkOrderLines,
  AssetMaintenanceRoundWorkOrderLinesType
} from './AssetMaintenanceRoundWorkOrderLines';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderJobChecklistHeadersV2" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderJobChecklistHeadersV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderJobChecklistHeadersV2Type<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderJobChecklistHeadersV2.
   */
  static override _entityName =
    'AssetMaintenanceWorkOrderJobChecklistHeadersV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderJobChecklistHeadersV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'MaintenanceWorkOrderId',
    'MaintenanceWorkOrderJobLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Work Order Id.
   */
  declare maintenanceWorkOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maintenance Work Order Job Line Number.
   */
  declare maintenanceWorkOrderJobLineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: EntAssetChecklistLineStatus | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineChecklists} entity.
   */
  declare jobChecklistLinesJobChecklistHeader: AssetMaintenanceWorkOrderLineChecklists<T>[];
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceUnplannedWorkOrderLines} entity.
   */
  declare unplannedWorkOrderJob?: AssetMaintenanceUnplannedWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWorkOrderLinesV2} entity.
   */
  declare workOrderJobV2?: AssetMaintenanceWorkOrderLinesV2<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRequestWorkOrderLines} entity.
   */
  declare maintenanceRequestWorkOrderJob?: AssetMaintenanceRequestWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenancePlanWorkOrderLines} entity.
   */
  declare maintenancePlanWorkOrderJob?: AssetMaintenancePlanWorkOrderLines<T> | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceRoundWorkOrderLines} entity.
   */
  declare maintenanceRoundWorkOrderJob?: AssetMaintenanceRoundWorkOrderLines<T> | null;

  constructor(
    _entityApi: AssetMaintenanceWorkOrderJobChecklistHeadersV2Api<T>
  ) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderJobChecklistHeadersV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  maintenanceWorkOrderId: DeserializedType<T, 'Edm.String'>;
  maintenanceWorkOrderJobLineNumber: DeserializedType<T, 'Edm.Int64'>;
  status?: EntAssetChecklistLineStatus | null;
  jobChecklistLinesJobChecklistHeader: AssetMaintenanceWorkOrderLineChecklistsType<T>[];
  unplannedWorkOrderJob?: AssetMaintenanceUnplannedWorkOrderLinesType<T> | null;
  workOrderJobV2?: AssetMaintenanceWorkOrderLinesV2Type<T> | null;
  maintenanceRequestWorkOrderJob?: AssetMaintenanceRequestWorkOrderLinesType<T> | null;
  maintenancePlanWorkOrderJob?: AssetMaintenancePlanWorkOrderLinesType<T> | null;
  maintenanceRoundWorkOrderJob?: AssetMaintenanceRoundWorkOrderLinesType<T> | null;
}
