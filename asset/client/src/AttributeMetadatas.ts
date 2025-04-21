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
import type { AttributeMetadatasApi } from './AttributeMetadatasApi';
import { ProductAttributes, ProductAttributesType } from './ProductAttributes';

/**
 * This class represents the entity "AttributeMetadatas" of service "d365_metadata".
 */
export class AttributeMetadatas<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AttributeMetadatasType<T>
{
  /**
   * Technical entity name for AttributeMetadatas.
   */
  static override _entityName = 'AttributeMetadatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AttributeMetadatas entity.
   */
  static _keys = ['AttributeName', 'TypeName'];
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Type Name.
   */
  declare typeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Xml Metadata.
   * @nullable
   */
  declare xmlMetadata?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Xml Metadata Version Number.
   */
  declare xmlMetadataVersionNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link ProductAttributes} entity.
   */
  declare productAttribute?: ProductAttributes<T> | null;

  constructor(_entityApi: AttributeMetadatasApi<T>) {
    super(_entityApi);
  }
}

export interface AttributeMetadatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  attributeName: DeserializedType<T, 'Edm.String'>;
  typeName: DeserializedType<T, 'Edm.String'>;
  xmlMetadata?: DeserializedType<T, 'Edm.String'> | null;
  xmlMetadataVersionNumber: DeserializedType<T, 'Edm.Int32'>;
  productAttribute?: ProductAttributesType<T> | null;
}
