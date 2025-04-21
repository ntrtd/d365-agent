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
import { PriceComponentCodePostingProfiles } from './PriceComponentCodePostingProfiles';

/**
 * Request builder class for operations supported on the {@link PriceComponentCodePostingProfiles} entity.
 */
export class PriceComponentCodePostingProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceComponentCodePostingProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `PriceComponentCodePostingProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `PriceComponentCodePostingProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<PriceComponentCodePostingProfiles<T>, T> {
    return new GetAllRequestBuilder<PriceComponentCodePostingProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PriceComponentCodePostingProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceComponentCodePostingProfiles`.
   */
  create(
    entity: PriceComponentCodePostingProfiles<T>
  ): CreateRequestBuilder<PriceComponentCodePostingProfiles<T>, T> {
    return new CreateRequestBuilder<PriceComponentCodePostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PriceComponentCodePostingProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link PriceComponentCodePostingProfiles.dataAreaId}.
   * @param name Key property. See {@link PriceComponentCodePostingProfiles.name}.
   * @returns A request builder for creating requests to retrieve one `PriceComponentCodePostingProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PriceComponentCodePostingProfiles<T>, T> {
    return new GetByKeyRequestBuilder<PriceComponentCodePostingProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceComponentCodePostingProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceComponentCodePostingProfiles`.
   */
  update(
    entity: PriceComponentCodePostingProfiles<T>
  ): UpdateRequestBuilder<PriceComponentCodePostingProfiles<T>, T> {
    return new UpdateRequestBuilder<PriceComponentCodePostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodePostingProfiles`.
   * @param dataAreaId Key property. See {@link PriceComponentCodePostingProfiles.dataAreaId}.
   * @param name Key property. See {@link PriceComponentCodePostingProfiles.name}.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodePostingProfiles`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<PriceComponentCodePostingProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceComponentCodePostingProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceComponentCodePostingProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: PriceComponentCodePostingProfiles<T>
  ): DeleteRequestBuilder<PriceComponentCodePostingProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<PriceComponentCodePostingProfiles<T>, T> {
    return new DeleteRequestBuilder<PriceComponentCodePostingProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PriceComponentCodePostingProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
