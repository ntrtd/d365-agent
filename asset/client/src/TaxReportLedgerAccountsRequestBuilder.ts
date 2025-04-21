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
import { TaxReportLedgerAccounts } from './TaxReportLedgerAccounts';

/**
 * Request builder class for operations supported on the {@link TaxReportLedgerAccounts} entity.
 */
export class TaxReportLedgerAccountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxReportLedgerAccounts<T>, T> {
  /**
   * Returns a request builder for querying all `TaxReportLedgerAccounts` entities.
   * @returns A request builder for creating requests to retrieve all `TaxReportLedgerAccounts` entities.
   */
  getAll(): GetAllRequestBuilder<TaxReportLedgerAccounts<T>, T> {
    return new GetAllRequestBuilder<TaxReportLedgerAccounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TaxReportLedgerAccounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxReportLedgerAccounts`.
   */
  create(
    entity: TaxReportLedgerAccounts<T>
  ): CreateRequestBuilder<TaxReportLedgerAccounts<T>, T> {
    return new CreateRequestBuilder<TaxReportLedgerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxReportLedgerAccounts` entity based on its keys.
   * @param company Key property. See {@link TaxReportLedgerAccounts.company}.
   * @returns A request builder for creating requests to retrieve one `TaxReportLedgerAccounts` entity based on its keys.
   */
  getByKey(
    company: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxReportLedgerAccounts<T>, T> {
    return new GetByKeyRequestBuilder<TaxReportLedgerAccounts<T>, T>(
      this.entityApi,
      { Company: company }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxReportLedgerAccounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxReportLedgerAccounts`.
   */
  update(
    entity: TaxReportLedgerAccounts<T>
  ): UpdateRequestBuilder<TaxReportLedgerAccounts<T>, T> {
    return new UpdateRequestBuilder<TaxReportLedgerAccounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxReportLedgerAccounts`.
   * @param company Key property. See {@link TaxReportLedgerAccounts.company}.
   * @returns A request builder for creating requests that delete an entity of type `TaxReportLedgerAccounts`.
   */
  delete(company: string): DeleteRequestBuilder<TaxReportLedgerAccounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxReportLedgerAccounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxReportLedgerAccounts` by taking the entity as a parameter.
   */
  delete(
    entity: TaxReportLedgerAccounts<T>
  ): DeleteRequestBuilder<TaxReportLedgerAccounts<T>, T>;
  delete(
    companyOrEntity: any
  ): DeleteRequestBuilder<TaxReportLedgerAccounts<T>, T> {
    return new DeleteRequestBuilder<TaxReportLedgerAccounts<T>, T>(
      this.entityApi,
      companyOrEntity instanceof TaxReportLedgerAccounts
        ? companyOrEntity
        : { Company: companyOrEntity! }
    );
  }
}
