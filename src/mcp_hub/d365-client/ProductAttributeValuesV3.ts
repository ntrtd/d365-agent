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
import type { ProductAttributeValuesV3Api } from './ProductAttributeValuesV3Api';
import { NoYes } from './NoYes';
import { AttributeDataType } from './AttributeDataType';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import { Currencies, CurrenciesType } from './Currencies';

/**
 * This class represents the entity "ProductAttributeValuesV3" of service "d365_metadata".
 */
export class ProductAttributeValuesV3<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeValuesV3Type<T>
{
  /**
   * Technical entity name for ProductAttributeValuesV3.
   */
  static override _entityName = 'ProductAttributeValuesV3';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeValuesV3 entity.
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
   * Integer Value.
   */
  declare integerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Decimal Value.
   */
  declare decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Boolean Value.
   * @nullable
   */
  declare booleanValue?: NoYes | null;
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
   * Data Type.
   * @nullable
   */
  declare dataType?: AttributeDataType | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare productV2?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;

  constructor(_entityApi: ProductAttributeValuesV3Api<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeValuesV3Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  booleanValue?: NoYes | null;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  dataType?: AttributeDataType | null;
  productV2?: ProductsV2Type<T> | null;
  currency?: CurrenciesType<T> | null;
}
