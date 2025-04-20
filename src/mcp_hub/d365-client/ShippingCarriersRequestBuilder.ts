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
import { ShippingCarriers } from './ShippingCarriers';

/**
 * Request builder class for operations supported on the {@link ShippingCarriers} entity.
 */
export class ShippingCarriersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingCarriers<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingCarriers` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingCarriers` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingCarriers<T>, T> {
    return new GetAllRequestBuilder<ShippingCarriers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ShippingCarriers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingCarriers`.
   */
  create(
    entity: ShippingCarriers<T>
  ): CreateRequestBuilder<ShippingCarriers<T>, T> {
    return new CreateRequestBuilder<ShippingCarriers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingCarriers` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingCarriers.dataAreaId}.
   * @param carrierId Key property. See {@link ShippingCarriers.carrierId}.
   * @returns A request builder for creating requests to retrieve one `ShippingCarriers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    carrierId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingCarriers<T>, T> {
    return new GetByKeyRequestBuilder<ShippingCarriers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CarrierId: carrierId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingCarriers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingCarriers`.
   */
  update(
    entity: ShippingCarriers<T>
  ): UpdateRequestBuilder<ShippingCarriers<T>, T> {
    return new UpdateRequestBuilder<ShippingCarriers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingCarriers`.
   * @param dataAreaId Key property. See {@link ShippingCarriers.dataAreaId}.
   * @param carrierId Key property. See {@link ShippingCarriers.carrierId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingCarriers`.
   */
  delete(
    dataAreaId: string,
    carrierId: string
  ): DeleteRequestBuilder<ShippingCarriers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingCarriers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingCarriers` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingCarriers<T>
  ): DeleteRequestBuilder<ShippingCarriers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    carrierId?: string
  ): DeleteRequestBuilder<ShippingCarriers<T>, T> {
    return new DeleteRequestBuilder<ShippingCarriers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingCarriers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CarrierId: carrierId!
          }
    );
  }
}
