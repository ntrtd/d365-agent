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
import { BudgetPlanAllocationSchedules } from './BudgetPlanAllocationSchedules';

/**
 * Request builder class for operations supported on the {@link BudgetPlanAllocationSchedules} entity.
 */
export class BudgetPlanAllocationSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanAllocationSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanAllocationSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanAllocationSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanAllocationSchedules<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanAllocationSchedules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanAllocationSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanAllocationSchedules`.
   */
  create(
    entity: BudgetPlanAllocationSchedules<T>
  ): CreateRequestBuilder<BudgetPlanAllocationSchedules<T>, T> {
    return new CreateRequestBuilder<BudgetPlanAllocationSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanAllocationSchedules` entity based on its keys.
   * @param allocationSchedule Key property. See {@link BudgetPlanAllocationSchedules.allocationSchedule}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanAllocationSchedules` entity based on its keys.
   */
  getByKey(
    allocationSchedule: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanAllocationSchedules<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanAllocationSchedules<T>, T>(
      this.entityApi,
      { AllocationSchedule: allocationSchedule }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanAllocationSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanAllocationSchedules`.
   */
  update(
    entity: BudgetPlanAllocationSchedules<T>
  ): UpdateRequestBuilder<BudgetPlanAllocationSchedules<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanAllocationSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanAllocationSchedules`.
   * @param allocationSchedule Key property. See {@link BudgetPlanAllocationSchedules.allocationSchedule}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanAllocationSchedules`.
   */
  delete(
    allocationSchedule: string
  ): DeleteRequestBuilder<BudgetPlanAllocationSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanAllocationSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanAllocationSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanAllocationSchedules<T>
  ): DeleteRequestBuilder<BudgetPlanAllocationSchedules<T>, T>;
  delete(
    allocationScheduleOrEntity: any
  ): DeleteRequestBuilder<BudgetPlanAllocationSchedules<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanAllocationSchedules<T>, T>(
      this.entityApi,
      allocationScheduleOrEntity instanceof BudgetPlanAllocationSchedules
        ? allocationScheduleOrEntity
        : { AllocationSchedule: allocationScheduleOrEntity! }
    );
  }
}
