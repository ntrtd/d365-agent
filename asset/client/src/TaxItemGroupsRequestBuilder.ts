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
import { TaxItemGroups } from './TaxItemGroups';

/**
 * Request builder class for operations supported on the {@link TaxItemGroups} entity.
 */
export class TaxItemGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxItemGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TaxItemGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TaxItemGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TaxItemGroups<T>, T> {
    return new GetAllRequestBuilder<TaxItemGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxItemGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxItemGroups`.
   */
  create(entity: TaxItemGroups<T>): CreateRequestBuilder<TaxItemGroups<T>, T> {
    return new CreateRequestBuilder<TaxItemGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxItemGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxItemGroups.dataAreaId}.
   * @param taxItemGroupCode Key property. See {@link TaxItemGroups.taxItemGroupCode}.
   * @param taxCodeId Key property. See {@link TaxItemGroups.taxCodeId}.
   * @returns A request builder for creating requests to retrieve one `TaxItemGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxItemGroupCode: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxItemGroups<T>, T> {
    return new GetByKeyRequestBuilder<TaxItemGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxItemGroupCode: taxItemGroupCode,
      TaxCodeId: taxCodeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxItemGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxItemGroups`.
   */
  update(entity: TaxItemGroups<T>): UpdateRequestBuilder<TaxItemGroups<T>, T> {
    return new UpdateRequestBuilder<TaxItemGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxItemGroups`.
   * @param dataAreaId Key property. See {@link TaxItemGroups.dataAreaId}.
   * @param taxItemGroupCode Key property. See {@link TaxItemGroups.taxItemGroupCode}.
   * @param taxCodeId Key property. See {@link TaxItemGroups.taxCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxItemGroups`.
   */
  delete(
    dataAreaId: string,
    taxItemGroupCode: string,
    taxCodeId: string
  ): DeleteRequestBuilder<TaxItemGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxItemGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxItemGroups` by taking the entity as a parameter.
   */
  delete(entity: TaxItemGroups<T>): DeleteRequestBuilder<TaxItemGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxItemGroupCode?: string,
    taxCodeId?: string
  ): DeleteRequestBuilder<TaxItemGroups<T>, T> {
    return new DeleteRequestBuilder<TaxItemGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxItemGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxItemGroupCode: taxItemGroupCode!,
            TaxCodeId: taxCodeId!
          }
    );
  }
}
