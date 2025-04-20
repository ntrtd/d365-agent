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
import type { EngineeringChangeRequestDependencyActionsApi } from './EngineeringChangeRequestDependencyActionsApi';
import { NoYes } from './NoYes';
import {
  EngineeringChangeRequestDependencies,
  EngineeringChangeRequestDependenciesType
} from './EngineeringChangeRequestDependencies';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "EngineeringChangeRequestDependencyActions" of service "d365_metadata".
 */
export class EngineeringChangeRequestDependencyActions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeRequestDependencyActionsType<T>
{
  /**
   * Technical entity name for EngineeringChangeRequestDependencyActions.
   */
  static override _entityName = 'EngineeringChangeRequestDependencyActions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeRequestDependencyActions entity.
   */
  static _keys = [
    'ActionClassName',
    'DependentProductNumber',
    'DependencyLegalEntityId',
    'DependencyTransactionDescription',
    'EngineeringChangeRequestNumber'
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
   * Engineering Change Request Number.
   */
  declare engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Processable Action.
   * @nullable
   */
  declare isProcessableAction?: NoYes | null;
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
   * One-to-one navigation property to the {@link EngineeringChangeRequestDependencies} entity.
   */
  declare engineeringChangeRequestDependency?: EngineeringChangeRequestDependencies<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare processorWorker?: Workers<T> | null;

  constructor(_entityApi: EngineeringChangeRequestDependencyActionsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeRequestDependencyActionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  actionClassName: DeserializedType<T, 'Edm.String'>;
  dependentProductNumber: DeserializedType<T, 'Edm.String'>;
  dependencyLegalEntityId: DeserializedType<T, 'Edm.String'>;
  dependencyTransactionDescription: DeserializedType<T, 'Edm.String'>;
  engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  isProcessableAction?: NoYes | null;
  processorPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  actionName?: DeserializedType<T, 'Edm.String'> | null;
  processedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  engineeringChangeRequestDependency?: EngineeringChangeRequestDependenciesType<T> | null;
  processorWorker?: WorkersType<T> | null;
}
