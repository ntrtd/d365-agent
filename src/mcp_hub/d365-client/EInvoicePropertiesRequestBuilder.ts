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
import { EInvoiceProperties } from './EInvoiceProperties';

/**
 * Request builder class for operations supported on the {@link EInvoiceProperties} entity.
 */
export class EInvoicePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EInvoiceProperties<T>, T> {
  /**
   * Returns a request builder for querying all `EInvoiceProperties` entities.
   * @returns A request builder for creating requests to retrieve all `EInvoiceProperties` entities.
   */
  getAll(): GetAllRequestBuilder<EInvoiceProperties<T>, T> {
    return new GetAllRequestBuilder<EInvoiceProperties<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EInvoiceProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EInvoiceProperties`.
   */
  create(
    entity: EInvoiceProperties<T>
  ): CreateRequestBuilder<EInvoiceProperties<T>, T> {
    return new CreateRequestBuilder<EInvoiceProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EInvoiceProperties` entity based on its keys.
   * @param tableName Key property. See {@link EInvoiceProperties.tableName}.
   * @param tableFieldName Key property. See {@link EInvoiceProperties.tableFieldName}.
   * @param tableFieldValue Key property. See {@link EInvoiceProperties.tableFieldValue}.
   * @param type Key property. See {@link EInvoiceProperties.type}.
   * @returns A request builder for creating requests to retrieve one `EInvoiceProperties` entity based on its keys.
   */
  getByKey(
    tableName: DeserializedType<T, 'Edm.String'>,
    tableFieldName: DeserializedType<T, 'Edm.String'>,
    tableFieldValue: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EInvoiceProperties<T>, T> {
    return new GetByKeyRequestBuilder<EInvoiceProperties<T>, T>(
      this.entityApi,
      {
        TableName: tableName,
        TableFieldName: tableFieldName,
        TableFieldValue: tableFieldValue,
        Type: type
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EInvoiceProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EInvoiceProperties`.
   */
  update(
    entity: EInvoiceProperties<T>
  ): UpdateRequestBuilder<EInvoiceProperties<T>, T> {
    return new UpdateRequestBuilder<EInvoiceProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EInvoiceProperties`.
   * @param tableName Key property. See {@link EInvoiceProperties.tableName}.
   * @param tableFieldName Key property. See {@link EInvoiceProperties.tableFieldName}.
   * @param tableFieldValue Key property. See {@link EInvoiceProperties.tableFieldValue}.
   * @param type Key property. See {@link EInvoiceProperties.type}.
   * @returns A request builder for creating requests that delete an entity of type `EInvoiceProperties`.
   */
  delete(
    tableName: string,
    tableFieldName: string,
    tableFieldValue: string,
    type: string
  ): DeleteRequestBuilder<EInvoiceProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EInvoiceProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EInvoiceProperties` by taking the entity as a parameter.
   */
  delete(
    entity: EInvoiceProperties<T>
  ): DeleteRequestBuilder<EInvoiceProperties<T>, T>;
  delete(
    tableNameOrEntity: any,
    tableFieldName?: string,
    tableFieldValue?: string,
    type?: string
  ): DeleteRequestBuilder<EInvoiceProperties<T>, T> {
    return new DeleteRequestBuilder<EInvoiceProperties<T>, T>(
      this.entityApi,
      tableNameOrEntity instanceof EInvoiceProperties
        ? tableNameOrEntity
        : {
            TableName: tableNameOrEntity!,
            TableFieldName: tableFieldName!,
            TableFieldValue: tableFieldValue!,
            Type: type!
          }
    );
  }
}
