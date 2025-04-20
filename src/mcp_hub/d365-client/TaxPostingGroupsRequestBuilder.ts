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
import { TaxPostingGroups } from './TaxPostingGroups';

/**
 * Request builder class for operations supported on the {@link TaxPostingGroups} entity.
 */
export class TaxPostingGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxPostingGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TaxPostingGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TaxPostingGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TaxPostingGroups<T>, T> {
    return new GetAllRequestBuilder<TaxPostingGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxPostingGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxPostingGroups`.
   */
  create(
    entity: TaxPostingGroups<T>
  ): CreateRequestBuilder<TaxPostingGroups<T>, T> {
    return new CreateRequestBuilder<TaxPostingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxPostingGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxPostingGroups.dataAreaId}.
   * @param taxPostingGroupCode Key property. See {@link TaxPostingGroups.taxPostingGroupCode}.
   * @returns A request builder for creating requests to retrieve one `TaxPostingGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPostingGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxPostingGroups<T>, T> {
    return new GetByKeyRequestBuilder<TaxPostingGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxPostingGroupCode: taxPostingGroupCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxPostingGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxPostingGroups`.
   */
  update(
    entity: TaxPostingGroups<T>
  ): UpdateRequestBuilder<TaxPostingGroups<T>, T> {
    return new UpdateRequestBuilder<TaxPostingGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxPostingGroups`.
   * @param dataAreaId Key property. See {@link TaxPostingGroups.dataAreaId}.
   * @param taxPostingGroupCode Key property. See {@link TaxPostingGroups.taxPostingGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxPostingGroups`.
   */
  delete(
    dataAreaId: string,
    taxPostingGroupCode: string
  ): DeleteRequestBuilder<TaxPostingGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxPostingGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxPostingGroups` by taking the entity as a parameter.
   */
  delete(
    entity: TaxPostingGroups<T>
  ): DeleteRequestBuilder<TaxPostingGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPostingGroupCode?: string
  ): DeleteRequestBuilder<TaxPostingGroups<T>, T> {
    return new DeleteRequestBuilder<TaxPostingGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxPostingGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPostingGroupCode: taxPostingGroupCode!
          }
    );
  }
}
