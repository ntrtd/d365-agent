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
import { ProjJournalTransTransTaxInformations } from './ProjJournalTransTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link ProjJournalTransTransTaxInformations} entity.
 */
export class ProjJournalTransTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjJournalTransTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `ProjJournalTransTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `ProjJournalTransTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<ProjJournalTransTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<ProjJournalTransTransTaxInformations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjJournalTransTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjJournalTransTransTaxInformations`.
   */
  create(
    entity: ProjJournalTransTransTaxInformations<T>
  ): CreateRequestBuilder<ProjJournalTransTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<ProjJournalTransTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjJournalTransTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjJournalTransTransTaxInformations.dataAreaId}.
   * @param journalId Key property. See {@link ProjJournalTransTransTaxInformations.journalId}.
   * @param lineNum Key property. See {@link ProjJournalTransTransTaxInformations.lineNum}.
   * @returns A request builder for creating requests to retrieve one `ProjJournalTransTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProjJournalTransTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjJournalTransTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalId: journalId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjJournalTransTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjJournalTransTransTaxInformations`.
   */
  update(
    entity: ProjJournalTransTransTaxInformations<T>
  ): UpdateRequestBuilder<ProjJournalTransTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<ProjJournalTransTransTaxInformations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjJournalTransTransTaxInformations`.
   * @param dataAreaId Key property. See {@link ProjJournalTransTransTaxInformations.dataAreaId}.
   * @param journalId Key property. See {@link ProjJournalTransTransTaxInformations.journalId}.
   * @param lineNum Key property. See {@link ProjJournalTransTransTaxInformations.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `ProjJournalTransTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    journalId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<ProjJournalTransTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjJournalTransTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjJournalTransTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: ProjJournalTransTransTaxInformations<T>
  ): DeleteRequestBuilder<ProjJournalTransTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<ProjJournalTransTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<ProjJournalTransTransTaxInformations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjJournalTransTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalId: journalId!,
            LineNum: lineNum!
          }
    );
  }
}
