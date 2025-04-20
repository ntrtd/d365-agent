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
import { FormulaLinesV2 } from './FormulaLinesV2';

/**
 * Request builder class for operations supported on the {@link FormulaLinesV2} entity.
 */
export class FormulaLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FormulaLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `FormulaLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `FormulaLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<FormulaLinesV2<T>, T> {
    return new GetAllRequestBuilder<FormulaLinesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FormulaLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormulaLinesV2`.
   */
  create(
    entity: FormulaLinesV2<T>
  ): CreateRequestBuilder<FormulaLinesV2<T>, T> {
    return new CreateRequestBuilder<FormulaLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FormulaLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link FormulaLinesV2.dataAreaId}.
   * @param formulaId Key property. See {@link FormulaLinesV2.formulaId}.
   * @param lineCreationSequenceNumber Key property. See {@link FormulaLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `FormulaLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    formulaId: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<FormulaLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<FormulaLinesV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      FormulaId: formulaId,
      LineCreationSequenceNumber: lineCreationSequenceNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FormulaLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormulaLinesV2`.
   */
  update(
    entity: FormulaLinesV2<T>
  ): UpdateRequestBuilder<FormulaLinesV2<T>, T> {
    return new UpdateRequestBuilder<FormulaLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FormulaLinesV2`.
   * @param dataAreaId Key property. See {@link FormulaLinesV2.dataAreaId}.
   * @param formulaId Key property. See {@link FormulaLinesV2.formulaId}.
   * @param lineCreationSequenceNumber Key property. See {@link FormulaLinesV2.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FormulaLinesV2`.
   */
  delete(
    dataAreaId: string,
    formulaId: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<FormulaLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FormulaLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormulaLinesV2` by taking the entity as a parameter.
   */
  delete(entity: FormulaLinesV2<T>): DeleteRequestBuilder<FormulaLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    formulaId?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<FormulaLinesV2<T>, T> {
    return new DeleteRequestBuilder<FormulaLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FormulaLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FormulaId: formulaId!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
