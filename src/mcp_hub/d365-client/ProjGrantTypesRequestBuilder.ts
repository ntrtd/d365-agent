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
import { ProjGrantTypes } from './ProjGrantTypes';

/**
 * Request builder class for operations supported on the {@link ProjGrantTypes} entity.
 */
export class ProjGrantTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjGrantTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ProjGrantTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ProjGrantTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ProjGrantTypes<T>, T> {
    return new GetAllRequestBuilder<ProjGrantTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjGrantTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjGrantTypes`.
   */
  create(
    entity: ProjGrantTypes<T>
  ): CreateRequestBuilder<ProjGrantTypes<T>, T> {
    return new CreateRequestBuilder<ProjGrantTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjGrantTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjGrantTypes.dataAreaId}.
   * @param grantType Key property. See {@link ProjGrantTypes.grantType}.
   * @returns A request builder for creating requests to retrieve one `ProjGrantTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    grantType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjGrantTypes<T>, T> {
    return new GetByKeyRequestBuilder<ProjGrantTypes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GrantType: grantType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjGrantTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjGrantTypes`.
   */
  update(
    entity: ProjGrantTypes<T>
  ): UpdateRequestBuilder<ProjGrantTypes<T>, T> {
    return new UpdateRequestBuilder<ProjGrantTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjGrantTypes`.
   * @param dataAreaId Key property. See {@link ProjGrantTypes.dataAreaId}.
   * @param grantType Key property. See {@link ProjGrantTypes.grantType}.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantTypes`.
   */
  delete(
    dataAreaId: string,
    grantType: string
  ): DeleteRequestBuilder<ProjGrantTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjGrantTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjGrantTypes` by taking the entity as a parameter.
   */
  delete(entity: ProjGrantTypes<T>): DeleteRequestBuilder<ProjGrantTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    grantType?: string
  ): DeleteRequestBuilder<ProjGrantTypes<T>, T> {
    return new DeleteRequestBuilder<ProjGrantTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjGrantTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GrantType: grantType!
          }
    );
  }
}
