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
import type { CurrencyRulesApi } from './CurrencyRulesApi';
import { RtslCurrencyAction } from './RtslCurrencyAction';
import { RtslCurrencyRate } from './RtslCurrencyRate';

/**
 * This class represents the entity "CurrencyRules" of service "d365_metadata".
 */
export class CurrencyRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyRulesType<T>
{
  /**
   * Technical entity name for CurrencyRules.
   */
  static override _entityName = 'CurrencyRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyRules entity.
   */
  static _keys = ['dataAreaId', 'RuleGroup', 'CurrencyRuleGroup', 'Currency'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Group.
   */
  declare ruleGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Rule Group.
   */
  declare currencyRuleGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Index Id.
   * @nullable
   */
  declare currencyIndexId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Action.
   * @nullable
   */
  declare currencyAction?: RtslCurrencyAction | null;
  /**
   * Secondary Index Id.
   * @nullable
   */
  declare secondaryIndexId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mst Action.
   * @nullable
   */
  declare mstAction?: RtslCurrencyAction | null;
  /**
   * Rate Method.
   * @nullable
   */
  declare rateMethod?: RtslCurrencyRate | null;
  /**
   * Mst Index Id.
   * @nullable
   */
  declare mstIndexId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Secondary Action.
   * @nullable
   */
  declare secondaryAction?: RtslCurrencyAction | null;

  constructor(_entityApi: CurrencyRulesApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleGroup: DeserializedType<T, 'Edm.String'>;
  currencyRuleGroup: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  currencyIndexId?: DeserializedType<T, 'Edm.String'> | null;
  currencyAction?: RtslCurrencyAction | null;
  secondaryIndexId?: DeserializedType<T, 'Edm.String'> | null;
  mstAction?: RtslCurrencyAction | null;
  rateMethod?: RtslCurrencyRate | null;
  mstIndexId?: DeserializedType<T, 'Edm.String'> | null;
  secondaryAction?: RtslCurrencyAction | null;
}
