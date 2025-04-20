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
import { OpenTradeAgreementJournals } from './OpenTradeAgreementJournals';

/**
 * Request builder class for operations supported on the {@link OpenTradeAgreementJournals} entity.
 */
export class OpenTradeAgreementJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OpenTradeAgreementJournals<T>, T> {
  /**
   * Returns a request builder for querying all `OpenTradeAgreementJournals` entities.
   * @returns A request builder for creating requests to retrieve all `OpenTradeAgreementJournals` entities.
   */
  getAll(): GetAllRequestBuilder<OpenTradeAgreementJournals<T>, T> {
    return new GetAllRequestBuilder<OpenTradeAgreementJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OpenTradeAgreementJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OpenTradeAgreementJournals`.
   */
  create(
    entity: OpenTradeAgreementJournals<T>
  ): CreateRequestBuilder<OpenTradeAgreementJournals<T>, T> {
    return new CreateRequestBuilder<OpenTradeAgreementJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OpenTradeAgreementJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link OpenTradeAgreementJournals.dataAreaId}.
   * @param journalNumber Key property. See {@link OpenTradeAgreementJournals.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `OpenTradeAgreementJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OpenTradeAgreementJournals<T>, T> {
    return new GetByKeyRequestBuilder<OpenTradeAgreementJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OpenTradeAgreementJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OpenTradeAgreementJournals`.
   */
  update(
    entity: OpenTradeAgreementJournals<T>
  ): UpdateRequestBuilder<OpenTradeAgreementJournals<T>, T> {
    return new UpdateRequestBuilder<OpenTradeAgreementJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OpenTradeAgreementJournals`.
   * @param dataAreaId Key property. See {@link OpenTradeAgreementJournals.dataAreaId}.
   * @param journalNumber Key property. See {@link OpenTradeAgreementJournals.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OpenTradeAgreementJournals`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string
  ): DeleteRequestBuilder<OpenTradeAgreementJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OpenTradeAgreementJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OpenTradeAgreementJournals` by taking the entity as a parameter.
   */
  delete(
    entity: OpenTradeAgreementJournals<T>
  ): DeleteRequestBuilder<OpenTradeAgreementJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string
  ): DeleteRequestBuilder<OpenTradeAgreementJournals<T>, T> {
    return new DeleteRequestBuilder<OpenTradeAgreementJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OpenTradeAgreementJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!
          }
    );
  }
}
