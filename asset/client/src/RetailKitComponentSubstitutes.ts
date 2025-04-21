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
import type { RetailKitComponentSubstitutesApi } from './RetailKitComponentSubstitutesApi';
import {
  RetailKitReleasedSubstitutes,
  RetailKitReleasedSubstitutesType
} from './RetailKitReleasedSubstitutes';
import {
  RetailKitComponents,
  RetailKitComponentsType
} from './RetailKitComponents';

/**
 * This class represents the entity "RetailKitComponentSubstitutes" of service "d365_metadata".
 */
export class RetailKitComponentSubstitutes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailKitComponentSubstitutesType<T>
{
  /**
   * Technical entity name for RetailKitComponentSubstitutes.
   */
  static override _entityName = 'RetailKitComponentSubstitutes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailKitComponentSubstitutes entity.
   */
  static _keys = [
    'KitProductNumber',
    'KitComponentLineNumber',
    'SubstituteProductNumber'
  ];
  /**
   * Kit Product Number.
   */
  declare kitProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Component Line Number.
   */
  declare kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Substitute Product Number.
   */
  declare substituteProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Of Measure Symbol.
   * @nullable
   */
  declare unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link RetailKitReleasedSubstitutes} entity.
   */
  declare retailKitReleasedSubstitute: RetailKitReleasedSubstitutes<T>[];
  /**
   * One-to-one navigation property to the {@link RetailKitComponents} entity.
   */
  declare retailKitComponent?: RetailKitComponents<T> | null;

  constructor(_entityApi: RetailKitComponentSubstitutesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailKitComponentSubstitutesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  kitProductNumber: DeserializedType<T, 'Edm.String'>;
  kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  substituteProductNumber: DeserializedType<T, 'Edm.String'>;
  unitOfMeasureSymbol?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  retailKitReleasedSubstitute: RetailKitReleasedSubstitutesType<T>[];
  retailKitComponent?: RetailKitComponentsType<T> | null;
}
