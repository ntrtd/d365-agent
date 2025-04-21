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
import type { InternalOrganizationProductAttributeMetadatasApi } from './InternalOrganizationProductAttributeMetadatasApi';
import { RetailProductAttributeRelationType } from './RetailProductAttributeRelationType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InternalOrganizationProductAttributeMetadatas" of service "d365_metadata".
 */
export class InternalOrganizationProductAttributeMetadatas<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InternalOrganizationProductAttributeMetadatasType<T>
{
  /**
   * Technical entity name for InternalOrganizationProductAttributeMetadatas.
   */
  static override _entityName = 'InternalOrganizationProductAttributeMetadatas';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InternalOrganizationProductAttributeMetadatas entity.
   */
  static _keys = ['PartyNumber', 'AttributeName', 'AttributeTypeName'];
  /**
   * Party Number.
   */
  declare partyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Organization Name.
   * @nullable
   */
  declare organizationName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Attribute Relation Type.
   * @nullable
   */
  declare attributeRelationType?: RetailProductAttributeRelationType | null;
  /**
   * Key Name.
   * @nullable
   */
  declare keyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Required.
   * @nullable
   */
  declare isRequired?: NoYes | null;

  constructor(_entityApi: InternalOrganizationProductAttributeMetadatasApi<T>) {
    super(_entityApi);
  }
}

export interface InternalOrganizationProductAttributeMetadatasType<
  T extends DeSerializers = DefaultDeSerializers
> {
  partyNumber: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  organizationName?: DeserializedType<T, 'Edm.String'> | null;
  xmlMetadata?: DeserializedType<T, 'Edm.String'> | null;
  xmlMetadataVersionNumber: DeserializedType<T, 'Edm.Int32'>;
  attributeRelationType?: RetailProductAttributeRelationType | null;
  keyName?: DeserializedType<T, 'Edm.String'> | null;
  isRequired?: NoYes | null;
}
