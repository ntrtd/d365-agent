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
import type { ItemBatchAttributeValuesApi } from './ItemBatchAttributeValuesApi';
import { PdsBatchAttribType } from './PdsBatchAttribType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ItemBatchAttributeValues" of service "d365_metadata".
 */
export class ItemBatchAttributeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemBatchAttributeValuesType<T>
{
  /**
   * Technical entity name for ItemBatchAttributeValues.
   */
  static override _entityName = 'ItemBatchAttributeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemBatchAttributeValues entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ItemBatchNumber',
    'ItemBatchAttributeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Number.
   */
  declare itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Batch Attribute Id.
   */
  declare itemBatchAttributeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Integer Value.
   */
  declare integerValue: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Attribute Type.
   * @nullable
   */
  declare attributeType?: PdsBatchAttribType | null;
  /**
   * Attribute Description.
   * @nullable
   */
  declare attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decimal Value.
   */
  declare decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * String Value.
   * @nullable
   */
  declare stringValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Value.
   */
  declare dateValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Inherited.
   * @nullable
   */
  declare isInherited?: NoYes | null;
  /**
   * Quality Order Number.
   * @nullable
   */
  declare qualityOrderNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemBatchAttributeValuesApi<T>) {
    super(_entityApi);
  }
}

export interface ItemBatchAttributeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  itemBatchAttributeId: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  attributeType?: PdsBatchAttribType | null;
  attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  stringValue?: DeserializedType<T, 'Edm.String'> | null;
  dateValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isInherited?: NoYes | null;
  qualityOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
}
