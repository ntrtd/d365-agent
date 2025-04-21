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
import { SupplementaryProductVendorGroups } from './SupplementaryProductVendorGroups';

/**
 * Request builder class for operations supported on the {@link SupplementaryProductVendorGroups} entity.
 */
export class SupplementaryProductVendorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SupplementaryProductVendorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `SupplementaryProductVendorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `SupplementaryProductVendorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<SupplementaryProductVendorGroups<T>, T> {
    return new GetAllRequestBuilder<SupplementaryProductVendorGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SupplementaryProductVendorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SupplementaryProductVendorGroups`.
   */
  create(
    entity: SupplementaryProductVendorGroups<T>
  ): CreateRequestBuilder<SupplementaryProductVendorGroups<T>, T> {
    return new CreateRequestBuilder<SupplementaryProductVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SupplementaryProductVendorGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link SupplementaryProductVendorGroups.dataAreaId}.
   * @param groupId Key property. See {@link SupplementaryProductVendorGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `SupplementaryProductVendorGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SupplementaryProductVendorGroups<T>, T> {
    return new GetByKeyRequestBuilder<SupplementaryProductVendorGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SupplementaryProductVendorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SupplementaryProductVendorGroups`.
   */
  update(
    entity: SupplementaryProductVendorGroups<T>
  ): UpdateRequestBuilder<SupplementaryProductVendorGroups<T>, T> {
    return new UpdateRequestBuilder<SupplementaryProductVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SupplementaryProductVendorGroups`.
   * @param dataAreaId Key property. See {@link SupplementaryProductVendorGroups.dataAreaId}.
   * @param groupId Key property. See {@link SupplementaryProductVendorGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `SupplementaryProductVendorGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<SupplementaryProductVendorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SupplementaryProductVendorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SupplementaryProductVendorGroups` by taking the entity as a parameter.
   */
  delete(
    entity: SupplementaryProductVendorGroups<T>
  ): DeleteRequestBuilder<SupplementaryProductVendorGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<SupplementaryProductVendorGroups<T>, T> {
    return new DeleteRequestBuilder<SupplementaryProductVendorGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SupplementaryProductVendorGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
