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
import { Seasons } from './Seasons';

/**
 * Request builder class for operations supported on the {@link Seasons} entity.
 */
export class SeasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Seasons<T>, T> {
  /**
   * Returns a request builder for querying all `Seasons` entities.
   * @returns A request builder for creating requests to retrieve all `Seasons` entities.
   */
  getAll(): GetAllRequestBuilder<Seasons<T>, T> {
    return new GetAllRequestBuilder<Seasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Seasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Seasons`.
   */
  create(entity: Seasons<T>): CreateRequestBuilder<Seasons<T>, T> {
    return new CreateRequestBuilder<Seasons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Seasons` entity based on its keys.
   * @param dataAreaId Key property. See {@link Seasons.dataAreaId}.
   * @param seasonCode Key property. See {@link Seasons.seasonCode}.
   * @returns A request builder for creating requests to retrieve one `Seasons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    seasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Seasons<T>, T> {
    return new GetByKeyRequestBuilder<Seasons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SeasonCode: seasonCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Seasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Seasons`.
   */
  update(entity: Seasons<T>): UpdateRequestBuilder<Seasons<T>, T> {
    return new UpdateRequestBuilder<Seasons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Seasons`.
   * @param dataAreaId Key property. See {@link Seasons.dataAreaId}.
   * @param seasonCode Key property. See {@link Seasons.seasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `Seasons`.
   */
  delete(
    dataAreaId: string,
    seasonCode: string
  ): DeleteRequestBuilder<Seasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Seasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Seasons` by taking the entity as a parameter.
   */
  delete(entity: Seasons<T>): DeleteRequestBuilder<Seasons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    seasonCode?: string
  ): DeleteRequestBuilder<Seasons<T>, T> {
    return new DeleteRequestBuilder<Seasons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Seasons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SeasonCode: seasonCode!
          }
    );
  }
}
