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
import type { OrganizationHierarchyPublishedV2Api } from './OrganizationHierarchyPublishedV2Api';

/**
 * This class represents the entity "OrganizationHierarchyPublishedV2" of service "d365_metadata".
 */
export class OrganizationHierarchyPublishedV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OrganizationHierarchyPublishedV2Type<T>
{
  /**
   * Technical entity name for OrganizationHierarchyPublishedV2.
   */
  static override _entityName = 'OrganizationHierarchyPublishedV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OrganizationHierarchyPublishedV2 entity.
   */
  static _keys = ['HierarchyType', 'ChildOrganizationPartyNumber', 'validFrom'];
  /**
   * Hierarchy Type.
   */
  declare hierarchyType: DeserializedType<T, 'Edm.String'>;
  /**
   * Child Organization Party Number.
   */
  declare childOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Child Organization Name.
   * @nullable
   */
  declare childOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Organization Name.
   * @nullable
   */
  declare parentOrganizationName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OrganizationHierarchyPublishedV2Api<T>) {
    super(_entityApi);
  }
}

export interface OrganizationHierarchyPublishedV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  hierarchyType: DeserializedType<T, 'Edm.String'>;
  childOrganizationPartyNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  relationshipType?: DeserializedType<T, 'Edm.String'> | null;
  parentOrganizationPartyNumber?: DeserializedType<T, 'Edm.String'> | null;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  childOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
  parentOrganizationName?: DeserializedType<T, 'Edm.String'> | null;
}
