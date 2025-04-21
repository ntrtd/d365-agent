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
import type { EmItemsAdditionalFieldsApi } from './EmItemsAdditionalFieldsApi';

/**
 * This class represents the entity "EMItemsAdditionalFields" of service "d365_metadata".
 */
export class EmItemsAdditionalFields<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EmItemsAdditionalFieldsType<T>
{
  /**
   * Technical entity name for EmItemsAdditionalFields.
   */
  static override _entityName = 'EMItemsAdditionalFields';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmItemsAdditionalFields entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemId',
    'ItemType',
    'ProcessingId',
    'AdditionalFieldId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Type.
   */
  declare itemType: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing Id.
   */
  declare processingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Additional Field Id.
   */
  declare additionalFieldId: DeserializedType<T, 'Edm.String'>;
  /**
   * Additional Field Value.
   * @nullable
   */
  declare additionalFieldValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmItemsAdditionalFieldsApi<T>) {
    super(_entityApi);
  }
}

export interface EmItemsAdditionalFieldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  itemType: DeserializedType<T, 'Edm.String'>;
  processingId: DeserializedType<T, 'Edm.String'>;
  additionalFieldId: DeserializedType<T, 'Edm.String'>;
  additionalFieldValue?: DeserializedType<T, 'Edm.String'> | null;
}
