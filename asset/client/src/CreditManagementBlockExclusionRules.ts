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
import type { CreditManagementBlockExclusionRulesApi } from './CreditManagementBlockExclusionRulesApi';
import { CredManBlockExclusionRuleType } from './CredManBlockExclusionRuleType';
import { CredManRuleType } from './CredManRuleType';
import { TableGroupAll } from './TableGroupAll';
import { CredManBlockExclusionValueType } from './CredManBlockExclusionValueType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CreditManagementBlockExclusionRules" of service "d365_metadata".
 */
export class CreditManagementBlockExclusionRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditManagementBlockExclusionRulesType<T>
{
  /**
   * Technical entity name for CreditManagementBlockExclusionRules.
   */
  static override _entityName = 'CreditManagementBlockExclusionRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditManagementBlockExclusionRules entity.
   */
  static _keys = [
    'dataAreaId',
    'RuleId',
    'RuleType',
    'TableGroupAll',
    'CustRelation',
    'RiskGroupId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Id.
   * @nullable
   */
  declare ruleId?: CredManBlockExclusionRuleType | null;
  /**
   * Rule Type.
   * @nullable
   */
  declare ruleType?: CredManRuleType | null;
  /**
   * Table Group All.
   * @nullable
   */
  declare tableGroupAll?: TableGroupAll | null;
  /**
   * Cust Relation.
   */
  declare custRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Risk Group Id.
   */
  declare riskGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Type.
   * @nullable
   */
  declare valueType?: CredManBlockExclusionValueType | null;
  /**
   * Release Sales Order.
   * @nullable
   */
  declare releaseSalesOrder?: NoYes | null;
  /**
   * Credit Limit Threshold.
   */
  declare creditLimitThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Grace Value.
   */
  declare graceValue: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CreditManagementBlockExclusionRulesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditManagementBlockExclusionRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleId?: CredManBlockExclusionRuleType | null;
  ruleType?: CredManRuleType | null;
  tableGroupAll?: TableGroupAll | null;
  custRelation: DeserializedType<T, 'Edm.String'>;
  riskGroupId: DeserializedType<T, 'Edm.String'>;
  valueType?: CredManBlockExclusionValueType | null;
  releaseSalesOrder?: NoYes | null;
  creditLimitThreshold: DeserializedType<T, 'Edm.Decimal'>;
  graceValue: DeserializedType<T, 'Edm.Decimal'>;
}
