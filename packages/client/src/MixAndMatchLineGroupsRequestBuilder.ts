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
import { MixAndMatchLineGroups } from './MixAndMatchLineGroups';

/**
 * Request builder class for operations supported on the {@link MixAndMatchLineGroups} entity.
 */
export class MixAndMatchLineGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MixAndMatchLineGroups<T>, T> {
  /**
   * Returns a request builder for querying all `MixAndMatchLineGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MixAndMatchLineGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MixAndMatchLineGroups<T>, T> {
    return new GetAllRequestBuilder<MixAndMatchLineGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MixAndMatchLineGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MixAndMatchLineGroups`.
   */
  create(
    entity: MixAndMatchLineGroups<T>
  ): CreateRequestBuilder<MixAndMatchLineGroups<T>, T> {
    return new CreateRequestBuilder<MixAndMatchLineGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MixAndMatchLineGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link MixAndMatchLineGroups.dataAreaId}.
   * @param mixAndMatchOfferId Key property. See {@link MixAndMatchLineGroups.mixAndMatchOfferId}.
   * @param mixAndMatchLineGroup Key property. See {@link MixAndMatchLineGroups.mixAndMatchLineGroup}.
   * @returns A request builder for creating requests to retrieve one `MixAndMatchLineGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    mixAndMatchOfferId: DeserializedType<T, 'Edm.String'>,
    mixAndMatchLineGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MixAndMatchLineGroups<T>, T> {
    return new GetByKeyRequestBuilder<MixAndMatchLineGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MixAndMatchOfferId: mixAndMatchOfferId,
        MixAndMatchLineGroup: mixAndMatchLineGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MixAndMatchLineGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MixAndMatchLineGroups`.
   */
  update(
    entity: MixAndMatchLineGroups<T>
  ): UpdateRequestBuilder<MixAndMatchLineGroups<T>, T> {
    return new UpdateRequestBuilder<MixAndMatchLineGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MixAndMatchLineGroups`.
   * @param dataAreaId Key property. See {@link MixAndMatchLineGroups.dataAreaId}.
   * @param mixAndMatchOfferId Key property. See {@link MixAndMatchLineGroups.mixAndMatchOfferId}.
   * @param mixAndMatchLineGroup Key property. See {@link MixAndMatchLineGroups.mixAndMatchLineGroup}.
   * @returns A request builder for creating requests that delete an entity of type `MixAndMatchLineGroups`.
   */
  delete(
    dataAreaId: string,
    mixAndMatchOfferId: string,
    mixAndMatchLineGroup: string
  ): DeleteRequestBuilder<MixAndMatchLineGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MixAndMatchLineGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MixAndMatchLineGroups` by taking the entity as a parameter.
   */
  delete(
    entity: MixAndMatchLineGroups<T>
  ): DeleteRequestBuilder<MixAndMatchLineGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    mixAndMatchOfferId?: string,
    mixAndMatchLineGroup?: string
  ): DeleteRequestBuilder<MixAndMatchLineGroups<T>, T> {
    return new DeleteRequestBuilder<MixAndMatchLineGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MixAndMatchLineGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MixAndMatchOfferId: mixAndMatchOfferId!,
            MixAndMatchLineGroup: mixAndMatchLineGroup!
          }
    );
  }
}
