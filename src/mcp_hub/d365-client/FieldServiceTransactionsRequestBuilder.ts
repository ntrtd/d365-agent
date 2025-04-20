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
import { FieldServiceTransactions } from './FieldServiceTransactions';

/**
 * Request builder class for operations supported on the {@link FieldServiceTransactions} entity.
 */
export class FieldServiceTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FieldServiceTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `FieldServiceTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `FieldServiceTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<FieldServiceTransactions<T>, T> {
    return new GetAllRequestBuilder<FieldServiceTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FieldServiceTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FieldServiceTransactions`.
   */
  create(
    entity: FieldServiceTransactions<T>
  ): CreateRequestBuilder<FieldServiceTransactions<T>, T> {
    return new CreateRequestBuilder<FieldServiceTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FieldServiceTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link FieldServiceTransactions.dataAreaId}.
   * @param rowId Key property. See {@link FieldServiceTransactions.rowId}.
   * @returns A request builder for creating requests to retrieve one `FieldServiceTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    rowId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<FieldServiceTransactions<T>, T> {
    return new GetByKeyRequestBuilder<FieldServiceTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RowId: rowId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FieldServiceTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FieldServiceTransactions`.
   */
  update(
    entity: FieldServiceTransactions<T>
  ): UpdateRequestBuilder<FieldServiceTransactions<T>, T> {
    return new UpdateRequestBuilder<FieldServiceTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FieldServiceTransactions`.
   * @param dataAreaId Key property. See {@link FieldServiceTransactions.dataAreaId}.
   * @param rowId Key property. See {@link FieldServiceTransactions.rowId}.
   * @returns A request builder for creating requests that delete an entity of type `FieldServiceTransactions`.
   */
  delete(
    dataAreaId: string,
    rowId: string
  ): DeleteRequestBuilder<FieldServiceTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FieldServiceTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FieldServiceTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: FieldServiceTransactions<T>
  ): DeleteRequestBuilder<FieldServiceTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    rowId?: string
  ): DeleteRequestBuilder<FieldServiceTransactions<T>, T> {
    return new DeleteRequestBuilder<FieldServiceTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FieldServiceTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RowId: rowId!
          }
    );
  }
}
