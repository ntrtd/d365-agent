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
import type { AssetAllocationRulesApi } from './AssetAllocationRulesApi';

/**
 * This class represents the entity "AssetAllocationRules" of service "d365_metadata".
 */
export class AssetAllocationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetAllocationRulesType<T>
{
  /**
   * Technical entity name for AssetAllocationRules.
   */
  static override _entityName = 'AssetAllocationRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetAllocationRules entity.
   */
  static _keys = ['dataAreaId', 'RuleId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rule Id.
   */
  declare ruleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Name.
   * @nullable
   */
  declare dimensionName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetAllocationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetAllocationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  ruleId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dimensionName?: DeserializedType<T, 'Edm.String'> | null;
}
