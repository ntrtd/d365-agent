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
import { StdExpressionLines } from './StdExpressionLines';

/**
 * Request builder class for operations supported on the {@link StdExpressionLines} entity.
 */
export class StdExpressionLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StdExpressionLines<T>, T> {
  /**
   * Returns a request builder for querying all `StdExpressionLines` entities.
   * @returns A request builder for creating requests to retrieve all `StdExpressionLines` entities.
   */
  getAll(): GetAllRequestBuilder<StdExpressionLines<T>, T> {
    return new GetAllRequestBuilder<StdExpressionLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StdExpressionLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StdExpressionLines`.
   */
  create(
    entity: StdExpressionLines<T>
  ): CreateRequestBuilder<StdExpressionLines<T>, T> {
    return new CreateRequestBuilder<StdExpressionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StdExpressionLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link StdExpressionLines.dataAreaId}.
   * @param sequence Key property. See {@link StdExpressionLines.sequence}.
   * @param profitId Key property. See {@link StdExpressionLines.profitId}.
   * @param lineNumber Key property. See {@link StdExpressionLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `StdExpressionLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sequence: DeserializedType<T, 'Edm.Int32'>,
    profitId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<StdExpressionLines<T>, T> {
    return new GetByKeyRequestBuilder<StdExpressionLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Sequence: sequence,
        ProfitId: profitId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StdExpressionLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StdExpressionLines`.
   */
  update(
    entity: StdExpressionLines<T>
  ): UpdateRequestBuilder<StdExpressionLines<T>, T> {
    return new UpdateRequestBuilder<StdExpressionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StdExpressionLines`.
   * @param dataAreaId Key property. See {@link StdExpressionLines.dataAreaId}.
   * @param sequence Key property. See {@link StdExpressionLines.sequence}.
   * @param profitId Key property. See {@link StdExpressionLines.profitId}.
   * @param lineNumber Key property. See {@link StdExpressionLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `StdExpressionLines`.
   */
  delete(
    dataAreaId: string,
    sequence: number,
    profitId: string,
    lineNumber: number
  ): DeleteRequestBuilder<StdExpressionLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StdExpressionLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StdExpressionLines` by taking the entity as a parameter.
   */
  delete(
    entity: StdExpressionLines<T>
  ): DeleteRequestBuilder<StdExpressionLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sequence?: number,
    profitId?: string,
    lineNumber?: number
  ): DeleteRequestBuilder<StdExpressionLines<T>, T> {
    return new DeleteRequestBuilder<StdExpressionLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StdExpressionLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Sequence: sequence!,
            ProfitId: profitId!,
            LineNumber: lineNumber!
          }
    );
  }
}
