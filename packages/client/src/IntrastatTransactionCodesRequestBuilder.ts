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
import { IntrastatTransactionCodes } from './IntrastatTransactionCodes';

/**
 * Request builder class for operations supported on the {@link IntrastatTransactionCodes} entity.
 */
export class IntrastatTransactionCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatTransactionCodes<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatTransactionCodes` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatTransactionCodes` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatTransactionCodes<T>, T> {
    return new GetAllRequestBuilder<IntrastatTransactionCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatTransactionCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatTransactionCodes`.
   */
  create(
    entity: IntrastatTransactionCodes<T>
  ): CreateRequestBuilder<IntrastatTransactionCodes<T>, T> {
    return new CreateRequestBuilder<IntrastatTransactionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatTransactionCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatTransactionCodes.dataAreaId}.
   * @param transactionCode Key property. See {@link IntrastatTransactionCodes.transactionCode}.
   * @returns A request builder for creating requests to retrieve one `IntrastatTransactionCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatTransactionCodes<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatTransactionCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionCode: transactionCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatTransactionCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatTransactionCodes`.
   */
  update(
    entity: IntrastatTransactionCodes<T>
  ): UpdateRequestBuilder<IntrastatTransactionCodes<T>, T> {
    return new UpdateRequestBuilder<IntrastatTransactionCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatTransactionCodes`.
   * @param dataAreaId Key property. See {@link IntrastatTransactionCodes.dataAreaId}.
   * @param transactionCode Key property. See {@link IntrastatTransactionCodes.transactionCode}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatTransactionCodes`.
   */
  delete(
    dataAreaId: string,
    transactionCode: string
  ): DeleteRequestBuilder<IntrastatTransactionCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatTransactionCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatTransactionCodes` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatTransactionCodes<T>
  ): DeleteRequestBuilder<IntrastatTransactionCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionCode?: string
  ): DeleteRequestBuilder<IntrastatTransactionCodes<T>, T> {
    return new DeleteRequestBuilder<IntrastatTransactionCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatTransactionCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionCode: transactionCode!
          }
    );
  }
}
