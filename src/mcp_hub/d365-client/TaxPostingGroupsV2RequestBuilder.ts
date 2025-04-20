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
import { TaxPostingGroupsV2 } from './TaxPostingGroupsV2';

/**
 * Request builder class for operations supported on the {@link TaxPostingGroupsV2} entity.
 */
export class TaxPostingGroupsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxPostingGroupsV2<T>, T> {
  /**
   * Returns a request builder for querying all `TaxPostingGroupsV2` entities.
   * @returns A request builder for creating requests to retrieve all `TaxPostingGroupsV2` entities.
   */
  getAll(): GetAllRequestBuilder<TaxPostingGroupsV2<T>, T> {
    return new GetAllRequestBuilder<TaxPostingGroupsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxPostingGroupsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxPostingGroupsV2`.
   */
  create(
    entity: TaxPostingGroupsV2<T>
  ): CreateRequestBuilder<TaxPostingGroupsV2<T>, T> {
    return new CreateRequestBuilder<TaxPostingGroupsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxPostingGroupsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxPostingGroupsV2.dataAreaId}.
   * @param taxPostingGroupCode Key property. See {@link TaxPostingGroupsV2.taxPostingGroupCode}.
   * @returns A request builder for creating requests to retrieve one `TaxPostingGroupsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxPostingGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxPostingGroupsV2<T>, T> {
    return new GetByKeyRequestBuilder<TaxPostingGroupsV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TaxPostingGroupCode: taxPostingGroupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxPostingGroupsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxPostingGroupsV2`.
   */
  update(
    entity: TaxPostingGroupsV2<T>
  ): UpdateRequestBuilder<TaxPostingGroupsV2<T>, T> {
    return new UpdateRequestBuilder<TaxPostingGroupsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxPostingGroupsV2`.
   * @param dataAreaId Key property. See {@link TaxPostingGroupsV2.dataAreaId}.
   * @param taxPostingGroupCode Key property. See {@link TaxPostingGroupsV2.taxPostingGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxPostingGroupsV2`.
   */
  delete(
    dataAreaId: string,
    taxPostingGroupCode: string
  ): DeleteRequestBuilder<TaxPostingGroupsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxPostingGroupsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxPostingGroupsV2` by taking the entity as a parameter.
   */
  delete(
    entity: TaxPostingGroupsV2<T>
  ): DeleteRequestBuilder<TaxPostingGroupsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxPostingGroupCode?: string
  ): DeleteRequestBuilder<TaxPostingGroupsV2<T>, T> {
    return new DeleteRequestBuilder<TaxPostingGroupsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxPostingGroupsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxPostingGroupCode: taxPostingGroupCode!
          }
    );
  }
}
