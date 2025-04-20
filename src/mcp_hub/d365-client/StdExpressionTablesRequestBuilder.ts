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
import { StdExpressionTables } from './StdExpressionTables';
import { RTax25StdModuleType } from './RTax25StdModuleType';

/**
 * Request builder class for operations supported on the {@link StdExpressionTables} entity.
 */
export class StdExpressionTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StdExpressionTables<T>, T> {
  /**
   * Returns a request builder for querying all `StdExpressionTables` entities.
   * @returns A request builder for creating requests to retrieve all `StdExpressionTables` entities.
   */
  getAll(): GetAllRequestBuilder<StdExpressionTables<T>, T> {
    return new GetAllRequestBuilder<StdExpressionTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StdExpressionTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StdExpressionTables`.
   */
  create(
    entity: StdExpressionTables<T>
  ): CreateRequestBuilder<StdExpressionTables<T>, T> {
    return new CreateRequestBuilder<StdExpressionTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StdExpressionTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link StdExpressionTables.dataAreaId}.
   * @param sequence Key property. See {@link StdExpressionTables.sequence}.
   * @param expenseCode Key property. See {@link StdExpressionTables.expenseCode}.
   * @param moduleType Key property. See {@link StdExpressionTables.moduleType}.
   * @returns A request builder for creating requests to retrieve one `StdExpressionTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sequence: DeserializedType<T, 'Edm.Int32'>,
    expenseCode: DeserializedType<T, 'Edm.String'>,
    moduleType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RTax25StdModuleType'
    >
  ): GetByKeyRequestBuilder<StdExpressionTables<T>, T> {
    return new GetByKeyRequestBuilder<StdExpressionTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Sequence: sequence,
        ExpenseCode: expenseCode,
        ModuleType: moduleType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StdExpressionTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StdExpressionTables`.
   */
  update(
    entity: StdExpressionTables<T>
  ): UpdateRequestBuilder<StdExpressionTables<T>, T> {
    return new UpdateRequestBuilder<StdExpressionTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StdExpressionTables`.
   * @param dataAreaId Key property. See {@link StdExpressionTables.dataAreaId}.
   * @param sequence Key property. See {@link StdExpressionTables.sequence}.
   * @param expenseCode Key property. See {@link StdExpressionTables.expenseCode}.
   * @param moduleType Key property. See {@link StdExpressionTables.moduleType}.
   * @returns A request builder for creating requests that delete an entity of type `StdExpressionTables`.
   */
  delete(
    dataAreaId: string,
    sequence: number,
    expenseCode: string,
    moduleType: RTax25StdModuleType
  ): DeleteRequestBuilder<StdExpressionTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StdExpressionTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StdExpressionTables` by taking the entity as a parameter.
   */
  delete(
    entity: StdExpressionTables<T>
  ): DeleteRequestBuilder<StdExpressionTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sequence?: number,
    expenseCode?: string,
    moduleType?: RTax25StdModuleType
  ): DeleteRequestBuilder<StdExpressionTables<T>, T> {
    return new DeleteRequestBuilder<StdExpressionTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StdExpressionTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Sequence: sequence!,
            ExpenseCode: expenseCode!,
            ModuleType: moduleType!
          }
    );
  }
}
