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
import type { CostAccountingDataConnectorSystemInstanceAXesApi } from './CostAccountingDataConnectorSystemInstanceAXesApi';
import {
  CostAccountingDataConnectorSystemInstances,
  CostAccountingDataConnectorSystemInstancesType
} from './CostAccountingDataConnectorSystemInstances';

/**
 * This class represents the entity "CostAccountingDataConnectorSystemInstanceAXes" of service "d365_metadata".
 */
export class CostAccountingDataConnectorSystemInstanceAXes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorSystemInstanceAXesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorSystemInstanceAXes.
   */
  static override _entityName = 'CostAccountingDataConnectorSystemInstanceAXes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorSystemInstanceAXes entity.
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
   * One-to-one navigation property to the {@link CostAccountingDataConnectorSystemInstances} entity.
   */
  declare dataConnectorSystemInstanceEntity?: CostAccountingDataConnectorSystemInstances<T> | null;

  constructor(_entityApi: CostAccountingDataConnectorSystemInstanceAXesApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorSystemInstanceAXesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorSystemInstanceEntity?: CostAccountingDataConnectorSystemInstancesType<T> | null;
}
