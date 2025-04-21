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
import { DocumentEnabledTables } from './DocumentEnabledTables';

/**
 * Request builder class for operations supported on the {@link DocumentEnabledTables} entity.
 */
export class DocumentEnabledTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DocumentEnabledTables<T>, T> {
  /**
   * Returns a request builder for querying all `DocumentEnabledTables` entities.
   * @returns A request builder for creating requests to retrieve all `DocumentEnabledTables` entities.
   */
  getAll(): GetAllRequestBuilder<DocumentEnabledTables<T>, T> {
    return new GetAllRequestBuilder<DocumentEnabledTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DocumentEnabledTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DocumentEnabledTables`.
   */
  create(
    entity: DocumentEnabledTables<T>
  ): CreateRequestBuilder<DocumentEnabledTables<T>, T> {
    return new CreateRequestBuilder<DocumentEnabledTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DocumentEnabledTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link DocumentEnabledTables.dataAreaId}.
   * @param tableName Key property. See {@link DocumentEnabledTables.tableName}.
   * @returns A request builder for creating requests to retrieve one `DocumentEnabledTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DocumentEnabledTables<T>, T> {
    return new GetByKeyRequestBuilder<DocumentEnabledTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TableName: tableName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DocumentEnabledTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DocumentEnabledTables`.
   */
  update(
    entity: DocumentEnabledTables<T>
  ): UpdateRequestBuilder<DocumentEnabledTables<T>, T> {
    return new UpdateRequestBuilder<DocumentEnabledTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DocumentEnabledTables`.
   * @param dataAreaId Key property. See {@link DocumentEnabledTables.dataAreaId}.
   * @param tableName Key property. See {@link DocumentEnabledTables.tableName}.
   * @returns A request builder for creating requests that delete an entity of type `DocumentEnabledTables`.
   */
  delete(
    dataAreaId: string,
    tableName: string
  ): DeleteRequestBuilder<DocumentEnabledTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DocumentEnabledTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DocumentEnabledTables` by taking the entity as a parameter.
   */
  delete(
    entity: DocumentEnabledTables<T>
  ): DeleteRequestBuilder<DocumentEnabledTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tableName?: string
  ): DeleteRequestBuilder<DocumentEnabledTables<T>, T> {
    return new DeleteRequestBuilder<DocumentEnabledTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DocumentEnabledTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TableName: tableName!
          }
    );
  }
}
