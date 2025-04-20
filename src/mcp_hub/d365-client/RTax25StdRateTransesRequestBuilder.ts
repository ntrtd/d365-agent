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
import { RTax25StdRateTranses } from './RTax25StdRateTranses';

/**
 * Request builder class for operations supported on the {@link RTax25StdRateTranses} entity.
 */
export class RTax25StdRateTransesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RTax25StdRateTranses<T>, T> {
  /**
   * Returns a request builder for querying all `RTax25StdRateTranses` entities.
   * @returns A request builder for creating requests to retrieve all `RTax25StdRateTranses` entities.
   */
  getAll(): GetAllRequestBuilder<RTax25StdRateTranses<T>, T> {
    return new GetAllRequestBuilder<RTax25StdRateTranses<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RTax25StdRateTranses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RTax25StdRateTranses`.
   */
  create(
    entity: RTax25StdRateTranses<T>
  ): CreateRequestBuilder<RTax25StdRateTranses<T>, T> {
    return new CreateRequestBuilder<RTax25StdRateTranses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RTax25StdRateTranses` entity based on its keys.
   * @param dataAreaId Key property. See {@link RTax25StdRateTranses.dataAreaId}.
   * @param lineId Key property. See {@link RTax25StdRateTranses.lineId}.
   * @returns A request builder for creating requests to retrieve one `RTax25StdRateTranses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RTax25StdRateTranses<T>, T> {
    return new GetByKeyRequestBuilder<RTax25StdRateTranses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineId: lineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RTax25StdRateTranses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RTax25StdRateTranses`.
   */
  update(
    entity: RTax25StdRateTranses<T>
  ): UpdateRequestBuilder<RTax25StdRateTranses<T>, T> {
    return new UpdateRequestBuilder<RTax25StdRateTranses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RTax25StdRateTranses`.
   * @param dataAreaId Key property. See {@link RTax25StdRateTranses.dataAreaId}.
   * @param lineId Key property. See {@link RTax25StdRateTranses.lineId}.
   * @returns A request builder for creating requests that delete an entity of type `RTax25StdRateTranses`.
   */
  delete(
    dataAreaId: string,
    lineId: string
  ): DeleteRequestBuilder<RTax25StdRateTranses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RTax25StdRateTranses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RTax25StdRateTranses` by taking the entity as a parameter.
   */
  delete(
    entity: RTax25StdRateTranses<T>
  ): DeleteRequestBuilder<RTax25StdRateTranses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineId?: string
  ): DeleteRequestBuilder<RTax25StdRateTranses<T>, T> {
    return new DeleteRequestBuilder<RTax25StdRateTranses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RTax25StdRateTranses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineId: lineId!
          }
    );
  }
}
