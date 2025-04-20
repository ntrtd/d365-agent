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
import type { EngineeringChangeOrderDependencyActionsApi } from './EngineeringChangeOrderDependencyActionsApi';
import {
  EngineeringChangeOrderDependencies,
  EngineeringChangeOrderDependenciesType
} from './EngineeringChangeOrderDependencies';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "EngineeringChangeOrderDependencyActions" of service "d365_metadata".
 */
export class EngineeringChangeOrderDependencyActions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderDependencyActionsType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderDependencyActions.
   */
  static override _entityName = 'EngineeringChangeOrderDependencyActions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderDependencyActions entity.
   */
  static _keys = [
    'ActionClassName',
    'DependentProductNumber',
    'DependencyLegalEntityId',
    'DependencyTransactionDescription',
    'EngineeringChangeOrderNumber'
  ];
  /**
   * Action Class Name.
   */
  declare actionClassName: DeserializedType<T, 'Edm.String'>;
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
   * Processor Personnel Number.
   * @nullable
   */
  declare processorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action Name.
   * @nullable
   */
  declare actionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processed Date Time.
   */
  declare processedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderDependencies} entity.
   */
  declare engineeringChangeOrderDependency?: EngineeringChangeOrderDependencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare processorWorker?: Workers<T> | null;

  constructor(_entityApi: EngineeringChangeOrderDependencyActionsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderDependencyActionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  actionClassName: DeserializedType<T, 'Edm.String'>;
  dependentProductNumber: DeserializedType<T, 'Edm.String'>;
  dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>;
  dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  processorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  actionName?: DeserializedType<T, 'Edm.String'> | null;
  processedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  engineeringChangeOrderDependency?: EngineeringChangeOrderDependenciesType<T> | null;
  processorWorker?: WorkersType<T> | null;
}
