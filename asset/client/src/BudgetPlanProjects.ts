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
import type { BudgetPlanProjectsApi } from './BudgetPlanProjectsApi';
import { ProjStatusRule } from './ProjStatusRule';

/**
 * This class represents the entity "BudgetPlanProjects" of service "d365_metadata".
 */
export class BudgetPlanProjects<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetPlanProjectsType<T>
{
  /**
   * Technical entity name for BudgetPlanProjects.
   */
  static override _entityName = 'BudgetPlanProjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanProjects entity.
   */
  static _keys = ['dataAreaId', 'ProjectId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Status Rule.
   * @nullable
   */
  declare projectStatusRule?: ProjStatusRule | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanProjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  projectStatusRule?: ProjStatusRule | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
