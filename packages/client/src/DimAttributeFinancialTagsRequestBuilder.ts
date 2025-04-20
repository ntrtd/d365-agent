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
import { DimAttributeFinancialTags } from './DimAttributeFinancialTags';

/**
 * Request builder class for operations supported on the {@link DimAttributeFinancialTags} entity.
 */
export class DimAttributeFinancialTagsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimAttributeFinancialTags<T>, T> {
  /**
   * Returns a request builder for querying all `DimAttributeFinancialTags` entities.
   * @returns A request builder for creating requests to retrieve all `DimAttributeFinancialTags` entities.
   */
  getAll(): GetAllRequestBuilder<DimAttributeFinancialTags<T>, T> {
    return new GetAllRequestBuilder<DimAttributeFinancialTags<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimAttributeFinancialTags` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimAttributeFinancialTags`.
   */
  create(
    entity: DimAttributeFinancialTags<T>
  ): CreateRequestBuilder<DimAttributeFinancialTags<T>, T> {
    return new CreateRequestBuilder<DimAttributeFinancialTags<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimAttributeFinancialTags` entity based on its keys.
   * @param value Key property. See {@link DimAttributeFinancialTags.value}.
   * @returns A request builder for creating requests to retrieve one `DimAttributeFinancialTags` entity based on its keys.
   */
  getByKey(
    value: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DimAttributeFinancialTags<T>, T> {
    return new GetByKeyRequestBuilder<DimAttributeFinancialTags<T>, T>(
      this.entityApi,
      { Value: value }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimAttributeFinancialTags`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimAttributeFinancialTags`.
   */
  update(
    entity: DimAttributeFinancialTags<T>
  ): UpdateRequestBuilder<DimAttributeFinancialTags<T>, T> {
    return new UpdateRequestBuilder<DimAttributeFinancialTags<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimAttributeFinancialTags`.
   * @param value Key property. See {@link DimAttributeFinancialTags.value}.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeFinancialTags`.
   */
  delete(value: string): DeleteRequestBuilder<DimAttributeFinancialTags<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimAttributeFinancialTags`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimAttributeFinancialTags` by taking the entity as a parameter.
   */
  delete(
    entity: DimAttributeFinancialTags<T>
  ): DeleteRequestBuilder<DimAttributeFinancialTags<T>, T>;
  delete(
    valueOrEntity: any
  ): DeleteRequestBuilder<DimAttributeFinancialTags<T>, T> {
    return new DeleteRequestBuilder<DimAttributeFinancialTags<T>, T>(
      this.entityApi,
      valueOrEntity instanceof DimAttributeFinancialTags
        ? valueOrEntity
        : { Value: valueOrEntity! }
    );
  }
}
