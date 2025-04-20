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
import type { EngineeringProductVersionNumberingRulesApi } from './EngineeringProductVersionNumberingRulesApi';
import { EngChgVersionNumberRuleType } from './EngChgVersionNumberRuleType';
import {
  EngineeringProductCategoryDetails,
  EngineeringProductCategoryDetailsType
} from './EngineeringProductCategoryDetails';
import {
  EngineeringProductVersionNumberingRuleListMembers,
  EngineeringProductVersionNumberingRuleListMembersType
} from './EngineeringProductVersionNumberingRuleListMembers';

/**
 * This class represents the entity "EngineeringProductVersionNumberingRules" of service "d365_metadata".
 */
export class EngineeringProductVersionNumberingRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductVersionNumberingRulesType<T>
{
  /**
   * Technical entity name for EngineeringProductVersionNumberingRules.
   */
  static override _entityName = 'EngineeringProductVersionNumberingRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductVersionNumberingRules entity.
   */
  static _keys = ['RuleName'];
  /**
   * Rule Name.
   */
  declare ruleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Type.
   * @nullable
   */
  declare ruleType?: EngChgVersionNumberRuleType | null;
  /**
   * Auto Numbering Format.
   * @nullable
   */
  declare autoNumberingFormat?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringProductCategoryDetails} entity.
   */
  declare engineeringProductCategoryDetails: EngineeringProductCategoryDetails<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringProductVersionNumberingRuleListMembers} entity.
   */
  declare productEngineeringVersionNumberingRuleListMembers: EngineeringProductVersionNumberingRuleListMembers<T>[];

  constructor(_entityApi: EngineeringProductVersionNumberingRulesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringProductVersionNumberingRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ruleName: DeserializedType<T, 'Edm.String'>;
  ruleType?: EngChgVersionNumberRuleType | null;
  autoNumberingFormat?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductCategoryDetails: EngineeringProductCategoryDetailsType<T>[];
  productEngineeringVersionNumberingRuleListMembers: EngineeringProductVersionNumberingRuleListMembersType<T>[];
}
