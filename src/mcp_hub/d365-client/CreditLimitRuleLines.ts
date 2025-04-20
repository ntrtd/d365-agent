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
import type { CreditLimitRuleLinesApi } from './CreditLimitRuleLinesApi';
import { CredManComparisonOperator } from './CredManComparisonOperator';

/**
 * This class represents the entity "CreditLimitRuleLines" of service "d365_metadata".
 */
export class CreditLimitRuleLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CreditLimitRuleLinesType<T>
{
  /**
   * Technical entity name for CreditLimitRuleLines.
   */
  static override _entityName = 'CreditLimitRuleLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditLimitRuleLines entity.
   */
  static _keys = [
    'dataAreaId',
    'RuleRiskGroupId',
    'RuleCurrencyCode',
    'LineNum'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Risk Group Id.
   */
  declare ruleRiskGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Currency Code.
   */
  declare ruleCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Comparison Value.
   * @nullable
   */
  declare comparisonValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comparison Operator.
   * @nullable
   */
  declare comparisonOperator?: CredManComparisonOperator | null;
  /**
   * Credit Max.
   */
  declare creditMax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Risk Score Group Id.
   * @nullable
   */
  declare riskScoreGroupId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CreditLimitRuleLinesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditLimitRuleLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleRiskGroupId: DeserializedType<T, 'Edm.String'>;
  ruleCurrencyCode: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  comparisonValue?: DeserializedType<T, 'Edm.String'> | null;
  comparisonOperator?: CredManComparisonOperator | null;
  creditMax: DeserializedType<T, 'Edm.Decimal'>;
  riskScoreGroupId?: DeserializedType<T, 'Edm.String'> | null;
}
