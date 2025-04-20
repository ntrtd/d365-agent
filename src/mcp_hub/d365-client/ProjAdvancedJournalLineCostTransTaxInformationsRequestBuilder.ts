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
import { ProjAdvancedJournalLineCostTransTaxInformations } from './ProjAdvancedJournalLineCostTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link ProjAdvancedJournalLineCostTransTaxInformations} entity.
 */
export class ProjAdvancedJournalLineCostTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ProjAdvancedJournalLineCostTransTaxInformations<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ProjAdvancedJournalLineCostTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `ProjAdvancedJournalLineCostTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProjAdvancedJournalLineCostTransTaxInformations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProjAdvancedJournalLineCostTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjAdvancedJournalLineCostTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjAdvancedJournalLineCostTransTaxInformations`.
   */
  create(
    entity: ProjAdvancedJournalLineCostTransTaxInformations<T>
  ): CreateRequestBuilder<
    ProjAdvancedJournalLineCostTransTaxInformations<T>,
    T
  > {
    return new CreateRequestBuilder<
      ProjAdvancedJournalLineCostTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjAdvancedJournalLineCostTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournalLineCostTransTaxInformations.dataAreaId}.
   * @param projAdvancedJournal Key property. See {@link ProjAdvancedJournalLineCostTransTaxInformations.projAdvancedJournal}.
   * @param lineNumber Key property. See {@link ProjAdvancedJournalLineCostTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjAdvancedJournalLineCostTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projAdvancedJournal: DeserializedType<T, 'Edm.Int64'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    ProjAdvancedJournalLineCostTransTaxInformations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProjAdvancedJournalLineCostTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ProjAdvancedJournal: projAdvancedJournal,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjAdvancedJournalLineCostTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjAdvancedJournalLineCostTransTaxInformations`.
   */
  update(
    entity: ProjAdvancedJournalLineCostTransTaxInformations<T>
  ): UpdateRequestBuilder<
    ProjAdvancedJournalLineCostTransTaxInformations<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ProjAdvancedJournalLineCostTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournalLineCostTransTaxInformations`.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournalLineCostTransTaxInformations.dataAreaId}.
   * @param projAdvancedJournal Key property. See {@link ProjAdvancedJournalLineCostTransTaxInformations.projAdvancedJournal}.
   * @param lineNumber Key property. See {@link ProjAdvancedJournalLineCostTransTaxInformations.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournalLineCostTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    projAdvancedJournal: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<
    ProjAdvancedJournalLineCostTransTaxInformations<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournalLineCostTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournalLineCostTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: ProjAdvancedJournalLineCostTransTaxInformations<T>
  ): DeleteRequestBuilder<
    ProjAdvancedJournalLineCostTransTaxInformations<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    projAdvancedJournal?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<
    ProjAdvancedJournalLineCostTransTaxInformations<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ProjAdvancedJournalLineCostTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ProjAdvancedJournalLineCostTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjAdvancedJournal: projAdvancedJournal!,
            LineNumber: lineNumber!
          }
    );
  }
}
