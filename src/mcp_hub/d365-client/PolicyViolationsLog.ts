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
import type { PolicyViolationsLogApi } from './PolicyViolationsLogApi';
import { TrvWorkflowAction } from './TrvWorkflowAction';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';

/**
 * This class represents the entity "PolicyViolationsLog" of service "d365_metadata".
 */
export class PolicyViolationsLog<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PolicyViolationsLogType<T>
{
  /**
   * Technical entity name for PolicyViolationsLog.
   */
  static override _entityName = 'PolicyViolationsLog';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyViolationsLog entity.
   */
  static _keys = ['ViolationsLogId'];
  /**
   * Violations Log Id.
   */
  declare violationsLogId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Line Id.
   * @nullable
   */
  declare lineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action.
   * @nullable
   */
  declare action?: TrvWorkflowAction | null;
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

  constructor(_entityApi: PolicyViolationsLogApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyViolationsLogType<
  T extends DeSerializers = DefaultDeSerializers
> {
  violationsLogId: DeserializedType<T, 'Edm.Guid'>;
  lineId?: DeserializedType<T, 'Edm.String'> | null;
  action?: TrvWorkflowAction | null;
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  policyRuleValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  headerLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  policyType?: SysPolicyTypeEnum | null;
  headerId?: DeserializedType<T, 'Edm.String'> | null;
  violationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  policyRuleTypeName?: DeserializedType<T, 'Edm.String'> | null;
}
