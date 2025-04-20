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
import { SupplementaryProductCustomerGroups } from './SupplementaryProductCustomerGroups';

/**
 * Request builder class for operations supported on the {@link SupplementaryProductCustomerGroups} entity.
 */
export class SupplementaryProductCustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SupplementaryProductCustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SupplementaryProductCustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SupplementaryProductCustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SupplementaryProductCustomerGroups<T>, T> {
    return new GetAllRequestBuilder<SupplementaryProductCustomerGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SupplementaryProductCustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplementaryProductCustomerGroups`.
   */
  create(
    entity: SupplementaryProductCustomerGroups<T>
  ): CreateRequestBuilder<SupplementaryProductCustomerGroups<T>, T> {
    return new CreateRequestBuilder<SupplementaryProductCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SupplementaryProductCustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SupplementaryProductCustomerGroups.dataAreaId}.
   * @param groupId Key property. See {@link SupplementaryProductCustomerGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `SupplementaryProductCustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SupplementaryProductCustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<SupplementaryProductCustomerGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SupplementaryProductCustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplementaryProductCustomerGroups`.
   */
  update(
    entity: SupplementaryProductCustomerGroups<T>
  ): UpdateRequestBuilder<SupplementaryProductCustomerGroups<T>, T> {
    return new UpdateRequestBuilder<SupplementaryProductCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplementaryProductCustomerGroups`.
   * @param dataAreaId Key property. See {@link SupplementaryProductCustomerGroups.dataAreaId}.
   * @param groupId Key property. See {@link SupplementaryProductCustomerGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `SupplementaryProductCustomerGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<SupplementaryProductCustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplementaryProductCustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplementaryProductCustomerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: SupplementaryProductCustomerGroups<T>
  ): DeleteRequestBuilder<SupplementaryProductCustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<SupplementaryProductCustomerGroups<T>, T> {
    return new DeleteRequestBuilder<SupplementaryProductCustomerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SupplementaryProductCustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
