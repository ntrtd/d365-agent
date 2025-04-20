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
import { TaxGroupDatas } from './TaxGroupDatas';

/**
 * Request builder class for operations supported on the {@link TaxGroupDatas} entity.
 */
export class TaxGroupDatasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxGroupDatas<T>, T> {
  /**
   * Returns a request builder for querying all `TaxGroupDatas` entities.
   * @returns A request builder for creating requests to retrieve all `TaxGroupDatas` entities.
   */
  getAll(): GetAllRequestBuilder<TaxGroupDatas<T>, T> {
    return new GetAllRequestBuilder<TaxGroupDatas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxGroupDatas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxGroupDatas`.
   */
  create(entity: TaxGroupDatas<T>): CreateRequestBuilder<TaxGroupDatas<T>, T> {
    return new CreateRequestBuilder<TaxGroupDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxGroupDatas` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxGroupDatas.dataAreaId}.
   * @param taxGroupId Key property. See {@link TaxGroupDatas.taxGroupId}.
   * @param taxCodeId Key property. See {@link TaxGroupDatas.taxCodeId}.
   * @returns A request builder for creating requests to retrieve one `TaxGroupDatas` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxGroupId: DeserializedType<T, 'Edm.String'>,
    taxCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxGroupDatas<T>, T> {
    return new GetByKeyRequestBuilder<TaxGroupDatas<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxGroupId: taxGroupId,
      TaxCodeId: taxCodeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxGroupDatas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxGroupDatas`.
   */
  update(entity: TaxGroupDatas<T>): UpdateRequestBuilder<TaxGroupDatas<T>, T> {
    return new UpdateRequestBuilder<TaxGroupDatas<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxGroupDatas`.
   * @param dataAreaId Key property. See {@link TaxGroupDatas.dataAreaId}.
   * @param taxGroupId Key property. See {@link TaxGroupDatas.taxGroupId}.
   * @param taxCodeId Key property. See {@link TaxGroupDatas.taxCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `TaxGroupDatas`.
   */
  delete(
    dataAreaId: string,
    taxGroupId: string,
    taxCodeId: string
  ): DeleteRequestBuilder<TaxGroupDatas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxGroupDatas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxGroupDatas` by taking the entity as a parameter.
   */
  delete(entity: TaxGroupDatas<T>): DeleteRequestBuilder<TaxGroupDatas<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxGroupId?: string,
    taxCodeId?: string
  ): DeleteRequestBuilder<TaxGroupDatas<T>, T> {
    return new DeleteRequestBuilder<TaxGroupDatas<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxGroupDatas
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxGroupId: taxGroupId!,
            TaxCodeId: taxCodeId!
          }
    );
  }
}
