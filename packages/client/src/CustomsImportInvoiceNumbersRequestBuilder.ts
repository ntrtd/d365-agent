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
import { CustomsImportInvoiceNumbers } from './CustomsImportInvoiceNumbers';

/**
 * Request builder class for operations supported on the {@link CustomsImportInvoiceNumbers} entity.
 */
export class CustomsImportInvoiceNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomsImportInvoiceNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `CustomsImportInvoiceNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsImportInvoiceNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsImportInvoiceNumbers<T>, T> {
    return new GetAllRequestBuilder<CustomsImportInvoiceNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomsImportInvoiceNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsImportInvoiceNumbers`.
   */
  create(
    entity: CustomsImportInvoiceNumbers<T>
  ): CreateRequestBuilder<CustomsImportInvoiceNumbers<T>, T> {
    return new CreateRequestBuilder<CustomsImportInvoiceNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomsImportInvoiceNumbers` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomsImportInvoiceNumbers.dataAreaId}.
   * @param importerInvoiceNumber Key property. See {@link CustomsImportInvoiceNumbers.importerInvoiceNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomsImportInvoiceNumbers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    importerInvoiceNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomsImportInvoiceNumbers<T>, T> {
    return new GetByKeyRequestBuilder<CustomsImportInvoiceNumbers<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ImporterInvoiceNumber: importerInvoiceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsImportInvoiceNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsImportInvoiceNumbers`.
   */
  update(
    entity: CustomsImportInvoiceNumbers<T>
  ): UpdateRequestBuilder<CustomsImportInvoiceNumbers<T>, T> {
    return new UpdateRequestBuilder<CustomsImportInvoiceNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsImportInvoiceNumbers`.
   * @param dataAreaId Key property. See {@link CustomsImportInvoiceNumbers.dataAreaId}.
   * @param importerInvoiceNumber Key property. See {@link CustomsImportInvoiceNumbers.importerInvoiceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomsImportInvoiceNumbers`.
   */
  delete(
    dataAreaId: string,
    importerInvoiceNumber: string
  ): DeleteRequestBuilder<CustomsImportInvoiceNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsImportInvoiceNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsImportInvoiceNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: CustomsImportInvoiceNumbers<T>
  ): DeleteRequestBuilder<CustomsImportInvoiceNumbers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    importerInvoiceNumber?: string
  ): DeleteRequestBuilder<CustomsImportInvoiceNumbers<T>, T> {
    return new DeleteRequestBuilder<CustomsImportInvoiceNumbers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomsImportInvoiceNumbers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ImporterInvoiceNumber: importerInvoiceNumber!
          }
    );
  }
}
