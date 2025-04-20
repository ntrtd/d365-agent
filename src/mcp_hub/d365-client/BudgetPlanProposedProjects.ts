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
import type { BudgetPlanProposedProjectsApi } from './BudgetPlanProposedProjectsApi';

/**
 * This class represents the entity "BudgetPlanProposedProjects" of service "d365_metadata".
 */
export class BudgetPlanProposedProjects<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetPlanProposedProjectsType<T>
{
  /**
   * Technical entity name for BudgetPlanProposedProjects.
   */
  static override _entityName = 'BudgetPlanProposedProjects';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetPlanProposedProjects entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetPlanProposedProjectsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetPlanProposedProjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
