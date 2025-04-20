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
import type { VendVendorCertificationTypeEntitiesApi } from './VendVendorCertificationTypeEntitiesApi';

/**
 * This class represents the entity "VendVendorCertificationTypeEntities" of service "d365_metadata".
 */
export class VendVendorCertificationTypeEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendVendorCertificationTypeEntitiesType<T>
{
  /**
   * Technical entity name for VendVendorCertificationTypeEntities.
   */
  static override _entityName = 'VendVendorCertificationTypeEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendVendorCertificationTypeEntities entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendVendorCertificationTypeEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface VendVendorCertificationTypeEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
