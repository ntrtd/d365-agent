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
import { ReturnOrderLines } from './ReturnOrderLines';

/**
 * Request builder class for operations supported on the {@link ReturnOrderLines} entity.
 */
export class ReturnOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnOrderLines<T>, T> {
    return new GetAllRequestBuilder<ReturnOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnOrderLines`.
   */
  create(
    entity: ReturnOrderLines<T>
  ): CreateRequestBuilder<ReturnOrderLines<T>, T> {
    return new CreateRequestBuilder<ReturnOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnOrderLines.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderLines.returnOrderNumber}.
   * @param returnInventoryLotId Key property. See {@link ReturnOrderLines.returnInventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `ReturnOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnOrderNumber: DeserializedType<T, 'Edm.String'>,
    returnInventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<ReturnOrderLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReturnOrderNumber: returnOrderNumber,
      ReturnInventoryLotId: returnInventoryLotId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnOrderLines`.
   */
  update(
    entity: ReturnOrderLines<T>
  ): UpdateRequestBuilder<ReturnOrderLines<T>, T> {
    return new UpdateRequestBuilder<ReturnOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderLines`.
   * @param dataAreaId Key property. See {@link ReturnOrderLines.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderLines.returnOrderNumber}.
   * @param returnInventoryLotId Key property. See {@link ReturnOrderLines.returnInventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderLines`.
   */
  delete(
    dataAreaId: string,
    returnOrderNumber: string,
    returnInventoryLotId: string
  ): DeleteRequestBuilder<ReturnOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnOrderLines<T>
  ): DeleteRequestBuilder<ReturnOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnOrderNumber?: string,
    returnInventoryLotId?: string
  ): DeleteRequestBuilder<ReturnOrderLines<T>, T> {
    return new DeleteRequestBuilder<ReturnOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnOrderNumber: returnOrderNumber!,
            ReturnInventoryLotId: returnInventoryLotId!
          }
    );
  }
}
