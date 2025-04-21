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
import { ReqPlanBiEntities } from './ReqPlanBiEntities';

/**
 * Request builder class for operations supported on the {@link ReqPlanBiEntities} entity.
 */
export class ReqPlanBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReqPlanBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ReqPlanBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ReqPlanBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ReqPlanBiEntities<T>, T> {
    return new GetAllRequestBuilder<ReqPlanBiEntities<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReqPlanBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReqPlanBiEntities`.
   */
  create(
    entity: ReqPlanBiEntities<T>
  ): CreateRequestBuilder<ReqPlanBiEntities<T>, T> {
    return new CreateRequestBuilder<ReqPlanBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReqPlanBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReqPlanBiEntities.dataAreaId}.
   * @param reqPlanId Key property. See {@link ReqPlanBiEntities.reqPlanId}.
   * @returns A request builder for creating requests to retrieve one `ReqPlanBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reqPlanId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReqPlanBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ReqPlanBiEntities<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ReqPlanId: reqPlanId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReqPlanBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReqPlanBiEntities`.
   */
  update(
    entity: ReqPlanBiEntities<T>
  ): UpdateRequestBuilder<ReqPlanBiEntities<T>, T> {
    return new UpdateRequestBuilder<ReqPlanBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReqPlanBiEntities`.
   * @param dataAreaId Key property. See {@link ReqPlanBiEntities.dataAreaId}.
   * @param reqPlanId Key property. See {@link ReqPlanBiEntities.reqPlanId}.
   * @returns A request builder for creating requests that delete an entity of type `ReqPlanBiEntities`.
   */
  delete(
    dataAreaId: string,
    reqPlanId: string
  ): DeleteRequestBuilder<ReqPlanBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReqPlanBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReqPlanBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ReqPlanBiEntities<T>
  ): DeleteRequestBuilder<ReqPlanBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reqPlanId?: string
  ): DeleteRequestBuilder<ReqPlanBiEntities<T>, T> {
    return new DeleteRequestBuilder<ReqPlanBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReqPlanBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReqPlanId: reqPlanId!
          }
    );
  }
}
