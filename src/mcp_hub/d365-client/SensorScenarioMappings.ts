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
import type { SensorScenarioMappingsApi } from './SensorScenarioMappingsApi';
import { IoTIntCoreScenarioType } from './IoTIntCoreScenarioType';
import { NoYes } from './NoYes';
import { Sensors, SensorsType } from './Sensors';

/**
 * This class represents the entity "SensorScenarioMappings" of service "d365_metadata".
 */
export class SensorScenarioMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SensorScenarioMappingsType<T>
{
  /**
   * Technical entity name for SensorScenarioMappings.
   */
  static override _entityName = 'SensorScenarioMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorScenarioMappings entity.
   */
  static _keys = ['SensorId', 'Scenario'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Scenario.
   * @nullable
   */
  declare scenario?: IoTIntCoreScenarioType | null;
  /**
   * Is Sensor Active For Scenario.
   * @nullable
   */
  declare isSensorActiveForScenario?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link Sensors} entity.
   */
  declare sensor?: Sensors<T> | null;

  constructor(_entityApi: SensorScenarioMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorScenarioMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  scenario?: IoTIntCoreScenarioType | null;
  isSensorActiveForScenario?: NoYes | null;
  sensor?: SensorsType<T> | null;
}
