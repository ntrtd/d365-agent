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
import type { EngineeringChangePrioritiesApi } from './EngineeringChangePrioritiesApi';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';
import {
  EngineeringChangeRequestHeaders,
  EngineeringChangeRequestHeadersType
} from './EngineeringChangeRequestHeaders';

/**
 * This class represents the entity "EngineeringChangePriorities" of service "d365_metadata".
 */
export class EngineeringChangePriorities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangePrioritiesType<T>
{
  /**
   * Technical entity name for EngineeringChangePriorities.
   */
  static override _entityName = 'EngineeringChangePriorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangePriorities entity.
   */
  static _keys = ['PriorityName'];
  /**
   * Priority Name.
   */
  declare priorityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeringChangeOrderHeaders: EngineeringChangeOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeRequestHeaders} entity.
   */
  declare engineeringChangeRequestHeaders: EngineeringChangeRequestHeaders<T>[];

  constructor(_entityApi: EngineeringChangePrioritiesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangePrioritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  priorityName: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderHeaders: EngineeringChangeOrderHeadersType<T>[];
  engineeringChangeRequestHeaders: EngineeringChangeRequestHeadersType<T>[];
}
