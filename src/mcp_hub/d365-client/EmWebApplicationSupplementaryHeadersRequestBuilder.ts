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
import { EmWebApplicationSupplementaryHeaders } from './EmWebApplicationSupplementaryHeaders';

/**
 * Request builder class for operations supported on the {@link EmWebApplicationSupplementaryHeaders} entity.
 */
export class EmWebApplicationSupplementaryHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EmWebApplicationSupplementaryHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EmWebApplicationSupplementaryHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T> {
    return new GetAllRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmWebApplicationSupplementaryHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmWebApplicationSupplementaryHeaders`.
   */
  create(
    entity: EmWebApplicationSupplementaryHeaders<T>
  ): CreateRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T> {
    return new CreateRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmWebApplicationSupplementaryHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EmWebApplicationSupplementaryHeaders.dataAreaId}.
   * @param headerDefinition Key property. See {@link EmWebApplicationSupplementaryHeaders.headerDefinition}.
   * @param name Key property. See {@link EmWebApplicationSupplementaryHeaders.name}.
   * @returns A request builder for creating requests to retrieve one `EmWebApplicationSupplementaryHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerDefinition: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T> {
    return new GetByKeyRequestBuilder<
      EmWebApplicationSupplementaryHeaders<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      HeaderDefinition: headerDefinition,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmWebApplicationSupplementaryHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmWebApplicationSupplementaryHeaders`.
   */
  update(
    entity: EmWebApplicationSupplementaryHeaders<T>
  ): UpdateRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T> {
    return new UpdateRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmWebApplicationSupplementaryHeaders`.
   * @param dataAreaId Key property. See {@link EmWebApplicationSupplementaryHeaders.dataAreaId}.
   * @param headerDefinition Key property. See {@link EmWebApplicationSupplementaryHeaders.headerDefinition}.
   * @param name Key property. See {@link EmWebApplicationSupplementaryHeaders.name}.
   * @returns A request builder for creating requests that delete an entity of type `EmWebApplicationSupplementaryHeaders`.
   */
  delete(
    dataAreaId: string,
    headerDefinition: string,
    name: string
  ): DeleteRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmWebApplicationSupplementaryHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmWebApplicationSupplementaryHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EmWebApplicationSupplementaryHeaders<T>
  ): DeleteRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerDefinition?: string,
    name?: string
  ): DeleteRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T> {
    return new DeleteRequestBuilder<EmWebApplicationSupplementaryHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EmWebApplicationSupplementaryHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderDefinition: headerDefinition!,
            Name: name!
          }
    );
  }
}
