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
import type { RetailKitReleasedSubstitutesApi } from './RetailKitReleasedSubstitutesApi';
import {
  RetailKitComponentSubstitutes,
  RetailKitComponentSubstitutesType
} from './RetailKitComponentSubstitutes';

/**
 * This class represents the entity "RetailKitReleasedSubstitutes" of service "d365_metadata".
 */
export class RetailKitReleasedSubstitutes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailKitReleasedSubstitutesType<T>
{
  /**
   * Technical entity name for RetailKitReleasedSubstitutes.
   */
  static override _entityName = 'RetailKitReleasedSubstitutes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailKitReleasedSubstitutes entity.
   */
  static _keys = [
    'dataAreaId',
    'KitProductNumber',
    'KitComponentLineNumber',
    'SubstituteProductNumber'
  ];
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
   * Substitute Product Number.
   */
  declare substituteProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Substitute Charge.
   */
  declare substituteCharge: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link RetailKitComponentSubstitutes} entity.
   */
  declare retailKitComponentSubstitute?: RetailKitComponentSubstitutes<T> | null;

  constructor(_entityApi: RetailKitReleasedSubstitutesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailKitReleasedSubstitutesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  kitProductNumber: DeserializedType<T, 'Edm.String'>;
  kitComponentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  substituteProductNumber: DeserializedType<T, 'Edm.String'>;
  substituteCharge: DeserializedType<T, 'Edm.Decimal'>;
  retailKitComponentSubstitute?: RetailKitComponentSubstitutesType<T> | null;
}
