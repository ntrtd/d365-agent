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
import { LtmLedgerJournalNameCpdTypes } from './LtmLedgerJournalNameCpdTypes';
import { LtmcpdPaymentMediaType } from './LtmcpdPaymentMediaType';

/**
 * Request builder class for operations supported on the {@link LtmLedgerJournalNameCpdTypes} entity.
 */
export class LtmLedgerJournalNameCpdTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T> {
  /**
   * Returns a request builder for querying all `LtmLedgerJournalNameCpdTypes` entities.
   * @returns A request builder for creating requests to retrieve all `LtmLedgerJournalNameCpdTypes` entities.
   */
  getAll(): GetAllRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T> {
    return new GetAllRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LtmLedgerJournalNameCpdTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmLedgerJournalNameCpdTypes`.
   */
  create(
    entity: LtmLedgerJournalNameCpdTypes<T>
  ): CreateRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T> {
    return new CreateRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmLedgerJournalNameCpdTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmLedgerJournalNameCpdTypes.dataAreaId}.
   * @param journalName Key property. See {@link LtmLedgerJournalNameCpdTypes.journalName}.
   * @param cpdType Key property. See {@link LtmLedgerJournalNameCpdTypes.cpdType}.
   * @returns A request builder for creating requests to retrieve one `LtmLedgerJournalNameCpdTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalName: DeserializedType<T, 'Edm.String'>,
    cpdType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LTMCPDPaymentMediaType'
    >
  ): GetByKeyRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T> {
    return new GetByKeyRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalName: journalName,
        CPDType: cpdType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LtmLedgerJournalNameCpdTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmLedgerJournalNameCpdTypes`.
   */
  update(
    entity: LtmLedgerJournalNameCpdTypes<T>
  ): UpdateRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T> {
    return new UpdateRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmLedgerJournalNameCpdTypes`.
   * @param dataAreaId Key property. See {@link LtmLedgerJournalNameCpdTypes.dataAreaId}.
   * @param journalName Key property. See {@link LtmLedgerJournalNameCpdTypes.journalName}.
   * @param cpdType Key property. See {@link LtmLedgerJournalNameCpdTypes.cpdType}.
   * @returns A request builder for creating requests that delete an entity of type `LtmLedgerJournalNameCpdTypes`.
   */
  delete(
    dataAreaId: string,
    journalName: string,
    cpdType: LtmcpdPaymentMediaType
  ): DeleteRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmLedgerJournalNameCpdTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmLedgerJournalNameCpdTypes` by taking the entity as a parameter.
   */
  delete(
    entity: LtmLedgerJournalNameCpdTypes<T>
  ): DeleteRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalName?: string,
    cpdType?: LtmcpdPaymentMediaType
  ): DeleteRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T> {
    return new DeleteRequestBuilder<LtmLedgerJournalNameCpdTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmLedgerJournalNameCpdTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalName: journalName!,
            CPDType: cpdType!
          }
    );
  }
}
