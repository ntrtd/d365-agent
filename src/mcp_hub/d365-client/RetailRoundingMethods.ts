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
import type { RetailRoundingMethodsApi } from './RetailRoundingMethodsApi';
import { RetailRoundingTypeBase } from './RetailRoundingTypeBase';

/**
 * This class represents the entity "RetailRoundingMethods" of service "d365_metadata".
 */
export class RetailRoundingMethods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailRoundingMethodsType<T>
{
  /**
   * Technical entity name for RetailRoundingMethods.
   */
  static override _entityName = 'RetailRoundingMethods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailRoundingMethods entity.
   */
  static _keys = ['dataAreaId', 'RoundingMethodId', 'Minimum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rounding Method Id.
   */
  declare roundingMethodId: DeserializedType<T, 'Edm.String'>;
  /**
   * Minimum.
   */
  declare minimum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Added After.
   */
  declare amountAddedAfter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Type.
   * @nullable
   */
  declare roundingType?: RetailRoundingTypeBase | null;
  /**
   * Precision.
   */
  declare precision: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Added Before.
   */
  declare amountAddedBefore: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailRoundingMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailRoundingMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  roundingMethodId: DeserializedType<T, 'Edm.String'>;
  minimum: DeserializedType<T, 'Edm.Decimal'>;
  amountAddedAfter: DeserializedType<T, 'Edm.Decimal'>;
  roundingType?: RetailRoundingTypeBase | null;
  precision: DeserializedType<T, 'Edm.Decimal'>;
  amountAddedBefore: DeserializedType<T, 'Edm.Decimal'>;
}
