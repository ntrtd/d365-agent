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
import { DimAttributeCompanyInfos } from './DimAttributeCompanyInfos';

/**
 * Request builder class for operations supported on the {@link DimAttributeCompanyInfos} entity.
 */
export class DimAttributeCompanyInfosRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeCompanyInfos<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeCompanyInfos` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeCompanyInfos` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeCompanyInfos<T>, T> {
    return new GetAllRequestBuilder<DimAttributeCompanyInfos<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeCompanyInfos` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeCompanyInfos`.
   */
  create(
    entity: DimAttributeCompanyInfos<T>
  ): CreateRequestBuilder<DimAttributeCompanyInfos<T>, T> {
    return new CreateRequestBuilder<DimAttributeCompanyInfos<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeCompanyInfos` entity based on its keys.
   * @param value Key property. See {@link DimAttributeCompanyInfos.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeCompanyInfos` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeCompanyInfos<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeCompanyInfos<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeCompanyInfos`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeCompanyInfos`.
   */
  update(
    entity: DimAttributeCompanyInfos<T>
  ): UpdateRequestBuilder<DimAttributeCompanyInfos<T>, T> {
    return new UpdateRequestBuilder<DimAttributeCompanyInfos<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeCompanyInfos`.
   * @param value Key property. See {@link DimAttributeCompanyInfos.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeCompanyInfos`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeCompanyInfos<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeCompanyInfos`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeCompanyInfos` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeCompanyInfos<T>
  ): DeleteRequestBuilder<DimAttributeCompanyInfos<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeCompanyInfos<T>, T> {
    return new DeleteRequestBuilder<DimAttributeCompanyInfos<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeCompanyInfos
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
