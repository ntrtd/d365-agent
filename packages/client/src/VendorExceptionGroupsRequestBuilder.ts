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
import { VendorExceptionGroups } from './VendorExceptionGroups';

/**
 * Request builder class for operations supported on the {@link VendorExceptionGroups} entity.
 */
export class VendorExceptionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorExceptionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorExceptionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorExceptionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorExceptionGroups<T>, T> {
    return new GetAllRequestBuilder<VendorExceptionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorExceptionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorExceptionGroups`.
   */
  create(
    entity: VendorExceptionGroups<T>
  ): CreateRequestBuilder<VendorExceptionGroups<T>, T> {
    return new CreateRequestBuilder<VendorExceptionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorExceptionGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorExceptionGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorExceptionGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `VendorExceptionGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorExceptionGroups<T>, T> {
    return new GetByKeyRequestBuilder<VendorExceptionGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorExceptionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorExceptionGroups`.
   */
  update(
    entity: VendorExceptionGroups<T>
  ): UpdateRequestBuilder<VendorExceptionGroups<T>, T> {
    return new UpdateRequestBuilder<VendorExceptionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorExceptionGroups`.
   * @param dataAreaId Key property. See {@link VendorExceptionGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorExceptionGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorExceptionGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<VendorExceptionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorExceptionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorExceptionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: VendorExceptionGroups<T>
  ): DeleteRequestBuilder<VendorExceptionGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<VendorExceptionGroups<T>, T> {
    return new DeleteRequestBuilder<VendorExceptionGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorExceptionGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
