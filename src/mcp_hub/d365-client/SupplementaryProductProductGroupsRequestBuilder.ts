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
import { SupplementaryProductProductGroups } from './SupplementaryProductProductGroups';

/**
 * Request builder class for operations supported on the {@link SupplementaryProductProductGroups} entity.
 */
export class SupplementaryProductProductGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SupplementaryProductProductGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SupplementaryProductProductGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SupplementaryProductProductGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SupplementaryProductProductGroups<T>, T> {
    return new GetAllRequestBuilder<SupplementaryProductProductGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SupplementaryProductProductGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplementaryProductProductGroups`.
   */
  create(
    entity: SupplementaryProductProductGroups<T>
  ): CreateRequestBuilder<SupplementaryProductProductGroups<T>, T> {
    return new CreateRequestBuilder<SupplementaryProductProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SupplementaryProductProductGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SupplementaryProductProductGroups.dataAreaId}.
   * @param groupId Key property. See {@link SupplementaryProductProductGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `SupplementaryProductProductGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SupplementaryProductProductGroups<T>, T> {
    return new GetByKeyRequestBuilder<SupplementaryProductProductGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SupplementaryProductProductGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplementaryProductProductGroups`.
   */
  update(
    entity: SupplementaryProductProductGroups<T>
  ): UpdateRequestBuilder<SupplementaryProductProductGroups<T>, T> {
    return new UpdateRequestBuilder<SupplementaryProductProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplementaryProductProductGroups`.
   * @param dataAreaId Key property. See {@link SupplementaryProductProductGroups.dataAreaId}.
   * @param groupId Key property. See {@link SupplementaryProductProductGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `SupplementaryProductProductGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<SupplementaryProductProductGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplementaryProductProductGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplementaryProductProductGroups` by taking the entity as a parameter.
   */
  delete(
    entity: SupplementaryProductProductGroups<T>
  ): DeleteRequestBuilder<SupplementaryProductProductGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<SupplementaryProductProductGroups<T>, T> {
    return new DeleteRequestBuilder<SupplementaryProductProductGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SupplementaryProductProductGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
