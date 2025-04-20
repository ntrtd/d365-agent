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
import type { EngineeringChangeSeverityRuleSetsApi } from './EngineeringChangeSeverityRuleSetsApi';
import {
  EngineeringChangeSeverityRules,
  EngineeringChangeSeverityRulesType
} from './EngineeringChangeSeverityRules';
import {
  EngineeringChangeSeverities,
  EngineeringChangeSeveritiesType
} from './EngineeringChangeSeverities';

/**
 * This class represents the entity "EngineeringChangeSeverityRuleSets" of service "d365_metadata".
 */
export class EngineeringChangeSeverityRuleSets<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeSeverityRuleSetsType<T>
{
  /**
   * Technical entity name for EngineeringChangeSeverityRuleSets.
   */
  static override _entityName = 'EngineeringChangeSeverityRuleSets';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeSeverityRuleSets entity.
   */
  static _keys = ['dataAreaId', 'SeverityName', 'SequenceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Severity Name.
   */
  declare severityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeSeverityRules} entity.
   */
  declare engineeringChangeSeverityRules: EngineeringChangeSeverityRules<T>[];
  /**
   * One-to-one navigation property to the {@link EngineeringChangeSeverities} entity.
   */
  declare engineeringChangeSeverity?: EngineeringChangeSeverities<T> | null;

  constructor(_entityApi: EngineeringChangeSeverityRuleSetsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeSeverityRuleSetsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  severityName: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeSeverityRules: EngineeringChangeSeverityRulesType<T>[];
  engineeringChangeSeverity?: EngineeringChangeSeveritiesType<T> | null;
}
