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
import { DiscountVendorClaimGroups } from './DiscountVendorClaimGroups';

/**
 * Request builder class for operations supported on the {@link DiscountVendorClaimGroups} entity.
 */
export class DiscountVendorClaimGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountVendorClaimGroups<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountVendorClaimGroups` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountVendorClaimGroups` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountVendorClaimGroups<T>, T> {
    return new GetAllRequestBuilder<DiscountVendorClaimGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscountVendorClaimGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountVendorClaimGroups`.
   */
  create(
    entity: DiscountVendorClaimGroups<T>
  ): CreateRequestBuilder<DiscountVendorClaimGroups<T>, T> {
    return new CreateRequestBuilder<DiscountVendorClaimGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountVendorClaimGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimGroups.dataAreaId}.
   * @param name Key property. See {@link DiscountVendorClaimGroups.name}.
   * @returns A request builder for creating requests to retrieve one `DiscountVendorClaimGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountVendorClaimGroups<T>, T> {
    return new GetByKeyRequestBuilder<DiscountVendorClaimGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountVendorClaimGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountVendorClaimGroups`.
   */
  update(
    entity: DiscountVendorClaimGroups<T>
  ): UpdateRequestBuilder<DiscountVendorClaimGroups<T>, T> {
    return new UpdateRequestBuilder<DiscountVendorClaimGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimGroups`.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimGroups.dataAreaId}.
   * @param name Key property. See {@link DiscountVendorClaimGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimGroups`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<DiscountVendorClaimGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimGroups` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountVendorClaimGroups<T>
  ): DeleteRequestBuilder<DiscountVendorClaimGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<DiscountVendorClaimGroups<T>, T> {
    return new DeleteRequestBuilder<DiscountVendorClaimGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountVendorClaimGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
