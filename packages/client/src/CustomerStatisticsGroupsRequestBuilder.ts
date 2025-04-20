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
import { CustomerStatisticsGroups } from './CustomerStatisticsGroups';

/**
 * Request builder class for operations supported on the {@link CustomerStatisticsGroups} entity.
 */
export class CustomerStatisticsGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerStatisticsGroups<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerStatisticsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerStatisticsGroups` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerStatisticsGroups<T>, T> {
    return new GetAllRequestBuilder<CustomerStatisticsGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerStatisticsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerStatisticsGroups`.
   */
  create(
    entity: CustomerStatisticsGroups<T>
  ): CreateRequestBuilder<CustomerStatisticsGroups<T>, T> {
    return new CreateRequestBuilder<CustomerStatisticsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerStatisticsGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerStatisticsGroups.dataAreaId}.
   * @param statisticsGroup Key property. See {@link CustomerStatisticsGroups.statisticsGroup}.
   * @returns A request builder for creating requests to retrieve one `CustomerStatisticsGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    statisticsGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerStatisticsGroups<T>, T> {
    return new GetByKeyRequestBuilder<CustomerStatisticsGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StatisticsGroup: statisticsGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerStatisticsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerStatisticsGroups`.
   */
  update(
    entity: CustomerStatisticsGroups<T>
  ): UpdateRequestBuilder<CustomerStatisticsGroups<T>, T> {
    return new UpdateRequestBuilder<CustomerStatisticsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerStatisticsGroups`.
   * @param dataAreaId Key property. See {@link CustomerStatisticsGroups.dataAreaId}.
   * @param statisticsGroup Key property. See {@link CustomerStatisticsGroups.statisticsGroup}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerStatisticsGroups`.
   */
  delete(
    dataAreaId: string,
    statisticsGroup: string
  ): DeleteRequestBuilder<CustomerStatisticsGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerStatisticsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerStatisticsGroups` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerStatisticsGroups<T>
  ): DeleteRequestBuilder<CustomerStatisticsGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    statisticsGroup?: string
  ): DeleteRequestBuilder<CustomerStatisticsGroups<T>, T> {
    return new DeleteRequestBuilder<CustomerStatisticsGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerStatisticsGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StatisticsGroup: statisticsGroup!
          }
    );
  }
}
