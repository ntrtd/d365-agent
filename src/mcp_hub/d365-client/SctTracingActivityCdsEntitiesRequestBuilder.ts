/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { SctTracingActivityCdsEntities } from './SctTracingActivityCdsEntities';

/**
 * Request builder class for operations supported on the {@link SctTracingActivityCdsEntities} entity.
 */
export class SctTracingActivityCdsEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SctTracingActivityCdsEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SctTracingActivityCdsEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SctTracingActivityCdsEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SctTracingActivityCdsEntities<T>, T> {
    return new GetAllRequestBuilder<SctTracingActivityCdsEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SctTracingActivityCdsEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SctTracingActivityCdsEntities`.
   */
  create(
    entity: SctTracingActivityCdsEntities<T>
  ): CreateRequestBuilder<SctTracingActivityCdsEntities<T>, T> {
    return new CreateRequestBuilder<SctTracingActivityCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SctTracingActivityCdsEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link SctTracingActivityCdsEntities.dataAreaId}.
   * @param recordId Key property. See {@link SctTracingActivityCdsEntities.recordId}.
   * @returns A request builder for creating requests to retrieve one `SctTracingActivityCdsEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SctTracingActivityCdsEntities<T>, T> {
    return new GetByKeyRequestBuilder<SctTracingActivityCdsEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RecordId: recordId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SctTracingActivityCdsEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SctTracingActivityCdsEntities`.
   */
  update(
    entity: SctTracingActivityCdsEntities<T>
  ): UpdateRequestBuilder<SctTracingActivityCdsEntities<T>, T> {
    return new UpdateRequestBuilder<SctTracingActivityCdsEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SctTracingActivityCdsEntities`.
   * @param dataAreaId Key property. See {@link SctTracingActivityCdsEntities.dataAreaId}.
   * @param recordId Key property. See {@link SctTracingActivityCdsEntities.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `SctTracingActivityCdsEntities`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<SctTracingActivityCdsEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SctTracingActivityCdsEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SctTracingActivityCdsEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SctTracingActivityCdsEntities<T>
  ): DeleteRequestBuilder<SctTracingActivityCdsEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<SctTracingActivityCdsEntities<T>, T> {
    return new DeleteRequestBuilder<SctTracingActivityCdsEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SctTracingActivityCdsEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
