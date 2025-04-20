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
import { FiscalCloseLedgerOptions } from './FiscalCloseLedgerOptions';

/**
 * Request builder class for operations supported on the {@link FiscalCloseLedgerOptions} entity.
 */
export class FiscalCloseLedgerOptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalCloseLedgerOptions<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalCloseLedgerOptions` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalCloseLedgerOptions` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalCloseLedgerOptions<T>, T> {
    return new GetAllRequestBuilder<FiscalCloseLedgerOptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalCloseLedgerOptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalCloseLedgerOptions`.
   */
  create(
    entity: FiscalCloseLedgerOptions<T>
  ): CreateRequestBuilder<FiscalCloseLedgerOptions<T>, T> {
    return new CreateRequestBuilder<FiscalCloseLedgerOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalCloseLedgerOptions` entity based on its keys.
   * @param ledgerFiscalCloseGroupName Key property. See {@link FiscalCloseLedgerOptions.ledgerFiscalCloseGroupName}.
   * @param legalEntity Key property. See {@link FiscalCloseLedgerOptions.legalEntity}.
   * @returns A request builder for creating requests to retrieve one `FiscalCloseLedgerOptions` entity based on its keys.
   */
  getByKey(
    ledgerFiscalCloseGroupName: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FiscalCloseLedgerOptions<T>, T> {
    return new GetByKeyRequestBuilder<FiscalCloseLedgerOptions<T>, T>(
      this.entityApi,
      {
        LedgerFiscalCloseGroupName: ledgerFiscalCloseGroupName,
        LegalEntity: legalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalCloseLedgerOptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalCloseLedgerOptions`.
   */
  update(
    entity: FiscalCloseLedgerOptions<T>
  ): UpdateRequestBuilder<FiscalCloseLedgerOptions<T>, T> {
    return new UpdateRequestBuilder<FiscalCloseLedgerOptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalCloseLedgerOptions`.
   * @param ledgerFiscalCloseGroupName Key property. See {@link FiscalCloseLedgerOptions.ledgerFiscalCloseGroupName}.
   * @param legalEntity Key property. See {@link FiscalCloseLedgerOptions.legalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCloseLedgerOptions`.
   */
  delete(
    ledgerFiscalCloseGroupName: string,
    legalEntity: string
  ): DeleteRequestBuilder<FiscalCloseLedgerOptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalCloseLedgerOptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalCloseLedgerOptions` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalCloseLedgerOptions<T>
  ): DeleteRequestBuilder<FiscalCloseLedgerOptions<T>, T>;
  delete(
    ledgerFiscalCloseGroupNameOrEntity: any,
    legalEntity?: string
  ): DeleteRequestBuilder<FiscalCloseLedgerOptions<T>, T> {
    return new DeleteRequestBuilder<FiscalCloseLedgerOptions<T>, T>(
      this.entityApi,
      ledgerFiscalCloseGroupNameOrEntity instanceof FiscalCloseLedgerOptions
        ? ledgerFiscalCloseGroupNameOrEntity
        : {
            LedgerFiscalCloseGroupName: ledgerFiscalCloseGroupNameOrEntity!,
            LegalEntity: legalEntity!
          }
    );
  }
}
