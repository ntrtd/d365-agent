/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ProjAdvancedJournalLineInvoiceTransTaxInformations } from './ProjAdvancedJournalLineInvoiceTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link ProjAdvancedJournalLineInvoiceTransTaxInformations} entity.
 */
export class ProjAdvancedJournalLineInvoiceTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ProjAdvancedJournalLineInvoiceTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `ProjAdvancedJournalLineInvoiceTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjAdvancedJournalLineInvoiceTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjAdvancedJournalLineInvoiceTransTaxInformations`.
   */
  create(
    entity: ProjAdvancedJournalLineInvoiceTransTaxInformations<T>
  ): CreateRequestBuilder<
    ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
    T
  > {
    return new CreateRequestBuilder<
      ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjAdvancedJournalLineInvoiceTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournalLineInvoiceTransTaxInformations.dataAreaId}.
   * @param projAdvancedJournal Key property. See {@link ProjAdvancedJournalLineInvoiceTransTaxInformations.projAdvancedJournal}.
   * @param lineNumber Key property. See {@link ProjAdvancedJournalLineInvoiceTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjAdvancedJournalLineInvoiceTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projAdvancedJournal: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjAdvancedJournal: projAdvancedJournal,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjAdvancedJournalLineInvoiceTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjAdvancedJournalLineInvoiceTransTaxInformations`.
   */
  update(
    entity: ProjAdvancedJournalLineInvoiceTransTaxInformations<T>
  ): UpdateRequestBuilder<
    ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournalLineInvoiceTransTaxInformations`.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournalLineInvoiceTransTaxInformations.dataAreaId}.
   * @param projAdvancedJournal Key property. See {@link ProjAdvancedJournalLineInvoiceTransTaxInformations.projAdvancedJournal}.
   * @param lineNumber Key property. See {@link ProjAdvancedJournalLineInvoiceTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournalLineInvoiceTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    projAdvancedJournal: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<
    ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournalLineInvoiceTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournalLineInvoiceTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: ProjAdvancedJournalLineInvoiceTransTaxInformations<T>
  ): DeleteRequestBuilder<
    ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    projAdvancedJournal?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<
    ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ProjAdvancedJournalLineInvoiceTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ProjAdvancedJournalLineInvoiceTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjAdvancedJournal: projAdvancedJournal!,
            LineNumber: lineNumber!
          }
    );
  }
}
