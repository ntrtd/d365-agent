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
import type { OrganizationHierarchyPurposesApi } from './OrganizationHierarchyPurposesApi';
import { HierarchyPurpose } from './HierarchyPurpose';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "OrganizationHierarchyPurposes" of service "d365_metadata".
 */
export class OrganizationHierarchyPurposes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OrganizationHierarchyPurposesType<T>
{
  /**
   * Technical entity name for OrganizationHierarchyPurposes.
   */
  static override _entityName = 'OrganizationHierarchyPurposes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OrganizationHierarchyPurposes entity.
   */
  static _keys = ['HierarchyPurpose', 'HierarchyType'];
  /**
   * Hierarchy Purpose.
   * @nullable
   */
  declare hierarchyPurpose?: HierarchyPurpose | null;
  /**
   * Hierarchy Type.
   */
  declare hierarchyType: DeserializedType<T, 'Edm.String'>;
  /**
   * Immutable.
   * @nullable
   */
  declare immutable?: NoYes | null;
  /**
   * Set As Default.
   * @nullable
   */
  declare setAsDefault?: NoYes | null;

  constructor(_entityApi: OrganizationHierarchyPurposesApi<T>) {
    super(_entityApi);
  }
}

export interface OrganizationHierarchyPurposesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hierarchyPurpose?: HierarchyPurpose | null;
  hierarchyType: DeserializedType<T, 'Edm.String'>;
  immutable?: NoYes | null;
  setAsDefault?: NoYes | null;
}
