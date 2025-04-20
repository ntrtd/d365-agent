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
import { RetailRoundingMethodGroups } from './RetailRoundingMethodGroups';

/**
 * Request builder class for operations supported on the {@link RetailRoundingMethodGroups} entity.
 */
export class RetailRoundingMethodGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailRoundingMethodGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailRoundingMethodGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailRoundingMethodGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailRoundingMethodGroups<T>, T> {
    return new GetAllRequestBuilder<RetailRoundingMethodGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailRoundingMethodGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailRoundingMethodGroups`.
   */
  create(
    entity: RetailRoundingMethodGroups<T>
  ): CreateRequestBuilder<RetailRoundingMethodGroups<T>, T> {
    return new CreateRequestBuilder<RetailRoundingMethodGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailRoundingMethodGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailRoundingMethodGroups.dataAreaId}.
   * @param roundingMethodId Key property. See {@link RetailRoundingMethodGroups.roundingMethodId}.
   * @returns A request builder for creating requests to retrieve one `RetailRoundingMethodGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    roundingMethodId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailRoundingMethodGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailRoundingMethodGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoundingMethodId: roundingMethodId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailRoundingMethodGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailRoundingMethodGroups`.
   */
  update(
    entity: RetailRoundingMethodGroups<T>
  ): UpdateRequestBuilder<RetailRoundingMethodGroups<T>, T> {
    return new UpdateRequestBuilder<RetailRoundingMethodGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailRoundingMethodGroups`.
   * @param dataAreaId Key property. See {@link RetailRoundingMethodGroups.dataAreaId}.
   * @param roundingMethodId Key property. See {@link RetailRoundingMethodGroups.roundingMethodId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailRoundingMethodGroups`.
   */
  delete(
    dataAreaId: string,
    roundingMethodId: string
  ): DeleteRequestBuilder<RetailRoundingMethodGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailRoundingMethodGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailRoundingMethodGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailRoundingMethodGroups<T>
  ): DeleteRequestBuilder<RetailRoundingMethodGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    roundingMethodId?: string
  ): DeleteRequestBuilder<RetailRoundingMethodGroups<T>, T> {
    return new DeleteRequestBuilder<RetailRoundingMethodGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailRoundingMethodGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoundingMethodId: roundingMethodId!
          }
    );
  }
}
