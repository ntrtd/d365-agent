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
import { RetailStoreTenderTypes } from './RetailStoreTenderTypes';

/**
 * Request builder class for operations supported on the {@link RetailStoreTenderTypes} entity.
 */
export class RetailStoreTenderTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreTenderTypes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreTenderTypes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreTenderTypes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreTenderTypes<T>, T> {
    return new GetAllRequestBuilder<RetailStoreTenderTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreTenderTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreTenderTypes`.
   */
  create(
    entity: RetailStoreTenderTypes<T>
  ): CreateRequestBuilder<RetailStoreTenderTypes<T>, T> {
    return new CreateRequestBuilder<RetailStoreTenderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreTenderTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailStoreTenderTypes.dataAreaId}.
   * @param retailChannelId Key property. See {@link RetailStoreTenderTypes.retailChannelId}.
   * @param paymentMethodNumber Key property. See {@link RetailStoreTenderTypes.paymentMethodNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreTenderTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>,
    paymentMethodNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreTenderTypes<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreTenderTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RetailChannelId: retailChannelId,
        PaymentMethodNumber: paymentMethodNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreTenderTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreTenderTypes`.
   */
  update(
    entity: RetailStoreTenderTypes<T>
  ): UpdateRequestBuilder<RetailStoreTenderTypes<T>, T> {
    return new UpdateRequestBuilder<RetailStoreTenderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreTenderTypes`.
   * @param dataAreaId Key property. See {@link RetailStoreTenderTypes.dataAreaId}.
   * @param retailChannelId Key property. See {@link RetailStoreTenderTypes.retailChannelId}.
   * @param paymentMethodNumber Key property. See {@link RetailStoreTenderTypes.paymentMethodNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreTenderTypes`.
   */
  delete(
    dataAreaId: string,
    retailChannelId: string,
    paymentMethodNumber: string
  ): DeleteRequestBuilder<RetailStoreTenderTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreTenderTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreTenderTypes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreTenderTypes<T>
  ): DeleteRequestBuilder<RetailStoreTenderTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    retailChannelId?: string,
    paymentMethodNumber?: string
  ): DeleteRequestBuilder<RetailStoreTenderTypes<T>, T> {
    return new DeleteRequestBuilder<RetailStoreTenderTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailStoreTenderTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RetailChannelId: retailChannelId!,
            PaymentMethodNumber: paymentMethodNumber!
          }
    );
  }
}
