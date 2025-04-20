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
import { RetailTerminalCounters } from './RetailTerminalCounters';
import { RetailCounterType } from './RetailCounterType';

/**
 * Request builder class for operations supported on the {@link RetailTerminalCounters} entity.
 */
export class RetailTerminalCountersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTerminalCounters<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTerminalCounters` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTerminalCounters` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTerminalCounters<T>, T> {
    return new GetAllRequestBuilder<RetailTerminalCounters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTerminalCounters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTerminalCounters`.
   */
  create(
    entity: RetailTerminalCounters<T>
  ): CreateRequestBuilder<RetailTerminalCounters<T>, T> {
    return new CreateRequestBuilder<RetailTerminalCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTerminalCounters` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTerminalCounters.dataAreaId}.
   * @param store Key property. See {@link RetailTerminalCounters.store}.
   * @param terminal Key property. See {@link RetailTerminalCounters.terminal}.
   * @param counterType Key property. See {@link RetailTerminalCounters.counterType}.
   * @returns A request builder for creating requests to retrieve one `RetailTerminalCounters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    counterType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailCounterType'
    >
  ): GetByKeyRequestBuilder<RetailTerminalCounters<T>, T> {
    return new GetByKeyRequestBuilder<RetailTerminalCounters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Store: store,
        Terminal: terminal,
        CounterType: counterType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTerminalCounters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTerminalCounters`.
   */
  update(
    entity: RetailTerminalCounters<T>
  ): UpdateRequestBuilder<RetailTerminalCounters<T>, T> {
    return new UpdateRequestBuilder<RetailTerminalCounters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTerminalCounters`.
   * @param dataAreaId Key property. See {@link RetailTerminalCounters.dataAreaId}.
   * @param store Key property. See {@link RetailTerminalCounters.store}.
   * @param terminal Key property. See {@link RetailTerminalCounters.terminal}.
   * @param counterType Key property. See {@link RetailTerminalCounters.counterType}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTerminalCounters`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    counterType: RetailCounterType
  ): DeleteRequestBuilder<RetailTerminalCounters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTerminalCounters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTerminalCounters` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTerminalCounters<T>
  ): DeleteRequestBuilder<RetailTerminalCounters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    counterType?: RetailCounterType
  ): DeleteRequestBuilder<RetailTerminalCounters<T>, T> {
    return new DeleteRequestBuilder<RetailTerminalCounters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTerminalCounters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            CounterType: counterType!
          }
    );
  }
}
