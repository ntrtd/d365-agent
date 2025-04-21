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
import { ElectronicPaymentWays } from './ElectronicPaymentWays';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentWays} entity.
 */
export class ElectronicPaymentWaysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentWays<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentWays` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentWays` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicPaymentWays<T>, T> {
    return new GetAllRequestBuilder<ElectronicPaymentWays<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentWays` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentWays`.
   */
  create(
    entity: ElectronicPaymentWays<T>
  ): CreateRequestBuilder<ElectronicPaymentWays<T>, T> {
    return new CreateRequestBuilder<ElectronicPaymentWays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentWays` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentWays.dataAreaId}.
   * @param paymentWay Key property. See {@link ElectronicPaymentWays.paymentWay}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentWays` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentWay: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentWays<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicPaymentWays<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentWay: paymentWay
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentWays`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentWays`.
   */
  update(
    entity: ElectronicPaymentWays<T>
  ): UpdateRequestBuilder<ElectronicPaymentWays<T>, T> {
    return new UpdateRequestBuilder<ElectronicPaymentWays<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentWays`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentWays.dataAreaId}.
   * @param paymentWay Key property. See {@link ElectronicPaymentWays.paymentWay}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentWays`.
   */
  delete(
    dataAreaId: string,
    paymentWay: string
  ): DeleteRequestBuilder<ElectronicPaymentWays<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentWays`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentWays` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentWays<T>
  ): DeleteRequestBuilder<ElectronicPaymentWays<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentWay?: string
  ): DeleteRequestBuilder<ElectronicPaymentWays<T>, T> {
    return new DeleteRequestBuilder<ElectronicPaymentWays<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentWays
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentWay: paymentWay!
          }
    );
  }
}
