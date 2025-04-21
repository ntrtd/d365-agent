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
import { PaymTransCodes } from './PaymTransCodes';

/**
 * Request builder class for operations supported on the {@link PaymTransCodes} entity.
 */
export class PaymTransCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PaymTransCodes<T>, T> {
  /**
   * Returns a request builder for querying all `PaymTransCodes` entities.
   * @returns A request builder for creating requests to retrieve all `PaymTransCodes` entities.
   */
  getAll(): GetAllRequestBuilder<PaymTransCodes<T>, T> {
    return new GetAllRequestBuilder<PaymTransCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PaymTransCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PaymTransCodes`.
   */
  create(
    entity: PaymTransCodes<T>
  ): CreateRequestBuilder<PaymTransCodes<T>, T> {
    return new CreateRequestBuilder<PaymTransCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PaymTransCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link PaymTransCodes.dataAreaId}.
   * @param paymentTransactionCode Key property. See {@link PaymTransCodes.paymentTransactionCode}.
   * @returns A request builder for creating requests to retrieve one `PaymTransCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentTransactionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PaymTransCodes<T>, T> {
    return new GetByKeyRequestBuilder<PaymTransCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PaymentTransactionCode: paymentTransactionCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PaymTransCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PaymTransCodes`.
   */
  update(
    entity: PaymTransCodes<T>
  ): UpdateRequestBuilder<PaymTransCodes<T>, T> {
    return new UpdateRequestBuilder<PaymTransCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PaymTransCodes`.
   * @param dataAreaId Key property. See {@link PaymTransCodes.dataAreaId}.
   * @param paymentTransactionCode Key property. See {@link PaymTransCodes.paymentTransactionCode}.
   * @returns A request builder for creating requests that delete an entity of type `PaymTransCodes`.
   */
  delete(
    dataAreaId: string,
    paymentTransactionCode: string
  ): DeleteRequestBuilder<PaymTransCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PaymTransCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PaymTransCodes` by taking the entity as a parameter.
   */
  delete(entity: PaymTransCodes<T>): DeleteRequestBuilder<PaymTransCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentTransactionCode?: string
  ): DeleteRequestBuilder<PaymTransCodes<T>, T> {
    return new DeleteRequestBuilder<PaymTransCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PaymTransCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentTransactionCode: paymentTransactionCode!
          }
    );
  }
}
