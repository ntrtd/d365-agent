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
import { EntryCertificateJournals } from './EntryCertificateJournals';

/**
 * Request builder class for operations supported on the {@link EntryCertificateJournals} entity.
 */
export class EntryCertificateJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EntryCertificateJournals<T>, T> {
  /**
   * Returns a request builder for querying all `EntryCertificateJournals` entities.
   * @returns A request builder for creating requests to retrieve all `EntryCertificateJournals` entities.
   */
  getAll(): GetAllRequestBuilder<EntryCertificateJournals<T>, T> {
    return new GetAllRequestBuilder<EntryCertificateJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EntryCertificateJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EntryCertificateJournals`.
   */
  create(
    entity: EntryCertificateJournals<T>
  ): CreateRequestBuilder<EntryCertificateJournals<T>, T> {
    return new CreateRequestBuilder<EntryCertificateJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EntryCertificateJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link EntryCertificateJournals.dataAreaId}.
   * @param entryCertificate Key property. See {@link EntryCertificateJournals.entryCertificate}.
   * @param customerAccount Key property. See {@link EntryCertificateJournals.customerAccount}.
   * @returns A request builder for creating requests to retrieve one `EntryCertificateJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    entryCertificate: DeserializedType<T, 'Edm.String'>,
    customerAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EntryCertificateJournals<T>, T> {
    return new GetByKeyRequestBuilder<EntryCertificateJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EntryCertificate: entryCertificate,
        CustomerAccount: customerAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EntryCertificateJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EntryCertificateJournals`.
   */
  update(
    entity: EntryCertificateJournals<T>
  ): UpdateRequestBuilder<EntryCertificateJournals<T>, T> {
    return new UpdateRequestBuilder<EntryCertificateJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EntryCertificateJournals`.
   * @param dataAreaId Key property. See {@link EntryCertificateJournals.dataAreaId}.
   * @param entryCertificate Key property. See {@link EntryCertificateJournals.entryCertificate}.
   * @param customerAccount Key property. See {@link EntryCertificateJournals.customerAccount}.
   * @returns A request builder for creating requests that delete an entity of type `EntryCertificateJournals`.
   */
  delete(
    dataAreaId: string,
    entryCertificate: string,
    customerAccount: string
  ): DeleteRequestBuilder<EntryCertificateJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EntryCertificateJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EntryCertificateJournals` by taking the entity as a parameter.
   */
  delete(
    entity: EntryCertificateJournals<T>
  ): DeleteRequestBuilder<EntryCertificateJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    entryCertificate?: string,
    customerAccount?: string
  ): DeleteRequestBuilder<EntryCertificateJournals<T>, T> {
    return new DeleteRequestBuilder<EntryCertificateJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EntryCertificateJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EntryCertificate: entryCertificate!,
            CustomerAccount: customerAccount!
          }
    );
  }
}
