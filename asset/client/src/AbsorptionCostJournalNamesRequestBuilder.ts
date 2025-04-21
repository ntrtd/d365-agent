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
import { AbsorptionCostJournalNames } from './AbsorptionCostJournalNames';

/**
 * Request builder class for operations supported on the {@link AbsorptionCostJournalNames} entity.
 */
export class AbsorptionCostJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AbsorptionCostJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `AbsorptionCostJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `AbsorptionCostJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<AbsorptionCostJournalNames<T>, T> {
    return new GetAllRequestBuilder<AbsorptionCostJournalNames<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AbsorptionCostJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AbsorptionCostJournalNames`.
   */
  create(
    entity: AbsorptionCostJournalNames<T>
  ): CreateRequestBuilder<AbsorptionCostJournalNames<T>, T> {
    return new CreateRequestBuilder<AbsorptionCostJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AbsorptionCostJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link AbsorptionCostJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link AbsorptionCostJournalNames.journalNameId}.
   * @returns A request builder for creating requests to retrieve one `AbsorptionCostJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNameId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AbsorptionCostJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<AbsorptionCostJournalNames<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNameId: journalNameId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AbsorptionCostJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AbsorptionCostJournalNames`.
   */
  update(
    entity: AbsorptionCostJournalNames<T>
  ): UpdateRequestBuilder<AbsorptionCostJournalNames<T>, T> {
    return new UpdateRequestBuilder<AbsorptionCostJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AbsorptionCostJournalNames`.
   * @param dataAreaId Key property. See {@link AbsorptionCostJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link AbsorptionCostJournalNames.journalNameId}.
   * @returns A request builder for creating requests that delete an entity of type `AbsorptionCostJournalNames`.
   */
  delete(
    dataAreaId: string,
    journalNameId: string
  ): DeleteRequestBuilder<AbsorptionCostJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AbsorptionCostJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AbsorptionCostJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: AbsorptionCostJournalNames<T>
  ): DeleteRequestBuilder<AbsorptionCostJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNameId?: string
  ): DeleteRequestBuilder<AbsorptionCostJournalNames<T>, T> {
    return new DeleteRequestBuilder<AbsorptionCostJournalNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AbsorptionCostJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNameId: journalNameId!
          }
    );
  }
}
