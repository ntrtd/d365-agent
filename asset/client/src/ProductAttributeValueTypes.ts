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
import type { ProductAttributeValueTypesApi } from './ProductAttributeValueTypesApi';
import { AttributeDataType } from './AttributeDataType';

/**
 * This class represents the entity "ProductAttributeValueTypes" of service "d365_metadata".
 */
export class ProductAttributeValueTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeValueTypesType<T>
{
  /**
   * Technical entity name for ProductAttributeValueTypes.
   */
  static override _entityName = 'ProductAttributeValueTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeValueTypes entity.
   */
  static _keys = ['ProductAttributeTypeName'];
  /**
   * Product Attribute Type Name.
   */
  declare productAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Type.
   * @nullable
   */
  declare valueType?: AttributeDataType | null;
  /**
   * Upper Date Time Value.
   */
  declare upperDateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Upper Decimal Value.
   */
  declare upperDecimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lower Currency Value.
   */
  declare lowerCurrencyValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lower Decimal Value.
   */
  declare lowerDecimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lower Integer Value.
   */
  declare lowerIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Upper Integer Value.
   */
  declare upperIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lower Date Time Value.
   */
  declare lowerDateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Upper Currency Value.
   */
  declare upperCurrencyValue: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ProductAttributeValueTypesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeValueTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  valueType?: AttributeDataType | null;
  upperDateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  upperDecimalValue: DeserializedType<T, 'Edm.Decimal'>;
  lowerCurrencyValue: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lowerDecimalValue: DeserializedType<T, 'Edm.Decimal'>;
  lowerIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  upperIntegerValue: DeserializedType<T, 'Edm.Int32'>;
  lowerDateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  upperCurrencyValue: DeserializedType<T, 'Edm.Decimal'>;
}
