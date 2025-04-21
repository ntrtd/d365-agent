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
import type { ProjCategoryGroupsApi } from './ProjCategoryGroupsApi';
import { ProjCategoryType } from './ProjCategoryType';

/**
 * This class represents the entity "ProjCategoryGroups" of service "d365_metadata".
 */
export class ProjCategoryGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjCategoryGroupsType<T>
{
  /**
   * Technical entity name for ProjCategoryGroups.
   */
  static override _entityName = 'ProjCategoryGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjCategoryGroups entity.
   */
  static _keys = ['dataAreaId', 'CategoryGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Group Id.
   */
  declare categoryGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Type.
   * @nullable
   */
  declare categoryType?: ProjCategoryType | null;

  constructor(_entityApi: ProjCategoryGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjCategoryGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  categoryGroupId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  categoryType?: ProjCategoryType | null;
}
