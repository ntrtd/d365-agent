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
import { RetailBarcodeMasks } from './RetailBarcodeMasks';

/**
 * Request builder class for operations supported on the {@link RetailBarcodeMasks} entity.
 */
export class RetailBarcodeMasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailBarcodeMasks<T>, T> {
  /**
   * Returns a request builder for querying all `RetailBarcodeMasks` entities.
   * @returns A request builder for creating requests to retrieve all `RetailBarcodeMasks` entities.
   */
  getAll(): GetAllRequestBuilder<RetailBarcodeMasks<T>, T> {
    return new GetAllRequestBuilder<RetailBarcodeMasks<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailBarcodeMasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailBarcodeMasks`.
   */
  create(
    entity: RetailBarcodeMasks<T>
  ): CreateRequestBuilder<RetailBarcodeMasks<T>, T> {
    return new CreateRequestBuilder<RetailBarcodeMasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailBarcodeMasks` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailBarcodeMasks.dataAreaId}.
   * @param maskId Key property. See {@link RetailBarcodeMasks.maskId}.
   * @returns A request builder for creating requests to retrieve one `RetailBarcodeMasks` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maskId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailBarcodeMasks<T>, T> {
    return new GetByKeyRequestBuilder<RetailBarcodeMasks<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaskId: maskId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailBarcodeMasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailBarcodeMasks`.
   */
  update(
    entity: RetailBarcodeMasks<T>
  ): UpdateRequestBuilder<RetailBarcodeMasks<T>, T> {
    return new UpdateRequestBuilder<RetailBarcodeMasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailBarcodeMasks`.
   * @param dataAreaId Key property. See {@link RetailBarcodeMasks.dataAreaId}.
   * @param maskId Key property. See {@link RetailBarcodeMasks.maskId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailBarcodeMasks`.
   */
  delete(
    dataAreaId: string,
    maskId: string
  ): DeleteRequestBuilder<RetailBarcodeMasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailBarcodeMasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailBarcodeMasks` by taking the entity as a parameter.
   */
  delete(
    entity: RetailBarcodeMasks<T>
  ): DeleteRequestBuilder<RetailBarcodeMasks<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maskId?: string
  ): DeleteRequestBuilder<RetailBarcodeMasks<T>, T> {
    return new DeleteRequestBuilder<RetailBarcodeMasks<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailBarcodeMasks
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaskId: maskId!
          }
    );
  }
}
