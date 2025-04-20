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
import { EInvoicePropertiesV2 } from './EInvoicePropertiesV2';

/**
 * Request builder class for operations supported on the {@link EInvoicePropertiesV2} entity.
 */
export class EInvoicePropertiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EInvoicePropertiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `EInvoicePropertiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `EInvoicePropertiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<EInvoicePropertiesV2<T>, T> {
    return new GetAllRequestBuilder<EInvoicePropertiesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EInvoicePropertiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EInvoicePropertiesV2`.
   */
  create(
    entity: EInvoicePropertiesV2<T>
  ): CreateRequestBuilder<EInvoicePropertiesV2<T>, T> {
    return new CreateRequestBuilder<EInvoicePropertiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EInvoicePropertiesV2` entity based on its keys.
   * @param tableName Key property. See {@link EInvoicePropertiesV2.tableName}.
   * @param tableFieldName Key property. See {@link EInvoicePropertiesV2.tableFieldName}.
   * @param tableFieldValue Key property. See {@link EInvoicePropertiesV2.tableFieldValue}.
   * @param type Key property. See {@link EInvoicePropertiesV2.type}.
   * @param tableDataAreaId Key property. See {@link EInvoicePropertiesV2.tableDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `EInvoicePropertiesV2` entity based on its keys.
   */
  getByKey(
    tableName: DeserializedType<T, 'Edm.String'>,
    tableFieldName: DeserializedType<T, 'Edm.String'>,
    tableFieldValue: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>,
    tableDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EInvoicePropertiesV2<T>, T> {
    return new GetByKeyRequestBuilder<EInvoicePropertiesV2<T>, T>(
      this.entityApi,
      {
        TableName: tableName,
        TableFieldName: tableFieldName,
        TableFieldValue: tableFieldValue,
        Type: type,
        TableDataAreaId: tableDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EInvoicePropertiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EInvoicePropertiesV2`.
   */
  update(
    entity: EInvoicePropertiesV2<T>
  ): UpdateRequestBuilder<EInvoicePropertiesV2<T>, T> {
    return new UpdateRequestBuilder<EInvoicePropertiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EInvoicePropertiesV2`.
   * @param tableName Key property. See {@link EInvoicePropertiesV2.tableName}.
   * @param tableFieldName Key property. See {@link EInvoicePropertiesV2.tableFieldName}.
   * @param tableFieldValue Key property. See {@link EInvoicePropertiesV2.tableFieldValue}.
   * @param type Key property. See {@link EInvoicePropertiesV2.type}.
   * @param tableDataAreaId Key property. See {@link EInvoicePropertiesV2.tableDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `EInvoicePropertiesV2`.
   */
  delete(
    tableName: string,
    tableFieldName: string,
    tableFieldValue: string,
    type: string,
    tableDataAreaId: string
  ): DeleteRequestBuilder<EInvoicePropertiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EInvoicePropertiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EInvoicePropertiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: EInvoicePropertiesV2<T>
  ): DeleteRequestBuilder<EInvoicePropertiesV2<T>, T>;
  delete(
    tableNameOrEntity: any,
    tableFieldName?: string,
    tableFieldValue?: string,
    type?: string,
    tableDataAreaId?: string
  ): DeleteRequestBuilder<EInvoicePropertiesV2<T>, T> {
    return new DeleteRequestBuilder<EInvoicePropertiesV2<T>, T>(
      this.entityApi,
      tableNameOrEntity instanceof EInvoicePropertiesV2
        ? tableNameOrEntity
        : {
            TableName: tableNameOrEntity!,
            TableFieldName: tableFieldName!,
            TableFieldValue: tableFieldValue!,
            Type: type!,
            TableDataAreaId: tableDataAreaId!
          }
    );
  }
}
