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
import { InventJournalTransTransTaxInformations } from './InventJournalTransTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link InventJournalTransTransTaxInformations} entity.
 */
export class InventJournalTransTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventJournalTransTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `InventJournalTransTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `InventJournalTransTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<InventJournalTransTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<
      InventJournalTransTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventJournalTransTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventJournalTransTransTaxInformations`.
   */
  create(
    entity: InventJournalTransTransTaxInformations<T>
  ): CreateRequestBuilder<InventJournalTransTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      InventJournalTransTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventJournalTransTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventJournalTransTransTaxInformations.dataAreaId}.
   * @param journalId Key property. See {@link InventJournalTransTransTaxInformations.journalId}.
   * @param lineNum Key property. See {@link InventJournalTransTransTaxInformations.lineNum}.
   * @returns A request builder for creating requests to retrieve one `InventJournalTransTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<InventJournalTransTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      InventJournalTransTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalId: journalId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventJournalTransTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventJournalTransTransTaxInformations`.
   */
  update(
    entity: InventJournalTransTransTaxInformations<T>
  ): UpdateRequestBuilder<InventJournalTransTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      InventJournalTransTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventJournalTransTransTaxInformations`.
   * @param dataAreaId Key property. See {@link InventJournalTransTransTaxInformations.dataAreaId}.
   * @param journalId Key property. See {@link InventJournalTransTransTaxInformations.journalId}.
   * @param lineNum Key property. See {@link InventJournalTransTransTaxInformations.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `InventJournalTransTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    journalId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<InventJournalTransTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventJournalTransTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventJournalTransTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: InventJournalTransTransTaxInformations<T>
  ): DeleteRequestBuilder<InventJournalTransTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<InventJournalTransTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      InventJournalTransTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventJournalTransTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalId: journalId!,
            LineNum: lineNum!
          }
    );
  }
}
