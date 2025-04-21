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
import { BudgetPlanColumnRules } from './BudgetPlanColumnRules';

/**
 * Request builder class for operations supported on the {@link BudgetPlanColumnRules} entity.
 */
export class BudgetPlanColumnRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanColumnRules<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanColumnRules` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanColumnRules` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanColumnRules<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanColumnRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetPlanColumnRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanColumnRules`.
   */
  create(
    entity: BudgetPlanColumnRules<T>
  ): CreateRequestBuilder<BudgetPlanColumnRules<T>, T> {
    return new CreateRequestBuilder<BudgetPlanColumnRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanColumnRules` entity based on its keys.
   * @param columnName Key property. See {@link BudgetPlanColumnRules.columnName}.
   * @param tableName Key property. See {@link BudgetPlanColumnRules.tableName}.
   * @param fieldName Key property. See {@link BudgetPlanColumnRules.fieldName}.
   * @param rightSideValueOne Key property. See {@link BudgetPlanColumnRules.rightSideValueOne}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanColumnRules` entity based on its keys.
   */
  getByKey(
    columnName: DeserializedType<T, 'Edm.String'>,
    tableName: DeserializedType<T, 'Edm.String'>,
    fieldName: DeserializedType<T, 'Edm.String'>,
    rightSideValueOne: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanColumnRules<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanColumnRules<T>, T>(
      this.entityApi,
      {
        ColumnName: columnName,
        TableName: tableName,
        FieldName: fieldName,
        RightSideValueOne: rightSideValueOne
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanColumnRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanColumnRules`.
   */
  update(
    entity: BudgetPlanColumnRules<T>
  ): UpdateRequestBuilder<BudgetPlanColumnRules<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanColumnRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanColumnRules`.
   * @param columnName Key property. See {@link BudgetPlanColumnRules.columnName}.
   * @param tableName Key property. See {@link BudgetPlanColumnRules.tableName}.
   * @param fieldName Key property. See {@link BudgetPlanColumnRules.fieldName}.
   * @param rightSideValueOne Key property. See {@link BudgetPlanColumnRules.rightSideValueOne}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanColumnRules`.
   */
  delete(
    columnName: string,
    tableName: string,
    fieldName: string,
    rightSideValueOne: string
  ): DeleteRequestBuilder<BudgetPlanColumnRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanColumnRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanColumnRules` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanColumnRules<T>
  ): DeleteRequestBuilder<BudgetPlanColumnRules<T>, T>;
  delete(
    columnNameOrEntity: any,
    tableName?: string,
    fieldName?: string,
    rightSideValueOne?: string
  ): DeleteRequestBuilder<BudgetPlanColumnRules<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanColumnRules<T>, T>(
      this.entityApi,
      columnNameOrEntity instanceof BudgetPlanColumnRules
        ? columnNameOrEntity
        : {
            ColumnName: columnNameOrEntity!,
            TableName: tableName!,
            FieldName: fieldName!,
            RightSideValueOne: rightSideValueOne!
          }
    );
  }
}
