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
import { CodaTransCategories } from './CodaTransCategories';

/**
 * Request builder class for operations supported on the {@link CodaTransCategories} entity.
 */
export class CodaTransCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CodaTransCategories<T>, T> {
  /**
   * Returns a request builder for querying all `CodaTransCategories` entities.
   * @returns A request builder for creating requests to retrieve all `CodaTransCategories` entities.
   */
  getAll(): GetAllRequestBuilder<CodaTransCategories<T>, T> {
    return new GetAllRequestBuilder<CodaTransCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CodaTransCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CodaTransCategories`.
   */
  create(
    entity: CodaTransCategories<T>
  ): CreateRequestBuilder<CodaTransCategories<T>, T> {
    return new CreateRequestBuilder<CodaTransCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CodaTransCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link CodaTransCategories.dataAreaId}.
   * @param transactionFamily Key property. See {@link CodaTransCategories.transactionFamily}.
   * @param transaction Key property. See {@link CodaTransCategories.transaction}.
   * @param transactionCategory Key property. See {@link CodaTransCategories.transactionCategory}.
   * @returns A request builder for creating requests to retrieve one `CodaTransCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionFamily: DeserializedType<T, 'Edm.String'>,
    transaction: DeserializedType<T, 'Edm.String'>,
    transactionCategory: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CodaTransCategories<T>, T> {
    return new GetByKeyRequestBuilder<CodaTransCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionFamily: transactionFamily,
        Transaction: transaction,
        TransactionCategory: transactionCategory
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CodaTransCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CodaTransCategories`.
   */
  update(
    entity: CodaTransCategories<T>
  ): UpdateRequestBuilder<CodaTransCategories<T>, T> {
    return new UpdateRequestBuilder<CodaTransCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CodaTransCategories`.
   * @param dataAreaId Key property. See {@link CodaTransCategories.dataAreaId}.
   * @param transactionFamily Key property. See {@link CodaTransCategories.transactionFamily}.
   * @param transaction Key property. See {@link CodaTransCategories.transaction}.
   * @param transactionCategory Key property. See {@link CodaTransCategories.transactionCategory}.
   * @returns A request builder for creating requests that delete an entity of type `CodaTransCategories`.
   */
  delete(
    dataAreaId: string,
    transactionFamily: string,
    transaction: string,
    transactionCategory: string
  ): DeleteRequestBuilder<CodaTransCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CodaTransCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CodaTransCategories` by taking the entity as a parameter.
   */
  delete(
    entity: CodaTransCategories<T>
  ): DeleteRequestBuilder<CodaTransCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionFamily?: string,
    transaction?: string,
    transactionCategory?: string
  ): DeleteRequestBuilder<CodaTransCategories<T>, T> {
    return new DeleteRequestBuilder<CodaTransCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CodaTransCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionFamily: transactionFamily!,
            Transaction: transaction!,
            TransactionCategory: transactionCategory!
          }
    );
  }
}
