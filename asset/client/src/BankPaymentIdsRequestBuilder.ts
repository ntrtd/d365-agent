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
import { BankPaymentIds } from './BankPaymentIds';

/**
 * Request builder class for operations supported on the {@link BankPaymentIds} entity.
 */
export class BankPaymentIdsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankPaymentIds<T>, T> {
  /**
   * Returns a request builder for querying all `BankPaymentIds` entities.
   * @returns A request builder for creating requests to retrieve all `BankPaymentIds` entities.
   */
  getAll(): GetAllRequestBuilder<BankPaymentIds<T>, T> {
    return new GetAllRequestBuilder<BankPaymentIds<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankPaymentIds` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankPaymentIds`.
   */
  create(
    entity: BankPaymentIds<T>
  ): CreateRequestBuilder<BankPaymentIds<T>, T> {
    return new CreateRequestBuilder<BankPaymentIds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankPaymentIds` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankPaymentIds.dataAreaId}.
   * @param paymentIdType Key property. See {@link BankPaymentIds.paymentIdType}.
   * @returns A request builder for creating requests to retrieve one `BankPaymentIds` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentIdType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankPaymentIds<T>, T> {
    return new GetByKeyRequestBuilder<BankPaymentIds<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PaymentIDType: paymentIdType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankPaymentIds`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankPaymentIds`.
   */
  update(
    entity: BankPaymentIds<T>
  ): UpdateRequestBuilder<BankPaymentIds<T>, T> {
    return new UpdateRequestBuilder<BankPaymentIds<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankPaymentIds`.
   * @param dataAreaId Key property. See {@link BankPaymentIds.dataAreaId}.
   * @param paymentIdType Key property. See {@link BankPaymentIds.paymentIdType}.
   * @returns A request builder for creating requests that delete an entity of type `BankPaymentIds`.
   */
  delete(
    dataAreaId: string,
    paymentIdType: string
  ): DeleteRequestBuilder<BankPaymentIds<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankPaymentIds`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankPaymentIds` by taking the entity as a parameter.
   */
  delete(entity: BankPaymentIds<T>): DeleteRequestBuilder<BankPaymentIds<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentIdType?: string
  ): DeleteRequestBuilder<BankPaymentIds<T>, T> {
    return new DeleteRequestBuilder<BankPaymentIds<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankPaymentIds
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentIDType: paymentIdType!
          }
    );
  }
}
