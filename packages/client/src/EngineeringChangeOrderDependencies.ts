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
import type { EngineeringChangeOrderDependenciesApi } from './EngineeringChangeOrderDependenciesApi';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';
import {
  EngineeringChangeOrderDependencyActions,
  EngineeringChangeOrderDependencyActionsType
} from './EngineeringChangeOrderDependencyActions';

/**
 * This class represents the entity "EngineeringChangeOrderDependencies" of service "d365_metadata".
 */
export class EngineeringChangeOrderDependencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderDependenciesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderDependencies.
   */
  static override _entityName = 'EngineeringChangeOrderDependencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderDependencies entity.
   */
  static _keys = [
    'DependentProductNumber',
    'DependencyLegalEntityId',
    'DependencyTransactionDescription',
    'EngineeringChangeOrderNumber'
  ];
  /**
   * Dependent Product Number.
   */
  declare dependentProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Dependency Legal Entity Id.
   */
  declare dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dependency Transaction Description.
   */
  declare dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare dependentProduct?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeringChangeOrderHeader?: EngineeringChangeOrderHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderDependencyActions} entity.
   */
  declare engineeringChangeOrderDependencyActions: EngineeringChangeOrderDependencyActions<T>[];

  constructor(_entityApi: EngineeringChangeOrderDependenciesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderDependenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dependentProductNumber: DeserializedType<T, 'Edm.String'>;
  dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>;
  dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  dependentProduct?: ProductsV2Type<T> | null;
  engineeringChangeOrderHeader?: EngineeringChangeOrderHeadersType<T> | null;
  engineeringChangeOrderDependencyActions: EngineeringChangeOrderDependencyActionsType<T>[];
}
