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
import type { InventoryOnHandMobileRequestsV2Api } from './InventoryOnHandMobileRequestsV2Api';

/**
 * This class represents the entity "InventoryOnHandMobileRequestsV2" of service "d365_metadata".
 */
export class InventoryOnHandMobileRequestsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryOnHandMobileRequestsV2Type<T>
{
  /**
   * Technical entity name for InventoryOnHandMobileRequestsV2.
   */
  static override _entityName = 'InventoryOnHandMobileRequestsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryOnHandMobileRequestsV2 entity.
   */
  static _keys = ['dataAreaId', 'RequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryOnHandMobileRequestsV2Api<T>) {
    super(_entityApi);
  }
}

export interface InventoryOnHandMobileRequestsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
}
