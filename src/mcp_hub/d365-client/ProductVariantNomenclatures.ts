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
import type { ProductVariantNomenclaturesApi } from './ProductVariantNomenclaturesApi';

/**
 * This class represents the entity "ProductVariantNomenclatures" of service "d365_metadata".
 */
export class ProductVariantNomenclatures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductVariantNomenclaturesType<T>
{
  /**
   * Technical entity name for ProductVariantNomenclatures.
   */
  static override _entityName = 'ProductVariantNomenclatures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductVariantNomenclatures entity.
   */
  static _keys = ['NomenclatureName'];
  /**
   * Nomenclature Name.
   */
  declare nomenclatureName: DeserializedType<T, 'Edm.String'>;
  /**
   * Nomenclature Description.
   * @nullable
   */
  declare nomenclatureDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProductVariantNomenclaturesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductVariantNomenclaturesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  nomenclatureName: DeserializedType<T, 'Edm.String'>;
  nomenclatureDescription?: DeserializedType<T, 'Edm.String'> | null;
}
