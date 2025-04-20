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
import type { SensorItemBatchAttributeMappingsApi } from './SensorItemBatchAttributeMappingsApi';
import {
  ItemBatchAttributes,
  ItemBatchAttributesType
} from './ItemBatchAttributes';
import { Sensors, SensorsType } from './Sensors';

/**
 * This class represents the entity "SensorItemBatchAttributeMappings" of service "d365_metadata".
 */
export class SensorItemBatchAttributeMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SensorItemBatchAttributeMappingsType<T>
{
  /**
   * Technical entity name for SensorItemBatchAttributeMappings.
   */
  static override _entityName = 'SensorItemBatchAttributeMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SensorItemBatchAttributeMappings entity.
   */
  static _keys = ['SensorId'];
  /**
   * Sensor Id.
   */
  declare sensorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Attribute Data Area Id.
   * @nullable
   */
  declare itemBatchAttributeDataAreaId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Item Batch Attribute Id.
   * @nullable
   */
  declare itemBatchAttributeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatchAttributes} entity.
   */
  declare itemBatchAttribute?: ItemBatchAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link Sensors} entity.
   */
  declare sensor?: Sensors<T> | null;

  constructor(_entityApi: SensorItemBatchAttributeMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface SensorItemBatchAttributeMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sensorId: DeserializedType<T, 'Edm.String'>;
  itemBatchAttributeDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchAttributeId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchAttribute?: ItemBatchAttributesType<T> | null;
  sensor?: SensorsType<T> | null;
}
