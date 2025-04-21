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
import { FiscalIntegrationDocumentProviderTables } from './FiscalIntegrationDocumentProviderTables';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationDocumentProviderTables} entity.
 */
export class FiscalIntegrationDocumentProviderTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationDocumentProviderTables<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationDocumentProviderTables` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationDocumentProviderTables` entities.
   */
  getAll(): GetAllRequestBuilder<
    FiscalIntegrationDocumentProviderTables<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FiscalIntegrationDocumentProviderTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationDocumentProviderTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationDocumentProviderTables`.
   */
  create(
    entity: FiscalIntegrationDocumentProviderTables<T>
  ): CreateRequestBuilder<FiscalIntegrationDocumentProviderTables<T>, T> {
    return new CreateRequestBuilder<
      FiscalIntegrationDocumentProviderTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationDocumentProviderTables` entity based on its keys.
   * @param documentProviderName Key property. See {@link FiscalIntegrationDocumentProviderTables.documentProviderName}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationDocumentProviderTables` entity based on its keys.
   */
  getByKey(
    documentProviderName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalIntegrationDocumentProviderTables<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationDocumentProviderTables<T>,
      T
    >(this.entityApi, { DocumentProviderName: documentProviderName });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationDocumentProviderTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationDocumentProviderTables`.
   */
  update(
    entity: FiscalIntegrationDocumentProviderTables<T>
  ): UpdateRequestBuilder<FiscalIntegrationDocumentProviderTables<T>, T> {
    return new UpdateRequestBuilder<
      FiscalIntegrationDocumentProviderTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationDocumentProviderTables`.
   * @param documentProviderName Key property. See {@link FiscalIntegrationDocumentProviderTables.documentProviderName}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationDocumentProviderTables`.
   */
  delete(
    documentProviderName: string
  ): DeleteRequestBuilder<FiscalIntegrationDocumentProviderTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationDocumentProviderTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationDocumentProviderTables` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationDocumentProviderTables<T>
  ): DeleteRequestBuilder<FiscalIntegrationDocumentProviderTables<T>, T>;
  delete(
    documentProviderNameOrEntity: any
  ): DeleteRequestBuilder<FiscalIntegrationDocumentProviderTables<T>, T> {
    return new DeleteRequestBuilder<
      FiscalIntegrationDocumentProviderTables<T>,
      T
    >(
      this.entityApi,
      documentProviderNameOrEntity instanceof
      FiscalIntegrationDocumentProviderTables
        ? documentProviderNameOrEntity
        : { DocumentProviderName: documentProviderNameOrEntity! }
    );
  }
}
