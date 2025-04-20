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
import { ProjectStages } from './ProjectStages';
import { ProjStatus } from './ProjStatus';

/**
 * Request builder class for operations supported on the {@link ProjectStages} entity.
 */
export class ProjectStagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectStages<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectStages` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectStages` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectStages<T>, T> {
    return new GetAllRequestBuilder<ProjectStages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectStages`.
   */
  create(entity: ProjectStages<T>): CreateRequestBuilder<ProjectStages<T>, T> {
    return new CreateRequestBuilder<ProjectStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectStages` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectStages.dataAreaId}.
   * @param language Key property. See {@link ProjectStages.language}.
   * @param status Key property. See {@link ProjectStages.status}.
   * @returns A request builder for creating requests to retrieve one `ProjectStages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.ProjStatus'>
  ): GetByKeyRequestBuilder<ProjectStages<T>, T> {
    return new GetByKeyRequestBuilder<ProjectStages<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Language: language,
      Status: status
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectStages`.
   */
  update(entity: ProjectStages<T>): UpdateRequestBuilder<ProjectStages<T>, T> {
    return new UpdateRequestBuilder<ProjectStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectStages`.
   * @param dataAreaId Key property. See {@link ProjectStages.dataAreaId}.
   * @param language Key property. See {@link ProjectStages.language}.
   * @param status Key property. See {@link ProjectStages.status}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectStages`.
   */
  delete(
    dataAreaId: string,
    language: string,
    status: ProjStatus
  ): DeleteRequestBuilder<ProjectStages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectStages` by taking the entity as a parameter.
   */
  delete(entity: ProjectStages<T>): DeleteRequestBuilder<ProjectStages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    language?: string,
    status?: ProjStatus
  ): DeleteRequestBuilder<ProjectStages<T>, T> {
    return new DeleteRequestBuilder<ProjectStages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectStages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Language: language!,
            Status: status!
          }
    );
  }
}
