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
import type { SensorOperationsResourceMappingsApi } from './SensorOperationsResourceMappingsApi';
import { Sensors, SensorsType } from './Sensors';
import {
  OperationsResources,
  OperationsResourcesType
} from './OperationsResources';

/**
 * This class represents the entity "SensorOperationsResourceMappings" of service "d365_metadata".
 */
export class SensorOperationsResourceMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SensorOperationsResourceMappingsType<T>
{
  /**
   * Technical entity name for SensorOperationsResourceMappings.
   */
  static override _entityName = 'SensorOperationsResourceMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorOperationsResourceMappings entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Data Area Id.
   * @nullable
   */
  declare resourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Sensors} entity.
   */
  declare sensor?: Sensors<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationsResources} entity.
   */
  declare operationsResource?: OperationsResources<T> | null;

  constructor(_entityApi: SensorOperationsResourceMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorOperationsResourceMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  resourceDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sensor?: SensorsType<T> | null;
  operationsResource?: OperationsResourcesType<T> | null;
}
