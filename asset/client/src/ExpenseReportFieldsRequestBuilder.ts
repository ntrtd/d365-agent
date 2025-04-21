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
import { ExpenseReportFields } from './ExpenseReportFields';

/**
 * Request builder class for operations supported on the {@link ExpenseReportFields} entity.
 */
export class ExpenseReportFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseReportFields<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseReportFields` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseReportFields` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseReportFields<T>, T> {
    return new GetAllRequestBuilder<ExpenseReportFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExpenseReportFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseReportFields`.
   */
  create(
    entity: ExpenseReportFields<T>
  ): CreateRequestBuilder<ExpenseReportFields<T>, T> {
    return new CreateRequestBuilder<ExpenseReportFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseReportFields` entity based on its keys.
   * @param legalEntityId Key property. See {@link ExpenseReportFields.legalEntityId}.
   * @param tableName Key property. See {@link ExpenseReportFields.tableName}.
   * @param fieldName Key property. See {@link ExpenseReportFields.fieldName}.
   * @param methodName Key property. See {@link ExpenseReportFields.methodName}.
   * @returns A request builder for creating requests to retrieve one `ExpenseReportFields` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>,
    methodName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseReportFields<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseReportFields<T>, T>(
      this.entityApi,
      {
        LegalEntityId: legalEntityId,
        TableName: tableName,
        FieldName: fieldName,
        MethodName: methodName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseReportFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseReportFields`.
   */
  update(
    entity: ExpenseReportFields<T>
  ): UpdateRequestBuilder<ExpenseReportFields<T>, T> {
    return new UpdateRequestBuilder<ExpenseReportFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseReportFields`.
   * @param legalEntityId Key property. See {@link ExpenseReportFields.legalEntityId}.
   * @param tableName Key property. See {@link ExpenseReportFields.tableName}.
   * @param fieldName Key property. See {@link ExpenseReportFields.fieldName}.
   * @param methodName Key property. See {@link ExpenseReportFields.methodName}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseReportFields`.
   */
  delete(
    legalEntityId: string,
    tableName: string,
    fieldName: string,
    methodName: string
  ): DeleteRequestBuilder<ExpenseReportFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseReportFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseReportFields` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseReportFields<T>
  ): DeleteRequestBuilder<ExpenseReportFields<T>, T>;
  delete(
    legalEntityIdOrEntity: any,
    tableName?: string,
    fieldName?: string,
    methodName?: string
  ): DeleteRequestBuilder<ExpenseReportFields<T>, T> {
    return new DeleteRequestBuilder<ExpenseReportFields<T>, T>(
      this.entityApi,
      legalEntityIdOrEntity instanceof ExpenseReportFields
        ? legalEntityIdOrEntity
        : {
            LegalEntityId: legalEntityIdOrEntity!,
            TableName: tableName!,
            FieldName: fieldName!,
            MethodName: methodName!
          }
    );
  }
}
