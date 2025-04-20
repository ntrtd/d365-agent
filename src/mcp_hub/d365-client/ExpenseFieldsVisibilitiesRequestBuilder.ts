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
import { ExpenseFieldsVisibilities } from './ExpenseFieldsVisibilities';

/**
 * Request builder class for operations supported on the {@link ExpenseFieldsVisibilities} entity.
 */
export class ExpenseFieldsVisibilitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpenseFieldsVisibilities<T>, T> {
  /**
   * Returns a request builder for querying all `ExpenseFieldsVisibilities` entities.
   * @returns A request builder for creating requests to retrieve all `ExpenseFieldsVisibilities` entities.
   */
  getAll(): GetAllRequestBuilder<ExpenseFieldsVisibilities<T>, T> {
    return new GetAllRequestBuilder<ExpenseFieldsVisibilities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpenseFieldsVisibilities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpenseFieldsVisibilities`.
   */
  create(
    entity: ExpenseFieldsVisibilities<T>
  ): CreateRequestBuilder<ExpenseFieldsVisibilities<T>, T> {
    return new CreateRequestBuilder<ExpenseFieldsVisibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpenseFieldsVisibilities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpenseFieldsVisibilities.dataAreaId}.
   * @param legalEntityId Key property. See {@link ExpenseFieldsVisibilities.legalEntityId}.
   * @param tableName Key property. See {@link ExpenseFieldsVisibilities.tableName}.
   * @param fieldName Key property. See {@link ExpenseFieldsVisibilities.fieldName}.
   * @returns A request builder for creating requests to retrieve one `ExpenseFieldsVisibilities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpenseFieldsVisibilities<T>, T> {
    return new GetByKeyRequestBuilder<ExpenseFieldsVisibilities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        TableName: tableName,
        FieldName: fieldName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpenseFieldsVisibilities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpenseFieldsVisibilities`.
   */
  update(
    entity: ExpenseFieldsVisibilities<T>
  ): UpdateRequestBuilder<ExpenseFieldsVisibilities<T>, T> {
    return new UpdateRequestBuilder<ExpenseFieldsVisibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpenseFieldsVisibilities`.
   * @param dataAreaId Key property. See {@link ExpenseFieldsVisibilities.dataAreaId}.
   * @param legalEntityId Key property. See {@link ExpenseFieldsVisibilities.legalEntityId}.
   * @param tableName Key property. See {@link ExpenseFieldsVisibilities.tableName}.
   * @param fieldName Key property. See {@link ExpenseFieldsVisibilities.fieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseFieldsVisibilities`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    tableName: string,
    fieldName: string
  ): DeleteRequestBuilder<ExpenseFieldsVisibilities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpenseFieldsVisibilities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpenseFieldsVisibilities` by taking the entity as a parameter.
   */
  delete(
    entity: ExpenseFieldsVisibilities<T>
  ): DeleteRequestBuilder<ExpenseFieldsVisibilities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    tableName?: string,
    fieldName?: string
  ): DeleteRequestBuilder<ExpenseFieldsVisibilities<T>, T> {
    return new DeleteRequestBuilder<ExpenseFieldsVisibilities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpenseFieldsVisibilities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            TableName: tableName!,
            FieldName: fieldName!
          }
    );
  }
}
