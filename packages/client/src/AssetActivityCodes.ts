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
import type { AssetActivityCodesApi } from './AssetActivityCodesApi';

/**
 * This class represents the entity "AssetActivityCodes" of service "d365_metadata".
 */
export class AssetActivityCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AssetActivityCodesType<T>
{
  /**
   * Technical entity name for AssetActivityCodes.
   */
  static override _entityName = 'AssetActivityCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetActivityCodes entity.
   */
  static _keys = ['dataAreaId', 'ActivityCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Code.
   */
  declare activityCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: AssetActivityCodesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetActivityCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  activityCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
