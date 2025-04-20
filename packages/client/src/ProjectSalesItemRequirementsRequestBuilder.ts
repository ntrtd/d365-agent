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
import { ProjectSalesItemRequirements } from './ProjectSalesItemRequirements';

/**
 * Request builder class for operations supported on the {@link ProjectSalesItemRequirements} entity.
 */
export class ProjectSalesItemRequirementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectSalesItemRequirements<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectSalesItemRequirements` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectSalesItemRequirements` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectSalesItemRequirements<T>, T> {
    return new GetAllRequestBuilder<ProjectSalesItemRequirements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectSalesItemRequirements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectSalesItemRequirements`.
   */
  create(
    entity: ProjectSalesItemRequirements<T>
  ): CreateRequestBuilder<ProjectSalesItemRequirements<T>, T> {
    return new CreateRequestBuilder<ProjectSalesItemRequirements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectSalesItemRequirements` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectSalesItemRequirements.dataAreaId}.
   * @param projectTransactionId Key property. See {@link ProjectSalesItemRequirements.projectTransactionId}.
   * @returns A request builder for creating requests to retrieve one `ProjectSalesItemRequirements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectTransactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectSalesItemRequirements<T>, T> {
    return new GetByKeyRequestBuilder<ProjectSalesItemRequirements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectTransactionId: projectTransactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectSalesItemRequirements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectSalesItemRequirements`.
   */
  update(
    entity: ProjectSalesItemRequirements<T>
  ): UpdateRequestBuilder<ProjectSalesItemRequirements<T>, T> {
    return new UpdateRequestBuilder<ProjectSalesItemRequirements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectSalesItemRequirements`.
   * @param dataAreaId Key property. See {@link ProjectSalesItemRequirements.dataAreaId}.
   * @param projectTransactionId Key property. See {@link ProjectSalesItemRequirements.projectTransactionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectSalesItemRequirements`.
   */
  delete(
    dataAreaId: string,
    projectTransactionId: string
  ): DeleteRequestBuilder<ProjectSalesItemRequirements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectSalesItemRequirements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectSalesItemRequirements` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectSalesItemRequirements<T>
  ): DeleteRequestBuilder<ProjectSalesItemRequirements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectTransactionId?: string
  ): DeleteRequestBuilder<ProjectSalesItemRequirements<T>, T> {
    return new DeleteRequestBuilder<ProjectSalesItemRequirements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectSalesItemRequirements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectTransactionId: projectTransactionId!
          }
    );
  }
}
