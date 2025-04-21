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
import { PriceComponentCodeGroups } from './PriceComponentCodeGroups';

/**
 * Request builder class for operations supported on the {@link PriceComponentCodeGroups} entity.
 */
export class PriceComponentCodeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceComponentCodeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `PriceComponentCodeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `PriceComponentCodeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<PriceComponentCodeGroups<T>, T> {
    return new GetAllRequestBuilder<PriceComponentCodeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceComponentCodeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceComponentCodeGroups`.
   */
  create(
    entity: PriceComponentCodeGroups<T>
  ): CreateRequestBuilder<PriceComponentCodeGroups<T>, T> {
    return new CreateRequestBuilder<PriceComponentCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceComponentCodeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceComponentCodeGroups.dataAreaId}.
   * @param priceComponentCodeGroup Key property. See {@link PriceComponentCodeGroups.priceComponentCodeGroup}.
   * @returns A request builder for creating requests to retrieve one `PriceComponentCodeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priceComponentCodeGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceComponentCodeGroups<T>, T> {
    return new GetByKeyRequestBuilder<PriceComponentCodeGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PriceComponentCodeGroup: priceComponentCodeGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceComponentCodeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceComponentCodeGroups`.
   */
  update(
    entity: PriceComponentCodeGroups<T>
  ): UpdateRequestBuilder<PriceComponentCodeGroups<T>, T> {
    return new UpdateRequestBuilder<PriceComponentCodeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodeGroups`.
   * @param dataAreaId Key property. See {@link PriceComponentCodeGroups.dataAreaId}.
   * @param priceComponentCodeGroup Key property. See {@link PriceComponentCodeGroups.priceComponentCodeGroup}.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodeGroups`.
   */
  delete(
    dataAreaId: string,
    priceComponentCodeGroup: string
  ): DeleteRequestBuilder<PriceComponentCodeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: PriceComponentCodeGroups<T>
  ): DeleteRequestBuilder<PriceComponentCodeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priceComponentCodeGroup?: string
  ): DeleteRequestBuilder<PriceComponentCodeGroups<T>, T> {
    return new DeleteRequestBuilder<PriceComponentCodeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceComponentCodeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PriceComponentCodeGroup: priceComponentCodeGroup!
          }
    );
  }
}
