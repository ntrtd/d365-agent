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
import { PositionDefaultDimensionsDualWrite } from './PositionDefaultDimensionsDualWrite';

/**
 * Request builder class for operations supported on the {@link PositionDefaultDimensionsDualWrite} entity.
 */
export class PositionDefaultDimensionsDualWriteRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionDefaultDimensionsDualWrite<T>, T> {
  /**
   * Returns a request builder for querying all `PositionDefaultDimensionsDualWrite` entities.
   * @returns A request builder for creating requests to retrieve all `PositionDefaultDimensionsDualWrite` entities.
   */
  getAll(): GetAllRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T> {
    return new GetAllRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PositionDefaultDimensionsDualWrite` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionDefaultDimensionsDualWrite`.
   */
  create(
    entity: PositionDefaultDimensionsDualWrite<T>
  ): CreateRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T> {
    return new CreateRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionDefaultDimensionsDualWrite` entity based on its keys.
   * @param dataAreaId Key property. See {@link PositionDefaultDimensionsDualWrite.dataAreaId}.
   * @param positionId Key property. See {@link PositionDefaultDimensionsDualWrite.positionId}.
   * @returns A request builder for creating requests to retrieve one `PositionDefaultDimensionsDualWrite` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T> {
    return new GetByKeyRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PositionId: positionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PositionDefaultDimensionsDualWrite`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionDefaultDimensionsDualWrite`.
   */
  update(
    entity: PositionDefaultDimensionsDualWrite<T>
  ): UpdateRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T> {
    return new UpdateRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionDefaultDimensionsDualWrite`.
   * @param dataAreaId Key property. See {@link PositionDefaultDimensionsDualWrite.dataAreaId}.
   * @param positionId Key property. See {@link PositionDefaultDimensionsDualWrite.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `PositionDefaultDimensionsDualWrite`.
   */
  delete(
    dataAreaId: string,
    positionId: string
  ): DeleteRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionDefaultDimensionsDualWrite`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionDefaultDimensionsDualWrite` by taking the entity as a parameter.
   */
  delete(
    entity: PositionDefaultDimensionsDualWrite<T>
  ): DeleteRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    positionId?: string
  ): DeleteRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T> {
    return new DeleteRequestBuilder<PositionDefaultDimensionsDualWrite<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PositionDefaultDimensionsDualWrite
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PositionId: positionId!
          }
    );
  }
}
