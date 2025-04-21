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
import { DemandForecastsV2 } from './DemandForecastsV2';

/**
 * Request builder class for operations supported on the {@link DemandForecastsV2} entity.
 */
export class DemandForecastsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemandForecastsV2<T>, T> {
  /**
   * Returns a request builder for querying all `DemandForecastsV2` entities.
   * @returns A request builder for creating requests to retrieve all `DemandForecastsV2` entities.
   */
  getAll(): GetAllRequestBuilder<DemandForecastsV2<T>, T> {
    return new GetAllRequestBuilder<DemandForecastsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DemandForecastsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemandForecastsV2`.
   */
  create(
    entity: DemandForecastsV2<T>
  ): CreateRequestBuilder<DemandForecastsV2<T>, T> {
    return new CreateRequestBuilder<DemandForecastsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DemandForecastsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link DemandForecastsV2.dataAreaId}.
   * @param recordId Key property. See {@link DemandForecastsV2.recordId}.
   * @returns A request builder for creating requests to retrieve one `DemandForecastsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<DemandForecastsV2<T>, T> {
    return new GetByKeyRequestBuilder<DemandForecastsV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RecordId: recordId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DemandForecastsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemandForecastsV2`.
   */
  update(
    entity: DemandForecastsV2<T>
  ): UpdateRequestBuilder<DemandForecastsV2<T>, T> {
    return new UpdateRequestBuilder<DemandForecastsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DemandForecastsV2`.
   * @param dataAreaId Key property. See {@link DemandForecastsV2.dataAreaId}.
   * @param recordId Key property. See {@link DemandForecastsV2.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `DemandForecastsV2`.
   */
  delete(
    dataAreaId: string,
    recordId: BigNumber
  ): DeleteRequestBuilder<DemandForecastsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemandForecastsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemandForecastsV2` by taking the entity as a parameter.
   */
  delete(
    entity: DemandForecastsV2<T>
  ): DeleteRequestBuilder<DemandForecastsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recordId?: BigNumber
  ): DeleteRequestBuilder<DemandForecastsV2<T>, T> {
    return new DeleteRequestBuilder<DemandForecastsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DemandForecastsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecordId: recordId!
          }
    );
  }
}
