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
import type { EngineeringChangeCategoriesV2Api } from './EngineeringChangeCategoriesV2Api';
import {
  EngineeringChangeOrderHeaders,
  EngineeringChangeOrderHeadersType
} from './EngineeringChangeOrderHeaders';

/**
 * This class represents the entity "EngineeringChangeCategoriesV2" of service "d365_metadata".
 */
export class EngineeringChangeCategoriesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeCategoriesV2Type<T>
{
  /**
   * Technical entity name for EngineeringChangeCategoriesV2.
   */
  static override _entityName = 'EngineeringChangeCategoriesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeCategoriesV2 entity.
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

  constructor(_entityApi: EngineeringChangeCategoriesV2Api<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeCategoriesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  categoryName: DeserializedType<T, 'Edm.String'>;
  sequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  engineeringChangeOrderHeaders: EngineeringChangeOrderHeadersType<T>[];
}
