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
import type { ItemBatchAttributeValuesV2Api } from './ItemBatchAttributeValuesV2Api';
import { PdsBatchAttribType } from './PdsBatchAttribType';
import { NoYes } from './NoYes';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  ItemBatchAttributes,
  ItemBatchAttributesType
} from './ItemBatchAttributes';
import { ItemBatches, ItemBatchesType } from './ItemBatches';

/**
 * This class represents the entity "ItemBatchAttributeValuesV2" of service "d365_metadata".
 */
export class ItemBatchAttributeValuesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemBatchAttributeValuesV2Type<T>
{
  /**
   * Technical entity name for ItemBatchAttributeValuesV2.
   */
  static override _entityName = 'ItemBatchAttributeValuesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemBatchAttributeValuesV2 entity.
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
   * Enumerate Value.
   * @nullable
   */
  declare enumerateValue?: DeserializedType<T, 'Edm.String'> | null;
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
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeader?: QualityOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatchAttributes} entity.
   */
  declare itemBatchAttribute?: ItemBatchAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link ItemBatches} entity.
   */
  declare itemBatch?: ItemBatches<T> | null;

  constructor(_entityApi: ItemBatchAttributeValuesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ItemBatchAttributeValuesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  itemBatchNumber: DeserializedType<T, 'Edm.String'>;
  itemBatchAttributeId: DeserializedType<T, 'Edm.String'>;
  integerValue: DeserializedType<T, 'Edm.Int32'>;
  enumerateValue?: DeserializedType<T, 'Edm.String'> | null;
  attributeType?: PdsBatchAttribType | null;
  attributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  decimalValue: DeserializedType<T, 'Edm.Decimal'>;
  stringValue?: DeserializedType<T, 'Edm.String'> | null;
  dateValue: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isInherited?: NoYes | null;
  qualityOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  qualityOrderHeader?: QualityOrderHeadersType<T> | null;
  itemBatchAttribute?: ItemBatchAttributesType<T> | null;
  itemBatch?: ItemBatchesType<T> | null;
}
