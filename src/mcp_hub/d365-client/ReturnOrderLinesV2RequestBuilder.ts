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
import { ReturnOrderLinesV2 } from './ReturnOrderLinesV2';

/**
 * Request builder class for operations supported on the {@link ReturnOrderLinesV2} entity.
 */
export class ReturnOrderLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnOrderLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnOrderLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnOrderLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnOrderLinesV2<T>, T> {
    return new GetAllRequestBuilder<ReturnOrderLinesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnOrderLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnOrderLinesV2`.
   */
  create(
    entity: ReturnOrderLinesV2<T>
  ): CreateRequestBuilder<ReturnOrderLinesV2<T>, T> {
    return new CreateRequestBuilder<ReturnOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnOrderLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnOrderLinesV2.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderLinesV2.returnOrderNumber}.
   * @param returnInventoryLotId Key property. See {@link ReturnOrderLinesV2.returnInventoryLotId}.
   * @returns A request builder for creating requests to retrieve one `ReturnOrderLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnOrderNumber: DeserializedType<T, 'Edm.String'>,
    returnInventoryLotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnOrderLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<ReturnOrderLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReturnOrderNumber: returnOrderNumber,
        ReturnInventoryLotId: returnInventoryLotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnOrderLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnOrderLinesV2`.
   */
  update(
    entity: ReturnOrderLinesV2<T>
  ): UpdateRequestBuilder<ReturnOrderLinesV2<T>, T> {
    return new UpdateRequestBuilder<ReturnOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderLinesV2`.
   * @param dataAreaId Key property. See {@link ReturnOrderLinesV2.dataAreaId}.
   * @param returnOrderNumber Key property. See {@link ReturnOrderLinesV2.returnOrderNumber}.
   * @param returnInventoryLotId Key property. See {@link ReturnOrderLinesV2.returnInventoryLotId}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderLinesV2`.
   */
  delete(
    dataAreaId: string,
    returnOrderNumber: string,
    returnInventoryLotId: string
  ): DeleteRequestBuilder<ReturnOrderLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnOrderLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnOrderLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnOrderLinesV2<T>
  ): DeleteRequestBuilder<ReturnOrderLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnOrderNumber?: string,
    returnInventoryLotId?: string
  ): DeleteRequestBuilder<ReturnOrderLinesV2<T>, T> {
    return new DeleteRequestBuilder<ReturnOrderLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnOrderLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnOrderNumber: returnOrderNumber!,
            ReturnInventoryLotId: returnInventoryLotId!
          }
    );
  }
}
