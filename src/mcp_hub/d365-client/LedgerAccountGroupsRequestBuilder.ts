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
import { LedgerAccountGroups } from './LedgerAccountGroups';

/**
 * Request builder class for operations supported on the {@link LedgerAccountGroups} entity.
 */
export class LedgerAccountGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerAccountGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerAccountGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerAccountGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerAccountGroups<T>, T> {
    return new GetAllRequestBuilder<LedgerAccountGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerAccountGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerAccountGroups`.
   */
  create(
    entity: LedgerAccountGroups<T>
  ): CreateRequestBuilder<LedgerAccountGroups<T>, T> {
    return new CreateRequestBuilder<LedgerAccountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerAccountGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerAccountGroups.dataAreaId}.
   * @param ledgerPostingGroup Key property. See {@link LedgerAccountGroups.ledgerPostingGroup}.
   * @returns A request builder for creating requests to retrieve one `LedgerAccountGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ledgerPostingGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerAccountGroups<T>, T> {
    return new GetByKeyRequestBuilder<LedgerAccountGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LedgerPostingGroup: ledgerPostingGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerAccountGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerAccountGroups`.
   */
  update(
    entity: LedgerAccountGroups<T>
  ): UpdateRequestBuilder<LedgerAccountGroups<T>, T> {
    return new UpdateRequestBuilder<LedgerAccountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerAccountGroups`.
   * @param dataAreaId Key property. See {@link LedgerAccountGroups.dataAreaId}.
   * @param ledgerPostingGroup Key property. See {@link LedgerAccountGroups.ledgerPostingGroup}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAccountGroups`.
   */
  delete(
    dataAreaId: string,
    ledgerPostingGroup: string
  ): DeleteRequestBuilder<LedgerAccountGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerAccountGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerAccountGroups` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerAccountGroups<T>
  ): DeleteRequestBuilder<LedgerAccountGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ledgerPostingGroup?: string
  ): DeleteRequestBuilder<LedgerAccountGroups<T>, T> {
    return new DeleteRequestBuilder<LedgerAccountGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerAccountGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LedgerPostingGroup: ledgerPostingGroup!
          }
    );
  }
}
