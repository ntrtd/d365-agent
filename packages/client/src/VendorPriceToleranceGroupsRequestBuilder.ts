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
import { VendorPriceToleranceGroups } from './VendorPriceToleranceGroups';

/**
 * Request builder class for operations supported on the {@link VendorPriceToleranceGroups} entity.
 */
export class VendorPriceToleranceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorPriceToleranceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorPriceToleranceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorPriceToleranceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorPriceToleranceGroups<T>, T> {
    return new GetAllRequestBuilder<VendorPriceToleranceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorPriceToleranceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorPriceToleranceGroups`.
   */
  create(
    entity: VendorPriceToleranceGroups<T>
  ): CreateRequestBuilder<VendorPriceToleranceGroups<T>, T> {
    return new CreateRequestBuilder<VendorPriceToleranceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorPriceToleranceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorPriceToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorPriceToleranceGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `VendorPriceToleranceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorPriceToleranceGroups<T>, T> {
    return new GetByKeyRequestBuilder<VendorPriceToleranceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendorPriceToleranceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorPriceToleranceGroups`.
   */
  update(
    entity: VendorPriceToleranceGroups<T>
  ): UpdateRequestBuilder<VendorPriceToleranceGroups<T>, T> {
    return new UpdateRequestBuilder<VendorPriceToleranceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorPriceToleranceGroups`.
   * @param dataAreaId Key property. See {@link VendorPriceToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorPriceToleranceGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorPriceToleranceGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<VendorPriceToleranceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorPriceToleranceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorPriceToleranceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: VendorPriceToleranceGroups<T>
  ): DeleteRequestBuilder<VendorPriceToleranceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<VendorPriceToleranceGroups<T>, T> {
    return new DeleteRequestBuilder<VendorPriceToleranceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorPriceToleranceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
