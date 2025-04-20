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
import type { ProjValProjCategorySetupEntitiesApi } from './ProjValProjCategorySetupEntitiesApi';
import { PsaExpenseProjValCategoryType } from './PsaExpenseProjValCategoryType';

/**
 * This class represents the entity "ProjValProjCategorySetupEntities" of service "d365_metadata".
 */
export class ProjValProjCategorySetupEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjValProjCategorySetupEntitiesType<T>
{
  /**
   * Technical entity name for ProjValProjCategorySetupEntities.
   */
  static override _entityName = 'ProjValProjCategorySetupEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjValProjCategorySetupEntities entity.
   */
  static _keys = ['dataAreaId', 'GroupId', 'ProjectID', 'Category'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Category Validation Type.
   * @nullable
   */
  declare categoryValidationType?: PsaExpenseProjValCategoryType | null;

  constructor(_entityApi: ProjValProjCategorySetupEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjValProjCategorySetupEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.String'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  categoryValidationType?: PsaExpenseProjValCategoryType | null;
}
