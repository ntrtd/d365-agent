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
import type { ProductLifecycleStateProcessesApi } from './ProductLifecycleStateProcessesApi';
import { EngChgReadinessModule } from './EngChgReadinessModule';
import { EngChgEcoResStateBlockRule } from './EngChgEcoResStateBlockRule';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';

/**
 * This class represents the entity "ProductLifecycleStateProcesses" of service "d365_metadata".
 */
export class ProductLifecycleStateProcesses<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductLifecycleStateProcessesType<T>
{
  /**
   * Technical entity name for ProductLifecycleStateProcesses.
   */
  static override _entityName = 'ProductLifecycleStateProcesses';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductLifecycleStateProcesses entity.
   */
  static _keys = ['ProductLifecycleStateId', 'ProcessName'];
  /**
   * Product Lifecycle State Id.
   */
  declare productLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Name.
   */
  declare processName: DeserializedType<T, 'Edm.String'>;
  /**
   * Applicable Process Area.
   * @nullable
   */
  declare applicableProcessArea?: EngChgReadinessModule | null;
  /**
   * Process Policy.
   * @nullable
   */
  declare processPolicy?: EngChgEcoResStateBlockRule | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;

  constructor(_entityApi: ProductLifecycleStateProcessesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductLifecycleStateProcessesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productLifecycleStateId: DeserializedType<T, 'Edm.String'>;
  processName: DeserializedType<T, 'Edm.String'>;
  applicableProcessArea?: EngChgReadinessModule | null;
  processPolicy?: EngChgEcoResStateBlockRule | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
}
