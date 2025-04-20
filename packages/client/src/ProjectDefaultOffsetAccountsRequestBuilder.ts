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
import { ProjectDefaultOffsetAccounts } from './ProjectDefaultOffsetAccounts';
import { ProjOffsetType } from './ProjOffsetType';

/**
 * Request builder class for operations supported on the {@link ProjectDefaultOffsetAccounts} entity.
 */
export class ProjectDefaultOffsetAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectDefaultOffsetAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectDefaultOffsetAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectDefaultOffsetAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectDefaultOffsetAccounts<T>, T> {
    return new GetAllRequestBuilder<ProjectDefaultOffsetAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectDefaultOffsetAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectDefaultOffsetAccounts`.
   */
  create(
    entity: ProjectDefaultOffsetAccounts<T>
  ): CreateRequestBuilder<ProjectDefaultOffsetAccounts<T>, T> {
    return new CreateRequestBuilder<ProjectDefaultOffsetAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectDefaultOffsetAccounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectDefaultOffsetAccounts.dataAreaId}.
   * @param projectId Key property. See {@link ProjectDefaultOffsetAccounts.projectId}.
   * @param category Key property. See {@link ProjectDefaultOffsetAccounts.category}.
   * @param offsetAccountType Key property. See {@link ProjectDefaultOffsetAccounts.offsetAccountType}.
   * @param resourcePersonnelNumber Key property. See {@link ProjectDefaultOffsetAccounts.resourcePersonnelNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjectDefaultOffsetAccounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    category: DeserializedType<T, 'Edm.String'>,
    offsetAccountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ProjOffsetType'
    >,
    resourcePersonnelNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectDefaultOffsetAccounts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectDefaultOffsetAccounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectID: projectId,
        Category: category,
        OffsetAccountType: offsetAccountType,
        ResourcePersonnelNumber: resourcePersonnelNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectDefaultOffsetAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectDefaultOffsetAccounts`.
   */
  update(
    entity: ProjectDefaultOffsetAccounts<T>
  ): UpdateRequestBuilder<ProjectDefaultOffsetAccounts<T>, T> {
    return new UpdateRequestBuilder<ProjectDefaultOffsetAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectDefaultOffsetAccounts`.
   * @param dataAreaId Key property. See {@link ProjectDefaultOffsetAccounts.dataAreaId}.
   * @param projectId Key property. See {@link ProjectDefaultOffsetAccounts.projectId}.
   * @param category Key property. See {@link ProjectDefaultOffsetAccounts.category}.
   * @param offsetAccountType Key property. See {@link ProjectDefaultOffsetAccounts.offsetAccountType}.
   * @param resourcePersonnelNumber Key property. See {@link ProjectDefaultOffsetAccounts.resourcePersonnelNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectDefaultOffsetAccounts`.
   */
  delete(
    dataAreaId: string,
    projectId: string,
    category: string,
    offsetAccountType: ProjOffsetType,
    resourcePersonnelNumber: string
  ): DeleteRequestBuilder<ProjectDefaultOffsetAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectDefaultOffsetAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectDefaultOffsetAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectDefaultOffsetAccounts<T>
  ): DeleteRequestBuilder<ProjectDefaultOffsetAccounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectId?: string,
    category?: string,
    offsetAccountType?: ProjOffsetType,
    resourcePersonnelNumber?: string
  ): DeleteRequestBuilder<ProjectDefaultOffsetAccounts<T>, T> {
    return new DeleteRequestBuilder<ProjectDefaultOffsetAccounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectDefaultOffsetAccounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectID: projectId!,
            Category: category!,
            OffsetAccountType: offsetAccountType!,
            ResourcePersonnelNumber: resourcePersonnelNumber!
          }
    );
  }
}
