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
import { ShippingCarrierServices } from './ShippingCarrierServices';

/**
 * Request builder class for operations supported on the {@link ShippingCarrierServices} entity.
 */
export class ShippingCarrierServicesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingCarrierServices<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingCarrierServices` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingCarrierServices` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingCarrierServices<T>, T> {
    return new GetAllRequestBuilder<ShippingCarrierServices<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingCarrierServices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingCarrierServices`.
   */
  create(
    entity: ShippingCarrierServices<T>
  ): CreateRequestBuilder<ShippingCarrierServices<T>, T> {
    return new CreateRequestBuilder<ShippingCarrierServices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingCarrierServices` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingCarrierServices.dataAreaId}.
   * @param shippingCarrierId Key property. See {@link ShippingCarrierServices.shippingCarrierId}.
   * @param serviceId Key property. See {@link ShippingCarrierServices.serviceId}.
   * @returns A request builder for creating requests to retrieve one `ShippingCarrierServices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shippingCarrierId: DeserializedType<T, 'Edm.String'>,
    serviceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingCarrierServices<T>, T> {
    return new GetByKeyRequestBuilder<ShippingCarrierServices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShippingCarrierId: shippingCarrierId,
        ServiceId: serviceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingCarrierServices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingCarrierServices`.
   */
  update(
    entity: ShippingCarrierServices<T>
  ): UpdateRequestBuilder<ShippingCarrierServices<T>, T> {
    return new UpdateRequestBuilder<ShippingCarrierServices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingCarrierServices`.
   * @param dataAreaId Key property. See {@link ShippingCarrierServices.dataAreaId}.
   * @param shippingCarrierId Key property. See {@link ShippingCarrierServices.shippingCarrierId}.
   * @param serviceId Key property. See {@link ShippingCarrierServices.serviceId}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingCarrierServices`.
   */
  delete(
    dataAreaId: string,
    shippingCarrierId: string,
    serviceId: string
  ): DeleteRequestBuilder<ShippingCarrierServices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingCarrierServices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingCarrierServices` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingCarrierServices<T>
  ): DeleteRequestBuilder<ShippingCarrierServices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shippingCarrierId?: string,
    serviceId?: string
  ): DeleteRequestBuilder<ShippingCarrierServices<T>, T> {
    return new DeleteRequestBuilder<ShippingCarrierServices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingCarrierServices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShippingCarrierId: shippingCarrierId!,
            ServiceId: serviceId!
          }
    );
  }
}
