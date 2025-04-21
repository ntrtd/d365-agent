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
import type { EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi } from './EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';

/**
 * This class represents the entity "EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes.
   */
  static override _entityName =
    'EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodes entity.
   */
  static _keys = [
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'EnvironmentalHealthAndSafetyCode'
  ];
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Environmental Health And Safety Code.
   */
  declare environmentalHealthAndSafetyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProduct?: EngineeringChangeOrderProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductEnvironmentalHealthAndSafetyCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  environmentalHealthAndSafetyCode: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProduct?: EngineeringChangeOrderProductsType<T> | null;
  engineeringChangeOrderProductV2?: EngineeringChangeOrderProductsV2Type<T> | null;
  engineeringChangeOrderProductV3?: EngineeringChangeOrderProductsV3Type<T> | null;
}
