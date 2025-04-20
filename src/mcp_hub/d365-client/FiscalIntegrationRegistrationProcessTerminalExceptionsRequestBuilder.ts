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
import { FiscalIntegrationRegistrationProcessTerminalExceptions } from './FiscalIntegrationRegistrationProcessTerminalExceptions';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationRegistrationProcessTerminalExceptions} entity.
 */
export class FiscalIntegrationRegistrationProcessTerminalExceptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
  T
> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationRegistrationProcessTerminalExceptions` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationRegistrationProcessTerminalExceptions` entities.
   */
  getAll(): GetAllRequestBuilder<
    FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationRegistrationProcessTerminalExceptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationRegistrationProcessTerminalExceptions`.
   */
  create(
    entity: FiscalIntegrationRegistrationProcessTerminalExceptions<T>
  ): CreateRequestBuilder<
    FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
    T
  > {
    return new CreateRequestBuilder<
      FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationRegistrationProcessTerminalExceptions` entity based on its keys.
   * @param processNumber Key property. See {@link FiscalIntegrationRegistrationProcessTerminalExceptions.processNumber}.
   * @param terminalNumber Key property. See {@link FiscalIntegrationRegistrationProcessTerminalExceptions.terminalNumber}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationRegistrationProcessTerminalExceptions` entity based on its keys.
   */
  getByKey(
    processNumber: DeserializedType<T, 'Edm.String'>,
    terminalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
      T
    >(this.entityApi, {
      ProcessNumber: processNumber,
      TerminalNumber: terminalNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationRegistrationProcessTerminalExceptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationRegistrationProcessTerminalExceptions`.
   */
  update(
    entity: FiscalIntegrationRegistrationProcessTerminalExceptions<T>
  ): UpdateRequestBuilder<
    FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
    T
  > {
    return new UpdateRequestBuilder<
      FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationRegistrationProcessTerminalExceptions`.
   * @param processNumber Key property. See {@link FiscalIntegrationRegistrationProcessTerminalExceptions.processNumber}.
   * @param terminalNumber Key property. See {@link FiscalIntegrationRegistrationProcessTerminalExceptions.terminalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationRegistrationProcessTerminalExceptions`.
   */
  delete(
    processNumber: string,
    terminalNumber: string
  ): DeleteRequestBuilder<
    FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationRegistrationProcessTerminalExceptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationRegistrationProcessTerminalExceptions` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationRegistrationProcessTerminalExceptions<T>
  ): DeleteRequestBuilder<
    FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
    T
  >;
  delete(
    processNumberOrEntity: any,
    terminalNumber?: string
  ): DeleteRequestBuilder<
    FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
    T
  > {
    return new DeleteRequestBuilder<
      FiscalIntegrationRegistrationProcessTerminalExceptions<T>,
      T
    >(
      this.entityApi,
      processNumberOrEntity instanceof
      FiscalIntegrationRegistrationProcessTerminalExceptions
        ? processNumberOrEntity
        : {
            ProcessNumber: processNumberOrEntity!,
            TerminalNumber: terminalNumber!
          }
    );
  }
}
