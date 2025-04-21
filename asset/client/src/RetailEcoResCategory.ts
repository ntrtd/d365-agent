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
import type { RetailEcoResCategoryApi } from './RetailEcoResCategoryApi';
import { NoYes } from './NoYes';
import { EcoResCategoryChangeStatus } from './EcoResCategoryChangeStatus';
import {
  RetailProductHierarchyCategories,
  RetailProductHierarchyCategoriesType
} from './RetailProductHierarchyCategories';

/**
 * This class represents the entity "RetailEcoResCategory" of service "d365_metadata".
 */
export class RetailEcoResCategory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEcoResCategoryType<T>
{
  /**
   * Technical entity name for RetailEcoResCategory.
   */
  static override _entityName = 'RetailEcoResCategory';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEcoResCategory entity.
   */
  static _keys = [
    'Name',
    'EcoResCategoryHierarchy_Name',
    'EcoResCategory1_Name'
  ];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Eco Res Category Hierarchy Name.
   */
  declare ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Eco Res Category 1 Name.
   */
  declare ecoResCategory1Name: DeserializedType<T, 'Edm.String'>;
  /**
   * Nested Set Right.
   */
  declare nestedSetRight: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Category Hierarchy.
   */
  declare categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Default Threshold Psn.
   */
  declare defaultThresholdPsn: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Nested Set Left.
   */
  declare nestedSetLeft: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Tangible.
   * @nullable
   */
  declare isTangible?: NoYes | null;
  /**
   * Parent Category.
   */
  declare parentCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Active.
   * @nullable
   */
  declare isActive?: NoYes | null;
  /**
   * Is Category Attributes Inherited.
   * @nullable
   */
  declare isCategoryAttributesInherited?: NoYes | null;
  /**
   * Shared Category Category Id.
   * @nullable
   */
  declare sharedCategoryCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instance Relation Type.
   */
  declare instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Ax Rec Id.
   */
  declare axRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Code.
   * @nullable
   */
  declare code?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level.
   */
  declare level: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Change Status.
   * @nullable
   */
  declare changeStatus?: EcoResCategoryChangeStatus | null;
  /**
   * Pk Wi U Code.
   * @nullable
   */
  declare pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Eco Res Category Hierarchy 1 Name.
   * @nullable
   */
  declare ecoResCategoryHierarchy1Name?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link RetailProductHierarchyCategories} entity.
   */
  declare retailProductHierarchyCategory?: RetailProductHierarchyCategories<T> | null;

  constructor(_entityApi: RetailEcoResCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEcoResCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  ecoResCategory1Name: DeserializedType<T, 'Edm.String'>;
  nestedSetRight: DeserializedType<T, 'Edm.Int64'>;
  categoryHierarchy: DeserializedType<T, 'Edm.Int64'>;
  defaultThresholdPsn: DeserializedType<T, 'Edm.Decimal'>;
  nestedSetLeft: DeserializedType<T, 'Edm.Int64'>;
  isTangible?: NoYes | null;
  parentCategory: DeserializedType<T, 'Edm.Int64'>;
  isActive?: NoYes | null;
  isCategoryAttributesInherited?: NoYes | null;
  sharedCategoryCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  instanceRelationType: DeserializedType<T, 'Edm.Int64'>;
  axRecId: DeserializedType<T, 'Edm.Int64'>;
  code?: DeserializedType<T, 'Edm.String'> | null;
  level: DeserializedType<T, 'Edm.Int64'>;
  changeStatus?: EcoResCategoryChangeStatus | null;
  pkWiUCode?: DeserializedType<T, 'Edm.String'> | null;
  ecoResCategoryHierarchy1Name?: DeserializedType<T, 'Edm.String'> | null;
  retailProductHierarchyCategory?: RetailProductHierarchyCategoriesType<T> | null;
}
