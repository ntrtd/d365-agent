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
import { CashFlowForecastExternalSourceEntries } from './CashFlowForecastExternalSourceEntries';

/**
 * Request builder class for operations supported on the {@link CashFlowForecastExternalSourceEntries} entity.
 */
export class CashFlowForecastExternalSourceEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashFlowForecastExternalSourceEntries<T>, T> {
  /**
   * Returns a request builder for querying all `CashFlowForecastExternalSourceEntries` entities.
   * @returns A request builder for creating requests to retrieve all `CashFlowForecastExternalSourceEntries` entities.
   */
  getAll(): GetAllRequestBuilder<CashFlowForecastExternalSourceEntries<T>, T> {
    return new GetAllRequestBuilder<
      CashFlowForecastExternalSourceEntries<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashFlowForecastExternalSourceEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashFlowForecastExternalSourceEntries`.
   */
  create(
    entity: CashFlowForecastExternalSourceEntries<T>
  ): CreateRequestBuilder<CashFlowForecastExternalSourceEntries<T>, T> {
    return new CreateRequestBuilder<
      CashFlowForecastExternalSourceEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CashFlowForecastExternalSourceEntries` entity based on its keys.
   * @param entryId Key property. See {@link CashFlowForecastExternalSourceEntries.entryId}.
   * @returns A request builder for creating requests to retrieve one `CashFlowForecastExternalSourceEntries` entity based on its keys.
   */
  getByKey(
    entryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CashFlowForecastExternalSourceEntries<T>, T> {
    return new GetByKeyRequestBuilder<
      CashFlowForecastExternalSourceEntries<T>,
      T
    >(this.entityApi, { EntryId: entryId });
  }

  /**
   * Returns a request builder for updating an entity of type `CashFlowForecastExternalSourceEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashFlowForecastExternalSourceEntries`.
   */
  update(
    entity: CashFlowForecastExternalSourceEntries<T>
  ): UpdateRequestBuilder<CashFlowForecastExternalSourceEntries<T>, T> {
    return new UpdateRequestBuilder<
      CashFlowForecastExternalSourceEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CashFlowForecastExternalSourceEntries`.
   * @param entryId Key property. See {@link CashFlowForecastExternalSourceEntries.entryId}.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowForecastExternalSourceEntries`.
   */
  delete(
    entryId: string
  ): DeleteRequestBuilder<CashFlowForecastExternalSourceEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashFlowForecastExternalSourceEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashFlowForecastExternalSourceEntries` by taking the entity as a parameter.
   */
  delete(
    entity: CashFlowForecastExternalSourceEntries<T>
  ): DeleteRequestBuilder<CashFlowForecastExternalSourceEntries<T>, T>;
  delete(
    entryIdOrEntity: any
  ): DeleteRequestBuilder<CashFlowForecastExternalSourceEntries<T>, T> {
    return new DeleteRequestBuilder<
      CashFlowForecastExternalSourceEntries<T>,
      T
    >(
      this.entityApi,
      entryIdOrEntity instanceof CashFlowForecastExternalSourceEntries
        ? entryIdOrEntity
        : { EntryId: entryIdOrEntity! }
    );
  }
}
