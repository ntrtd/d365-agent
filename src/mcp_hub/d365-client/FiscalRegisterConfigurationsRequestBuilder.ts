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
import { FiscalRegisterConfigurations } from './FiscalRegisterConfigurations';

/**
 * Request builder class for operations supported on the {@link FiscalRegisterConfigurations} entity.
 */
export class FiscalRegisterConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalRegisterConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalRegisterConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalRegisterConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalRegisterConfigurations<T>, T> {
    return new GetAllRequestBuilder<FiscalRegisterConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalRegisterConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalRegisterConfigurations`.
   */
  create(
    entity: FiscalRegisterConfigurations<T>
  ): CreateRequestBuilder<FiscalRegisterConfigurations<T>, T> {
    return new CreateRequestBuilder<FiscalRegisterConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalRegisterConfigurations` entity based on its keys.
   * @param configurationId Key property. See {@link FiscalRegisterConfigurations.configurationId}.
   * @returns A request builder for creating requests to retrieve one `FiscalRegisterConfigurations` entity based on its keys.
   */
  getByKey(
    configurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalRegisterConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<FiscalRegisterConfigurations<T>, T>(
      this.entityApi,
      { ConfigurationId: configurationId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalRegisterConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalRegisterConfigurations`.
   */
  update(
    entity: FiscalRegisterConfigurations<T>
  ): UpdateRequestBuilder<FiscalRegisterConfigurations<T>, T> {
    return new UpdateRequestBuilder<FiscalRegisterConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalRegisterConfigurations`.
   * @param configurationId Key property. See {@link FiscalRegisterConfigurations.configurationId}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalRegisterConfigurations`.
   */
  delete(
    configurationId: string
  ): DeleteRequestBuilder<FiscalRegisterConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalRegisterConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalRegisterConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalRegisterConfigurations<T>
  ): DeleteRequestBuilder<FiscalRegisterConfigurations<T>, T>;
  delete(
    configurationIdOrEntity: any
  ): DeleteRequestBuilder<FiscalRegisterConfigurations<T>, T> {
    return new DeleteRequestBuilder<FiscalRegisterConfigurations<T>, T>(
      this.entityApi,
      configurationIdOrEntity instanceof FiscalRegisterConfigurations
        ? configurationIdOrEntity
        : { ConfigurationId: configurationIdOrEntity! }
    );
  }
}
