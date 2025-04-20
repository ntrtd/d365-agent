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
import { TrvExpTableBiEntities } from './TrvExpTableBiEntities';

/**
 * Request builder class for operations supported on the {@link TrvExpTableBiEntities} entity.
 */
export class TrvExpTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<TrvExpTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvExpTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpTableBiEntities`.
   */
  create(
    entity: TrvExpTableBiEntities<T>
  ): CreateRequestBuilder<TrvExpTableBiEntities<T>, T> {
    return new CreateRequestBuilder<TrvExpTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpTableBiEntities` entity based on its keys.
   * @param expNumber Key property. See {@link TrvExpTableBiEntities.expNumber}.
   * @param legalEntity Key property. See {@link TrvExpTableBiEntities.legalEntity}.
   * @returns A request builder for creating requests to retrieve one `TrvExpTableBiEntities` entity based on its keys.
   */
  getByKey(
    expNumber: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TrvExpTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpTableBiEntities<T>, T>(
      this.entityApi,
      {
        ExpNumber: expNumber,
        LegalEntity: legalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpTableBiEntities`.
   */
  update(
    entity: TrvExpTableBiEntities<T>
  ): UpdateRequestBuilder<TrvExpTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<TrvExpTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpTableBiEntities`.
   * @param expNumber Key property. See {@link TrvExpTableBiEntities.expNumber}.
   * @param legalEntity Key property. See {@link TrvExpTableBiEntities.legalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpTableBiEntities`.
   */
  delete(
    expNumber: string,
    legalEntity: BigNumber
  ): DeleteRequestBuilder<TrvExpTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpTableBiEntities<T>
  ): DeleteRequestBuilder<TrvExpTableBiEntities<T>, T>;
  delete(
    expNumberOrEntity: any,
    legalEntity?: BigNumber
  ): DeleteRequestBuilder<TrvExpTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<TrvExpTableBiEntities<T>, T>(
      this.entityApi,
      expNumberOrEntity instanceof TrvExpTableBiEntities
        ? expNumberOrEntity
        : {
            ExpNumber: expNumberOrEntity!,
            LegalEntity: legalEntity!
          }
    );
  }
}
