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
import { CdsReturnOrderLines } from './CdsReturnOrderLines';

/**
 * Request builder class for operations supported on the {@link CdsReturnOrderLines} entity.
 */
export class CdsReturnOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsReturnOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsReturnOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsReturnOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsReturnOrderLines<T>, T> {
    return new GetAllRequestBuilder<CdsReturnOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsReturnOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsReturnOrderLines`.
   */
  create(
    entity: CdsReturnOrderLines<T>
  ): CreateRequestBuilder<CdsReturnOrderLines<T>, T> {
    return new CreateRequestBuilder<CdsReturnOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsReturnOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsReturnOrderLines.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link CdsReturnOrderLines.returnOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsReturnOrderLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsReturnOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CdsReturnOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsReturnOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReturnOrderNumber: returnOrderNumber,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsReturnOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsReturnOrderLines`.
   */
  update(
    entity: CdsReturnOrderLines<T>
  ): UpdateRequestBuilder<CdsReturnOrderLines<T>, T> {
    return new UpdateRequestBuilder<CdsReturnOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsReturnOrderLines`.
   * @param dataAreaId Key property. See {@link CdsReturnOrderLines.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link CdsReturnOrderLines.returnOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link CdsReturnOrderLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsReturnOrderLines`.
   */
  delete(
    dataAreaId: string,
    returnOrderNumber: string,
    lineCreationSequenceNumber: number
  ): DeleteRequestBuilder<CdsReturnOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsReturnOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsReturnOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsReturnOrderLines<T>
  ): DeleteRequestBuilder<CdsReturnOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnOrderNumber?: string,
    lineCreationSequenceNumber?: number
  ): DeleteRequestBuilder<CdsReturnOrderLines<T>, T> {
    return new DeleteRequestBuilder<CdsReturnOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsReturnOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnOrderNumber: returnOrderNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
