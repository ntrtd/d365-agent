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
import type { EngineeringChangeCategoriesApi } from './EngineeringChangeCategoriesApi';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';

/**
 * This class represents the entity "EngineeringChangeCategories" of service "d365_metadata".
 */
export class EngineeringChangeCategories<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeCategoriesType<T>
{
  /**
   * Technical entity name for EngineeringChangeCategories.
   */
  static override _entityName = 'EngineeringChangeCategories';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeCategories entity.
   */
  static _keys = ['CategoryName'];
  /**
   * Category Name.
   */
  declare categoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Sequence Number.
   */
  declare sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderHeaders} entity.
   */
  declare engineeringChangeOrderHeaders: EngineeringChangeOrderHeaders<T>[];

  constructor(_entityApi: EngineeringChangeCategoriesApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeCategoriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderHeaders: EngineeringChangeOrderHeadersType<T>[];
}
