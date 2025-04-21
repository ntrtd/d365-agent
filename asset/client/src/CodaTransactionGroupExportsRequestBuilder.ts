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
import { CodaTransactionGroupExports } from './CodaTransactionGroupExports';

/**
 * Request builder class for operations supported on the {@link CodaTransactionGroupExports} entity.
 */
export class CodaTransactionGroupExportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaTransactionGroupExports<T>, T> {
  /**
   * Returns a request builder for querying all `CodaTransactionGroupExports` entities.
   * @returns A request builder for creating requests to retrieve all `CodaTransactionGroupExports` entities.
   */
  getAll(): GetAllRequestBuilder<CodaTransactionGroupExports<T>, T> {
    return new GetAllRequestBuilder<CodaTransactionGroupExports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CodaTransactionGroupExports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaTransactionGroupExports`.
   */
  create(
    entity: CodaTransactionGroupExports<T>
  ): CreateRequestBuilder<CodaTransactionGroupExports<T>, T> {
    return new CreateRequestBuilder<CodaTransactionGroupExports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CodaTransactionGroupExports` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaTransactionGroupExports.dataAreaId}.
   * @param transactionGroup Key property. See {@link CodaTransactionGroupExports.transactionGroup}.
   * @returns A request builder for creating requests to retrieve one `CodaTransactionGroupExports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CodaTransactionGroupExports<T>, T> {
    return new GetByKeyRequestBuilder<CodaTransactionGroupExports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionGroup: transactionGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CodaTransactionGroupExports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaTransactionGroupExports`.
   */
  update(
    entity: CodaTransactionGroupExports<T>
  ): UpdateRequestBuilder<CodaTransactionGroupExports<T>, T> {
    return new UpdateRequestBuilder<CodaTransactionGroupExports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaTransactionGroupExports`.
   * @param dataAreaId Key property. See {@link CodaTransactionGroupExports.dataAreaId}.
   * @param transactionGroup Key property. See {@link CodaTransactionGroupExports.transactionGroup}.
   * @returns A request builder for creating requests that delete an entity of type `CodaTransactionGroupExports`.
   */
  delete(
    dataAreaId: string,
    transactionGroup: string
  ): DeleteRequestBuilder<CodaTransactionGroupExports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaTransactionGroupExports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaTransactionGroupExports` by taking the entity as a parameter.
   */
  delete(
    entity: CodaTransactionGroupExports<T>
  ): DeleteRequestBuilder<CodaTransactionGroupExports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionGroup?: string
  ): DeleteRequestBuilder<CodaTransactionGroupExports<T>, T> {
    return new DeleteRequestBuilder<CodaTransactionGroupExports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaTransactionGroupExports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionGroup: transactionGroup!
          }
    );
  }
}
