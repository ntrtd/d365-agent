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
import { InventoryProjectConsumptionJournalNames } from './InventoryProjectConsumptionJournalNames';

/**
 * Request builder class for operations supported on the {@link InventoryProjectConsumptionJournalNames} entity.
 */
export class InventoryProjectConsumptionJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryProjectConsumptionJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryProjectConsumptionJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryProjectConsumptionJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<
    InventoryProjectConsumptionJournalNames<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InventoryProjectConsumptionJournalNames<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryProjectConsumptionJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryProjectConsumptionJournalNames`.
   */
  create(
    entity: InventoryProjectConsumptionJournalNames<T>
  ): CreateRequestBuilder<InventoryProjectConsumptionJournalNames<T>, T> {
    return new CreateRequestBuilder<
      InventoryProjectConsumptionJournalNames<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventoryProjectConsumptionJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryProjectConsumptionJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link InventoryProjectConsumptionJournalNames.journalNameId}.
   * @returns A request builder for creating requests to retrieve one `InventoryProjectConsumptionJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNameId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryProjectConsumptionJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<
      InventoryProjectConsumptionJournalNames<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNameId: journalNameId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryProjectConsumptionJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryProjectConsumptionJournalNames`.
   */
  update(
    entity: InventoryProjectConsumptionJournalNames<T>
  ): UpdateRequestBuilder<InventoryProjectConsumptionJournalNames<T>, T> {
    return new UpdateRequestBuilder<
      InventoryProjectConsumptionJournalNames<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryProjectConsumptionJournalNames`.
   * @param dataAreaId Key property. See {@link InventoryProjectConsumptionJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link InventoryProjectConsumptionJournalNames.journalNameId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProjectConsumptionJournalNames`.
   */
  delete(
    dataAreaId: string,
    journalNameId: string
  ): DeleteRequestBuilder<InventoryProjectConsumptionJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryProjectConsumptionJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryProjectConsumptionJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryProjectConsumptionJournalNames<T>
  ): DeleteRequestBuilder<InventoryProjectConsumptionJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNameId?: string
  ): DeleteRequestBuilder<InventoryProjectConsumptionJournalNames<T>, T> {
    return new DeleteRequestBuilder<
      InventoryProjectConsumptionJournalNames<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryProjectConsumptionJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNameId: journalNameId!
          }
    );
  }
}
