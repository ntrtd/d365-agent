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
import { CurrencyParameters } from './CurrencyParameters';

/**
 * Request builder class for operations supported on the {@link CurrencyParameters} entity.
 */
export class CurrencyParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyParameters<T>, T> {
  /**
   * Returns a request builder for querying all `CurrencyParameters` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyParameters` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyParameters<T>, T> {
    return new GetAllRequestBuilder<CurrencyParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrencyParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyParameters`.
   */
  create(
    entity: CurrencyParameters<T>
  ): CreateRequestBuilder<CurrencyParameters<T>, T> {
    return new CreateRequestBuilder<CurrencyParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CurrencyParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link CurrencyParameters.dataAreaId}.
   * @param ledgerName Key property. See {@link CurrencyParameters.ledgerName}.
   * @param currency Key property. See {@link CurrencyParameters.currency}.
   * @returns A request builder for creating requests to retrieve one `CurrencyParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ledgerName: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CurrencyParameters<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Ledger_Name: ledgerName,
        Currency: currency
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyParameters`.
   */
  update(
    entity: CurrencyParameters<T>
  ): UpdateRequestBuilder<CurrencyParameters<T>, T> {
    return new UpdateRequestBuilder<CurrencyParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyParameters`.
   * @param dataAreaId Key property. See {@link CurrencyParameters.dataAreaId}.
   * @param ledgerName Key property. See {@link CurrencyParameters.ledgerName}.
   * @param currency Key property. See {@link CurrencyParameters.currency}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyParameters`.
   */
  delete(
    dataAreaId: string,
    ledgerName: string,
    currency: string
  ): DeleteRequestBuilder<CurrencyParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyParameters` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyParameters<T>
  ): DeleteRequestBuilder<CurrencyParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ledgerName?: string,
    currency?: string
  ): DeleteRequestBuilder<CurrencyParameters<T>, T> {
    return new DeleteRequestBuilder<CurrencyParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CurrencyParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Ledger_Name: ledgerName!,
            Currency: currency!
          }
    );
  }
}
