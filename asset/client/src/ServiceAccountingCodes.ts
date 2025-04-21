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
import type { ServiceAccountingCodesApi } from './ServiceAccountingCodesApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ServiceAccountingCodes" of service "d365_metadata".
 */
export class ServiceAccountingCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ServiceAccountingCodesType<T>
{
  /**
   * Technical entity name for ServiceAccountingCodes.
   */
  static override _entityName = 'ServiceAccountingCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServiceAccountingCodes entity.
   */
  static _keys = ['dataAreaId', 'SAC'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sac.
   */
  declare sac: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: ServiceAccountingCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ServiceAccountingCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sac: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
