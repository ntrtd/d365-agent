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
import { EfDocEmailAccountConfigurationEntities } from './EfDocEmailAccountConfigurationEntities';

/**
 * Request builder class for operations supported on the {@link EfDocEmailAccountConfigurationEntities} entity.
 */
export class EfDocEmailAccountConfigurationEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocEmailAccountConfigurationEntities` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocEmailAccountConfigurationEntities` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T> {
    return new GetAllRequestBuilder<
      EfDocEmailAccountConfigurationEntities<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EfDocEmailAccountConfigurationEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocEmailAccountConfigurationEntities`.
   */
  create(
    entity: EfDocEmailAccountConfigurationEntities<T>
  ): CreateRequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T> {
    return new CreateRequestBuilder<
      EfDocEmailAccountConfigurationEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EfDocEmailAccountConfigurationEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link EfDocEmailAccountConfigurationEntities.dataAreaId}.
   * @param username Key property. See {@link EfDocEmailAccountConfigurationEntities.username}.
   * @returns A request builder for creating requests to retrieve one `EfDocEmailAccountConfigurationEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    username: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T> {
    return new GetByKeyRequestBuilder<
      EfDocEmailAccountConfigurationEntities<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Username: username
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocEmailAccountConfigurationEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocEmailAccountConfigurationEntities`.
   */
  update(
    entity: EfDocEmailAccountConfigurationEntities<T>
  ): UpdateRequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T> {
    return new UpdateRequestBuilder<
      EfDocEmailAccountConfigurationEntities<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocEmailAccountConfigurationEntities`.
   * @param dataAreaId Key property. See {@link EfDocEmailAccountConfigurationEntities.dataAreaId}.
   * @param username Key property. See {@link EfDocEmailAccountConfigurationEntities.username}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocEmailAccountConfigurationEntities`.
   */
  delete(
    dataAreaId: string,
    username: string
  ): DeleteRequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocEmailAccountConfigurationEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocEmailAccountConfigurationEntities` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocEmailAccountConfigurationEntities<T>
  ): DeleteRequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    username?: string
  ): DeleteRequestBuilder<EfDocEmailAccountConfigurationEntities<T>, T> {
    return new DeleteRequestBuilder<
      EfDocEmailAccountConfigurationEntities<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EfDocEmailAccountConfigurationEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Username: username!
          }
    );
  }
}
