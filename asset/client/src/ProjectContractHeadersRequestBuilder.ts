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
import { ProjectContractHeaders } from './ProjectContractHeaders';

/**
 * Request builder class for operations supported on the {@link ProjectContractHeaders} entity.
 */
export class ProjectContractHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectContractHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectContractHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectContractHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectContractHeaders<T>, T> {
    return new GetAllRequestBuilder<ProjectContractHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectContractHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectContractHeaders`.
   */
  create(
    entity: ProjectContractHeaders<T>
  ): CreateRequestBuilder<ProjectContractHeaders<T>, T> {
    return new CreateRequestBuilder<ProjectContractHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectContractHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectContractHeaders.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectContractHeaders.projectContractId}.
   * @returns A request builder for creating requests to retrieve one `ProjectContractHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectContractHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProjectContractHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjectContractId: projectContractId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectContractHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectContractHeaders`.
   */
  update(
    entity: ProjectContractHeaders<T>
  ): UpdateRequestBuilder<ProjectContractHeaders<T>, T> {
    return new UpdateRequestBuilder<ProjectContractHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectContractHeaders`.
   * @param dataAreaId Key property. See {@link ProjectContractHeaders.dataAreaId}.
   * @param projectContractId Key property. See {@link ProjectContractHeaders.projectContractId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractHeaders`.
   */
  delete(
    dataAreaId: string,
    projectContractId: string
  ): DeleteRequestBuilder<ProjectContractHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectContractHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectContractHeaders<T>
  ): DeleteRequestBuilder<ProjectContractHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractId?: string
  ): DeleteRequestBuilder<ProjectContractHeaders<T>, T> {
    return new DeleteRequestBuilder<ProjectContractHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectContractHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractId: projectContractId!
          }
    );
  }
}
