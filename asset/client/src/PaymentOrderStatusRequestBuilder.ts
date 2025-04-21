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
import { PaymentOrderStatus } from './PaymentOrderStatus';

/**
 * Request builder class for operations supported on the {@link PaymentOrderStatus} entity.
 */
export class PaymentOrderStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymentOrderStatus<T>, T> {
  /**
   * Returns a request builder for querying all `PaymentOrderStatus` entities.
   * @returns A request builder for creating requests to retrieve all `PaymentOrderStatus` entities.
   */
  getAll(): GetAllRequestBuilder<PaymentOrderStatus<T>, T> {
    return new GetAllRequestBuilder<PaymentOrderStatus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymentOrderStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymentOrderStatus`.
   */
  create(
    entity: PaymentOrderStatus<T>
  ): CreateRequestBuilder<PaymentOrderStatus<T>, T> {
    return new CreateRequestBuilder<PaymentOrderStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymentOrderStatus` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymentOrderStatus.dataAreaId}.
   * @param number Key property. See {@link PaymentOrderStatus.number}.
   * @returns A request builder for creating requests to retrieve one `PaymentOrderStatus` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    number: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymentOrderStatus<T>, T> {
    return new GetByKeyRequestBuilder<PaymentOrderStatus<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Number: number
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PaymentOrderStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymentOrderStatus`.
   */
  update(
    entity: PaymentOrderStatus<T>
  ): UpdateRequestBuilder<PaymentOrderStatus<T>, T> {
    return new UpdateRequestBuilder<PaymentOrderStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymentOrderStatus`.
   * @param dataAreaId Key property. See {@link PaymentOrderStatus.dataAreaId}.
   * @param number Key property. See {@link PaymentOrderStatus.number}.
   * @returns A request builder for creating requests that delete an entity of type `PaymentOrderStatus`.
   */
  delete(
    dataAreaId: string,
    number: string
  ): DeleteRequestBuilder<PaymentOrderStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymentOrderStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymentOrderStatus` by taking the entity as a parameter.
   */
  delete(
    entity: PaymentOrderStatus<T>
  ): DeleteRequestBuilder<PaymentOrderStatus<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    number?: string
  ): DeleteRequestBuilder<PaymentOrderStatus<T>, T> {
    return new DeleteRequestBuilder<PaymentOrderStatus<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymentOrderStatus
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Number: number!
          }
    );
  }
}
