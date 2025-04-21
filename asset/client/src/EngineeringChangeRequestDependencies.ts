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
import type { EngineeringChangeRequestDependenciesApi } from './EngineeringChangeRequestDependenciesApi';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  EngineeringChangeRequestHeaders,
  EngineeringChangeRequestHeadersType
} from './EngineeringChangeRequestHeaders';
import {
  EngineeringChangeRequestDependencyActions,
  EngineeringChangeRequestDependencyActionsType
} from './EngineeringChangeRequestDependencyActions';

/**
 * This class represents the entity "EngineeringChangeRequestDependencies" of service "d365_metadata".
 */
export class EngineeringChangeRequestDependencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeRequestDependenciesType<T>
{
  /**
   * Technical entity name for EngineeringChangeRequestDependencies.
   */
  static override _entityName = 'EngineeringChangeRequestDependencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeRequestDependencies entity.
   */
  static _keys = [
    'DependentProductNumber',
    'DependencyLegalEntityId',
    'DependencyTransactionDescription',
    'EngineeringChangeRequestNumber'
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
   * Engineering Change Request Number.
   */
  declare engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare dependentProduct?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeRequestHeaders} entity.
   */
  declare engineeringChangeRequestHeader?: EngineeringChangeRequestHeaders<T> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeRequestDependencyActions} entity.
   */
  declare engineeringChangeRequestDependencyActions: EngineeringChangeRequestDependencyActions<T>[];

  constructor(_entityApi: EngineeringChangeRequestDependenciesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeRequestDependenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dependentProductNumber: DeserializedType<T, 'Edm.String'>;
  dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>;
  dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>;
  engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  dependentProduct?: ProductsV2Type<T> | null;
  engineeringChangeRequestHeader?: EngineeringChangeRequestHeadersType<T> | null;
  engineeringChangeRequestDependencyActions: EngineeringChangeRequestDependencyActionsType<T>[];
}
