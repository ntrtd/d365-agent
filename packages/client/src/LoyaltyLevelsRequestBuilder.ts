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
import { LoyaltyLevels } from './LoyaltyLevels';

/**
 * Request builder class for operations supported on the {@link LoyaltyLevels} entity.
 */
export class LoyaltyLevelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LoyaltyLevels<T>, T> {
  /**
   * Returns a request builder for querying all `LoyaltyLevels` entities.
   * @returns A request builder for creating requests to retrieve all `LoyaltyLevels` entities.
   */
  getAll(): GetAllRequestBuilder<LoyaltyLevels<T>, T> {
    return new GetAllRequestBuilder<LoyaltyLevels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LoyaltyLevels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LoyaltyLevels`.
   */
  create(entity: LoyaltyLevels<T>): CreateRequestBuilder<LoyaltyLevels<T>, T> {
    return new CreateRequestBuilder<LoyaltyLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LoyaltyLevels` entity based on its keys.
   * @param dataAreaId Key property. See {@link LoyaltyLevels.dataAreaId}.
   * @param levelPhrase Key property. See {@link LoyaltyLevels.levelPhrase}.
   * @returns A request builder for creating requests to retrieve one `LoyaltyLevels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    levelPhrase: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LoyaltyLevels<T>, T> {
    return new GetByKeyRequestBuilder<LoyaltyLevels<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      LevelPhrase: levelPhrase
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LoyaltyLevels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LoyaltyLevels`.
   */
  update(entity: LoyaltyLevels<T>): UpdateRequestBuilder<LoyaltyLevels<T>, T> {
    return new UpdateRequestBuilder<LoyaltyLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LoyaltyLevels`.
   * @param dataAreaId Key property. See {@link LoyaltyLevels.dataAreaId}.
   * @param levelPhrase Key property. See {@link LoyaltyLevels.levelPhrase}.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyLevels`.
   */
  delete(
    dataAreaId: string,
    levelPhrase: string
  ): DeleteRequestBuilder<LoyaltyLevels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LoyaltyLevels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LoyaltyLevels` by taking the entity as a parameter.
   */
  delete(entity: LoyaltyLevels<T>): DeleteRequestBuilder<LoyaltyLevels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    levelPhrase?: string
  ): DeleteRequestBuilder<LoyaltyLevels<T>, T> {
    return new DeleteRequestBuilder<LoyaltyLevels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LoyaltyLevels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LevelPhrase: levelPhrase!
          }
    );
  }
}
