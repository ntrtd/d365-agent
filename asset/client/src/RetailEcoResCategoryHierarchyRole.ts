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
import type { RetailEcoResCategoryHierarchyRoleApi } from './RetailEcoResCategoryHierarchyRoleApi';
import { EcoResCategoryNamedHierarchyRole } from './EcoResCategoryNamedHierarchyRole';

/**
 * This class represents the entity "RetailEcoResCategoryHierarchyRole" of service "d365_metadata".
 */
export class RetailEcoResCategoryHierarchyRole<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEcoResCategoryHierarchyRoleType<T>
{
  /**
   * Technical entity name for RetailEcoResCategoryHierarchyRole.
   */
  static override _entityName = 'RetailEcoResCategoryHierarchyRole';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEcoResCategoryHierarchyRole entity.
   */
  static _keys = [
    'NamedCategoryHierarchyRoleAsInt',
    'EcoResCategoryHierarchy_Name'
  ];
  /**
   * Named Category Hierarchy Role As Int.
   */
  declare namedCategoryHierarchyRoleAsInt: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Eco Res Category Hierarchy Name.
   */
  declare ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Named Category Hierarchy Role.
   * @nullable
   */
  declare namedCategoryHierarchyRole?: EcoResCategoryNamedHierarchyRole | null;
  /**
   * Category Hierarchy.
   */
  declare categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailEcoResCategoryHierarchyRoleApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEcoResCategoryHierarchyRoleType<
  T extends DeSerializers = DefaultDeSerializers
> {
  namedCategoryHierarchyRoleAsInt: DeserializedType<T, 'Edm.Int32'>;
  ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  namedCategoryHierarchyRole?: EcoResCategoryNamedHierarchyRole | null;
  categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
}
