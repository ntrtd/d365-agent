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
import type { EngineeringChangeRequestHeadersApi } from './EngineeringChangeRequestHeadersApi';
import { EngChgEcmRequestSeverity } from './EngChgEcmRequestSeverity';
import {
  EngineeringChangeRequestSources,
  EngineeringChangeRequestSourcesType
} from './EngineeringChangeRequestSources';
import {
  EngineeringChangeRequestDependencies,
  EngineeringChangeRequestDependenciesType
} from './EngineeringChangeRequestDependencies';
import {
  EngineeringChangeRequestProducts,
  EngineeringChangeRequestProductsType
} from './EngineeringChangeRequestProducts';
import { Workers, WorkersType } from './Workers';
import {
  EngineeringChangePriorities,
  EngineeringChangePrioritiesType
} from './EngineeringChangePriorities';

/**
 * This class represents the entity "EngineeringChangeRequestHeaders" of service "d365_metadata".
 */
export class EngineeringChangeRequestHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeRequestHeadersType<T>
{
  /**
   * Technical entity name for EngineeringChangeRequestHeaders.
   */
  static override _entityName = 'EngineeringChangeRequestHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeRequestHeaders entity.
   */
  static _keys = ['RequestNumber'];
  /**
   * Request Number.
   */
  declare requestNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Priority Name.
   * @nullable
   */
  declare engineeringChangePriorityName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Request Severity Classification.
   * @nullable
   */
  declare requestSeverityClassification?: EngChgEcmRequestSeverity | null;
  /**
   * Request Title.
   * @nullable
   */
  declare requestTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requester Personnel Number.
   * @nullable
   */
  declare requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeRequestSources} entity.
   */
  declare engineeringChangeRequestSources: EngineeringChangeRequestSources<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeRequestDependencies} entity.
   */
  declare engineeringChangeRequestDependencies: EngineeringChangeRequestDependencies<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeRequestProducts} entity.
   */
  declare engineeringChangeRequestProducts: EngineeringChangeRequestProducts<T>[];
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare requesterWorker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangePriorities} entity.
   */
  declare engineeringChangePriority?: EngineeringChangePriorities<T> | null;

  constructor(_entityApi: EngineeringChangeRequestHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeRequestHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requestNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangePriorityName?: DeserializedType<T, 'Edm.String'> | null;
  requestSeverityClassification?: EngChgEcmRequestSeverity | null;
  requestTitle?: DeserializedType<T, 'Edm.String'> | null;
  requesterPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeRequestSources: EngineeringChangeRequestSourcesType<T>[];
  engineeringChangeRequestDependencies: EngineeringChangeRequestDependenciesType<T>[];
  engineeringChangeRequestProducts: EngineeringChangeRequestProductsType<T>[];
  requesterWorker?: WorkersType<T> | null;
  engineeringChangePriority?: EngineeringChangePrioritiesType<T> | null;
}
