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
import type { CostAccountingDataConnectorSystemInstancesApi } from './CostAccountingDataConnectorSystemInstancesApi';
import {
  CostAccountingDataConnectorSystemInstanceAXes,
  CostAccountingDataConnectorSystemInstanceAXesType
} from './CostAccountingDataConnectorSystemInstanceAXes';
import {
  CostAccountingDataConnectorCostObjectDimensions,
  CostAccountingDataConnectorCostObjectDimensionsType
} from './CostAccountingDataConnectorCostObjectDimensions';

/**
 * This class represents the entity "CostAccountingDataConnectorSystemInstances" of service "d365_metadata".
 */
export class CostAccountingDataConnectorSystemInstances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorSystemInstancesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorSystemInstances.
   */
  static override _entityName = 'CostAccountingDataConnectorSystemInstances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorSystemInstances entity.
   */
  static _keys = ['SurrogateKey'];
  /**
   * Surrogate Key.
   */
  declare surrogateKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CostAccountingDataConnectorSystemInstanceAXes} entity.
   */
  declare dataConnectorSystemInstanceAxEntity?: CostAccountingDataConnectorSystemInstanceAXes<T> | null;
  /**
   * One-to-many navigation property to the {@link CostAccountingDataConnectorCostObjectDimensions} entity.
   */
  declare dataConnectorCostObjectDimensionEntity: CostAccountingDataConnectorCostObjectDimensions<T>[];

  constructor(_entityApi: CostAccountingDataConnectorSystemInstancesApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorSystemInstancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorSystemInstanceAxEntity?: CostAccountingDataConnectorSystemInstanceAXesType<T> | null;
  dataConnectorCostObjectDimensionEntity: CostAccountingDataConnectorCostObjectDimensionsType<T>[];
}
