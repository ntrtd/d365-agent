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
import { SpanishVatBooks } from './SpanishVatBooks';

/**
 * Request builder class for operations supported on the {@link SpanishVatBooks} entity.
 */
export class SpanishVatBooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SpanishVatBooks<T>, T> {
  /**
   * Returns a request builder for querying all `SpanishVatBooks` entities.
   * @returns A request builder for creating requests to retrieve all `SpanishVatBooks` entities.
   */
  getAll(): GetAllRequestBuilder<SpanishVatBooks<T>, T> {
    return new GetAllRequestBuilder<SpanishVatBooks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SpanishVatBooks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpanishVatBooks`.
   */
  create(
    entity: SpanishVatBooks<T>
  ): CreateRequestBuilder<SpanishVatBooks<T>, T> {
    return new CreateRequestBuilder<SpanishVatBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SpanishVatBooks` entity based on its keys.
   * @param dataAreaId Key property. See {@link SpanishVatBooks.dataAreaId}.
   * @param vatBook Key property. See {@link SpanishVatBooks.vatBook}.
   * @param salesTaxCode Key property. See {@link SpanishVatBooks.salesTaxCode}.
   * @param equivalenceChargeSalesTaxCode Key property. See {@link SpanishVatBooks.equivalenceChargeSalesTaxCode}.
   * @returns A request builder for creating requests to retrieve one `SpanishVatBooks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vatBook: DeserializedType<T, 'Edm.String'>,
    salesTaxCode: DeserializedType<T, 'Edm.String'>,
    equivalenceChargeSalesTaxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SpanishVatBooks<T>, T> {
    return new GetByKeyRequestBuilder<SpanishVatBooks<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      VATBook: vatBook,
      SalesTaxCode: salesTaxCode,
      EquivalenceChargeSalesTaxCode: equivalenceChargeSalesTaxCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SpanishVatBooks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpanishVatBooks`.
   */
  update(
    entity: SpanishVatBooks<T>
  ): UpdateRequestBuilder<SpanishVatBooks<T>, T> {
    return new UpdateRequestBuilder<SpanishVatBooks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SpanishVatBooks`.
   * @param dataAreaId Key property. See {@link SpanishVatBooks.dataAreaId}.
   * @param vatBook Key property. See {@link SpanishVatBooks.vatBook}.
   * @param salesTaxCode Key property. See {@link SpanishVatBooks.salesTaxCode}.
   * @param equivalenceChargeSalesTaxCode Key property. See {@link SpanishVatBooks.equivalenceChargeSalesTaxCode}.
   * @returns A request builder for creating requests that delete an entity of type `SpanishVatBooks`.
   */
  delete(
    dataAreaId: string,
    vatBook: string,
    salesTaxCode: string,
    equivalenceChargeSalesTaxCode: string
  ): DeleteRequestBuilder<SpanishVatBooks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SpanishVatBooks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpanishVatBooks` by taking the entity as a parameter.
   */
  delete(
    entity: SpanishVatBooks<T>
  ): DeleteRequestBuilder<SpanishVatBooks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vatBook?: string,
    salesTaxCode?: string,
    equivalenceChargeSalesTaxCode?: string
  ): DeleteRequestBuilder<SpanishVatBooks<T>, T> {
    return new DeleteRequestBuilder<SpanishVatBooks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SpanishVatBooks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VATBook: vatBook!,
            SalesTaxCode: salesTaxCode!,
            EquivalenceChargeSalesTaxCode: equivalenceChargeSalesTaxCode!
          }
    );
  }
}
