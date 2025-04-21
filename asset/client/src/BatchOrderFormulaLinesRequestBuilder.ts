/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { BatchOrderFormulaLines } from './BatchOrderFormulaLines';

/**
 * Request builder class for operations supported on the {@link BatchOrderFormulaLines} entity.
 */
export class BatchOrderFormulaLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchOrderFormulaLines<T>, T> {
  /**
   * Returns a request builder for querying all `BatchOrderFormulaLines` entities.
   * @returns A request builder for creating requests to retrieve all `BatchOrderFormulaLines` entities.
   */
  getAll(): GetAllRequestBuilder<BatchOrderFormulaLines<T>, T> {
    return new GetAllRequestBuilder<BatchOrderFormulaLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BatchOrderFormulaLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchOrderFormulaLines`.
   */
  create(
    entity: BatchOrderFormulaLines<T>
  ): CreateRequestBuilder<BatchOrderFormulaLines<T>, T> {
    return new CreateRequestBuilder<BatchOrderFormulaLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BatchOrderFormulaLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BatchOrderFormulaLines.dataAreaId}.
   * @param lineNumber Key property. See {@link BatchOrderFormulaLines.lineNumber}.
   * @param batchOrderNumber Key property. See {@link BatchOrderFormulaLines.batchOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `BatchOrderFormulaLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    batchOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchOrderFormulaLines<T>, T> {
    return new GetByKeyRequestBuilder<BatchOrderFormulaLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        BatchOrderNumber: batchOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BatchOrderFormulaLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchOrderFormulaLines`.
   */
  update(
    entity: BatchOrderFormulaLines<T>
  ): UpdateRequestBuilder<BatchOrderFormulaLines<T>, T> {
    return new UpdateRequestBuilder<BatchOrderFormulaLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchOrderFormulaLines`.
   * @param dataAreaId Key property. See {@link BatchOrderFormulaLines.dataAreaId}.
   * @param lineNumber Key property. See {@link BatchOrderFormulaLines.lineNumber}.
   * @param batchOrderNumber Key property. See {@link BatchOrderFormulaLines.batchOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderFormulaLines`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    batchOrderNumber: string
  ): DeleteRequestBuilder<BatchOrderFormulaLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchOrderFormulaLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderFormulaLines` by taking the entity as a parameter.
   */
  delete(
    entity: BatchOrderFormulaLines<T>
  ): DeleteRequestBuilder<BatchOrderFormulaLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    batchOrderNumber?: string
  ): DeleteRequestBuilder<BatchOrderFormulaLines<T>, T> {
    return new DeleteRequestBuilder<BatchOrderFormulaLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BatchOrderFormulaLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            BatchOrderNumber: batchOrderNumber!
          }
    );
  }
}
