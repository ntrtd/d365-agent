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
import { DeliveryMode } from './DeliveryMode';

/**
 * Request builder class for operations supported on the {@link DeliveryMode} entity.
 */
export class DeliveryModeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeliveryMode<T>, T> {
  /**
   * Returns a request builder for querying all `DeliveryMode` entities.
   * @returns A request builder for creating requests to retrieve all `DeliveryMode` entities.
   */
  getAll(): GetAllRequestBuilder<DeliveryMode<T>, T> {
    return new GetAllRequestBuilder<DeliveryMode<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeliveryMode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeliveryMode`.
   */
  create(entity: DeliveryMode<T>): CreateRequestBuilder<DeliveryMode<T>, T> {
    return new CreateRequestBuilder<DeliveryMode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DeliveryMode` entity based on its keys.
   * @param deliveryModeId Key property. See {@link DeliveryMode.deliveryModeId}.
   * @returns A request builder for creating requests to retrieve one `DeliveryMode` entity based on its keys.
   */
  getByKey(
    deliveryModeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeliveryMode<T>, T> {
    return new GetByKeyRequestBuilder<DeliveryMode<T>, T>(this.entityApi, {
      DeliveryModeId: deliveryModeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DeliveryMode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeliveryMode`.
   */
  update(entity: DeliveryMode<T>): UpdateRequestBuilder<DeliveryMode<T>, T> {
    return new UpdateRequestBuilder<DeliveryMode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DeliveryMode`.
   * @param deliveryModeId Key property. See {@link DeliveryMode.deliveryModeId}.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryMode`.
   */
  delete(deliveryModeId: string): DeleteRequestBuilder<DeliveryMode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeliveryMode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeliveryMode` by taking the entity as a parameter.
   */
  delete(entity: DeliveryMode<T>): DeleteRequestBuilder<DeliveryMode<T>, T>;
  delete(
    deliveryModeIdOrEntity: any
  ): DeleteRequestBuilder<DeliveryMode<T>, T> {
    return new DeleteRequestBuilder<DeliveryMode<T>, T>(
      this.entityApi,
      deliveryModeIdOrEntity instanceof DeliveryMode
        ? deliveryModeIdOrEntity
        : { DeliveryModeId: deliveryModeIdOrEntity! }
    );
  }
}
