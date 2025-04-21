/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { BankAccountTransBiEntities } from './BankAccountTransBiEntities';

/**
 * Request builder class for operations supported on the {@link BankAccountTransBiEntities} entity.
 */
export class BankAccountTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccountTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccountTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccountTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<BankAccountTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<BankAccountTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BankAccountTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccountTransBiEntities`.
   */
  create(
    entity: BankAccountTransBiEntities<T>
  ): CreateRequestBuilder<BankAccountTransBiEntities<T>, T> {
    return new CreateRequestBuilder<BankAccountTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankAccountTransBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankAccountTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankAccountTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `BankAccountTransBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<BankAccountTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<BankAccountTransBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccountTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccountTransBiEntities`.
   */
  update(
    entity: BankAccountTransBiEntities<T>
  ): UpdateRequestBuilder<BankAccountTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<BankAccountTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccountTransBiEntities`.
   * @param dataAreaId Key property. See {@link BankAccountTransBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link BankAccountTransBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountTransBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<BankAccountTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccountTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: BankAccountTransBiEntities<T>
  ): DeleteRequestBuilder<BankAccountTransBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<BankAccountTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<BankAccountTransBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankAccountTransBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
