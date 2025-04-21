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
import type { EngineeringProductVersionNumberingRuleListMembersApi } from './EngineeringProductVersionNumberingRuleListMembersApi';
import {
  EngineeringProductVersionNumberingRules,
  EngineeringProductVersionNumberingRulesType
} from './EngineeringProductVersionNumberingRules';

/**
 * This class represents the entity "EngineeringProductVersionNumberingRuleListMembers" of service "d365_metadata".
 */
export class EngineeringProductVersionNumberingRuleListMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductVersionNumberingRuleListMembersType<T>
{
  /**
   * Technical entity name for EngineeringProductVersionNumberingRuleListMembers.
   */
  static override _entityName =
    'EngineeringProductVersionNumberingRuleListMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductVersionNumberingRuleListMembers entity.
   */
  static _keys = ['VersionNumberingRuleName', 'ProductVersionName'];
  /**
   * Version Numbering Rule Name.
   */
  declare versionNumberingRuleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Name.
   */
  declare productVersionName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link EngineeringProductVersionNumberingRules} entity.
   */
  declare engineeringProductVersionNumberingRule?: EngineeringProductVersionNumberingRules<T> | null;

  constructor(
    _entityApi: EngineeringProductVersionNumberingRuleListMembersApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringProductVersionNumberingRuleListMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  versionNumberingRuleName: DeserializedType<T, 'Edm.String'>;
  productVersionName: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringProductVersionNumberingRule?: EngineeringProductVersionNumberingRulesType<T> | null;
}
