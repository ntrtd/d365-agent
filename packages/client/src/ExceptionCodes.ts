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
import type { ExceptionCodesApi } from './ExceptionCodesApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ExceptionCodes" of service "d365_metadata".
 */
export class ExceptionCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExceptionCodesType<T>
{
  /**
   * Technical entity name for ExceptionCodes.
   */
  static override _entityName = 'ExceptionCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExceptionCodes entity.
   */
  static _keys = ['dataAreaId', 'FiscalClassificationCode', 'ExceptionCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal Classification Code.
   */
  declare fiscalClassificationCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Exception Code.
   */
  declare exceptionCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(_entityApi: ExceptionCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ExceptionCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fiscalClassificationCode: DeserializedType<T, 'Edm.String'>;
  exceptionCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  approximateTaxRateForImportedProducts: DeserializedType<T, 'Edm.Decimal'>;
  approximateTaxRateForNationalProducts: DeserializedType<T, 'Edm.Decimal'>;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
