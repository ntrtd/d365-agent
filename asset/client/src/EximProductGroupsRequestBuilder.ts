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
import { EximProductGroups } from './EximProductGroups';

/**
 * Request builder class for operations supported on the {@link EximProductGroups} entity.
 */
export class EximProductGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EximProductGroups<T>, T> {
  /**
   * Returns a request builder for querying all `EximProductGroups` entities.
   * @returns A request builder for creating requests to retrieve all `EximProductGroups` entities.
   */
  getAll(): GetAllRequestBuilder<EximProductGroups<T>, T> {
    return new GetAllRequestBuilder<EximProductGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EximProductGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EximProductGroups`.
   */
  create(
    entity: EximProductGroups<T>
  ): CreateRequestBuilder<EximProductGroups<T>, T> {
    return new CreateRequestBuilder<EximProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EximProductGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link EximProductGroups.dataAreaId}.
   * @param groupId Key property. See {@link EximProductGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `EximProductGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EximProductGroups<T>, T> {
    return new GetByKeyRequestBuilder<EximProductGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EximProductGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EximProductGroups`.
   */
  update(
    entity: EximProductGroups<T>
  ): UpdateRequestBuilder<EximProductGroups<T>, T> {
    return new UpdateRequestBuilder<EximProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EximProductGroups`.
   * @param dataAreaId Key property. See {@link EximProductGroups.dataAreaId}.
   * @param groupId Key property. See {@link EximProductGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `EximProductGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<EximProductGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EximProductGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EximProductGroups` by taking the entity as a parameter.
   */
  delete(
    entity: EximProductGroups<T>
  ): DeleteRequestBuilder<EximProductGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<EximProductGroups<T>, T> {
    return new DeleteRequestBuilder<EximProductGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EximProductGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
