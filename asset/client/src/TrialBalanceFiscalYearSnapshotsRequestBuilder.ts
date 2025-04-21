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
import { TrialBalanceFiscalYearSnapshots } from './TrialBalanceFiscalYearSnapshots';

/**
 * Request builder class for operations supported on the {@link TrialBalanceFiscalYearSnapshots} entity.
 */
export class TrialBalanceFiscalYearSnapshotsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T> {
  /**
   * Returns a request builder for querying all `TrialBalanceFiscalYearSnapshots` entities.
   * @returns A request builder for creating requests to retrieve all `TrialBalanceFiscalYearSnapshots` entities.
   */
  getAll(): GetAllRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T> {
    return new GetAllRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrialBalanceFiscalYearSnapshots` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrialBalanceFiscalYearSnapshots`.
   */
  create(
    entity: TrialBalanceFiscalYearSnapshots<T>
  ): CreateRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T> {
    return new CreateRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrialBalanceFiscalYearSnapshots` entity based on its keys.
   * @param snapshotHeader Key property. See {@link TrialBalanceFiscalYearSnapshots.snapshotHeader}.
   * @param dimensionHierarchyId Key property. See {@link TrialBalanceFiscalYearSnapshots.dimensionHierarchyId}.
   * @param fiscalCalendarYearRecId Key property. See {@link TrialBalanceFiscalYearSnapshots.fiscalCalendarYearRecId}.
   * @param ledgerRecId Key property. See {@link TrialBalanceFiscalYearSnapshots.ledgerRecId}.
   * @returns A request builder for creating requests to retrieve one `TrialBalanceFiscalYearSnapshots` entity based on its keys.
   */
  getByKey(
    snapshotHeader: DeserializedType<T, 'Edm.Int64'>,
    dimensionHierarchyId: DeserializedType<T, 'Edm.Int64'>,
    fiscalCalendarYearRecId: DeserializedType<T, 'Edm.Int64'>,
    ledgerRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T> {
    return new GetByKeyRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T>(
      this.entityApi,
      {
        SnapshotHeader: snapshotHeader,
        DimensionHierarchyId: dimensionHierarchyId,
        FiscalCalendarYearRecId: fiscalCalendarYearRecId,
        LedgerRecId: ledgerRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrialBalanceFiscalYearSnapshots`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrialBalanceFiscalYearSnapshots`.
   */
  update(
    entity: TrialBalanceFiscalYearSnapshots<T>
  ): UpdateRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T> {
    return new UpdateRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrialBalanceFiscalYearSnapshots`.
   * @param snapshotHeader Key property. See {@link TrialBalanceFiscalYearSnapshots.snapshotHeader}.
   * @param dimensionHierarchyId Key property. See {@link TrialBalanceFiscalYearSnapshots.dimensionHierarchyId}.
   * @param fiscalCalendarYearRecId Key property. See {@link TrialBalanceFiscalYearSnapshots.fiscalCalendarYearRecId}.
   * @param ledgerRecId Key property. See {@link TrialBalanceFiscalYearSnapshots.ledgerRecId}.
   * @returns A request builder for creating requests that delete an entity of type `TrialBalanceFiscalYearSnapshots`.
   */
  delete(
    snapshotHeader: BigNumber,
    dimensionHierarchyId: BigNumber,
    fiscalCalendarYearRecId: BigNumber,
    ledgerRecId: BigNumber
  ): DeleteRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrialBalanceFiscalYearSnapshots`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrialBalanceFiscalYearSnapshots` by taking the entity as a parameter.
   */
  delete(
    entity: TrialBalanceFiscalYearSnapshots<T>
  ): DeleteRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T>;
  delete(
    snapshotHeaderOrEntity: any,
    dimensionHierarchyId?: BigNumber,
    fiscalCalendarYearRecId?: BigNumber,
    ledgerRecId?: BigNumber
  ): DeleteRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T> {
    return new DeleteRequestBuilder<TrialBalanceFiscalYearSnapshots<T>, T>(
      this.entityApi,
      snapshotHeaderOrEntity instanceof TrialBalanceFiscalYearSnapshots
        ? snapshotHeaderOrEntity
        : {
            SnapshotHeader: snapshotHeaderOrEntity!,
            DimensionHierarchyId: dimensionHierarchyId!,
            FiscalCalendarYearRecId: fiscalCalendarYearRecId!,
            LedgerRecId: ledgerRecId!
          }
    );
  }
}
