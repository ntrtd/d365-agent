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
import { VendorGroups } from './VendorGroups';

/**
 * Request builder class for operations supported on the {@link VendorGroups} entity.
 */
export class VendorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorGroups<T>, T> {
    return new GetAllRequestBuilder<VendorGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorGroups`.
   */
  create(entity: VendorGroups<T>): CreateRequestBuilder<VendorGroups<T>, T> {
    return new CreateRequestBuilder<VendorGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorGroups.dataAreaId}.
   * @param vendorGroupId Key property. See {@link VendorGroups.vendorGroupId}.
   * @returns A request builder for creating requests to retrieve one `VendorGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorGroups<T>, T> {
    return new GetByKeyRequestBuilder<VendorGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorGroupId: vendorGroupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorGroups`.
   */
  update(entity: VendorGroups<T>): UpdateRequestBuilder<VendorGroups<T>, T> {
    return new UpdateRequestBuilder<VendorGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorGroups`.
   * @param dataAreaId Key property. See {@link VendorGroups.dataAreaId}.
   * @param vendorGroupId Key property. See {@link VendorGroups.vendorGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorGroups`.
   */
  delete(
    dataAreaId: string,
    vendorGroupId: string
  ): DeleteRequestBuilder<VendorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorGroups` by taking the entity as a parameter.
   */
  delete(entity: VendorGroups<T>): DeleteRequestBuilder<VendorGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorGroupId?: string
  ): DeleteRequestBuilder<VendorGroups<T>, T> {
    return new DeleteRequestBuilder<VendorGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorGroupId: vendorGroupId!
          }
    );
  }
}
