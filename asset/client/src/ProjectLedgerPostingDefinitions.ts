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
import type { ProjectLedgerPostingDefinitionsApi } from './ProjectLedgerPostingDefinitionsApi';
import { ProjAccountType } from './ProjAccountType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ProjectLedgerPostingDefinitions" of service "d365_metadata".
 */
export class ProjectLedgerPostingDefinitions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectLedgerPostingDefinitionsType<T>
{
  /**
   * Technical entity name for ProjectLedgerPostingDefinitions.
   */
  static override _entityName = 'ProjectLedgerPostingDefinitions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectLedgerPostingDefinitions entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectAccountType',
    'ProjectId',
    'ProjectGroup',
    'CategoryId',
    'CategoryGroup',
    'TaxGroupId',
    'ProjectContractId',
    'FundingSourceId',
    'BorrowingLegalEntity',
    'LendingLegalEntity'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Account Type.
   * @nullable
   */
  declare projectAccountType?: ProjAccountType | null;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Group.
   */
  declare projectGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Group.
   */
  declare categoryGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Group Id.
   */
  declare taxGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Funding Source Id.
   */
  declare fundingSourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Borrowing Legal Entity.
   */
  declare borrowingLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Lending Legal Entity.
   */
  declare lendingLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account Id Display Value.
   * @nullable
   */
  declare mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ProjectLedgerPostingDefinitionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectLedgerPostingDefinitionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectAccountType?: ProjAccountType | null;
  projectId: DeserializedType<T, 'Edm.String'>;
  projectGroup: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  categoryGroup: DeserializedType<T, 'Edm.String'>;
  taxGroupId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  fundingSourceId: DeserializedType<T, 'Edm.String'>;
  borrowingLegalEntity: DeserializedType<T, 'Edm.String'>;
  lendingLegalEntity: DeserializedType<T, 'Edm.String'>;
  mainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
