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
import { BudgetTrackingWorkspaceParameters } from './BudgetTrackingWorkspaceParameters';

/**
 * Request builder class for operations supported on the {@link BudgetTrackingWorkspaceParameters} entity.
 */
export class BudgetTrackingWorkspaceParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetTrackingWorkspaceParameters<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetTrackingWorkspaceParameters` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetTrackingWorkspaceParameters` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T> {
    return new GetAllRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetTrackingWorkspaceParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetTrackingWorkspaceParameters`.
   */
  create(
    entity: BudgetTrackingWorkspaceParameters<T>
  ): CreateRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T> {
    return new CreateRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetTrackingWorkspaceParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetTrackingWorkspaceParameters.dataAreaId}.
   * @param userId Key property. See {@link BudgetTrackingWorkspaceParameters.userId}.
   * @returns A request builder for creating requests to retrieve one `BudgetTrackingWorkspaceParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T> {
    return new GetByKeyRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        UserId: userId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetTrackingWorkspaceParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetTrackingWorkspaceParameters`.
   */
  update(
    entity: BudgetTrackingWorkspaceParameters<T>
  ): UpdateRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T> {
    return new UpdateRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetTrackingWorkspaceParameters`.
   * @param dataAreaId Key property. See {@link BudgetTrackingWorkspaceParameters.dataAreaId}.
   * @param userId Key property. See {@link BudgetTrackingWorkspaceParameters.userId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTrackingWorkspaceParameters`.
   */
  delete(
    dataAreaId: string,
    userId: string
  ): DeleteRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetTrackingWorkspaceParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetTrackingWorkspaceParameters` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetTrackingWorkspaceParameters<T>
  ): DeleteRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    userId?: string
  ): DeleteRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T> {
    return new DeleteRequestBuilder<BudgetTrackingWorkspaceParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetTrackingWorkspaceParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            UserId: userId!
          }
    );
  }
}
