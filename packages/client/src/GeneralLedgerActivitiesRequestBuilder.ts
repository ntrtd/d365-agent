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
import { GeneralLedgerActivities } from './GeneralLedgerActivities';
import { CurrentOperationsTax } from './CurrentOperationsTax';

/**
 * Request builder class for operations supported on the {@link GeneralLedgerActivities} entity.
 */
export class GeneralLedgerActivitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GeneralLedgerActivities<T>, T> {
  /**
   * Returns a request builder for querying all `GeneralLedgerActivities` entities.
   * @returns A request builder for creating requests to retrieve all `GeneralLedgerActivities` entities.
   */
  getAll(): GetAllRequestBuilder<GeneralLedgerActivities<T>, T> {
    return new GetAllRequestBuilder<GeneralLedgerActivities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GeneralLedgerActivities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GeneralLedgerActivities`.
   */
  create(
    entity: GeneralLedgerActivities<T>
  ): CreateRequestBuilder<GeneralLedgerActivities<T>, T> {
    return new CreateRequestBuilder<GeneralLedgerActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GeneralLedgerActivities` entity based on its keys.
   * @param ledgerDimension Key property. See {@link GeneralLedgerActivities.ledgerDimension}.
   * @param mainAccountRecId Key property. See {@link GeneralLedgerActivities.mainAccountRecId}.
   * @param ledger Key property. See {@link GeneralLedgerActivities.ledger}.
   * @param postingLayer Key property. See {@link GeneralLedgerActivities.postingLayer}.
   * @param ledgerGregorianDateId Key property. See {@link GeneralLedgerActivities.ledgerGregorianDateId}.
   * @returns A request builder for creating requests to retrieve one `GeneralLedgerActivities` entity based on its keys.
   */
  getByKey(
    ledgerDimension: DeserializedType<T, 'Edm.Int64'>,
    mainAccountRecId: DeserializedType<T, 'Edm.Int64'>,
    ledger: DeserializedType<T, 'Edm.Int64'>,
    postingLayer: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CurrentOperationsTax'
    >,
    ledgerGregorianDateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GeneralLedgerActivities<T>, T> {
    return new GetByKeyRequestBuilder<GeneralLedgerActivities<T>, T>(
      this.entityApi,
      {
        LedgerDimension: ledgerDimension,
        MainAccountRecId: mainAccountRecId,
        Ledger: ledger,
        PostingLayer: postingLayer,
        LedgerGregorianDateId: ledgerGregorianDateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GeneralLedgerActivities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GeneralLedgerActivities`.
   */
  update(
    entity: GeneralLedgerActivities<T>
  ): UpdateRequestBuilder<GeneralLedgerActivities<T>, T> {
    return new UpdateRequestBuilder<GeneralLedgerActivities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GeneralLedgerActivities`.
   * @param ledgerDimension Key property. See {@link GeneralLedgerActivities.ledgerDimension}.
   * @param mainAccountRecId Key property. See {@link GeneralLedgerActivities.mainAccountRecId}.
   * @param ledger Key property. See {@link GeneralLedgerActivities.ledger}.
   * @param postingLayer Key property. See {@link GeneralLedgerActivities.postingLayer}.
   * @param ledgerGregorianDateId Key property. See {@link GeneralLedgerActivities.ledgerGregorianDateId}.
   * @returns A request builder for creating requests that delete an entity of type `GeneralLedgerActivities`.
   */
  delete(
    ledgerDimension: BigNumber,
    mainAccountRecId: BigNumber,
    ledger: BigNumber,
    postingLayer: CurrentOperationsTax,
    ledgerGregorianDateId: string
  ): DeleteRequestBuilder<GeneralLedgerActivities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GeneralLedgerActivities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GeneralLedgerActivities` by taking the entity as a parameter.
   */
  delete(
    entity: GeneralLedgerActivities<T>
  ): DeleteRequestBuilder<GeneralLedgerActivities<T>, T>;
  delete(
    ledgerDimensionOrEntity: any,
    mainAccountRecId?: BigNumber,
    ledger?: BigNumber,
    postingLayer?: CurrentOperationsTax,
    ledgerGregorianDateId?: string
  ): DeleteRequestBuilder<GeneralLedgerActivities<T>, T> {
    return new DeleteRequestBuilder<GeneralLedgerActivities<T>, T>(
      this.entityApi,
      ledgerDimensionOrEntity instanceof GeneralLedgerActivities
        ? ledgerDimensionOrEntity
        : {
            LedgerDimension: ledgerDimensionOrEntity!,
            MainAccountRecId: mainAccountRecId!,
            Ledger: ledger!,
            PostingLayer: postingLayer!,
            LedgerGregorianDateId: ledgerGregorianDateId!
          }
    );
  }
}
