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
import { ReturnDetails } from './ReturnDetails';

/**
 * Request builder class for operations supported on the {@link ReturnDetails} entity.
 */
export class ReturnDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnDetails<T>, T> {
    return new GetAllRequestBuilder<ReturnDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReturnDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnDetails`.
   */
  create(entity: ReturnDetails<T>): CreateRequestBuilder<ReturnDetails<T>, T> {
    return new CreateRequestBuilder<ReturnDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnDetails.dataAreaId}.
   * @param returnId Key property. See {@link ReturnDetails.returnId}.
   * @returns A request builder for creating requests to retrieve one `ReturnDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    returnId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnDetails<T>, T> {
    return new GetByKeyRequestBuilder<ReturnDetails<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReturnID: returnId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnDetails`.
   */
  update(entity: ReturnDetails<T>): UpdateRequestBuilder<ReturnDetails<T>, T> {
    return new UpdateRequestBuilder<ReturnDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnDetails`.
   * @param dataAreaId Key property. See {@link ReturnDetails.dataAreaId}.
   * @param returnId Key property. See {@link ReturnDetails.returnId}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnDetails`.
   */
  delete(
    dataAreaId: string,
    returnId: string
  ): DeleteRequestBuilder<ReturnDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnDetails` by taking the entity as a parameter.
   */
  delete(entity: ReturnDetails<T>): DeleteRequestBuilder<ReturnDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    returnId?: string
  ): DeleteRequestBuilder<ReturnDetails<T>, T> {
    return new DeleteRequestBuilder<ReturnDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReturnID: returnId!
          }
    );
  }
}
