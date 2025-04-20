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
import type { PremiumEarningPolicyRuleTypesApi } from './PremiumEarningPolicyRuleTypesApi';

/**
 * This class represents the entity "PremiumEarningPolicyRuleTypes" of service "d365_metadata".
 */
export class PremiumEarningPolicyRuleTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PremiumEarningPolicyRuleTypesType<T>
{
  /**
   * Technical entity name for PremiumEarningPolicyRuleTypes.
   */
  static override _entityName = 'PremiumEarningPolicyRuleTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PremiumEarningPolicyRuleTypes entity.
   */
  static _keys = ['RuleName', 'QueryName'];
  /**
   * Rule Name.
   */
  declare ruleName: DeserializedType<T, 'Edm.String'>;
  /**
   * Query Name.
   */
  declare queryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PremiumEarningPolicyRuleTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PremiumEarningPolicyRuleTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ruleName: DeserializedType<T, 'Edm.String'>;
  queryName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
