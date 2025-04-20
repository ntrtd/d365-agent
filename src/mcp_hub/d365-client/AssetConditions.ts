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
import type { AssetConditionsApi } from './AssetConditionsApi';

/**
 * This class represents the entity "AssetConditions" of service "d365_metadata".
 */
export class AssetConditions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetConditionsType<T>
{
  /**
   * Technical entity name for AssetConditions.
   */
  static override _entityName = 'AssetConditions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetConditions entity.
   */
  static _keys = ['dataAreaId', 'ConditionCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Condition Code.
   */
  declare conditionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetConditionsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetConditionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  conditionCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
