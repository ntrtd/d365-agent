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
import type { InventoryOnHandMobileRequestsApi } from './InventoryOnHandMobileRequestsApi';

/**
 * This class represents the entity "InventoryOnHandMobileRequests" of service "d365_metadata".
 */
export class InventoryOnHandMobileRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryOnHandMobileRequestsType<T>
{
  /**
   * Technical entity name for InventoryOnHandMobileRequests.
   */
  static override _entityName = 'InventoryOnHandMobileRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryOnHandMobileRequests entity.
   */
  static _keys = ['dataAreaId', 'ProductNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryOnHandMobileRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryOnHandMobileRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
}
