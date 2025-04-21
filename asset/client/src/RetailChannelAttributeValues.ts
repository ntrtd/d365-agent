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
import type { RetailChannelAttributeValuesApi } from './RetailChannelAttributeValuesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailChannelAttributeValues" of service "d365_metadata".
 */
export class RetailChannelAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelAttributeValuesType<T>
{
  /**
   * Technical entity name for RetailChannelAttributeValues.
   */
  static override _entityName = 'RetailChannelAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelAttributeValues entity.
   */
  static _keys = [
    'RetailChannelId',
    'AttributeGroupName',
    'AttributeName',
    'AttributeTypeName'
  ];
  /**
   * Retail Channel Id.
   */
  declare retailChannelId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Group Name.
   */
  declare attributeGroupName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: RetailChannelAttributeValuesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailChannelId: DeserializedType<T, 'Edm.String'>;
  attributeGroupName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  booleanValue?: NoYes | null;
  currencyValue: DeserializedType<T, 'Edm.Decimal'>;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
}
