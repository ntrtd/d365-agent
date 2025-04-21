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
import { EngineeringChangeOrderHeaders } from './EngineeringChangeOrderHeaders';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderHeaders} entity.
 */
export class EngineeringChangeOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<EngineeringChangeOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderHeaders`.
   */
  create(
    entity: EngineeringChangeOrderHeaders<T>
  ): CreateRequestBuilder<EngineeringChangeOrderHeaders<T>, T> {
    return new CreateRequestBuilder<EngineeringChangeOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderHeaders.dataAreaId}.
   * @param orderNumber Key property. See {@link EngineeringChangeOrderHeaders.orderNumber}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    orderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<EngineeringChangeOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OrderNumber: orderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderHeaders`.
   */
  update(
    entity: EngineeringChangeOrderHeaders<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<EngineeringChangeOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderHeaders`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderHeaders.dataAreaId}.
   * @param orderNumber Key property. See {@link EngineeringChangeOrderHeaders.orderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    orderNumber: string
  ): DeleteRequestBuilder<EngineeringChangeOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderHeaders<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    orderNumber?: string
  ): DeleteRequestBuilder<EngineeringChangeOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<EngineeringChangeOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OrderNumber: orderNumber!
          }
    );
  }
}
