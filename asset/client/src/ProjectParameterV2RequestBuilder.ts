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
import { ProjectParameterV2 } from './ProjectParameterV2';

/**
 * Request builder class for operations supported on the {@link ProjectParameterV2} entity.
 */
export class ProjectParameterV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectParameterV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectParameterV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectParameterV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectParameterV2<T>, T> {
    return new GetAllRequestBuilder<ProjectParameterV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectParameterV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectParameterV2`.
   */
  create(
    entity: ProjectParameterV2<T>
  ): CreateRequestBuilder<ProjectParameterV2<T>, T> {
    return new CreateRequestBuilder<ProjectParameterV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectParameterV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectParameterV2.dataAreaId}.
   * @param key Key property. See {@link ProjectParameterV2.key}.
   * @returns A request builder for creating requests to retrieve one `ProjectParameterV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ProjectParameterV2<T>, T> {
    return new GetByKeyRequestBuilder<ProjectParameterV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectParameterV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectParameterV2`.
   */
  update(
    entity: ProjectParameterV2<T>
  ): UpdateRequestBuilder<ProjectParameterV2<T>, T> {
    return new UpdateRequestBuilder<ProjectParameterV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectParameterV2`.
   * @param dataAreaId Key property. See {@link ProjectParameterV2.dataAreaId}.
   * @param key Key property. See {@link ProjectParameterV2.key}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectParameterV2`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<ProjectParameterV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectParameterV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectParameterV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectParameterV2<T>
  ): DeleteRequestBuilder<ProjectParameterV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<ProjectParameterV2<T>, T> {
    return new DeleteRequestBuilder<ProjectParameterV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectParameterV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
