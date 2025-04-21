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
import { FiscalIntegrationRegistrationProcesses } from './FiscalIntegrationRegistrationProcesses';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationRegistrationProcesses} entity.
 */
export class FiscalIntegrationRegistrationProcessesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationRegistrationProcesses` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationRegistrationProcesses` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T> {
    return new GetAllRequestBuilder<
      FiscalIntegrationRegistrationProcesses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationRegistrationProcesses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationRegistrationProcesses`.
   */
  create(
    entity: FiscalIntegrationRegistrationProcesses<T>
  ): CreateRequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T> {
    return new CreateRequestBuilder<
      FiscalIntegrationRegistrationProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationRegistrationProcesses` entity based on its keys.
   * @param processNumber Key property. See {@link FiscalIntegrationRegistrationProcesses.processNumber}.
   * @param sequence Key property. See {@link FiscalIntegrationRegistrationProcesses.sequence}.
   * @param priority Key property. See {@link FiscalIntegrationRegistrationProcesses.priority}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationRegistrationProcesses` entity based on its keys.
   */
  getByKey(
    processNumber: DeserializedType<T, 'Edm.String'>,
    sequence: DeserializedType<T, 'Edm.Int32'>,
    priority: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T> {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationRegistrationProcesses<T>,
      T
    >(this.entityApi, {
      ProcessNumber: processNumber,
      Sequence: sequence,
      Priority: priority
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationRegistrationProcesses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationRegistrationProcesses`.
   */
  update(
    entity: FiscalIntegrationRegistrationProcesses<T>
  ): UpdateRequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T> {
    return new UpdateRequestBuilder<
      FiscalIntegrationRegistrationProcesses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationRegistrationProcesses`.
   * @param processNumber Key property. See {@link FiscalIntegrationRegistrationProcesses.processNumber}.
   * @param sequence Key property. See {@link FiscalIntegrationRegistrationProcesses.sequence}.
   * @param priority Key property. See {@link FiscalIntegrationRegistrationProcesses.priority}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationRegistrationProcesses`.
   */
  delete(
    processNumber: string,
    sequence: number,
    priority: number
  ): DeleteRequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationRegistrationProcesses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationRegistrationProcesses` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationRegistrationProcesses<T>
  ): DeleteRequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T>;
  delete(
    processNumberOrEntity: any,
    sequence?: number,
    priority?: number
  ): DeleteRequestBuilder<FiscalIntegrationRegistrationProcesses<T>, T> {
    return new DeleteRequestBuilder<
      FiscalIntegrationRegistrationProcesses<T>,
      T
    >(
      this.entityApi,
      processNumberOrEntity instanceof FiscalIntegrationRegistrationProcesses
        ? processNumberOrEntity
        : {
            ProcessNumber: processNumberOrEntity!,
            Sequence: sequence!,
            Priority: priority!
          }
    );
  }
}
