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
import type { OrganizationHierarchyPublishedApi } from './OrganizationHierarchyPublishedApi';

/**
 * This class represents the entity "OrganizationHierarchyPublished" of service "d365_metadata".
 */
export class OrganizationHierarchyPublished<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OrganizationHierarchyPublishedType<T>
{
  /**
   * Technical entity name for OrganizationHierarchyPublished.
   */
  static override _entityName = 'OrganizationHierarchyPublished';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OrganizationHierarchyPublished entity.
   */
  static _keys = [
    'HierarchyType',
    'ChildOrganizationName',
    'validFrom',
    'validTo'
  ];
  /**
   * Hierarchy Type.
   */
  declare hierarchyType: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Organization Name.
   */
  declare childOrganizationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Relationship Type.
   * @nullable
   */
  declare relationshipType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Organization Party Number.
   * @nullable
   */
  declare parentOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Child Organization Party Number.
   * @nullable
   */
  declare childOrganizationPartyNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Parent Organization Name.
   * @nullable
   */
  declare parentOrganizationName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OrganizationHierarchyPublishedApi<T>) {
    super(_entityApi);
  }
}

export interface OrganizationHierarchyPublishedType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hierarchyType: DeserializedType<T, 'Edm.String'>;
  childOrganizationName: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  relationshipType?: DeserializedType<T, 'Edm.String'> | null;
  parentOrganizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  childOrganizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  parentOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
}
