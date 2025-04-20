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
import { TradeAgreementJournalHeaders } from './TradeAgreementJournalHeaders';

/**
 * Request builder class for operations supported on the {@link TradeAgreementJournalHeaders} entity.
 */
export class TradeAgreementJournalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradeAgreementJournalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `TradeAgreementJournalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `TradeAgreementJournalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<TradeAgreementJournalHeaders<T>, T> {
    return new GetAllRequestBuilder<TradeAgreementJournalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TradeAgreementJournalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradeAgreementJournalHeaders`.
   */
  create(
    entity: TradeAgreementJournalHeaders<T>
  ): CreateRequestBuilder<TradeAgreementJournalHeaders<T>, T> {
    return new CreateRequestBuilder<TradeAgreementJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradeAgreementJournalHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradeAgreementJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link TradeAgreementJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `TradeAgreementJournalHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradeAgreementJournalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<TradeAgreementJournalHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradeAgreementJournalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradeAgreementJournalHeaders`.
   */
  update(
    entity: TradeAgreementJournalHeaders<T>
  ): UpdateRequestBuilder<TradeAgreementJournalHeaders<T>, T> {
    return new UpdateRequestBuilder<TradeAgreementJournalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradeAgreementJournalHeaders`.
   * @param dataAreaId Key property. See {@link TradeAgreementJournalHeaders.dataAreaId}.
   * @param journalNumber Key property. See {@link TradeAgreementJournalHeaders.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TradeAgreementJournalHeaders`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<TradeAgreementJournalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradeAgreementJournalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradeAgreementJournalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: TradeAgreementJournalHeaders<T>
  ): DeleteRequestBuilder<TradeAgreementJournalHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<TradeAgreementJournalHeaders<T>, T> {
    return new DeleteRequestBuilder<TradeAgreementJournalHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradeAgreementJournalHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
