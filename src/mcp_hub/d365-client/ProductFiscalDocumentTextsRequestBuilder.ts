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
import { ProductFiscalDocumentTexts } from './ProductFiscalDocumentTexts';

/**
 * Request builder class for operations supported on the {@link ProductFiscalDocumentTexts} entity.
 */
export class ProductFiscalDocumentTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductFiscalDocumentTexts<T>, T> {
  /**
   * Returns a request builder for querying all `ProductFiscalDocumentTexts` entities.
   * @returns A request builder for creating requests to retrieve all `ProductFiscalDocumentTexts` entities.
   */
  getAll(): GetAllRequestBuilder<ProductFiscalDocumentTexts<T>, T> {
    return new GetAllRequestBuilder<ProductFiscalDocumentTexts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductFiscalDocumentTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductFiscalDocumentTexts`.
   */
  create(
    entity: ProductFiscalDocumentTexts<T>
  ): CreateRequestBuilder<ProductFiscalDocumentTexts<T>, T> {
    return new CreateRequestBuilder<ProductFiscalDocumentTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductFiscalDocumentTexts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductFiscalDocumentTexts.dataAreaId}.
   * @param item Key property. See {@link ProductFiscalDocumentTexts.item}.
   * @param fiscalDocumentText Key property. See {@link ProductFiscalDocumentTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests to retrieve one `ProductFiscalDocumentTexts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    item: DeserializedType<T, 'Edm.String'>,
    fiscalDocumentText: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductFiscalDocumentTexts<T>, T> {
    return new GetByKeyRequestBuilder<ProductFiscalDocumentTexts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Item: item,
        FiscalDocumentText: fiscalDocumentText
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductFiscalDocumentTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductFiscalDocumentTexts`.
   */
  update(
    entity: ProductFiscalDocumentTexts<T>
  ): UpdateRequestBuilder<ProductFiscalDocumentTexts<T>, T> {
    return new UpdateRequestBuilder<ProductFiscalDocumentTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductFiscalDocumentTexts`.
   * @param dataAreaId Key property. See {@link ProductFiscalDocumentTexts.dataAreaId}.
   * @param item Key property. See {@link ProductFiscalDocumentTexts.item}.
   * @param fiscalDocumentText Key property. See {@link ProductFiscalDocumentTexts.fiscalDocumentText}.
   * @returns A request builder for creating requests that delete an entity of type `ProductFiscalDocumentTexts`.
   */
  delete(
    dataAreaId: string,
    item: string,
    fiscalDocumentText: string
  ): DeleteRequestBuilder<ProductFiscalDocumentTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductFiscalDocumentTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductFiscalDocumentTexts` by taking the entity as a parameter.
   */
  delete(
    entity: ProductFiscalDocumentTexts<T>
  ): DeleteRequestBuilder<ProductFiscalDocumentTexts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    item?: string,
    fiscalDocumentText?: string
  ): DeleteRequestBuilder<ProductFiscalDocumentTexts<T>, T> {
    return new DeleteRequestBuilder<ProductFiscalDocumentTexts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductFiscalDocumentTexts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Item: item!,
            FiscalDocumentText: fiscalDocumentText!
          }
    );
  }
}
