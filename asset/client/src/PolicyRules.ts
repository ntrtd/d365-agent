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
import type { PolicyRulesApi } from './PolicyRulesApi';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
import { TrvPolicyViolationLevel } from './TrvPolicyViolationLevel';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PolicyRules" of service "d365_metadata".
 */
export class PolicyRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyRulesType<T>
{
  /**
   * Technical entity name for PolicyRules.
   */
  static override _entityName = 'PolicyRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyRules entity.
   */
  static _keys = ['PolicyName', 'PolicyType', 'PolicyRuleName', 'ValidFrom'];
  /**
   * Policy Name.
   */
  declare policyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Type.
   * @nullable
   */
  declare policyType?: SysPolicyTypeEnum | null;
  /**
   * Policy Rule Name.
   */
  declare policyRuleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Action.
   * @nullable
   */
  declare action?: TrvPolicyViolationLevel | null;
  /**
   * Expression Id.
   */
  declare expressionId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Include Parent Rule.
   * @nullable
   */
  declare includeParentRule?: NoYes | null;

  constructor(_entityApi: PolicyRulesApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyName: DeserializedType<T, 'Edm.String'>;
  policyType?: SysPolicyTypeEnum | null;
  policyRuleName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  action?: TrvPolicyViolationLevel | null;
  expressionId: DeserializedType<T, 'Edm.Guid'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  includeParentRule?: NoYes | null;
}
