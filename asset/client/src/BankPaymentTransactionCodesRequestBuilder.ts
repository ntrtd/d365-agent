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
import { BankPaymentTransactionCodes } from './BankPaymentTransactionCodes';

/**
 * Request builder class for operations supported on the {@link BankPaymentTransactionCodes} entity.
 */
export class BankPaymentTransactionCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankPaymentTransactionCodes<T>, T> {
  /**
   * Returns a request builder for querying all `BankPaymentTransactionCodes` entities.
   * @returns A request builder for creating requests to retrieve all `BankPaymentTransactionCodes` entities.
   */
  getAll(): GetAllRequestBuilder<BankPaymentTransactionCodes<T>, T> {
    return new GetAllRequestBuilder<BankPaymentTransactionCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankPaymentTransactionCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankPaymentTransactionCodes`.
   */
  create(
    entity: BankPaymentTransactionCodes<T>
  ): CreateRequestBuilder<BankPaymentTransactionCodes<T>, T> {
    return new CreateRequestBuilder<BankPaymentTransactionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankPaymentTransactionCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankPaymentTransactionCodes.dataAreaId}.
   * @param code Key property. See {@link BankPaymentTransactionCodes.code}.
   * @returns A request builder for creating requests to retrieve one `BankPaymentTransactionCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankPaymentTransactionCodes<T>, T> {
    return new GetByKeyRequestBuilder<BankPaymentTransactionCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankPaymentTransactionCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankPaymentTransactionCodes`.
   */
  update(
    entity: BankPaymentTransactionCodes<T>
  ): UpdateRequestBuilder<BankPaymentTransactionCodes<T>, T> {
    return new UpdateRequestBuilder<BankPaymentTransactionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankPaymentTransactionCodes`.
   * @param dataAreaId Key property. See {@link BankPaymentTransactionCodes.dataAreaId}.
   * @param code Key property. See {@link BankPaymentTransactionCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `BankPaymentTransactionCodes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<BankPaymentTransactionCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankPaymentTransactionCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankPaymentTransactionCodes` by taking the entity as a parameter.
   */
  delete(
    entity: BankPaymentTransactionCodes<T>
  ): DeleteRequestBuilder<BankPaymentTransactionCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<BankPaymentTransactionCodes<T>, T> {
    return new DeleteRequestBuilder<BankPaymentTransactionCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankPaymentTransactionCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}
