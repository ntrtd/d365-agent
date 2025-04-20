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
import { ShippingContainerAutoCostHeaders } from './ShippingContainerAutoCostHeaders';

/**
 * Request builder class for operations supported on the {@link ShippingContainerAutoCostHeaders} entity.
 */
export class ShippingContainerAutoCostHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingContainerAutoCostHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingContainerAutoCostHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingContainerAutoCostHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingContainerAutoCostHeaders<T>, T> {
    return new GetAllRequestBuilder<ShippingContainerAutoCostHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingContainerAutoCostHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingContainerAutoCostHeaders`.
   */
  create(
    entity: ShippingContainerAutoCostHeaders<T>
  ): CreateRequestBuilder<ShippingContainerAutoCostHeaders<T>, T> {
    return new CreateRequestBuilder<ShippingContainerAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingContainerAutoCostHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingContainerAutoCostHeaders.dataAreaId}.
   * @param shippingContainerCostAutoNumber Key property. See {@link ShippingContainerAutoCostHeaders.shippingContainerCostAutoNumber}.
   * @returns A request builder for creating requests to retrieve one `ShippingContainerAutoCostHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shippingContainerCostAutoNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingContainerAutoCostHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ShippingContainerAutoCostHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShippingContainerCostAutoNumber: shippingContainerCostAutoNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingContainerAutoCostHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingContainerAutoCostHeaders`.
   */
  update(
    entity: ShippingContainerAutoCostHeaders<T>
  ): UpdateRequestBuilder<ShippingContainerAutoCostHeaders<T>, T> {
    return new UpdateRequestBuilder<ShippingContainerAutoCostHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerAutoCostHeaders`.
   * @param dataAreaId Key property. See {@link ShippingContainerAutoCostHeaders.dataAreaId}.
   * @param shippingContainerCostAutoNumber Key property. See {@link ShippingContainerAutoCostHeaders.shippingContainerCostAutoNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerAutoCostHeaders`.
   */
  delete(
    dataAreaId: string,
    shippingContainerCostAutoNumber: string
  ): DeleteRequestBuilder<ShippingContainerAutoCostHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingContainerAutoCostHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingContainerAutoCostHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingContainerAutoCostHeaders<T>
  ): DeleteRequestBuilder<ShippingContainerAutoCostHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shippingContainerCostAutoNumber?: string
  ): DeleteRequestBuilder<ShippingContainerAutoCostHeaders<T>, T> {
    return new DeleteRequestBuilder<ShippingContainerAutoCostHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingContainerAutoCostHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShippingContainerCostAutoNumber: shippingContainerCostAutoNumber!
          }
    );
  }
}
