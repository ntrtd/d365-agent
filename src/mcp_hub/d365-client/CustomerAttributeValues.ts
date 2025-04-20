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
import type { CustomerAttributeValuesApi } from './CustomerAttributeValuesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomerAttributeValues" of service "d365_metadata".
 */
export class CustomerAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerAttributeValuesType<T>
{
  /**
   * Technical entity name for CustomerAttributeValues.
   */
  static override _entityName = 'CustomerAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerAttributeValues entity.
   */
  static _keys = ['AccountNum', 'CustomerDataAreaId', 'AttributeName'];
  /**
   * Account Num.
   */
  declare accountNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Data Area Id.
   */
  declare customerDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Date Time Value.
   */
  declare dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Int Value.
   */
  declare intValue: DeserializedType<T, 'Edm.Int32'>;
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
   * Text Value.
   * @nullable
   */
  declare textValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Type Name.
   * @nullable
   */
  declare attributeTypeName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomerAttributeValuesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountNum: DeserializedType<T, 'Edm.String'>;
  customerDataAreaId: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  dateTimeValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  intValue: DeserializedType<T, 'Edm.Int32'>;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  booleanValue?: NoYes | null;
  textValue?: DeserializedType<T, 'Edm.String'> | null;
  attributeTypeName?: DeserializedType<T, 'Edm.String'> | null;
}
