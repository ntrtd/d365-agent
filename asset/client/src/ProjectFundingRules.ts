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
import type { ProjectFundingRulesApi } from './ProjectFundingRulesApi';
import { ProjAllTrxType } from './ProjAllTrxType';
import { NoYes } from './NoYes';
import { ProjectContracts, ProjectContractsType } from './ProjectContracts';

/**
 * This class represents the entity "ProjectFundingRules" of service "d365_metadata".
 */
export class ProjectFundingRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectFundingRulesType<T>
{
  /**
   * Technical entity name for ProjectFundingRules.
   */
  static override _entityName = 'ProjectFundingRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectFundingRules entity.
   */
  static _keys = [
    'dataAreaId',
    'ProjectContractId',
    'Priority',
    'ProjectId',
    'ActivityNumber',
    'TransactionType',
    'CategoryId',
    'CategoryGroupId',
    'ItemId',
    'EndDate',
    'StartDate',
    'ResourceId',
    'FundingSourceId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Activity Number.
   */
  declare activityNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: ProjAllTrxType | null;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Group Id.
   */
  declare categoryGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Funding Source Id.
   */
  declare fundingSourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Allocation Percentage.
   */
  declare allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allocate Rounding.
   * @nullable
   */
  declare allocateRounding?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link ProjectContracts} entity.
   */
  declare projectContract?: ProjectContracts<T> | null;

  constructor(_entityApi: ProjectFundingRulesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectFundingRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  activityNumber: DeserializedType<T, 'Edm.String'>;
  transactionType?: ProjAllTrxType | null;
  categoryId: DeserializedType<T, 'Edm.String'>;
  categoryGroupId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  fundingSourceId: DeserializedType<T, 'Edm.String'>;
  allocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  allocateRounding?: NoYes | null;
  projectContract?: ProjectContractsType<T> | null;
}
