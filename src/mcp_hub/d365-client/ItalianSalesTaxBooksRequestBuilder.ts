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
import { ItalianSalesTaxBooks } from './ItalianSalesTaxBooks';

/**
 * Request builder class for operations supported on the {@link ItalianSalesTaxBooks} entity.
 */
export class ItalianSalesTaxBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItalianSalesTaxBooks<T>, T> {
  /**
   * Returns a request builder for querying all `ItalianSalesTaxBooks` entities.
   * @returns A request builder for creating requests to retrieve all `ItalianSalesTaxBooks` entities.
   */
  getAll(): GetAllRequestBuilder<ItalianSalesTaxBooks<T>, T> {
    return new GetAllRequestBuilder<ItalianSalesTaxBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItalianSalesTaxBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItalianSalesTaxBooks`.
   */
  create(
    entity: ItalianSalesTaxBooks<T>
  ): CreateRequestBuilder<ItalianSalesTaxBooks<T>, T> {
    return new CreateRequestBuilder<ItalianSalesTaxBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItalianSalesTaxBooks` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItalianSalesTaxBooks.dataAreaId}.
   * @param salesTaxBook Key property. See {@link ItalianSalesTaxBooks.salesTaxBook}.
   * @returns A request builder for creating requests to retrieve one `ItalianSalesTaxBooks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesTaxBook: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItalianSalesTaxBooks<T>, T> {
    return new GetByKeyRequestBuilder<ItalianSalesTaxBooks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesTaxBook: salesTaxBook
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItalianSalesTaxBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItalianSalesTaxBooks`.
   */
  update(
    entity: ItalianSalesTaxBooks<T>
  ): UpdateRequestBuilder<ItalianSalesTaxBooks<T>, T> {
    return new UpdateRequestBuilder<ItalianSalesTaxBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItalianSalesTaxBooks`.
   * @param dataAreaId Key property. See {@link ItalianSalesTaxBooks.dataAreaId}.
   * @param salesTaxBook Key property. See {@link ItalianSalesTaxBooks.salesTaxBook}.
   * @returns A request builder for creating requests that delete an entity of type `ItalianSalesTaxBooks`.
   */
  delete(
    dataAreaId: string,
    salesTaxBook: string
  ): DeleteRequestBuilder<ItalianSalesTaxBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItalianSalesTaxBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItalianSalesTaxBooks` by taking the entity as a parameter.
   */
  delete(
    entity: ItalianSalesTaxBooks<T>
  ): DeleteRequestBuilder<ItalianSalesTaxBooks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesTaxBook?: string
  ): DeleteRequestBuilder<ItalianSalesTaxBooks<T>, T> {
    return new DeleteRequestBuilder<ItalianSalesTaxBooks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItalianSalesTaxBooks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesTaxBook: salesTaxBook!
          }
    );
  }
}
