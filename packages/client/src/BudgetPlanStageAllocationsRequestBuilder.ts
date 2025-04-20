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
import { BudgetPlanStageAllocations } from './BudgetPlanStageAllocations';

/**
 * Request builder class for operations supported on the {@link BudgetPlanStageAllocations} entity.
 */
export class BudgetPlanStageAllocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanStageAllocations<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanStageAllocations` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanStageAllocations` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanStageAllocations<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanStageAllocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanStageAllocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanStageAllocations`.
   */
  create(
    entity: BudgetPlanStageAllocations<T>
  ): CreateRequestBuilder<BudgetPlanStageAllocations<T>, T> {
    return new CreateRequestBuilder<BudgetPlanStageAllocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanStageAllocations` entity based on its keys.
   * @param workflow Key property. See {@link BudgetPlanStageAllocations.workflow}.
   * @param stage Key property. See {@link BudgetPlanStageAllocations.stage}.
   * @param allocationSchedule Key property. See {@link BudgetPlanStageAllocations.allocationSchedule}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanStageAllocations` entity based on its keys.
   */
  getByKey(
    workflow: DeserializedType<T, 'Edm.String'>,
    stage: DeserializedType<T, 'Edm.String'>,
    allocationSchedule: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanStageAllocations<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanStageAllocations<T>, T>(
      this.entityApi,
      {
        Workflow: workflow,
        Stage: stage,
        AllocationSchedule: allocationSchedule
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanStageAllocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanStageAllocations`.
   */
  update(
    entity: BudgetPlanStageAllocations<T>
  ): UpdateRequestBuilder<BudgetPlanStageAllocations<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanStageAllocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanStageAllocations`.
   * @param workflow Key property. See {@link BudgetPlanStageAllocations.workflow}.
   * @param stage Key property. See {@link BudgetPlanStageAllocations.stage}.
   * @param allocationSchedule Key property. See {@link BudgetPlanStageAllocations.allocationSchedule}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanStageAllocations`.
   */
  delete(
    workflow: string,
    stage: string,
    allocationSchedule: string
  ): DeleteRequestBuilder<BudgetPlanStageAllocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanStageAllocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanStageAllocations` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanStageAllocations<T>
  ): DeleteRequestBuilder<BudgetPlanStageAllocations<T>, T>;
  delete(
    workflowOrEntity: any,
    stage?: string,
    allocationSchedule?: string
  ): DeleteRequestBuilder<BudgetPlanStageAllocations<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanStageAllocations<T>, T>(
      this.entityApi,
      workflowOrEntity instanceof BudgetPlanStageAllocations
        ? workflowOrEntity
        : {
            Workflow: workflowOrEntity!,
            Stage: stage!,
            AllocationSchedule: allocationSchedule!
          }
    );
  }
}
