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
import { WithholdLedgerAccountGroups } from './WithholdLedgerAccountGroups';

/**
 * Request builder class for operations supported on the {@link WithholdLedgerAccountGroups} entity.
 */
export class WithholdLedgerAccountGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WithholdLedgerAccountGroups<T>, T> {
  /**
   * Returns a request builder for querying all `WithholdLedgerAccountGroups` entities.
   * @returns A request builder for creating requests to retrieve all `WithholdLedgerAccountGroups` entities.
   */
  getAll(): GetAllRequestBuilder<WithholdLedgerAccountGroups<T>, T> {
    return new GetAllRequestBuilder<WithholdLedgerAccountGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WithholdLedgerAccountGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WithholdLedgerAccountGroups`.
   */
  create(
    entity: WithholdLedgerAccountGroups<T>
  ): CreateRequestBuilder<WithholdLedgerAccountGroups<T>, T> {
    return new CreateRequestBuilder<WithholdLedgerAccountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WithholdLedgerAccountGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link WithholdLedgerAccountGroups.dataAreaId}.
   * @param taxWithholdAccountGroup Key property. See {@link WithholdLedgerAccountGroups.taxWithholdAccountGroup}.
   * @returns A request builder for creating requests to retrieve one `WithholdLedgerAccountGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxWithholdAccountGroup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WithholdLedgerAccountGroups<T>, T> {
    return new GetByKeyRequestBuilder<WithholdLedgerAccountGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxWithholdAccountGroup: taxWithholdAccountGroup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WithholdLedgerAccountGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WithholdLedgerAccountGroups`.
   */
  update(
    entity: WithholdLedgerAccountGroups<T>
  ): UpdateRequestBuilder<WithholdLedgerAccountGroups<T>, T> {
    return new UpdateRequestBuilder<WithholdLedgerAccountGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WithholdLedgerAccountGroups`.
   * @param dataAreaId Key property. See {@link WithholdLedgerAccountGroups.dataAreaId}.
   * @param taxWithholdAccountGroup Key property. See {@link WithholdLedgerAccountGroups.taxWithholdAccountGroup}.
   * @returns A request builder for creating requests that delete an entity of type `WithholdLedgerAccountGroups`.
   */
  delete(
    dataAreaId: string,
    taxWithholdAccountGroup: string
  ): DeleteRequestBuilder<WithholdLedgerAccountGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WithholdLedgerAccountGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WithholdLedgerAccountGroups` by taking the entity as a parameter.
   */
  delete(
    entity: WithholdLedgerAccountGroups<T>
  ): DeleteRequestBuilder<WithholdLedgerAccountGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxWithholdAccountGroup?: string
  ): DeleteRequestBuilder<WithholdLedgerAccountGroups<T>, T> {
    return new DeleteRequestBuilder<WithholdLedgerAccountGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof WithholdLedgerAccountGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxWithholdAccountGroup: taxWithholdAccountGroup!
          }
    );
  }
}
