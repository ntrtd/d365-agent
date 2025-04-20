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
import { TaxGroups } from './TaxGroups';

/**
 * Request builder class for operations supported on the {@link TaxGroups} entity.
 */
export class TaxGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TaxGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TaxGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TaxGroups<T>, T> {
    return new GetAllRequestBuilder<TaxGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxGroups`.
   */
  create(entity: TaxGroups<T>): CreateRequestBuilder<TaxGroups<T>, T> {
    return new CreateRequestBuilder<TaxGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `TaxGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxGroups.dataAreaId}.
   * @param taxGroupCode Key property. See {@link TaxGroups.taxGroupCode}.
   * @returns A request builder for creating requests to retrieve one `TaxGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxGroupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxGroups<T>, T> {
    return new GetByKeyRequestBuilder<TaxGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxGroupCode: taxGroupCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxGroups`.
   */
  update(entity: TaxGroups<T>): UpdateRequestBuilder<TaxGroups<T>, T> {
    return new UpdateRequestBuilder<TaxGroups<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxGroups`.
   * @param dataAreaId Key property. See {@link TaxGroups.dataAreaId}.
   * @param taxGroupCode Key property. See {@link TaxGroups.taxGroupCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxGroups`.
   */
  delete(
    dataAreaId: string,
    taxGroupCode: string
  ): DeleteRequestBuilder<TaxGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxGroups` by taking the entity as a parameter.
   */
  delete(entity: TaxGroups<T>): DeleteRequestBuilder<TaxGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxGroupCode?: string
  ): DeleteRequestBuilder<TaxGroups<T>, T> {
    return new DeleteRequestBuilder<TaxGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxGroupCode: taxGroupCode!
          }
    );
  }
}
