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
import { DocumentTaxTables } from './DocumentTaxTables';

/**
 * Request builder class for operations supported on the {@link DocumentTaxTables} entity.
 */
export class DocumentTaxTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentTaxTables<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentTaxTables` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentTaxTables` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentTaxTables<T>, T> {
    return new GetAllRequestBuilder<DocumentTaxTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DocumentTaxTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentTaxTables`.
   */
  create(
    entity: DocumentTaxTables<T>
  ): CreateRequestBuilder<DocumentTaxTables<T>, T> {
    return new CreateRequestBuilder<DocumentTaxTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentTaxTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentTaxTables.dataAreaId}.
   * @param taxCode Key property. See {@link DocumentTaxTables.taxCode}.
   * @returns A request builder for creating requests to retrieve one `DocumentTaxTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentTaxTables<T>, T> {
    return new GetByKeyRequestBuilder<DocumentTaxTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxCode: taxCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentTaxTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentTaxTables`.
   */
  update(
    entity: DocumentTaxTables<T>
  ): UpdateRequestBuilder<DocumentTaxTables<T>, T> {
    return new UpdateRequestBuilder<DocumentTaxTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentTaxTables`.
   * @param dataAreaId Key property. See {@link DocumentTaxTables.dataAreaId}.
   * @param taxCode Key property. See {@link DocumentTaxTables.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentTaxTables`.
   */
  delete(
    dataAreaId: string,
    taxCode: string
  ): DeleteRequestBuilder<DocumentTaxTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentTaxTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentTaxTables` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentTaxTables<T>
  ): DeleteRequestBuilder<DocumentTaxTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxCode?: string
  ): DeleteRequestBuilder<DocumentTaxTables<T>, T> {
    return new DeleteRequestBuilder<DocumentTaxTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentTaxTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxCode: taxCode!
          }
    );
  }
}
