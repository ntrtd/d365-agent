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
import { ReturnReasonCodeBiEntities } from './ReturnReasonCodeBiEntities';

/**
 * Request builder class for operations supported on the {@link ReturnReasonCodeBiEntities} entity.
 */
export class ReturnReasonCodeBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReturnReasonCodeBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ReturnReasonCodeBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ReturnReasonCodeBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ReturnReasonCodeBiEntities<T>, T> {
    return new GetAllRequestBuilder<ReturnReasonCodeBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReturnReasonCodeBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReturnReasonCodeBiEntities`.
   */
  create(
    entity: ReturnReasonCodeBiEntities<T>
  ): CreateRequestBuilder<ReturnReasonCodeBiEntities<T>, T> {
    return new CreateRequestBuilder<ReturnReasonCodeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReturnReasonCodeBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReturnReasonCodeBiEntities.dataAreaId}.
   * @param reasonCodeId Key property. See {@link ReturnReasonCodeBiEntities.reasonCodeId}.
   * @returns A request builder for creating requests to retrieve one `ReturnReasonCodeBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReturnReasonCodeBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ReturnReasonCodeBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReasonCodeId: reasonCodeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ReturnReasonCodeBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReturnReasonCodeBiEntities`.
   */
  update(
    entity: ReturnReasonCodeBiEntities<T>
  ): UpdateRequestBuilder<ReturnReasonCodeBiEntities<T>, T> {
    return new UpdateRequestBuilder<ReturnReasonCodeBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReturnReasonCodeBiEntities`.
   * @param dataAreaId Key property. See {@link ReturnReasonCodeBiEntities.dataAreaId}.
   * @param reasonCodeId Key property. See {@link ReturnReasonCodeBiEntities.reasonCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `ReturnReasonCodeBiEntities`.
   */
  delete(
    dataAreaId: string,
    reasonCodeId: string
  ): DeleteRequestBuilder<ReturnReasonCodeBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReturnReasonCodeBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReturnReasonCodeBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ReturnReasonCodeBiEntities<T>
  ): DeleteRequestBuilder<ReturnReasonCodeBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCodeId?: string
  ): DeleteRequestBuilder<ReturnReasonCodeBiEntities<T>, T> {
    return new DeleteRequestBuilder<ReturnReasonCodeBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReturnReasonCodeBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCodeId: reasonCodeId!
          }
    );
  }
}
