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
import { VendorOverUnderDeliveryToleranceGroups } from './VendorOverUnderDeliveryToleranceGroups';

/**
 * Request builder class for operations supported on the {@link VendorOverUnderDeliveryToleranceGroups} entity.
 */
export class VendorOverUnderDeliveryToleranceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `VendorOverUnderDeliveryToleranceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `VendorOverUnderDeliveryToleranceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T> {
    return new GetAllRequestBuilder<
      VendorOverUnderDeliveryToleranceGroups<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorOverUnderDeliveryToleranceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorOverUnderDeliveryToleranceGroups`.
   */
  create(
    entity: VendorOverUnderDeliveryToleranceGroups<T>
  ): CreateRequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T> {
    return new CreateRequestBuilder<
      VendorOverUnderDeliveryToleranceGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `VendorOverUnderDeliveryToleranceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorOverUnderDeliveryToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorOverUnderDeliveryToleranceGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `VendorOverUnderDeliveryToleranceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      VendorOverUnderDeliveryToleranceGroups<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorOverUnderDeliveryToleranceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorOverUnderDeliveryToleranceGroups`.
   */
  update(
    entity: VendorOverUnderDeliveryToleranceGroups<T>
  ): UpdateRequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T> {
    return new UpdateRequestBuilder<
      VendorOverUnderDeliveryToleranceGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorOverUnderDeliveryToleranceGroups`.
   * @param dataAreaId Key property. See {@link VendorOverUnderDeliveryToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link VendorOverUnderDeliveryToleranceGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `VendorOverUnderDeliveryToleranceGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorOverUnderDeliveryToleranceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorOverUnderDeliveryToleranceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: VendorOverUnderDeliveryToleranceGroups<T>
  ): DeleteRequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<VendorOverUnderDeliveryToleranceGroups<T>, T> {
    return new DeleteRequestBuilder<
      VendorOverUnderDeliveryToleranceGroups<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorOverUnderDeliveryToleranceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
