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
import type { EngineeringChangeSeveritiesApi } from './EngineeringChangeSeveritiesApi';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';
import {
  EngineeringChangeSeverityRuleSets,
  EngineeringChangeSeverityRuleSetsType
} from './EngineeringChangeSeverityRuleSets';

/**
 * This class represents the entity "EngineeringChangeSeverities" of service "d365_metadata".
 */
export class EngineeringChangeSeverities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeSeveritiesType<T>
{
  /**
   * Technical entity name for EngineeringChangeSeverities.
   */
  static override _entityName = 'EngineeringChangeSeverities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeSeverities entity.
   */
  static _keys = ['SeverityName'];
  /**
   * Severity Name.
   */
  declare severityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeringChangeOrderHeaders: EngineeringChangeOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeSeverityRuleSets} entity.
   */
  declare engineeringChangeSeverityRuleSets: EngineeringChangeSeverityRuleSets<T>[];

  constructor(_entityApi: EngineeringChangeSeveritiesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeSeveritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  severityName: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderHeaders: EngineeringChangeOrderHeadersType<T>[];
  engineeringChangeSeverityRuleSets: EngineeringChangeSeverityRuleSetsType<T>[];
}
