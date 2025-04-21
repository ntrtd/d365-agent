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
import type { ShippingActivityTablesApi } from './ShippingActivityTablesApi';

/**
 * This class represents the entity "ShippingActivityTables" of service "d365_metadata".
 */
export class ShippingActivityTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingActivityTablesType<T>
{
  /**
   * Technical entity name for ShippingActivityTables.
   */
  static override _entityName = 'ShippingActivityTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingActivityTables entity.
   */
  static _keys = ['dataAreaId', 'ActivityId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Id.
   */
  declare activityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Vendor Account Number.
   * @nullable
   */
  declare shippingVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Activity Description.
   * @nullable
   */
  declare activityDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShippingActivityTablesApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingActivityTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  activityId: DeserializedType<T, 'Edm.String'>;
  shippingVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  activityDescription?: DeserializedType<T, 'Edm.String'> | null;
}
