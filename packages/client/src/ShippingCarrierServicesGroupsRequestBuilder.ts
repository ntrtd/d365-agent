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
import { ShippingCarrierServicesGroups } from './ShippingCarrierServicesGroups';

/**
 * Request builder class for operations supported on the {@link ShippingCarrierServicesGroups} entity.
 */
export class ShippingCarrierServicesGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingCarrierServicesGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingCarrierServicesGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingCarrierServicesGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingCarrierServicesGroups<T>, T> {
    return new GetAllRequestBuilder<ShippingCarrierServicesGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingCarrierServicesGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingCarrierServicesGroups`.
   */
  create(
    entity: ShippingCarrierServicesGroups<T>
  ): CreateRequestBuilder<ShippingCarrierServicesGroups<T>, T> {
    return new CreateRequestBuilder<ShippingCarrierServicesGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingCarrierServicesGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingCarrierServicesGroups.dataAreaId}.
   * @param groupId Key property. See {@link ShippingCarrierServicesGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ShippingCarrierServicesGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingCarrierServicesGroups<T>, T> {
    return new GetByKeyRequestBuilder<ShippingCarrierServicesGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingCarrierServicesGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingCarrierServicesGroups`.
   */
  update(
    entity: ShippingCarrierServicesGroups<T>
  ): UpdateRequestBuilder<ShippingCarrierServicesGroups<T>, T> {
    return new UpdateRequestBuilder<ShippingCarrierServicesGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingCarrierServicesGroups`.
   * @param dataAreaId Key property. See {@link ShippingCarrierServicesGroups.dataAreaId}.
   * @param groupId Key property. See {@link ShippingCarrierServicesGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingCarrierServicesGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ShippingCarrierServicesGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingCarrierServicesGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingCarrierServicesGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingCarrierServicesGroups<T>
  ): DeleteRequestBuilder<ShippingCarrierServicesGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ShippingCarrierServicesGroups<T>, T> {
    return new DeleteRequestBuilder<ShippingCarrierServicesGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingCarrierServicesGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
