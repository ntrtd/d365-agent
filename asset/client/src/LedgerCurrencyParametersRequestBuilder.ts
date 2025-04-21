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
import { LedgerCurrencyParameters } from './LedgerCurrencyParameters';

/**
 * Request builder class for operations supported on the {@link LedgerCurrencyParameters} entity.
 */
export class LedgerCurrencyParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerCurrencyParameters<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerCurrencyParameters` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerCurrencyParameters` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerCurrencyParameters<T>, T> {
    return new GetAllRequestBuilder<LedgerCurrencyParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerCurrencyParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerCurrencyParameters`.
   */
  create(
    entity: LedgerCurrencyParameters<T>
  ): CreateRequestBuilder<LedgerCurrencyParameters<T>, T> {
    return new CreateRequestBuilder<LedgerCurrencyParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerCurrencyParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerCurrencyParameters.dataAreaId}.
   * @param ledgerName Key property. See {@link LedgerCurrencyParameters.ledgerName}.
   * @param currencyCode Key property. See {@link LedgerCurrencyParameters.currencyCode}.
   * @returns A request builder for creating requests to retrieve one `LedgerCurrencyParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ledgerName: DeserializedType<T, 'Edm.String'>,
    currencyCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerCurrencyParameters<T>, T> {
    return new GetByKeyRequestBuilder<LedgerCurrencyParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Ledger_Name: ledgerName,
        CurrencyCode: currencyCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerCurrencyParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerCurrencyParameters`.
   */
  update(
    entity: LedgerCurrencyParameters<T>
  ): UpdateRequestBuilder<LedgerCurrencyParameters<T>, T> {
    return new UpdateRequestBuilder<LedgerCurrencyParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerCurrencyParameters`.
   * @param dataAreaId Key property. See {@link LedgerCurrencyParameters.dataAreaId}.
   * @param ledgerName Key property. See {@link LedgerCurrencyParameters.ledgerName}.
   * @param currencyCode Key property. See {@link LedgerCurrencyParameters.currencyCode}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerCurrencyParameters`.
   */
  delete(
    dataAreaId: string,
    ledgerName: string,
    currencyCode: string
  ): DeleteRequestBuilder<LedgerCurrencyParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerCurrencyParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerCurrencyParameters` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerCurrencyParameters<T>
  ): DeleteRequestBuilder<LedgerCurrencyParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ledgerName?: string,
    currencyCode?: string
  ): DeleteRequestBuilder<LedgerCurrencyParameters<T>, T> {
    return new DeleteRequestBuilder<LedgerCurrencyParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerCurrencyParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Ledger_Name: ledgerName!,
            CurrencyCode: currencyCode!
          }
    );
  }
}
