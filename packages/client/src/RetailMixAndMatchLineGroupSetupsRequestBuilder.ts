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
import { RetailMixAndMatchLineGroupSetups } from './RetailMixAndMatchLineGroupSetups';

/**
 * Request builder class for operations supported on the {@link RetailMixAndMatchLineGroupSetups} entity.
 */
export class RetailMixAndMatchLineGroupSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailMixAndMatchLineGroupSetups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailMixAndMatchLineGroupSetups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T> {
    return new GetAllRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailMixAndMatchLineGroupSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailMixAndMatchLineGroupSetups`.
   */
  create(
    entity: RetailMixAndMatchLineGroupSetups<T>
  ): CreateRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T> {
    return new CreateRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailMixAndMatchLineGroupSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailMixAndMatchLineGroupSetups.dataAreaId}.
   * @param mixAndMatchLineGroup Key property. See {@link RetailMixAndMatchLineGroupSetups.mixAndMatchLineGroup}.
   * @returns A request builder for creating requests to retrieve one `RetailMixAndMatchLineGroupSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mixAndMatchLineGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T> {
    return new GetByKeyRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        mixAndMatchLineGroup: mixAndMatchLineGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailMixAndMatchLineGroupSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailMixAndMatchLineGroupSetups`.
   */
  update(
    entity: RetailMixAndMatchLineGroupSetups<T>
  ): UpdateRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T> {
    return new UpdateRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailMixAndMatchLineGroupSetups`.
   * @param dataAreaId Key property. See {@link RetailMixAndMatchLineGroupSetups.dataAreaId}.
   * @param mixAndMatchLineGroup Key property. See {@link RetailMixAndMatchLineGroupSetups.mixAndMatchLineGroup}.
   * @returns A request builder for creating requests that delete an entity of type `RetailMixAndMatchLineGroupSetups`.
   */
  delete(
    dataAreaId: string,
    mixAndMatchLineGroup: string
  ): DeleteRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailMixAndMatchLineGroupSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailMixAndMatchLineGroupSetups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailMixAndMatchLineGroupSetups<T>
  ): DeleteRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mixAndMatchLineGroup?: string
  ): DeleteRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T> {
    return new DeleteRequestBuilder<RetailMixAndMatchLineGroupSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailMixAndMatchLineGroupSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            mixAndMatchLineGroup: mixAndMatchLineGroup!
          }
    );
  }
}
