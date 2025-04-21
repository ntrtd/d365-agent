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
import type { BudgetSubModelsApi } from './BudgetSubModelsApi';
import { BudgetModels, BudgetModelsType } from './BudgetModels';

/**
 * This class represents the entity "BudgetSubModels" of service "d365_metadata".
 */
export class BudgetSubModels<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BudgetSubModelsType<T>
{
  /**
   * Technical entity name for BudgetSubModels.
   */
  static override _entityName = 'BudgetSubModels';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetSubModels entity.
   */
  static _keys = ['dataAreaId', 'BudgetModel', 'Submodel'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Model.
   */
  declare budgetModel: DeserializedType<T, 'Edm.String'>;
  /**
   * Submodel.
   */
  declare submodel: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link BudgetModels} entity.
   */
  declare budgetModelSubmodels?: BudgetModels<T> | null;
  /**
   * One-to-one navigation property to the {@link BudgetModels} entity.
   */
  declare budgetSubmodelBudgetModels?: BudgetModels<T> | null;

  constructor(_entityApi: BudgetSubModelsApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetSubModelsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetModel: DeserializedType<T, 'Edm.String'>;
  submodel: DeserializedType<T, 'Edm.String'>;
  budgetModelSubmodels?: BudgetModelsType<T> | null;
  budgetSubmodelBudgetModels?: BudgetModelsType<T> | null;
}
