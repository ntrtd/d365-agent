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
import type { CustomerHierarchyCatalogsApi } from './CustomerHierarchyCatalogsApi';
import {
  CustomerHiearchies,
  CustomerHiearchiesType
} from './CustomerHiearchies';

/**
 * This class represents the entity "CustomerHierarchyCatalogs" of service "d365_metadata".
 */
export class CustomerHierarchyCatalogs<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerHierarchyCatalogsType<T>
{
  /**
   * Technical entity name for CustomerHierarchyCatalogs.
   */
  static override _entityName = 'CustomerHierarchyCatalogs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerHierarchyCatalogs entity.
   */
  static _keys = ['CustomerHierarchyId', 'Priority'];
  /**
   * Customer Hierarchy Id.
   */
  declare customerHierarchyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Catalog Id.
   * @nullable
   */
  declare catalogId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CustomerHiearchies} entity.
   */
  declare customerHierarchy?: CustomerHiearchies<T> | null;

  constructor(_entityApi: CustomerHierarchyCatalogsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerHierarchyCatalogsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customerHierarchyId: DeserializedType<T, 'Edm.String'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  catalogId?: DeserializedType<T, 'Edm.String'> | null;
  customerHierarchy?: CustomerHiearchiesType<T> | null;
}
