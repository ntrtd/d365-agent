/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { BudgetCycles } from './BudgetCycles';

/**
 * Request builder class for operations supported on the {@link BudgetCycles} entity.
 */
export class BudgetCyclesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetCycles<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetCycles` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetCycles` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetCycles<T>, T> {
    return new GetAllRequestBuilder<BudgetCycles<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetCycles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetCycles`.
   */
  create(entity: BudgetCycles<T>): CreateRequestBuilder<BudgetCycles<T>, T> {
    return new CreateRequestBuilder<BudgetCycles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BudgetCycles` entity based on its keys.
   * @param budgetCycleTimeSpanName Key property. See {@link BudgetCycles.budgetCycleTimeSpanName}.
   * @param fiscalCalendar Key property. See {@link BudgetCycles.fiscalCalendar}.
   * @param budgetCycleName Key property. See {@link BudgetCycles.budgetCycleName}.
   * @returns A request builder for creating requests to retrieve one `BudgetCycles` entity based on its keys.
   */
  getByKey(
    budgetCycleTimeSpanName: DeserializedType<T, 'Edm.String'>,
    fiscalCalendar: DeserializedType<T, 'Edm.String'>,
    budgetCycleName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetCycles<T>, T> {
    return new GetByKeyRequestBuilder<BudgetCycles<T>, T>(this.entityApi, {
      BudgetCycleTimeSpanName: budgetCycleTimeSpanName,
      FiscalCalendar: fiscalCalendar,
      BudgetCycleName: budgetCycleName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetCycles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetCycles`.
   */
  update(entity: BudgetCycles<T>): UpdateRequestBuilder<BudgetCycles<T>, T> {
    return new UpdateRequestBuilder<BudgetCycles<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetCycles`.
   * @param budgetCycleTimeSpanName Key property. See {@link BudgetCycles.budgetCycleTimeSpanName}.
   * @param fiscalCalendar Key property. See {@link BudgetCycles.fiscalCalendar}.
   * @param budgetCycleName Key property. See {@link BudgetCycles.budgetCycleName}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetCycles`.
   */
  delete(
    budgetCycleTimeSpanName: string,
    fiscalCalendar: string,
    budgetCycleName: string
  ): DeleteRequestBuilder<BudgetCycles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetCycles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetCycles` by taking the entity as a parameter.
   */
  delete(entity: BudgetCycles<T>): DeleteRequestBuilder<BudgetCycles<T>, T>;
  delete(
    budgetCycleTimeSpanNameOrEntity: any,
    fiscalCalendar?: string,
    budgetCycleName?: string
  ): DeleteRequestBuilder<BudgetCycles<T>, T> {
    return new DeleteRequestBuilder<BudgetCycles<T>, T>(
      this.entityApi,
      budgetCycleTimeSpanNameOrEntity instanceof BudgetCycles
        ? budgetCycleTimeSpanNameOrEntity
        : {
            BudgetCycleTimeSpanName: budgetCycleTimeSpanNameOrEntity!,
            FiscalCalendar: fiscalCalendar!,
            BudgetCycleName: budgetCycleName!
          }
    );
  }
}
