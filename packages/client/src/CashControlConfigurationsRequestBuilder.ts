/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { CashControlConfigurations } from './CashControlConfigurations';

/**
 * Request builder class for operations supported on the {@link CashControlConfigurations} entity.
 */
export class CashControlConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashControlConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `CashControlConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `CashControlConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<CashControlConfigurations<T>, T> {
    return new GetAllRequestBuilder<CashControlConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CashControlConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashControlConfigurations`.
   */
  create(
    entity: CashControlConfigurations<T>
  ): CreateRequestBuilder<CashControlConfigurations<T>, T> {
    return new CreateRequestBuilder<CashControlConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }
}
