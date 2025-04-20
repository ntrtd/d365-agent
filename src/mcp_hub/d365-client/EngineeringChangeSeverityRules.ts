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
import type { EngineeringChangeSeverityRulesApi } from './EngineeringChangeSeverityRulesApi';
import {
  EngineeringChangeSeverityRuleSets,
  EngineeringChangeSeverityRuleSetsType
} from './EngineeringChangeSeverityRuleSets';

/**
 * This class represents the entity "EngineeringChangeSeverityRules" of service "d365_metadata".
 */
export class EngineeringChangeSeverityRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeSeverityRulesType<T>
{
  /**
   * Technical entity name for EngineeringChangeSeverityRules.
   */
  static override _entityName = 'EngineeringChangeSeverityRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeSeverityRules entity.
   */
  static _keys = [
    'dataAreaId',
    'SeverityName',
    'RuleSetSequenceNumber',
    'RuleClassName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Severity Name.
   */
  declare severityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Set Sequence Number.
   */
  declare ruleSetSequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rule Class Name.
   */
  declare ruleClassName: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeSeverityRuleSets} entity.
   */
  declare engineeringChangeSeverityRuleSet?: EngineeringChangeSeverityRuleSets<T> | null;

  constructor(_entityApi: EngineeringChangeSeverityRulesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeSeverityRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  severityName: DeserializedType<T, 'Edm.String'>;
  ruleSetSequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  ruleClassName: DeserializedType<T, 'Edm.String'>;
  engineeringChangeSeverityRuleSet?: EngineeringChangeSeverityRuleSetsType<T> | null;
}
