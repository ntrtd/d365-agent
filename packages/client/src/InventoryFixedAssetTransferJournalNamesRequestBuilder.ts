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
import { InventoryFixedAssetTransferJournalNames } from './InventoryFixedAssetTransferJournalNames';

/**
 * Request builder class for operations supported on the {@link InventoryFixedAssetTransferJournalNames} entity.
 */
export class InventoryFixedAssetTransferJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InventoryFixedAssetTransferJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `InventoryFixedAssetTransferJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `InventoryFixedAssetTransferJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<
    InventoryFixedAssetTransferJournalNames<T>,
    T
  > {
    return new GetAllRequestBuilder<
      InventoryFixedAssetTransferJournalNames<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `InventoryFixedAssetTransferJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InventoryFixedAssetTransferJournalNames`.
   */
  create(
    entity: InventoryFixedAssetTransferJournalNames<T>
  ): CreateRequestBuilder<InventoryFixedAssetTransferJournalNames<T>, T> {
    return new CreateRequestBuilder<
      InventoryFixedAssetTransferJournalNames<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `InventoryFixedAssetTransferJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link InventoryFixedAssetTransferJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link InventoryFixedAssetTransferJournalNames.journalNameId}.
   * @returns A request builder for creating requests to retrieve one `InventoryFixedAssetTransferJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNameId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InventoryFixedAssetTransferJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<
      InventoryFixedAssetTransferJournalNames<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNameId: journalNameId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `InventoryFixedAssetTransferJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InventoryFixedAssetTransferJournalNames`.
   */
  update(
    entity: InventoryFixedAssetTransferJournalNames<T>
  ): UpdateRequestBuilder<InventoryFixedAssetTransferJournalNames<T>, T> {
    return new UpdateRequestBuilder<
      InventoryFixedAssetTransferJournalNames<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InventoryFixedAssetTransferJournalNames`.
   * @param dataAreaId Key property. See {@link InventoryFixedAssetTransferJournalNames.dataAreaId}.
   * @param journalNameId Key property. See {@link InventoryFixedAssetTransferJournalNames.journalNameId}.
   * @returns A request builder for creating requests that delete an entity of type `InventoryFixedAssetTransferJournalNames`.
   */
  delete(
    dataAreaId: string,
    journalNameId: string
  ): DeleteRequestBuilder<InventoryFixedAssetTransferJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InventoryFixedAssetTransferJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InventoryFixedAssetTransferJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: InventoryFixedAssetTransferJournalNames<T>
  ): DeleteRequestBuilder<InventoryFixedAssetTransferJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNameId?: string
  ): DeleteRequestBuilder<InventoryFixedAssetTransferJournalNames<T>, T> {
    return new DeleteRequestBuilder<
      InventoryFixedAssetTransferJournalNames<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof InventoryFixedAssetTransferJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNameId: journalNameId!
          }
    );
  }
}
