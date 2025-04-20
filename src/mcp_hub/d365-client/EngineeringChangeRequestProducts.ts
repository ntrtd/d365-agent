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
import type { EngineeringChangeRequestProductsApi } from './EngineeringChangeRequestProductsApi';
import {
  EngineeringChangeRequestHeaders,
  EngineeringChangeRequestHeadersType
} from './EngineeringChangeRequestHeaders';

/**
 * This class represents the entity "EngineeringChangeRequestProducts" of service "d365_metadata".
 */
export class EngineeringChangeRequestProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeRequestProductsType<T>
{
  /**
   * Technical entity name for EngineeringChangeRequestProducts.
   */
  static override _entityName = 'EngineeringChangeRequestProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeRequestProducts entity.
   */
  static _keys = ['EngineeringChangeRequestNumber', 'ProductNumber'];
  /**
   * Engineering Change Request Number.
   */
  declare engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeRequestHeaders} entity.
   */
  declare engineeringChangeRequestHeader?: EngineeringChangeRequestHeaders<T> | null;

  constructor(_entityApi: EngineeringChangeRequestProductsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeRequestProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringChangeRequestNumber: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeRequestHeader?: EngineeringChangeRequestHeadersType<T> | null;
}
