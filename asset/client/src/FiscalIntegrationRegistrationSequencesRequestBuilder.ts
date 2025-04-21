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
import { FiscalIntegrationRegistrationSequences } from './FiscalIntegrationRegistrationSequences';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationRegistrationSequences} entity.
 */
export class FiscalIntegrationRegistrationSequencesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationRegistrationSequences<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationRegistrationSequences` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationRegistrationSequences` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalIntegrationRegistrationSequences<T>, T> {
    return new GetAllRequestBuilder<
      FiscalIntegrationRegistrationSequences<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationRegistrationSequences` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationRegistrationSequences`.
   */
  create(
    entity: FiscalIntegrationRegistrationSequences<T>
  ): CreateRequestBuilder<FiscalIntegrationRegistrationSequences<T>, T> {
    return new CreateRequestBuilder<
      FiscalIntegrationRegistrationSequences<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationRegistrationSequences` entity based on its keys.
   * @param store Key property. See {@link FiscalIntegrationRegistrationSequences.store}.
   * @param terminal Key property. See {@link FiscalIntegrationRegistrationSequences.terminal}.
   * @param sequenceKey Key property. See {@link FiscalIntegrationRegistrationSequences.sequenceKey}.
   * @param isOffline Key property. See {@link FiscalIntegrationRegistrationSequences.isOffline}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationRegistrationSequences` entity based on its keys.
   */
  getByKey(
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    sequenceKey: DeserializedType<T, 'Edm.String'>,
    isOffline: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.NoYes'>
  ): GetByKeyRequestBuilder<FiscalIntegrationRegistrationSequences<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationRegistrationSequences<T>,
      T
    >(this.entityApi, {
      Store: store,
      Terminal: terminal,
      SequenceKey: sequenceKey,
      IsOffline: isOffline
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationRegistrationSequences`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationRegistrationSequences`.
   */
  update(
    entity: FiscalIntegrationRegistrationSequences<T>
  ): UpdateRequestBuilder<FiscalIntegrationRegistrationSequences<T>, T> {
    return new UpdateRequestBuilder<
      FiscalIntegrationRegistrationSequences<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationRegistrationSequences`.
   * @param store Key property. See {@link FiscalIntegrationRegistrationSequences.store}.
   * @param terminal Key property. See {@link FiscalIntegrationRegistrationSequences.terminal}.
   * @param sequenceKey Key property. See {@link FiscalIntegrationRegistrationSequences.sequenceKey}.
   * @param isOffline Key property. See {@link FiscalIntegrationRegistrationSequences.isOffline}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationRegistrationSequences`.
   */
  delete(
    store: string,
    terminal: string,
    sequenceKey: string,
    isOffline: NoYes
  ): DeleteRequestBuilder<FiscalIntegrationRegistrationSequences<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationRegistrationSequences`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationRegistrationSequences` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationRegistrationSequences<T>
  ): DeleteRequestBuilder<FiscalIntegrationRegistrationSequences<T>, T>;
  delete(
    storeOrEntity: any,
    terminal?: string,
    sequenceKey?: string,
    isOffline?: NoYes
  ): DeleteRequestBuilder<FiscalIntegrationRegistrationSequences<T>, T> {
    return new DeleteRequestBuilder<
      FiscalIntegrationRegistrationSequences<T>,
      T
    >(
      this.entityApi,
      storeOrEntity instanceof FiscalIntegrationRegistrationSequences
        ? storeOrEntity
        : {
            Store: storeOrEntity!,
            Terminal: terminal!,
            SequenceKey: sequenceKey!,
            IsOffline: isOffline!
          }
    );
  }
}
