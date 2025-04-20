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
import type { PolicyRuleTypesApi } from './PolicyRuleTypesApi';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PolicyRuleTypes" of service "d365_metadata".
 */
export class PolicyRuleTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyRuleTypesType<T>
{
  /**
   * Technical entity name for PolicyRuleTypes.
   */
  static override _entityName = 'PolicyRuleTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyRuleTypes entity.
   */
  static _keys = ['PolicyType', 'RuleName'];
  /**
   * Policy Type.
   * @nullable
   */
  declare policyType?: SysPolicyTypeEnum | null;
  /**
   * Rule Name.
   */
  declare ruleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   * @nullable
   */
  declare policyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Parent Rule.
   * @nullable
   */
  declare includeParentRule?: NoYes | null;
  /**
   * Is Precedence Supported.
   * @nullable
   */
  declare isPrecedenceSupported?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PolicyRuleTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyRuleTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  policyType?: SysPolicyTypeEnum | null;
  ruleName: DeserializedType<T, 'Edm.String'>;
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  includeParentRule?: NoYes | null;
  isPrecedenceSupported?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
