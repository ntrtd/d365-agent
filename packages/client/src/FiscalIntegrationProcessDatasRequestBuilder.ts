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
import { FiscalIntegrationProcessDatas } from './FiscalIntegrationProcessDatas';

/**
 * Request builder class for operations supported on the {@link FiscalIntegrationProcessDatas} entity.
 */
export class FiscalIntegrationProcessDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalIntegrationProcessDatas<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalIntegrationProcessDatas` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalIntegrationProcessDatas` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalIntegrationProcessDatas<T>, T> {
    return new GetAllRequestBuilder<FiscalIntegrationProcessDatas<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalIntegrationProcessDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalIntegrationProcessDatas`.
   */
  create(
    entity: FiscalIntegrationProcessDatas<T>
  ): CreateRequestBuilder<FiscalIntegrationProcessDatas<T>, T> {
    return new CreateRequestBuilder<FiscalIntegrationProcessDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalIntegrationProcessDatas` entity based on its keys.
   * @param terminal Key property. See {@link FiscalIntegrationProcessDatas.terminal}.
   * @param channel Key property. See {@link FiscalIntegrationProcessDatas.channel}.
   * @param store Key property. See {@link FiscalIntegrationProcessDatas.store}.
   * @returns A request builder for creating requests to retrieve one `FiscalIntegrationProcessDatas` entity based on its keys.
   */
  getByKey(
    terminal: DeserializedType<T, 'Edm.String'>,
    channel: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalIntegrationProcessDatas<T>, T> {
    return new GetByKeyRequestBuilder<FiscalIntegrationProcessDatas<T>, T>(
      this.entityApi,
      {
        Terminal: terminal,
        Channel: channel,
        Store: store
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalIntegrationProcessDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalIntegrationProcessDatas`.
   */
  update(
    entity: FiscalIntegrationProcessDatas<T>
  ): UpdateRequestBuilder<FiscalIntegrationProcessDatas<T>, T> {
    return new UpdateRequestBuilder<FiscalIntegrationProcessDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationProcessDatas`.
   * @param terminal Key property. See {@link FiscalIntegrationProcessDatas.terminal}.
   * @param channel Key property. See {@link FiscalIntegrationProcessDatas.channel}.
   * @param store Key property. See {@link FiscalIntegrationProcessDatas.store}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationProcessDatas`.
   */
  delete(
    terminal: string,
    channel: string,
    store: string
  ): DeleteRequestBuilder<FiscalIntegrationProcessDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalIntegrationProcessDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalIntegrationProcessDatas` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalIntegrationProcessDatas<T>
  ): DeleteRequestBuilder<FiscalIntegrationProcessDatas<T>, T>;
  delete(
    terminalOrEntity: any,
    channel?: string,
    store?: string
  ): DeleteRequestBuilder<FiscalIntegrationProcessDatas<T>, T> {
    return new DeleteRequestBuilder<FiscalIntegrationProcessDatas<T>, T>(
      this.entityApi,
      terminalOrEntity instanceof FiscalIntegrationProcessDatas
        ? terminalOrEntity
        : {
            Terminal: terminalOrEntity!,
            Channel: channel!,
            Store: store!
          }
    );
  }
}
