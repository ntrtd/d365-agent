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
import type { CurrencyRuleGroupsApi } from './CurrencyRuleGroupsApi';

/**
 * This class represents the entity "CurrencyRuleGroups" of service "d365_metadata".
 */
export class CurrencyRuleGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyRuleGroupsType<T>
{
  /**
   * Technical entity name for CurrencyRuleGroups.
   */
  static override _entityName = 'CurrencyRuleGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyRuleGroups entity.
   */
  static _keys = ['dataAreaId', 'CurrencyRuleGroupId', 'RuleGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Rule Group Id.
   */
  declare currencyRuleGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Group Id.
   */
  declare ruleGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CurrencyRuleGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyRuleGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  currencyRuleGroupId: DeserializedType<T, 'Edm.String'>;
  ruleGroupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
