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
import type { EngineeringChangeReasonsApi } from './EngineeringChangeReasonsApi';
import {
  EngineeringChangeOrderProductsV3,
  EngineeringChangeOrderProductsV3Type
} from './EngineeringChangeOrderProductsV3';
import {
  EngineeringChangeOrderProductsV2,
  EngineeringChangeOrderProductsV2Type
} from './EngineeringChangeOrderProductsV2';
import {
  EngineeringChangeOrderProducts,
  EngineeringChangeOrderProductsType
} from './EngineeringChangeOrderProducts';

/**
 * This class represents the entity "EngineeringChangeReasons" of service "d365_metadata".
 */
export class EngineeringChangeReasons<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeReasonsType<T>
{
  /**
   * Technical entity name for EngineeringChangeReasons.
   */
  static override _entityName = 'EngineeringChangeReasons';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeReasons entity.
   */
  static _keys = ['ReasonName'];
  /**
   * Reason Name.
   */
  declare reasonName: DeserializedType<T, 'Edm.String'>;
  /**
   * Reason Description.
   * @nullable
   */
  declare reasonDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV3} entity.
   */
  declare engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProductsV2} entity.
   */
  declare engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2<T>[];
  /**
   * One-to-many navigation property to the {@link EngineeringChangeOrderProducts} entity.
   */
  declare engineeringChangeOrderProducts: EngineeringChangeOrderProducts<T>[];

  constructor(_entityApi: EngineeringChangeReasonsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringChangeReasonsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  reasonName: DeserializedType<T, 'Edm.String'>;
  reasonDescription?: DeserializedType<T, 'Edm.String'> | null;
  engineeringChangeOrderProductsV3: EngineeringChangeOrderProductsV3Type<T>[];
  engineeringChangeOrderProductsV2: EngineeringChangeOrderProductsV2Type<T>[];
  engineeringChangeOrderProducts: EngineeringChangeOrderProductsType<T>[];
}
