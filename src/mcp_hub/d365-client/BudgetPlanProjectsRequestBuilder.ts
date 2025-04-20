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
import { BudgetPlanProjects } from './BudgetPlanProjects';

/**
 * Request builder class for operations supported on the {@link BudgetPlanProjects} entity.
 */
export class BudgetPlanProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanProjects<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanProjects` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanProjects` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanProjects<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanProjects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanProjects`.
   */
  create(
    entity: BudgetPlanProjects<T>
  ): CreateRequestBuilder<BudgetPlanProjects<T>, T> {
    return new CreateRequestBuilder<BudgetPlanProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanProjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetPlanProjects.dataAreaId}.
   * @param projectId Key property. See {@link BudgetPlanProjects.projectId}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanProjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanProjects<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanProjects<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectId: projectId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanProjects`.
   */
  update(
    entity: BudgetPlanProjects<T>
  ): UpdateRequestBuilder<BudgetPlanProjects<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProjects`.
   * @param dataAreaId Key property. See {@link BudgetPlanProjects.dataAreaId}.
   * @param projectId Key property. See {@link BudgetPlanProjects.projectId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProjects`.
   */
  delete(
    dataAreaId: string,
    projectId: string
  ): DeleteRequestBuilder<BudgetPlanProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanProjects` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanProjects<T>
  ): DeleteRequestBuilder<BudgetPlanProjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string
  ): DeleteRequestBuilder<BudgetPlanProjects<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanProjects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetPlanProjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectId: projectId!
          }
    );
  }
}
