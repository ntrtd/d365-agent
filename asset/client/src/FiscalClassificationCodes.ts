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
import type { FiscalClassificationCodesApi } from './FiscalClassificationCodesApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "FiscalClassificationCodes" of service "d365_metadata".
 */
export class FiscalClassificationCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FiscalClassificationCodesType<T>
{
  /**
   * Technical entity name for FiscalClassificationCodes.
   */
  static override _entityName = 'FiscalClassificationCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FiscalClassificationCodes entity.
   */
  static _keys = ['dataAreaId', 'FiscalClassificationCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Classification Code.
   */
  declare fiscalClassificationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Classification Name.
   * @nullable
   */
  declare fiscalClassificationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approximate Tax Rate For Imported Products.
   */
  declare approximateTaxRateForImportedProducts: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Approximate Tax Rate For National Products.
   */
  declare approximateTaxRateForNationalProducts: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: FiscalClassificationCodesApi<T>) {
    super(_entityApi);
  }
}

export interface FiscalClassificationCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalClassificationCode: DeserializedType<T, 'Edm.String'>;
  fiscalClassificationName?: DeserializedType<T, 'Edm.String'> | null;
  approximateTaxRateForImportedProducts: DeserializedType<T, 'Edm.Decimal'>;
  approximateTaxRateForNationalProducts: DeserializedType<T, 'Edm.Decimal'>;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
