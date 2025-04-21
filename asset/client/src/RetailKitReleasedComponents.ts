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
import type { RetailKitReleasedComponentsApi } from './RetailKitReleasedComponentsApi';
import {
  RetailKitComponents,
  RetailKitComponentsType
} from './RetailKitComponents';

/**
 * This class represents the entity "RetailKitReleasedComponents" of service "d365_metadata".
 */
export class RetailKitReleasedComponents<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailKitReleasedComponentsType<T>
{
  /**
   * Technical entity name for RetailKitReleasedComponents.
   */
  static override _entityName = 'RetailKitReleasedComponents';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailKitReleasedComponents entity.
   */
  static _keys = ['dataAreaId', 'KitProductNumber', 'KitComponentLineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Product Number.
   */
  declare kitProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Component Line Number.
   */
  declare kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Base Price.
   */
  declare basePrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Kit Price.
   */
  declare kitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailKitComponents} entity.
   */
  declare retailKitComponent?: RetailKitComponents<T> | null;

  constructor(_entityApi: RetailKitReleasedComponentsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailKitReleasedComponentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  kitProductNumber: DeserializedType<T, 'Edm.String'>;
  kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  basePrice: DeserializedType<T, 'Edm.Decimal'>;
  kitPrice: DeserializedType<T, 'Edm.Decimal'>;
  retailKitComponent?: RetailKitComponentsType<T> | null;
}
