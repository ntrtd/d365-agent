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
import type { RAssetLedgersApi } from './RAssetLedgersApi';

/**
 * This class represents the entity "RAssetLedgers" of service "d365_metadata".
 */
export class RAssetLedgers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RAssetLedgersType<T>
{
  /**
   * Technical entity name for RAssetLedgers.
   */
  static override _entityName = 'RAssetLedgers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RAssetLedgers entity.
   */
  static _keys = ['dataAreaId', 'PostingProfile'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile.
   */
  declare postingProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RAssetLedgersApi<T>) {
    super(_entityApi);
  }
}

export interface RAssetLedgersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfile: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
