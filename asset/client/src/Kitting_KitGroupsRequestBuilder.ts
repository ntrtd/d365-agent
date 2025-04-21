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
import { Kitting_KitGroups } from './Kitting_KitGroups';

/**
 * Request builder class for operations supported on the {@link Kitting_KitGroups} entity.
 */
export class Kitting_KitGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Kitting_KitGroups<T>, T> {
  /**
   * Returns a request builder for querying all `Kitting_KitGroups` entities.
   * @returns A request builder for creating requests to retrieve all `Kitting_KitGroups` entities.
   */
  getAll(): GetAllRequestBuilder<Kitting_KitGroups<T>, T> {
    return new GetAllRequestBuilder<Kitting_KitGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Kitting_KitGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Kitting_KitGroups`.
   */
  create(
    entity: Kitting_KitGroups<T>
  ): CreateRequestBuilder<Kitting_KitGroups<T>, T> {
    return new CreateRequestBuilder<Kitting_KitGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Kitting_KitGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link Kitting_KitGroups.dataAreaId}.
   * @param kitGroup Key property. See {@link Kitting_KitGroups.kitGroup}.
   * @returns A request builder for creating requests to retrieve one `Kitting_KitGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    kitGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Kitting_KitGroups<T>, T> {
    return new GetByKeyRequestBuilder<Kitting_KitGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      KitGroup: kitGroup
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Kitting_KitGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Kitting_KitGroups`.
   */
  update(
    entity: Kitting_KitGroups<T>
  ): UpdateRequestBuilder<Kitting_KitGroups<T>, T> {
    return new UpdateRequestBuilder<Kitting_KitGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Kitting_KitGroups`.
   * @param dataAreaId Key property. See {@link Kitting_KitGroups.dataAreaId}.
   * @param kitGroup Key property. See {@link Kitting_KitGroups.kitGroup}.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_KitGroups`.
   */
  delete(
    dataAreaId: string,
    kitGroup: string
  ): DeleteRequestBuilder<Kitting_KitGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Kitting_KitGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Kitting_KitGroups` by taking the entity as a parameter.
   */
  delete(
    entity: Kitting_KitGroups<T>
  ): DeleteRequestBuilder<Kitting_KitGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    kitGroup?: string
  ): DeleteRequestBuilder<Kitting_KitGroups<T>, T> {
    return new DeleteRequestBuilder<Kitting_KitGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Kitting_KitGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            KitGroup: kitGroup!
          }
    );
  }
}
