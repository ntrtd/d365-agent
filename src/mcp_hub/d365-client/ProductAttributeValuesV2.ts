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
import type { ProductAttributeValuesV2Api } from './ProductAttributeValuesV2Api';
import { NoYes } from './NoYes';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "ProductAttributeValuesV2" of service "d365_metadata".
 */
export class ProductAttributeValuesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeValuesV2Type<T>
{
  /**
   * Technical entity name for ProductAttributeValuesV2.
   */
  static override _entityName = 'ProductAttributeValuesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeValuesV2 entity.
   */
  static _keys = ['ProductNumber', 'AttributeTypeName', 'AttributeName'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Boolean Value.
   * @nullable
   */
  declare booleanValue?: NoYes | null;
  /**
   * Integer Value.
   */
  declare integerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decimal Value.
   */
  declare decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Of Measure.
   * @nullable
   */
  declare unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Time Value.
   */
  declare dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Value.
   */
  declare currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Text Value.
   * @nullable
   */
  declare textValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare product?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;

  constructor(_entityApi: ProductAttributeValuesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeValuesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  booleanValue?: NoYes | null;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  product?: ProductsV2Type<T> | null;
  currency?: CurrenciesType<T> | null;
}
