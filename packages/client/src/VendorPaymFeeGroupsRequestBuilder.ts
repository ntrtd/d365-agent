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
import { VendorPaymFeeGroups } from './VendorPaymFeeGroups';

/**
 * Request builder class for operations supported on the {@link VendorPaymFeeGroups} entity.
 */
export class VendorPaymFeeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPaymFeeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPaymFeeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPaymFeeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPaymFeeGroups<T>, T> {
    return new GetAllRequestBuilder<VendorPaymFeeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorPaymFeeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPaymFeeGroups`.
   */
  create(
    entity: VendorPaymFeeGroups<T>
  ): CreateRequestBuilder<VendorPaymFeeGroups<T>, T> {
    return new CreateRequestBuilder<VendorPaymFeeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPaymFeeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPaymFeeGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorPaymFeeGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `VendorPaymFeeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPaymFeeGroups<T>, T> {
    return new GetByKeyRequestBuilder<VendorPaymFeeGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPaymFeeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPaymFeeGroups`.
   */
  update(
    entity: VendorPaymFeeGroups<T>
  ): UpdateRequestBuilder<VendorPaymFeeGroups<T>, T> {
    return new UpdateRequestBuilder<VendorPaymFeeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPaymFeeGroups`.
   * @param dataAreaId Key property. See {@link VendorPaymFeeGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorPaymFeeGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymFeeGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<VendorPaymFeeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPaymFeeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPaymFeeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPaymFeeGroups<T>
  ): DeleteRequestBuilder<VendorPaymFeeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<VendorPaymFeeGroups<T>, T> {
    return new DeleteRequestBuilder<VendorPaymFeeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPaymFeeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
