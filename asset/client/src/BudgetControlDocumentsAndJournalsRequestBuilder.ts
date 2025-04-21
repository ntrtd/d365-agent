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
import { BudgetControlDocumentsAndJournals } from './BudgetControlDocumentsAndJournals';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';
import { BudgetControlSourceIntegrator } from './BudgetControlSourceIntegrator';

/**
 * Request builder class for operations supported on the {@link BudgetControlDocumentsAndJournals} entity.
 */
export class BudgetControlDocumentsAndJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlDocumentsAndJournals<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlDocumentsAndJournals` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlDocumentsAndJournals` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlDocumentsAndJournals<T>, T> {
    return new GetAllRequestBuilder<BudgetControlDocumentsAndJournals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlDocumentsAndJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlDocumentsAndJournals`.
   */
  create(
    entity: BudgetControlDocumentsAndJournals<T>
  ): CreateRequestBuilder<BudgetControlDocumentsAndJournals<T>, T> {
    return new CreateRequestBuilder<BudgetControlDocumentsAndJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlDocumentsAndJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlDocumentsAndJournals.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlDocumentsAndJournals.legalEntityId}.
   * @param status Key property. See {@link BudgetControlDocumentsAndJournals.status}.
   * @param documentOrJournal Key property. See {@link BudgetControlDocumentsAndJournals.documentOrJournal}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlDocumentsAndJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    documentOrJournal: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlSourceIntegrator'
    >
  ): GetByKeyRequestBuilder<BudgetControlDocumentsAndJournals<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlDocumentsAndJournals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        DocumentOrJournal: documentOrJournal
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlDocumentsAndJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlDocumentsAndJournals`.
   */
  update(
    entity: BudgetControlDocumentsAndJournals<T>
  ): UpdateRequestBuilder<BudgetControlDocumentsAndJournals<T>, T> {
    return new UpdateRequestBuilder<BudgetControlDocumentsAndJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlDocumentsAndJournals`.
   * @param dataAreaId Key property. See {@link BudgetControlDocumentsAndJournals.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlDocumentsAndJournals.legalEntityId}.
   * @param status Key property. See {@link BudgetControlDocumentsAndJournals.status}.
   * @param documentOrJournal Key property. See {@link BudgetControlDocumentsAndJournals.documentOrJournal}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlDocumentsAndJournals`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    documentOrJournal: BudgetControlSourceIntegrator
  ): DeleteRequestBuilder<BudgetControlDocumentsAndJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlDocumentsAndJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlDocumentsAndJournals` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlDocumentsAndJournals<T>
  ): DeleteRequestBuilder<BudgetControlDocumentsAndJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    documentOrJournal?: BudgetControlSourceIntegrator
  ): DeleteRequestBuilder<BudgetControlDocumentsAndJournals<T>, T> {
    return new DeleteRequestBuilder<BudgetControlDocumentsAndJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlDocumentsAndJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            DocumentOrJournal: documentOrJournal!
          }
    );
  }
}
