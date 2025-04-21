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
import { OpenTradeAgreementJournalHeadersV2 } from './OpenTradeAgreementJournalHeadersV2';

/**
 * Request builder class for operations supported on the {@link OpenTradeAgreementJournalHeadersV2} entity.
 */
export class OpenTradeAgreementJournalHeadersV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T> {
  /**
   * Returns a request builder for querying all `OpenTradeAgreementJournalHeadersV2` entities.
   * @returns A request builder for creating requests to retrieve all `OpenTradeAgreementJournalHeadersV2` entities.
   */
  getAll(): GetAllRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T> {
    return new GetAllRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenTradeAgreementJournalHeadersV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenTradeAgreementJournalHeadersV2`.
   */
  create(
    entity: OpenTradeAgreementJournalHeadersV2<T>
  ): CreateRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T> {
    return new CreateRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenTradeAgreementJournalHeadersV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenTradeAgreementJournalHeadersV2.dataAreaId}.
   * @param journalNumber Key property. See {@link OpenTradeAgreementJournalHeadersV2.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenTradeAgreementJournalHeadersV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T> {
    return new GetByKeyRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OpenTradeAgreementJournalHeadersV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenTradeAgreementJournalHeadersV2`.
   */
  update(
    entity: OpenTradeAgreementJournalHeadersV2<T>
  ): UpdateRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T> {
    return new UpdateRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenTradeAgreementJournalHeadersV2`.
   * @param dataAreaId Key property. See {@link OpenTradeAgreementJournalHeadersV2.dataAreaId}.
   * @param journalNumber Key property. See {@link OpenTradeAgreementJournalHeadersV2.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenTradeAgreementJournalHeadersV2`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenTradeAgreementJournalHeadersV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenTradeAgreementJournalHeadersV2` by taking the entity as a parameter.
   */
  delete(
    entity: OpenTradeAgreementJournalHeadersV2<T>
  ): DeleteRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T> {
    return new DeleteRequestBuilder<OpenTradeAgreementJournalHeadersV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenTradeAgreementJournalHeadersV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
