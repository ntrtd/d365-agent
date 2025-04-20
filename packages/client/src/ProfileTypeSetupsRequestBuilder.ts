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
import { ProfileTypeSetups } from './ProfileTypeSetups';
import { InventProfileTypeRu } from './InventProfileTypeRu';

/**
 * Request builder class for operations supported on the {@link ProfileTypeSetups} entity.
 */
export class ProfileTypeSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProfileTypeSetups<T>, T> {
  /**
   * Returns a request builder for querying all `ProfileTypeSetups` entities.
   * @returns A request builder for creating requests to retrieve all `ProfileTypeSetups` entities.
   */
  getAll(): GetAllRequestBuilder<ProfileTypeSetups<T>, T> {
    return new GetAllRequestBuilder<ProfileTypeSetups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProfileTypeSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProfileTypeSetups`.
   */
  create(
    entity: ProfileTypeSetups<T>
  ): CreateRequestBuilder<ProfileTypeSetups<T>, T> {
    return new CreateRequestBuilder<ProfileTypeSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProfileTypeSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProfileTypeSetups.dataAreaId}.
   * @param kindOfActivity Key property. See {@link ProfileTypeSetups.kindOfActivity}.
   * @returns A request builder for creating requests to retrieve one `ProfileTypeSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    kindOfActivity: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.InventProfileType_RU'
    >
  ): GetByKeyRequestBuilder<ProfileTypeSetups<T>, T> {
    return new GetByKeyRequestBuilder<ProfileTypeSetups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      KindOfActivity: kindOfActivity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProfileTypeSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProfileTypeSetups`.
   */
  update(
    entity: ProfileTypeSetups<T>
  ): UpdateRequestBuilder<ProfileTypeSetups<T>, T> {
    return new UpdateRequestBuilder<ProfileTypeSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProfileTypeSetups`.
   * @param dataAreaId Key property. See {@link ProfileTypeSetups.dataAreaId}.
   * @param kindOfActivity Key property. See {@link ProfileTypeSetups.kindOfActivity}.
   * @returns A request builder for creating requests that delete an entity of type `ProfileTypeSetups`.
   */
  delete(
    dataAreaId: string,
    kindOfActivity: InventProfileTypeRu
  ): DeleteRequestBuilder<ProfileTypeSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProfileTypeSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProfileTypeSetups` by taking the entity as a parameter.
   */
  delete(
    entity: ProfileTypeSetups<T>
  ): DeleteRequestBuilder<ProfileTypeSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    kindOfActivity?: InventProfileTypeRu
  ): DeleteRequestBuilder<ProfileTypeSetups<T>, T> {
    return new DeleteRequestBuilder<ProfileTypeSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProfileTypeSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            KindOfActivity: kindOfActivity!
          }
    );
  }
}
