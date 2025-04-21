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
import type { ProjectDefaultOffsetAccountsApi } from './ProjectDefaultOffsetAccountsApi';
import { ProjOffsetType } from './ProjOffsetType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { Projects, ProjectsType } from './Projects';

/**
 * This class represents the entity "ProjectDefaultOffsetAccounts" of service "d365_metadata".
 */
export class ProjectDefaultOffsetAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectDefaultOffsetAccountsType<T>
{
  /**
   * Technical entity name for ProjectDefaultOffsetAccounts.
   */
  static override _entityName = 'ProjectDefaultOffsetAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectDefaultOffsetAccounts entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectID',
    'Category',
    'OffsetAccountType',
    'ResourcePersonnelNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: ProjOffsetType | null;
  /**
   * Resource Personnel Number.
   */
  declare resourcePersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;

  constructor(_entityApi: ProjectDefaultOffsetAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectDefaultOffsetAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.String'>;
  offsetAccountType?: ProjOffsetType | null;
  resourcePersonnelNumber: DeserializedType<T, 'Edm.String'>;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  project?: ProjectsType<T> | null;
}
