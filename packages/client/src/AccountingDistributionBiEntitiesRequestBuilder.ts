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
import { AccountingDistributionBiEntities } from './AccountingDistributionBiEntities';

/**
 * Request builder class for operations supported on the {@link AccountingDistributionBiEntities} entity.
 */
export class AccountingDistributionBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AccountingDistributionBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `AccountingDistributionBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `AccountingDistributionBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<AccountingDistributionBiEntities<T>, T> {
    return new GetAllRequestBuilder<AccountingDistributionBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AccountingDistributionBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AccountingDistributionBiEntities`.
   */
  create(
    entity: AccountingDistributionBiEntities<T>
  ): CreateRequestBuilder<AccountingDistributionBiEntities<T>, T> {
    return new CreateRequestBuilder<AccountingDistributionBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AccountingDistributionBiEntities` entity based on its keys.
   * @param sourceDocumentLine Key property. See {@link AccountingDistributionBiEntities.sourceDocumentLine}.
   * @param number Key property. See {@link AccountingDistributionBiEntities.number}.
   * @returns A request builder for creating requests to retrieve one `AccountingDistributionBiEntities` entity based on its keys.
   */
  getByKey(
    sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>,
    number: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AccountingDistributionBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<AccountingDistributionBiEntities<T>, T>(
      this.entityApi,
      {
        SourceDocumentLine: sourceDocumentLine,
        Number: number
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AccountingDistributionBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AccountingDistributionBiEntities`.
   */
  update(
    entity: AccountingDistributionBiEntities<T>
  ): UpdateRequestBuilder<AccountingDistributionBiEntities<T>, T> {
    return new UpdateRequestBuilder<AccountingDistributionBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AccountingDistributionBiEntities`.
   * @param sourceDocumentLine Key property. See {@link AccountingDistributionBiEntities.sourceDocumentLine}.
   * @param number Key property. See {@link AccountingDistributionBiEntities.number}.
   * @returns A request builder for creating requests that delete an entity of type `AccountingDistributionBiEntities`.
   */
  delete(
    sourceDocumentLine: BigNumber,
    number: BigNumber
  ): DeleteRequestBuilder<AccountingDistributionBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AccountingDistributionBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AccountingDistributionBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: AccountingDistributionBiEntities<T>
  ): DeleteRequestBuilder<AccountingDistributionBiEntities<T>, T>;
  delete(
    sourceDocumentLineOrEntity: any,
    number?: BigNumber
  ): DeleteRequestBuilder<AccountingDistributionBiEntities<T>, T> {
    return new DeleteRequestBuilder<AccountingDistributionBiEntities<T>, T>(
      this.entityApi,
      sourceDocumentLineOrEntity instanceof AccountingDistributionBiEntities
        ? sourceDocumentLineOrEntity
        : {
            SourceDocumentLine: sourceDocumentLineOrEntity!,
            Number: number!
          }
    );
  }
}
