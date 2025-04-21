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
import type { DimensionRuleGoupsApi } from './DimensionRuleGoupsApi';

/**
 * This class represents the entity "DimensionRuleGoups" of service "d365_metadata".
 */
export class DimensionRuleGoups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DimensionRuleGoupsType<T>
{
  /**
   * Technical entity name for DimensionRuleGoups.
   */
  static override _entityName = 'DimensionRuleGoups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionRuleGoups entity.
   */
  static _keys = ['dataAreaId', 'RuleGroupId', 'DimesionRuleGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Group Id.
   */
  declare ruleGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimesion Rule Group Id.
   */
  declare dimesionRuleGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DimensionRuleGoupsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionRuleGoupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleGroupId: DeserializedType<T, 'Edm.String'>;
  dimesionRuleGroupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
