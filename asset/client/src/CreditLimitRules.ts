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
import type { CreditLimitRulesApi } from './CreditLimitRulesApi';

/**
 * This class represents the entity "CreditLimitRules" of service "d365_metadata".
 */
export class CreditLimitRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CreditLimitRulesType<T>
{
  /**
   * Technical entity name for CreditLimitRules.
   */
  static override _entityName = 'CreditLimitRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CreditLimitRules entity.
   */
  static _keys = ['dataAreaId', 'RiskGroupId', 'CurrencyCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Risk Group Id.
   */
  declare riskGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: CreditLimitRulesApi<T>) {
    super(_entityApi);
  }
}

export interface CreditLimitRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  riskGroupId: DeserializedType<T, 'Edm.String'>;
  currencyCode: DeserializedType<T, 'Edm.String'>;
}
