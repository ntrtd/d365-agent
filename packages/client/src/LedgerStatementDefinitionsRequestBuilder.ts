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
import { LedgerStatementDefinitions } from './LedgerStatementDefinitions';

/**
 * Request builder class for operations supported on the {@link LedgerStatementDefinitions} entity.
 */
export class LedgerStatementDefinitionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerStatementDefinitions<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerStatementDefinitions` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerStatementDefinitions` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerStatementDefinitions<T>, T> {
    return new GetAllRequestBuilder<LedgerStatementDefinitions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerStatementDefinitions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerStatementDefinitions`.
   */
  create(
    entity: LedgerStatementDefinitions<T>
  ): CreateRequestBuilder<LedgerStatementDefinitions<T>, T> {
    return new CreateRequestBuilder<LedgerStatementDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerStatementDefinitions` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerStatementDefinitions.dataAreaId}.
   * @param line Key property. See {@link LedgerStatementDefinitions.line}.
   * @param lineId Key property. See {@link LedgerStatementDefinitions.lineId}.
   * @returns A request builder for creating requests to retrieve one `LedgerStatementDefinitions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    line: DeserializedType<T, 'Edm.Int32'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LedgerStatementDefinitions<T>, T> {
    return new GetByKeyRequestBuilder<LedgerStatementDefinitions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Line: line,
        LineId: lineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerStatementDefinitions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerStatementDefinitions`.
   */
  update(
    entity: LedgerStatementDefinitions<T>
  ): UpdateRequestBuilder<LedgerStatementDefinitions<T>, T> {
    return new UpdateRequestBuilder<LedgerStatementDefinitions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerStatementDefinitions`.
   * @param dataAreaId Key property. See {@link LedgerStatementDefinitions.dataAreaId}.
   * @param line Key property. See {@link LedgerStatementDefinitions.line}.
   * @param lineId Key property. See {@link LedgerStatementDefinitions.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerStatementDefinitions`.
   */
  delete(
    dataAreaId: string,
    line: number,
    lineId: string
  ): DeleteRequestBuilder<LedgerStatementDefinitions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerStatementDefinitions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerStatementDefinitions` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerStatementDefinitions<T>
  ): DeleteRequestBuilder<LedgerStatementDefinitions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    line?: number,
    lineId?: string
  ): DeleteRequestBuilder<LedgerStatementDefinitions<T>, T> {
    return new DeleteRequestBuilder<LedgerStatementDefinitions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerStatementDefinitions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Line: line!,
            LineId: lineId!
          }
    );
  }
}
