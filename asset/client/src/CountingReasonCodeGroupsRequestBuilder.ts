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
import { CountingReasonCodeGroups } from './CountingReasonCodeGroups';

/**
 * Request builder class for operations supported on the {@link CountingReasonCodeGroups} entity.
 */
export class CountingReasonCodeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CountingReasonCodeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CountingReasonCodeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CountingReasonCodeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CountingReasonCodeGroups<T>, T> {
    return new GetAllRequestBuilder<CountingReasonCodeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CountingReasonCodeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CountingReasonCodeGroups`.
   */
  create(
    entity: CountingReasonCodeGroups<T>
  ): CreateRequestBuilder<CountingReasonCodeGroups<T>, T> {
    return new CreateRequestBuilder<CountingReasonCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CountingReasonCodeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CountingReasonCodeGroups.dataAreaId}.
   * @param name Key property. See {@link CountingReasonCodeGroups.name}.
   * @returns A request builder for creating requests to retrieve one `CountingReasonCodeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CountingReasonCodeGroups<T>, T> {
    return new GetByKeyRequestBuilder<CountingReasonCodeGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CountingReasonCodeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CountingReasonCodeGroups`.
   */
  update(
    entity: CountingReasonCodeGroups<T>
  ): UpdateRequestBuilder<CountingReasonCodeGroups<T>, T> {
    return new UpdateRequestBuilder<CountingReasonCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CountingReasonCodeGroups`.
   * @param dataAreaId Key property. See {@link CountingReasonCodeGroups.dataAreaId}.
   * @param name Key property. See {@link CountingReasonCodeGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `CountingReasonCodeGroups`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<CountingReasonCodeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CountingReasonCodeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CountingReasonCodeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CountingReasonCodeGroups<T>
  ): DeleteRequestBuilder<CountingReasonCodeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CountingReasonCodeGroups<T>, T> {
    return new DeleteRequestBuilder<CountingReasonCodeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CountingReasonCodeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
