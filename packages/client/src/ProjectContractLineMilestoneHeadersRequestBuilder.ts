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
import { ProjectContractLineMilestoneHeaders } from './ProjectContractLineMilestoneHeaders';

/**
 * Request builder class for operations supported on the {@link ProjectContractLineMilestoneHeaders} entity.
 */
export class ProjectContractLineMilestoneHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectContractLineMilestoneHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectContractLineMilestoneHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectContractLineMilestoneHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T> {
    return new GetAllRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectContractLineMilestoneHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectContractLineMilestoneHeaders`.
   */
  create(
    entity: ProjectContractLineMilestoneHeaders<T>
  ): CreateRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T> {
    return new CreateRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectContractLineMilestoneHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectContractLineMilestoneHeaders.dataAreaId}.
   * @param projectContractLineMilestoneHeaderId Key property. See {@link ProjectContractLineMilestoneHeaders.projectContractLineMilestoneHeaderId}.
   * @returns A request builder for creating requests to retrieve one `ProjectContractLineMilestoneHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projectContractLineMilestoneHeaderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjectContractLineMilestoneHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjectContractLineMilestoneHeaderId: projectContractLineMilestoneHeaderId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectContractLineMilestoneHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectContractLineMilestoneHeaders`.
   */
  update(
    entity: ProjectContractLineMilestoneHeaders<T>
  ): UpdateRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T> {
    return new UpdateRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectContractLineMilestoneHeaders`.
   * @param dataAreaId Key property. See {@link ProjectContractLineMilestoneHeaders.dataAreaId}.
   * @param projectContractLineMilestoneHeaderId Key property. See {@link ProjectContractLineMilestoneHeaders.projectContractLineMilestoneHeaderId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractLineMilestoneHeaders`.
   */
  delete(
    dataAreaId: string,
    projectContractLineMilestoneHeaderId: string
  ): DeleteRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectContractLineMilestoneHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectContractLineMilestoneHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectContractLineMilestoneHeaders<T>
  ): DeleteRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projectContractLineMilestoneHeaderId?: string
  ): DeleteRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T> {
    return new DeleteRequestBuilder<ProjectContractLineMilestoneHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectContractLineMilestoneHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjectContractLineMilestoneHeaderId:
              projectContractLineMilestoneHeaderId!
          }
    );
  }
}
