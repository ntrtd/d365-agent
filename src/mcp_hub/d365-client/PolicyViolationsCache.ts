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
import type { PolicyViolationsCacheApi } from './PolicyViolationsCacheApi';
import { TrvPolicyViolationLevel } from './TrvPolicyViolationLevel';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';

/**
 * This class represents the entity "PolicyViolationsCache" of service "d365_metadata".
 */
export class PolicyViolationsCache<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PolicyViolationsCacheType<T>
{
  /**
   * Technical entity name for PolicyViolationsCache.
   */
  static override _entityName = 'PolicyViolationsCache';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyViolationsCache entity.
   */
  static _keys = ['ViolationsCacheId'];
  /**
   * Violations Cache Id.
   */
  declare violationsCacheId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Line Id.
   * @nullable
   */
  declare lineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Name.
   * @nullable
   */
  declare policyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Rule Valid From.
   */
  declare policyRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Save Date Time.
   */
  declare saveDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Policy Violation Level.
   * @nullable
   */
  declare policyViolationLevel?: TrvPolicyViolationLevel | null;
  /**
   * Header Legal Entity.
   * @nullable
   */
  declare headerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Type.
   * @nullable
   */
  declare policyType?: SysPolicyTypeEnum | null;
  /**
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Header Id.
   * @nullable
   */
  declare headerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Violation Date.
   */
  declare violationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Policy Rule Type Name.
   * @nullable
   */
  declare policyRuleTypeName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PolicyViolationsCacheApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyViolationsCacheType<
  T extends DeSerializers = DefaultDeSerializers
> {
  violationsCacheId: DeserializedType<T, 'Edm.Guid'>;
  lineId?: DeserializedType<T, 'Edm.String'> | null;
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  policyRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  saveDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  policyViolationLevel?: TrvPolicyViolationLevel | null;
  headerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  policyType?: SysPolicyTypeEnum | null;
  parentId?: DeserializedType<T, 'Edm.String'> | null;
  headerId?: DeserializedType<T, 'Edm.String'> | null;
  violationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  policyRuleTypeName?: DeserializedType<T, 'Edm.String'> | null;
}
