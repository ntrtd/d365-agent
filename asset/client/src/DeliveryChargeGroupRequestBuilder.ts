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
import { DeliveryChargeGroup } from './DeliveryChargeGroup';

/**
 * Request builder class for operations supported on the {@link DeliveryChargeGroup} entity.
 */
export class DeliveryChargeGroupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeliveryChargeGroup<T>, T> {
  /**
   * Returns a request builder for querying all `DeliveryChargeGroup` entities.
   * @returns A request builder for creating requests to retrieve all `DeliveryChargeGroup` entities.
   */
  getAll(): GetAllRequestBuilder<DeliveryChargeGroup<T>, T> {
    return new GetAllRequestBuilder<DeliveryChargeGroup<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeliveryChargeGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeliveryChargeGroup`.
   */
  create(
    entity: DeliveryChargeGroup<T>
  ): CreateRequestBuilder<DeliveryChargeGroup<T>, T> {
    return new CreateRequestBuilder<DeliveryChargeGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeliveryChargeGroup` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeliveryChargeGroup.dataAreaId}.
   * @param groupId Key property. See {@link DeliveryChargeGroup.groupId}.
   * @returns A request builder for creating requests to retrieve one `DeliveryChargeGroup` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeliveryChargeGroup<T>, T> {
    return new GetByKeyRequestBuilder<DeliveryChargeGroup<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeliveryChargeGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeliveryChargeGroup`.
   */
  update(
    entity: DeliveryChargeGroup<T>
  ): UpdateRequestBuilder<DeliveryChargeGroup<T>, T> {
    return new UpdateRequestBuilder<DeliveryChargeGroup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeliveryChargeGroup`.
   * @param dataAreaId Key property. See {@link DeliveryChargeGroup.dataAreaId}.
   * @param groupId Key property. See {@link DeliveryChargeGroup.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryChargeGroup`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<DeliveryChargeGroup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeliveryChargeGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryChargeGroup` by taking the entity as a parameter.
   */
  delete(
    entity: DeliveryChargeGroup<T>
  ): DeleteRequestBuilder<DeliveryChargeGroup<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<DeliveryChargeGroup<T>, T> {
    return new DeleteRequestBuilder<DeliveryChargeGroup<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeliveryChargeGroup
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
