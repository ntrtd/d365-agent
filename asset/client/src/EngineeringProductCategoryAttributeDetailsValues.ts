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
import type { EngineeringProductCategoryAttributeDetailsValuesApi } from './EngineeringProductCategoryAttributeDetailsValuesApi';
import { NoYes } from './NoYes';
import {
  EngineeringProductCategoryAttributeDetails,
  EngineeringProductCategoryAttributeDetailsType
} from './EngineeringProductCategoryAttributeDetails';

/**
 * This class represents the entity "EngineeringProductCategoryAttributeDetailsValues" of service "d365_metadata".
 */
export class EngineeringProductCategoryAttributeDetailsValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductCategoryAttributeDetailsValuesType<T>
{
  /**
   * Technical entity name for EngineeringProductCategoryAttributeDetailsValues.
   */
  static override _entityName =
    'EngineeringProductCategoryAttributeDetailsValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductCategoryAttributeDetailsValues entity.
   */
  static _keys = [
    'EngineeringProductCategoryName',
    'EngineeringProductAttributeTypeName',
    'EngineeringProductAttributeName'
  ];
  /**
   * Engineering Product Category Name.
   */
  declare engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Product Attribute Type Name.
   */
  declare engineeringProductAttributeTypeName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Engineering Product Attribute Name.
   */
  declare engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link EngineeringProductCategoryAttributeDetails} entity.
   */
  declare engineeringProductCategoryAttributeDetails?: EngineeringProductCategoryAttributeDetails<T> | null;

  constructor(
    _entityApi: EngineeringProductCategoryAttributeDetailsValuesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringProductCategoryAttributeDetailsValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringProductCategoryName: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  booleanValue?: NoYes | null;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  unitOfMeasure?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductCategoryAttributeDetails?: EngineeringProductCategoryAttributeDetailsType<T> | null;
}
