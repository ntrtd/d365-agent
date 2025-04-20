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
import { BudgetPlanWorkflowStages } from './BudgetPlanWorkflowStages';

/**
 * Request builder class for operations supported on the {@link BudgetPlanWorkflowStages} entity.
 */
export class BudgetPlanWorkflowStagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanWorkflowStages<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanWorkflowStages` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanWorkflowStages` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanWorkflowStages<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanWorkflowStages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanWorkflowStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanWorkflowStages`.
   */
  create(
    entity: BudgetPlanWorkflowStages<T>
  ): CreateRequestBuilder<BudgetPlanWorkflowStages<T>, T> {
    return new CreateRequestBuilder<BudgetPlanWorkflowStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanWorkflowStages` entity based on its keys.
   * @param workflowName Key property. See {@link BudgetPlanWorkflowStages.workflowName}.
   * @param stageName Key property. See {@link BudgetPlanWorkflowStages.stageName}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanWorkflowStages` entity based on its keys.
   */
  getByKey(
    workflowName: DeserializedType<T, 'Edm.String'>,
    stageName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanWorkflowStages<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanWorkflowStages<T>, T>(
      this.entityApi,
      {
        WorkflowName: workflowName,
        StageName: stageName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanWorkflowStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanWorkflowStages`.
   */
  update(
    entity: BudgetPlanWorkflowStages<T>
  ): UpdateRequestBuilder<BudgetPlanWorkflowStages<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanWorkflowStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanWorkflowStages`.
   * @param workflowName Key property. See {@link BudgetPlanWorkflowStages.workflowName}.
   * @param stageName Key property. See {@link BudgetPlanWorkflowStages.stageName}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanWorkflowStages`.
   */
  delete(
    workflowName: string,
    stageName: string
  ): DeleteRequestBuilder<BudgetPlanWorkflowStages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanWorkflowStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanWorkflowStages` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanWorkflowStages<T>
  ): DeleteRequestBuilder<BudgetPlanWorkflowStages<T>, T>;
  delete(
    workflowNameOrEntity: any,
    stageName?: string
  ): DeleteRequestBuilder<BudgetPlanWorkflowStages<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanWorkflowStages<T>, T>(
      this.entityApi,
      workflowNameOrEntity instanceof BudgetPlanWorkflowStages
        ? workflowNameOrEntity
        : {
            WorkflowName: workflowNameOrEntity!,
            StageName: stageName!
          }
    );
  }
}
