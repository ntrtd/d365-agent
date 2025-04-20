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
import type { ReleasedEngineeringProductVersionAttributeValuesApi } from './ReleasedEngineeringProductVersionAttributeValuesApi';
import { NoYes } from './NoYes';
import { ProductAttributes, ProductAttributesType } from './ProductAttributes';

/**
 * This class represents the entity "ReleasedEngineeringProductVersionAttributeValues" of service "d365_metadata".
 */
export class ReleasedEngineeringProductVersionAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedEngineeringProductVersionAttributeValuesType<T>
{
  /**
   * Technical entity name for ReleasedEngineeringProductVersionAttributeValues.
   */
  static override _entityName =
    'ReleasedEngineeringProductVersionAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedEngineeringProductVersionAttributeValues entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringProductNumber',
    'EngineeringProductVersionId',
    'EngineeringProductAttributeName',
    'EngineeringProductAttributeTypeName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Number.
   */
  declare engineeringProductNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Version Id.
   */
  declare engineeringProductVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Attribute Name.
   */
  declare engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Attribute Type Name.
   */
  declare engineeringProductAttributeTypeName: DeserializedType<
    T,
    'Edm.String'
  >;
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
   * One-to-one navigation property to the {@link ProductAttributes} entity.
   */
  declare productAttribute?: ProductAttributes<T> | null;

  constructor(
    _entityApi: ReleasedEngineeringProductVersionAttributeValuesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ReleasedEngineeringProductVersionAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringProductNumber: DeserializedType<T, 'Edm.String'>;
  engineeringProductVersionId: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  booleanValue?: NoYes | null;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  productAttribute?: ProductAttributesType<T> | null;
}
