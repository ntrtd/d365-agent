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
import type { AssetMaintenanceAssetCountersApi } from './AssetMaintenanceAssetCountersApi';
import { EntAssetObjectCounterUpdate } from './EntAssetObjectCounterUpdate';
import { NoYes } from './NoYes';
import { EntAssetInfoType } from './EntAssetInfoType';
import { EntAssetCounterAggregate } from './EntAssetCounterAggregate';
import {
  AssetMaintenanceAssetTypeCounterAssociations,
  AssetMaintenanceAssetTypeCounterAssociationsType
} from './AssetMaintenanceAssetTypeCounterAssociations';
import {
  SensorMaintenanceAssetCounterMappings,
  SensorMaintenanceAssetCounterMappingsType
} from './SensorMaintenanceAssetCounterMappings';
import {
  AssetMaintenanceWorkOrderLineChecklists,
  AssetMaintenanceWorkOrderLineChecklistsType
} from './AssetMaintenanceWorkOrderLineChecklists';

/**
 * This class represents the entity "AssetMaintenanceAssetCounters" of service "d365_metadata".
 */
export class AssetMaintenanceAssetCounters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceAssetCountersType<T>
{
  /**
   * Technical entity name for AssetMaintenanceAssetCounters.
   */
  static override _entityName = 'AssetMaintenanceAssetCounters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceAssetCounters entity.
   */
  static _keys = ['dataAreaId', 'CounterId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Id.
   */
  declare counterId: DeserializedType<T, 'Edm.String'>;
  /**
   * Counter Update.
   * @nullable
   */
  declare counterUpdate?: EntAssetObjectCounterUpdate | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inherit.
   * @nullable
   */
  declare inherit?: NoYes | null;
  /**
   * Value Deviation Under.
   */
  declare valueDeviationUnder: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value Deviation Over.
   */
  declare valueDeviationOver: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value Deviation Info Type.
   * @nullable
   */
  declare valueDeviationInfoType?: EntAssetInfoType | null;
  /**
   * Counter Aggregate.
   * @nullable
   */
  declare counterAggregate?: EntAssetCounterAggregate | null;
  /**
   * Unit Id.
   * @nullable
   */
  declare unitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceAssetTypeCounterAssociations} entity.
   */
  declare assetMaintenanceAssetTypeCounterAssociation: AssetMaintenanceAssetTypeCounterAssociations<T>[];
  /**
   * One-to-many navigation property to the {@link SensorMaintenanceAssetCounterMappings} entity.
   */
  declare sensorMaintenanceAssetCounterMappings: SensorMaintenanceAssetCounterMappings<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineChecklists} entity.
   */
  declare jobChecklistLinesCounterType: AssetMaintenanceWorkOrderLineChecklists<T>[];
  /**
   * One-to-many navigation property to the {@link AssetMaintenanceWorkOrderLineChecklists} entity.
   */
  declare jobChecklistLinesMeasurementCounter: AssetMaintenanceWorkOrderLineChecklists<T>[];

  constructor(_entityApi: AssetMaintenanceAssetCountersApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceAssetCountersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  counterId: DeserializedType<T, 'Edm.String'>;
  counterUpdate?: EntAssetObjectCounterUpdate | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  inherit?: NoYes | null;
  valueDeviationUnder: DeserializedType<T, 'Edm.Decimal'>;
  valueDeviationOver: DeserializedType<T, 'Edm.Decimal'>;
  valueDeviationInfoType?: EntAssetInfoType | null;
  counterAggregate?: EntAssetCounterAggregate | null;
  unitId?: DeserializedType<T, 'Edm.String'> | null;
  assetMaintenanceAssetTypeCounterAssociation: AssetMaintenanceAssetTypeCounterAssociationsType<T>[];
  sensorMaintenanceAssetCounterMappings: SensorMaintenanceAssetCounterMappingsType<T>[];
  jobChecklistLinesCounterType: AssetMaintenanceWorkOrderLineChecklistsType<T>[];
  jobChecklistLinesMeasurementCounter: AssetMaintenanceWorkOrderLineChecklistsType<T>[];
}
