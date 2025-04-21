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
import { EmWebApplications } from './EmWebApplications';

/**
 * Request builder class for operations supported on the {@link EmWebApplications} entity.
 */
export class EmWebApplicationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmWebApplications<T>, T> {
  /**
   * Returns a request builder for querying all `EmWebApplications` entities.
   * @returns A request builder for creating requests to retrieve all `EmWebApplications` entities.
   */
  getAll(): GetAllRequestBuilder<EmWebApplications<T>, T> {
    return new GetAllRequestBuilder<EmWebApplications<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmWebApplications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmWebApplications`.
   */
  create(
    entity: EmWebApplications<T>
  ): CreateRequestBuilder<EmWebApplications<T>, T> {
    return new CreateRequestBuilder<EmWebApplications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmWebApplications` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmWebApplications.dataAreaId}.
   * @param name Key property. See {@link EmWebApplications.name}.
   * @returns A request builder for creating requests to retrieve one `EmWebApplications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmWebApplications<T>, T> {
    return new GetByKeyRequestBuilder<EmWebApplications<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmWebApplications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmWebApplications`.
   */
  update(
    entity: EmWebApplications<T>
  ): UpdateRequestBuilder<EmWebApplications<T>, T> {
    return new UpdateRequestBuilder<EmWebApplications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmWebApplications`.
   * @param dataAreaId Key property. See {@link EmWebApplications.dataAreaId}.
   * @param name Key property. See {@link EmWebApplications.name}.
   * @returns A request builder for creating requests that delete an entity of type `EmWebApplications`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<EmWebApplications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmWebApplications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmWebApplications` by taking the entity as a parameter.
   */
  delete(
    entity: EmWebApplications<T>
  ): DeleteRequestBuilder<EmWebApplications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<EmWebApplications<T>, T> {
    return new DeleteRequestBuilder<EmWebApplications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmWebApplications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
