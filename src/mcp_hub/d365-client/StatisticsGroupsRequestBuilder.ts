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
import { StatisticsGroups } from './StatisticsGroups';

/**
 * Request builder class for operations supported on the {@link StatisticsGroups} entity.
 */
export class StatisticsGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StatisticsGroups<T>, T> {
  /**
   * Returns a request builder for querying all `StatisticsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `StatisticsGroups` entities.
   */
  getAll(): GetAllRequestBuilder<StatisticsGroups<T>, T> {
    return new GetAllRequestBuilder<StatisticsGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StatisticsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StatisticsGroups`.
   */
  create(
    entity: StatisticsGroups<T>
  ): CreateRequestBuilder<StatisticsGroups<T>, T> {
    return new CreateRequestBuilder<StatisticsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StatisticsGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link StatisticsGroups.dataAreaId}.
   * @param statisticsGroup Key property. See {@link StatisticsGroups.statisticsGroup}.
   * @returns A request builder for creating requests to retrieve one `StatisticsGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statisticsGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StatisticsGroups<T>, T> {
    return new GetByKeyRequestBuilder<StatisticsGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      StatisticsGroup: statisticsGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `StatisticsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StatisticsGroups`.
   */
  update(
    entity: StatisticsGroups<T>
  ): UpdateRequestBuilder<StatisticsGroups<T>, T> {
    return new UpdateRequestBuilder<StatisticsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StatisticsGroups`.
   * @param dataAreaId Key property. See {@link StatisticsGroups.dataAreaId}.
   * @param statisticsGroup Key property. See {@link StatisticsGroups.statisticsGroup}.
   * @returns A request builder for creating requests that delete an entity of type `StatisticsGroups`.
   */
  delete(
    dataAreaId: string,
    statisticsGroup: string
  ): DeleteRequestBuilder<StatisticsGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StatisticsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StatisticsGroups` by taking the entity as a parameter.
   */
  delete(
    entity: StatisticsGroups<T>
  ): DeleteRequestBuilder<StatisticsGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statisticsGroup?: string
  ): DeleteRequestBuilder<StatisticsGroups<T>, T> {
    return new DeleteRequestBuilder<StatisticsGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StatisticsGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatisticsGroup: statisticsGroup!
          }
    );
  }
}
