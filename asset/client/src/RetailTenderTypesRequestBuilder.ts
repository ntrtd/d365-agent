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
import { RetailTenderTypes } from './RetailTenderTypes';

/**
 * Request builder class for operations supported on the {@link RetailTenderTypes} entity.
 */
export class RetailTenderTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTenderTypes<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTenderTypes` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTenderTypes` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTenderTypes<T>, T> {
    return new GetAllRequestBuilder<RetailTenderTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTenderTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTenderTypes`.
   */
  create(
    entity: RetailTenderTypes<T>
  ): CreateRequestBuilder<RetailTenderTypes<T>, T> {
    return new CreateRequestBuilder<RetailTenderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTenderTypes` entity based on its keys.
   * @param paymentMethodNumber Key property. See {@link RetailTenderTypes.paymentMethodNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTenderTypes` entity based on its keys.
   */
  getByKey(
    paymentMethodNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTenderTypes<T>, T> {
    return new GetByKeyRequestBuilder<RetailTenderTypes<T>, T>(this.entityApi, {
      PaymentMethodNumber: paymentMethodNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTenderTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTenderTypes`.
   */
  update(
    entity: RetailTenderTypes<T>
  ): UpdateRequestBuilder<RetailTenderTypes<T>, T> {
    return new UpdateRequestBuilder<RetailTenderTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTenderTypes`.
   * @param paymentMethodNumber Key property. See {@link RetailTenderTypes.paymentMethodNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderTypes`.
   */
  delete(
    paymentMethodNumber: string
  ): DeleteRequestBuilder<RetailTenderTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTenderTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTenderTypes` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTenderTypes<T>
  ): DeleteRequestBuilder<RetailTenderTypes<T>, T>;
  delete(
    paymentMethodNumberOrEntity: any
  ): DeleteRequestBuilder<RetailTenderTypes<T>, T> {
    return new DeleteRequestBuilder<RetailTenderTypes<T>, T>(
      this.entityApi,
      paymentMethodNumberOrEntity instanceof RetailTenderTypes
        ? paymentMethodNumberOrEntity
        : { PaymentMethodNumber: paymentMethodNumberOrEntity! }
    );
  }
}
